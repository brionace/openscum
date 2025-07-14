import { render, screen } from "@testing-library/react";
import { SearchResults } from "@/components/search-results";
import React from "react";
import type { ScamReport } from "@/lib/types";

const mockReports: ScamReport[] = [
  {
    id: "1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: "Test search result",
    city: "Test City",
    country: "Test Country",
    region: null,
    scammerDetails: {
      phoneNumber: "123456789",
      email: "test@example.com",
    },
    verified: false,
    trustScore: 1,
    reportCount: 1,
    reporterName: null,
    reporterEmail: null,
    anonymous: true,
    screenshots: [],
    evidence: [],
    scamType: { id: "type1", name: "Phishing" },
    tags: [],
    severity: "MEDIUM",
    _count: { comments: 2, votes: 3 },
    outcome: [],
  },
];

describe("SearchResults", () => {
  it("renders search results", () => {
    render(<SearchResults results={mockReports} />);
    expect(screen.getByText("Test search result")).toBeInTheDocument();
    expect(screen.getByText("Phishing")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(<SearchResults results={[]} />);
    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
  });
});
