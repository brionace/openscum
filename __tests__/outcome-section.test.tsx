import { render, screen, fireEvent, act } from "@testing-library/react";
import OutcomeSection from "@/components/outcome-section";
import React from "react";

// Mock fetch to prevent API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
) as jest.Mock;

describe("OutcomeSection", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("renders and adds/removes outcome", async () => {
    const setOutcomes = jest.fn();
    await act(async () => {
      render(<OutcomeSection outcomes={[]} setOutcomes={setOutcomes} />);
    });
    expect(
      screen.getByRole("heading", { name: /^Outcome$/i })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Add Outcome/i));
    expect(setOutcomes).toHaveBeenCalled();
  });
});
