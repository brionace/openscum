import { render, screen, fireEvent } from "@testing-library/react";
import { SearchResults } from "@/components/search-results";
import React from "react";

describe("SearchResults", () => {
  const mockReports = [
    {
      id: "1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: "Test scam report 1",
      city: "City1",
      country: "Country1",
      region: null,
      phoneNumber: "123",
      email: "a@b.com",
      website: "site.com",
      socialMedia: null,
      verified: false,
      trustScore: 1,
      reportCount: 1,
      reporterName: null,
      reporterEmail: null,
      anonymous: false,
      moneyLost: null,
      moneyRequested: null,
      screenshots: [],
      evidence: [],
      scamType: { id: "type1", name: "Phishing" },
      tags: [],
      severity: "LOW",
      _count: { comments: 1, votes: 2 },
    },
  ];

  it("renders loading state", () => {
    render(<SearchResults reports={[]} loading={true} />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(<SearchResults reports={[]} loading={false} />);
    expect(screen.getByText(/No scam reports found/i)).toBeInTheDocument();
  });

  it("renders reports", () => {
    render(<SearchResults reports={mockReports} />);
    expect(screen.getByText("Test scam report 1")).toBeInTheDocument();
  });
});
