import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReportCard } from "@/components/report-card";
import React from "react";

const mockReport = {
  id: "1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  description: "Test scam report description",
  phoneNumber: "1234567890",
  email: "test@example.com",
  website: "https://scam.com",
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
      outcomeType: "FINANCIAL",
      moneyLost: 100,
      moneyRequested: 200,
      currency: "$",
    },
  ],
};

describe("ReportCard", () => {
  it("renders report details", () => {
    render(<ReportCard report={mockReport} />);
    expect(
      screen.getByText("Test scam report description")
    ).toBeInTheDocument();
    expect(screen.getByText("Phishing")).toBeInTheDocument();
    expect(screen.getByText("Test City, Test Country")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument(); // comments
    expect(screen.getByText("5")).toBeInTheDocument(); // votes
  });

  it("handles voting", () => {
    const onVote = jest.fn();
    render(<ReportCard report={mockReport} onVote={onVote} />);
    fireEvent.click(screen.getAllByRole("button", { name: /thumbs up/i })[0]);
    expect(onVote).toHaveBeenCalledWith("1", "helpful");
  });

  it("handles flag toggle", async () => {
    const onFlag = jest.fn();
    render(<ReportCard report={mockReport} onFlag={onFlag} flagged={false} />);
    const flagBtn = screen.getByLabelText(/flag report/i);
    fireEvent.click(flagBtn);
    await waitFor(() => expect(onFlag).toHaveBeenCalledWith("1", true));
  });

  it("handles share", () => {
    const onShare = jest.fn();
    Object.assign(navigator, { clipboard: { writeText: jest.fn() } });
    render(<ReportCard report={mockReport} onShare={onShare} />);
    fireEvent.click(screen.getByLabelText("Share report"));
    expect(onShare).toHaveBeenCalledWith(mockReport);
  });

  it("handles comments click", () => {
    const onCommentsClick = jest.fn();
    render(
      <ReportCard report={mockReport} onCommentsClick={onCommentsClick} />
    );
    fireEvent.click(screen.getByLabelText("View comments"));
    expect(onCommentsClick).toHaveBeenCalledWith("1");
  });
});
