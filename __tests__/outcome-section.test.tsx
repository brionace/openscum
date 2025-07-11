import { render, screen, fireEvent } from "@testing-library/react";
import OutcomeSection from "@/components/outcome-section";
import React from "react";

describe("OutcomeSection", () => {
  it("renders and adds/removes outcome", () => {
    const setOutcome = jest.fn();
    render(<OutcomeSection outcome={[]} setOutcome={setOutcome} />);
    expect(screen.getByText(/Outcome\(s\)/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Add Outcome/i));
    expect(setOutcome).toHaveBeenCalled();
  });
});
