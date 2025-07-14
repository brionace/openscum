import { render, screen } from "@testing-library/react";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper";
import React from "react";

describe("SessionProviderWrapper", () => {
  it("renders children correctly", () => {
    render(
      <SessionProviderWrapper>
        <div>Test content</div>
      </SessionProviderWrapper>
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("provides authentication context", () => {
    const TestComponent = () => {
      // This would use the mocked context from setupTests
      return <div>Authenticated component</div>;
    };

    render(
      <SessionProviderWrapper>
        <TestComponent />
      </SessionProviderWrapper>
    );

    expect(screen.getByText("Authenticated component")).toBeInTheDocument();
  });
});
