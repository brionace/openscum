import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReportModalCard } from "@/components/report-modal-card";
import React from "react";

const mockReport = {
  id: "1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  description: "Test scam report description",
  scammerDetails: {
    phoneNumber: "1234567890",
    email: "test@example.com",
    website: "https://scam.com",
  },
  city: "Test City",
  country: "Test Country",
  region: "Test Region",
  verified: false,
  trustScore: 1,
  reportCount: 2,
  reporterName: "John Doe",
  reporterEmail: "john@example.com",
  anonymous: false,
  screenshots: [],
  evidence: [],
  scamType: { id: "type1", name: "Phishing" },
  tags: [],
  severity: "HIGH",
  _count: { comments: 3, votes: 5 },
  outcome: [
    {
      id: "outcome1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      outcomeType: "FINANCIAL",
      moneyLost: 100,
      moneyRequested: 200,
      currency: "$",
    },
  ],
};

describe("ReportModalCard", () => {
  it("renders report details", async () => {
    render(<ReportModalCard report={mockReport} />);
    expect(
      screen.getByText("Test scam report description")
    ).toBeInTheDocument();
    expect(screen.getByText("Phishing")).toBeInTheDocument();
    expect(screen.getByText("Test City, Test Country")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument(); // votes
  });

  it("shows authentication required for flag toggle", async () => {
    const onFlag = jest.fn();
    render(
      <ReportModalCard report={mockReport} onFlag={onFlag} flagged={false} />
    );
    const flagBtn = screen.getByLabelText(/flag report/i);
    fireEvent.click(flagBtn);
    // Since user is not authenticated (from our mock), onFlag should NOT be called
    await waitFor(() => expect(onFlag).not.toHaveBeenCalled());
  });

  it("handles share", () => {
    const onShare = jest.fn();
    Object.assign(navigator, { clipboard: { writeText: jest.fn() } });
    render(<ReportModalCard report={mockReport} onShare={onShare} />);
    fireEvent.click(screen.getByLabelText("Share report"));
    expect(onShare).toHaveBeenCalledWith(mockReport);
  });

  it("shows authentication required for voting", async () => {
    const onVote = jest.fn();
    render(<ReportModalCard report={mockReport} onVote={onVote} />);
    const voteBtn = screen.getByLabelText(/thumbs up/i);
    fireEvent.click(voteBtn);
    // Since user is not authenticated (from our mock), onVote should NOT be called
    await waitFor(() => expect(onVote).not.toHaveBeenCalled());
  });
});
