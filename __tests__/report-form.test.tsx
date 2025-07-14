import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { ReportForm } from "@/components/report-form";
import React from "react";
import userEvent from "@testing-library/user-event";

// Mock fetch to prevent API calls
global.fetch = jest.fn((url) => {
  if (typeof url === "string" && url.includes("/api/scam-types")) {
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: "type1", name: "Phishing" },
          { id: "type2", name: "Fake Invoice" },
        ]),
      text: () =>
        Promise.resolve(
          JSON.stringify([
            { id: "type1", name: "Phishing" },
            { id: "type2", name: "Fake Invoice" },
          ])
        ),
    });
  }
  if (typeof url === "string" && url.includes("/api/outcome-types")) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
      text: () => Promise.resolve("[]"),
    });
  }
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
    text: () => Promise.resolve("[]"),
  });
}) as jest.Mock;

describe("ReportForm", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });
  it("renders form fields", async () => {
    const modalContentRef = React.createRef<HTMLDivElement>();
    await act(async () => {
      render(
        <ReportForm modalContentRef={modalContentRef} onSubmit={jest.fn()} />
      );
    });
    expect(screen.getByText(/Report a Scam/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Scam Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Website/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Risk Level/i)).toBeInTheDocument();
  });

  it("submits new report", async () => {
    const onSubmit = jest.fn(() => Promise.resolve());
    const modalContentRef = React.createRef<HTMLDivElement>();
    await act(async () => {
      render(
        <ReportForm modalContentRef={modalContentRef} onSubmit={onSubmit} />
      );
    });
    await userEvent.type(
      screen.getByLabelText(/Description/i),
      "This is a test scam report with enough characters."
    );
    // Type in scam type and select from dropdown
    const scamTypeInput = screen.getByLabelText(/Scam Type/i);
    await userEvent.type(scamTypeInput, "phishing");
    const option = await screen.findByText(/phishing/i);
    await userEvent.click(option);
    await userEvent.type(screen.getByLabelText(/Email/i), "test@example.com");
    // Optionally fill other required fields if needed
    const submitBtn = screen.getByText("Submit Scam Report");
    await userEvent.click(submitBtn);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });

  it("displays anonymous reporting information", async () => {
    const modalContentRef = React.createRef<HTMLDivElement>();
    await act(async () => {
      render(
        <ReportForm modalContentRef={modalContentRef} onSubmit={jest.fn()} />
      );
    });

    expect(screen.getByText(/Anonymous Reports Welcome/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You can submit reports anonymously without logging in/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /To vote, flag, or comment on reports, you'll need to sign in/i
      )
    ).toBeInTheDocument();
  });
});
