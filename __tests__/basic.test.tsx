import React from "react";
import { render, screen } from "@testing-library/react";

describe("Basic Test", () => {
  it("should pass basic functionality test", () => {
    render(<div>Hello Test</div>);
    expect(screen.getByText("Hello Test")).toBeInTheDocument();
  });
});
