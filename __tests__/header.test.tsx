import { render, screen } from "@testing-library/react";
import { Header } from "@/components/header";
import React from "react";

describe("Header", () => {
  it("renders header and search", () => {
    render(<Header onReportClick={jest.fn()} reports={[]} />);
    expect(screen.getByText(/Openscum/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search scams/i)).toBeInTheDocument();
    expect(screen.getByText(/Report Scam/i)).toBeInTheDocument();
  });
});
