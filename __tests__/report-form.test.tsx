import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReportForm } from "@/components/report-form";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("ReportForm", () => {
  it("renders form fields", () => {
    render(<ReportForm onSubmit={jest.fn()} />);
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
    render(<ReportForm onSubmit={onSubmit} />);
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
});
