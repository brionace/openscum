import { render, screen } from "@testing-library/react";
import { FeaturesBar } from "@/components/features-bar";
import React from "react";

describe("FeaturesBar", () => {
  it("renders all features", () => {
    render(<FeaturesBar />);
    expect(
      screen.getByText(/community-powered spam reporting/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Search spam by spammer credentials/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/flag suspicious posts/i)).toBeInTheDocument();
  });

  it("displays anonymous reporting notice", () => {
    render(<FeaturesBar />);
    expect(screen.getByText(/Anonymous Reports Welcome/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Submit reports without signing in/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Authentication only required for voting, flagging, and commenting/i
      )
    ).toBeInTheDocument();
  });
});
