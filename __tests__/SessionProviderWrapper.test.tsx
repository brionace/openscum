import { render, screen } from "@testing-library/react";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import React from "react";

describe("SessionProviderWrapper", () => {
  it("renders children", () => {
    render(
      <SessionProviderWrapper>
        <div>Test Child</div>
      </SessionProviderWrapper>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
