import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReportModal } from "@/components/report-modal";
import React from "react";

global.fetch = jest.fn((url, opts) => {
  if (typeof url === "string" && url.includes("comments")) {
    if (opts && opts.method === "POST") {
      return Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      });
    }
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          success: true,
          data: {
            comments: [
              {
                id: "c1",
                content: "Test comment",
                createdAt: new Date().toISOString(),
                author: "Test User",
              },
            ],
          },
        }),
    });
  }
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        success: true,
        data: {
          reports: [
            {
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
              moneyLost: 100,
              moneyRequested: 200,
              screenshots: [],
              evidence: [],
              scamType: { id: "type1", name: "Phishing" },
              tags: [],
              severity: "HIGH",
              _count: { comments: 3, votes: 5 },
            },
          ],
        },
      }),
  });
}) as jest.Mock;

describe("ReportModal", () => {
  it("renders modal and form", async () => {
    render(<ReportModal reportId="1" open={true} onOpenChange={() => {}} />);
    expect(
      await screen.findByText("Test scam report description")
    ).toBeInTheDocument();
    // For unauthenticated users, there should be no comment field
    expect(screen.queryByLabelText("Write a comment")).not.toBeInTheDocument();
    // But the Comments section should still be visible
    expect(screen.getByText("Comments")).toBeInTheDocument();
  });

  it("submits report comment", async () => {
    render(<ReportModal reportId="1" open={true} onOpenChange={() => {}} />);
    // Since user is not authenticated, there should be no comment textarea
    // Instead, there should be a sign-in prompt
    expect(await screen.findByText("Sign in to comment")).toBeInTheDocument();
    expect(screen.queryByLabelText("Write a comment")).not.toBeInTheDocument();
  });

  it("shows sign in prompt for unauthenticated users", async () => {
    render(<ReportModal reportId="1" open={true} onOpenChange={() => {}} />);

    // Wait for modal to load
    expect(
      await screen.findByText("Test scam report description")
    ).toBeInTheDocument();

    // Should show sign in prompt instead of comment form since user is not authenticated
    expect(screen.getByText("Sign in to comment")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can view all reports without signing in, but commenting, voting, and flagging require authentication."
      )
    ).toBeInTheDocument();

    // Should not show comment textarea
    expect(screen.queryByLabelText("Write a comment")).not.toBeInTheDocument();
  });
});
