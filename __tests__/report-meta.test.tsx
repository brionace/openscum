import React from "react";
import { render, screen } from "@testing-library/react";
import { ReportMeta } from "@/components/report-meta";

const mockReport = {
  id: "1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  description: "Test",
  city: "Test City",
  country: "Test Country",
  verified: false,
  trustScore: 1,
  reportCount: 1,
  anonymous: false,
  screenshots: [],
  evidence: [],
  _count: { comments: 3, votes: 5 },
};

describe("ReportMeta Vote Display", () => {
  it("should display vote count from _count", () => {
    render(<ReportMeta report={mockReport} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
