import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QuickReportButton } from "@/components/quick-report-button";
import React from "react";

describe("QuickReportButton", () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (typeof url === "string" && url.includes("/api/scam-types")) {
        return Promise.resolve({
          ok: true,
          text: () =>
            Promise.resolve(
              JSON.stringify([
                { id: "type1", name: "Phishing (Email/SMS)" },
                { id: "type2", name: "Fake Invoice" },
              ])
            ),
        });
      }
      // For /api/reports
      return Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      });
    }) as jest.Mock;
  });

  it("renders the dialog and form", () => {
    render(<QuickReportButton open={true} onOpenChange={() => {}} />);
    expect(screen.getByText(/Report a Scam/i)).toBeInTheDocument();
  });

  it("calls onReportSubmitted after submit", async () => {
    const onReportSubmitted = jest.fn();
    render(
      <QuickReportButton
        open={true}
        onOpenChange={() => {}}
        onReportSubmitted={onReportSubmitted}
      />
    );
    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/Detailed Description/i), {
      target: { value: "A test description with enough length." },
    });
    // Type in scam type input (get the first one - main scam type, not tags)
    const scamTypeInputs = screen.getAllByPlaceholderText(
      /Type to search/i
    );
    const scamTypeInput = scamTypeInputs[0]; // First input is the main scam type
    fireEvent.change(scamTypeInput, { target: { value: "Phishing" } });
    // Wait for dropdown and click the option
    const option = await screen.findByText("Phishing (Email/SMS)");
    fireEvent.mouseDown(option);
    // Submit
    fireEvent.click(screen.getByText(/Submit Scam Report/i));
    await waitFor(() => expect(onReportSubmitted).toHaveBeenCalled());
  });
});
