import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReportModal } from "@/components/report-modal";
import React from "react";
import { SessionProvider } from "next-auth/react";
import * as nextAuthReact from "next-auth/react";

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

// Mock useSession to always return authenticated user
jest.spyOn(nextAuthReact, "useSession").mockReturnValue({
  data: {
    user: {
      id: "user1",
      name: "Test User",
      email: "testuser@example.com",
    },
    expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  },
  status: "authenticated",
});

describe("ReportModal", () => {
  it("renders modal and form", async () => {
    render(
      <SessionProvider session={null}>
        <ReportModal reportId="1" open={true} onOpenChange={() => {}} />
      </SessionProvider>
    );
    expect(
      await screen.findByText("Test scam report description")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Write a comment")).toBeInTheDocument();
    expect(screen.getByText("Comments")).toBeInTheDocument();
  });

  it("submits report comment", async () => {
    render(
      <SessionProvider session={null}>
        <ReportModal reportId="1" open={true} onOpenChange={() => {}} />
      </SessionProvider>
    );
    const textarea = await screen.findByLabelText("Write a comment");
    fireEvent.change(textarea, { target: { value: "A new comment" } });
    const postBtn = screen.getByText("Post Comment");
    fireEvent.click(postBtn);
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining("comments"),
        expect.objectContaining({ method: "POST" })
      )
    );
  });
});
