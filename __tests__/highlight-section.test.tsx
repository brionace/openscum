import { render, screen } from "@testing-library/react";
import { HighlightSection } from "@/components/highlight-section";
import React from "react";

describe("HighlightSection", () => {
  const mockReports = [
    {
      id: "1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: "Highlight test report",
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

  it("renders with reports", () => {
    render(
      <HighlightSection
        title="Trending"
        icon="trending"
        reports={mockReports}
      />
    );
    expect(screen.getByText("Trending")).toBeInTheDocument();
    expect(screen.getByText("Highlight test report")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(
      <HighlightSection
        title="Trending"
        icon="trending"
        reports={[]}
        emptyText="Nothing here!"
      />
    );
    expect(screen.getByText("Nothing here!")).toBeInTheDocument();
  });
});
