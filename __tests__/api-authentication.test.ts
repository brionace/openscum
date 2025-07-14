/**
 * @jest-environment node
 */
import { NextRequest } from "next/server";
import { POST as reportSubmission } from "@/app/api/reports/route";
import { POST as voteHandler } from "@/app/api/reports/[reportId]/vote/route";
import { POST as flagHandler } from "@/app/api/reports/[reportId]/flag/route";
import { POST as commentHandler } from "@/app/api/reports/[reportId]/comments/route";

// Mock Prisma
jest.mock("@/lib/prisma", () => ({
  __esModule: true,
  default: {
    scamReport: {
      create: jest.fn(() =>
        Promise.resolve({
          id: "test-report-id",
          scamType: { name: "Test Scam" },
          _count: { comments: 0, votes: 0, flags: 0 },
        })
      ),
    },
    vote: {
      findUnique: jest.fn(() => Promise.resolve(null)),
      upsert: jest.fn(() => Promise.resolve({})),
      count: jest.fn(() => Promise.resolve(1)),
    },
    flag: {
      findFirst: jest.fn(() => Promise.resolve(null)),
      create: jest.fn(() => Promise.resolve({})),
    },
    comment: {
      create: jest.fn(() =>
        Promise.resolve({
          id: "test-comment-id",
          content: "Test comment",
          createdAt: new Date(),
        })
      ),
    },
  },
}));

// Mock Supabase Admin
jest.mock("@/lib/supabaseAdmin", () => ({
  supabaseAdmin: {
    auth: {
      getUser: jest.fn((token) => {
        if (token === "valid-token") {
          return Promise.resolve({
            data: { user: { id: "test-user-id" } },
            error: null,
          });
        }
        return Promise.resolve({
          data: { user: null },
          error: new Error("Invalid token"),
        });
      }),
    },
  },
}));

describe("API Authentication", () => {
  describe("Report Submission", () => {
    it("allows anonymous report submission", async () => {
      const request = new NextRequest("http://localhost/api/reports", {
        method: "POST",
        body: JSON.stringify({
          description: "Test anonymous report",
          scamTypeId: "test-type-id",
          anonymous: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await reportSubmission(request);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.message).toContain("successfully");
    });
  });

  describe("Voting", () => {
    it("requires authentication for voting", async () => {
      const request = new NextRequest(
        "http://localhost/api/reports/test-id/vote",
        {
          method: "POST",
          body: JSON.stringify({ voteType: "helpful" }),
          headers: {
            "Content-Type": "application/json",
            // No Authorization header
          },
        }
      );

      const response = await voteHandler(request, {
        params: { reportId: "test-id" },
      });
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.success).toBe(false);
      expect(data.error).toBe("Unauthorized");
    });

    it("allows voting with valid authentication", async () => {
      const request = new NextRequest(
        "http://localhost/api/reports/test-id/vote",
        {
          method: "POST",
          body: JSON.stringify({ voteType: "helpful" }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer valid-token",
          },
        }
      );

      const response = await voteHandler(request, {
        params: { reportId: "test-id" },
      });
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });
  });

  describe("Flagging", () => {
    it("requires authentication for flagging", async () => {
      const request = new NextRequest(
        "http://localhost/api/reports/test-id/flag",
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
            // No Authorization header
          },
        }
      );

      const response = await flagHandler(request, {
        params: { reportId: "test-id" },
      });
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.success).toBe(false);
      expect(data.error).toBe("Unauthorized");
    });

    it("allows flagging with valid authentication", async () => {
      const request = new NextRequest(
        "http://localhost/api/reports/test-id/flag",
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer valid-token",
          },
        }
      );

      const response = await flagHandler(request, {
        params: { reportId: "test-id" },
      });
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });
  });

  describe("Comments", () => {
    it("requires authentication for commenting", async () => {
      const request = new NextRequest(
        "http://localhost/api/reports/test-id/comments",
        {
          method: "POST",
          body: JSON.stringify({ content: "Test comment" }),
          headers: {
            "Content-Type": "application/json",
            // No Authorization header
          },
        }
      );

      const response = await commentHandler(request, {
        params: { reportId: "test-id" },
      });
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.success).toBe(false);
      expect(data.error).toBe("Unauthorized");
    });

    it("allows commenting with valid authentication", async () => {
      const request = new NextRequest(
        "http://localhost/api/reports/test-id/comments",
        {
          method: "POST",
          body: JSON.stringify({ content: "Test comment" }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer valid-token",
          },
        }
      );

      const response = await commentHandler(request, {
        params: { reportId: "test-id" },
      });
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
    });
  });
});
