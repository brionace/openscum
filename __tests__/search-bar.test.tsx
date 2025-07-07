import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "@/components/search-bar";
import React from "react";
import type { ScamReport } from "@/lib/types";

const mockReports: ScamReport[] = [
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
  {
    id: "2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    description: "Another scam",
    city: "City2",
    country: "Country2",
    region: null,
    phoneNumber: "456",
    email: "c@d.com",
    website: "site2.com",
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
    scamType: { id: "type2", name: "Fraud" },
    tags: [],
    severity: "LOW",
    _count: { comments: 0, votes: 0 },
  },
];

describe("SearchBar", () => {
  it("renders search input", () => {
    render(<SearchBar reports={mockReports} />);
    expect(screen.getByPlaceholderText(/check phone/i)).toBeInTheDocument();
  });

  it.only("shows live results", async () => {
    render(<SearchBar reports={mockReports} />);
    const input = screen.getByPlaceholderText(/check phone/i);
    fireEvent.submit(input);
    fireEvent.change(input, { target: { value: "scam" } });
    // Use a robust matcher for the description (always returns boolean)
    expect(
      await screen.findByText("Test scam report 1")
    ).toBeInTheDocument();
    expect(await screen.findByText("Another scam")).toBeInTheDocument();
  });

  it("handles recent searches", () => {
    render(<SearchBar reports={mockReports} />);
    const input = screen.getByPlaceholderText(/check phone/i);
    fireEvent.change(input, { target: { value: "scam" } });
    fireEvent.submit(input);
    expect(screen.getByText("Recent searches")).toBeInTheDocument();
  });

  it("handles keyboard navigation", () => {
    render(<SearchBar reports={mockReports} />);
    const input = screen.getByPlaceholderText(/check phone/i);
    fireEvent.change(input, { target: { value: "scam" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });
    // Should select the first result (simulate navigation)
  });
});
