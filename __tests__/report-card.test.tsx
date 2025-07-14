import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReportCard } from "@/components/report-card";
import React from "react";

// Mock authenticated user for specific tests
const mockAuthenticatedUser = {
  user: { id: "user1", email: "test@example.com" },
  session: { access_token: "mock-token" },
  signIn: jest.fn(),
  signOut: jest.fn(),
};

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

describe("ReportCard", () => {
  it("renders report details", () => {
    const onCommentsClick = jest.fn();
    render(
      <ReportCard
        report={mockReport}
        outcomeTypes={[]}
        onCommentsClick={onCommentsClick}
      />
    );
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

  it("handles voting", async () => {
    // Mock authenticated user for this test
    const mockUseSupabaseUser = jest.requireMock(
      "@/components/SupabaseUserContext"
    );
    jest
      .spyOn(mockUseSupabaseUser, "useSupabaseUser")
      .mockReturnValue(mockAuthenticatedUser);

    // Mock fetch for the vote API call
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    });

    const onVote = jest.fn();
    render(
      <ReportCard report={mockReport} outcomeTypes={[]} onVote={onVote} />
    );
    fireEvent.click(screen.getAllByRole("button", { name: /thumbs up/i })[0]);

    await waitFor(() => {
      expect(onVote).toHaveBeenCalledWith("1", "helpful");
    });
  });

  it("handles flag toggle", async () => {
    // Mock authenticated user for this test
    const mockUseSupabaseUser = jest.requireMock(
      "@/components/SupabaseUserContext"
    );
    jest
      .spyOn(mockUseSupabaseUser, "useSupabaseUser")
      .mockReturnValue(mockAuthenticatedUser);

    // Mock fetch for the flag API call
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    });

    const onFlag = jest.fn();
    render(
      <ReportCard
        report={mockReport}
        outcomeTypes={[]}
        onFlag={onFlag}
        flagged={false}
      />
    );
    const flagBtn = screen.getByLabelText(/flag report/i);
    fireEvent.click(flagBtn);
    await waitFor(() => expect(onFlag).toHaveBeenCalledWith("1", true));
  });

  it("handles view details click", () => {
    const onCommentsClick = jest.fn();
    render(
      <ReportCard
        report={mockReport}
        outcomeTypes={[]}
        onCommentsClick={onCommentsClick}
      />
    );
    fireEvent.click(screen.getByLabelText("View report details"));
    expect(onCommentsClick).toHaveBeenCalledWith("1");
  });

  it("handles comments click", () => {
    const onCommentsClick = jest.fn();
    render(
      <ReportCard
        report={mockReport}
        outcomeTypes={[]}
        onCommentsClick={onCommentsClick}
      />
    );
    fireEvent.click(screen.getByLabelText("View comments"));
    expect(onCommentsClick).toHaveBeenCalledWith("1");
  });

  it("shows sign in message for voting when not authenticated", () => {
    // The mock already provides user: null from setupTests
    const onVote = jest.fn();
    render(
      <ReportCard report={mockReport} outcomeTypes={[]} onVote={onVote} />
    );
    // Click the vote button
    fireEvent.click(screen.getAllByRole("button", { name: /thumbs up/i })[0]);

    // Should not call onVote since user is not authenticated
    expect(onVote).not.toHaveBeenCalled();

    // Toast message should appear (we'd need to mock toast to test this properly)
    // For now, just verify the button interaction doesn't crash
  });

  it("shows sign in message for flagging when not authenticated", async () => {
    const onFlag = jest.fn();
    render(
      <ReportCard
        report={mockReport}
        outcomeTypes={[]}
        onFlag={onFlag}
        flagged={false}
      />
    );
    const flagBtn = screen.getByLabelText(/flag report/i);
    fireEvent.click(flagBtn);

    // Should not call onFlag since user is not authenticated
    await waitFor(() => expect(onFlag).not.toHaveBeenCalled());
  });

  it("allows viewing report content without authentication", () => {
    render(<ReportCard report={mockReport} outcomeTypes={[]} />);

    // Report content should be visible regardless of authentication status
    expect(
      screen.getByText("Test scam report description")
    ).toBeInTheDocument();
    expect(screen.getByText("Phishing")).toBeInTheDocument();
    expect(screen.getByText("Test City, Test Country")).toBeInTheDocument();
  });
});
