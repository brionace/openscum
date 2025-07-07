import { render, screen } from "@testing-library/react";
import { TrendingBar } from "@/components/trending-bar";
import React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        success: true,
        data: {
          trending: [
            { scamTypeId: "1", name: "Phishing", count: 10 },
            { scamTypeId: "2", name: "Fraud", count: 5 },
          ],
        },
      }),
  })
) as jest.Mock;

describe("TrendingBar", () => {
  it("renders loading state", () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise(() => {}) // never resolves
    );
    render(<TrendingBar />);
    expect(screen.getByText(/Loading trends/i)).toBeInTheDocument();
  });

  it("renders trending items", async () => {
    render(<TrendingBar />);
    expect(await screen.findByText("Phishing")).toBeInTheDocument();
    expect(await screen.findByText("Fraud")).toBeInTheDocument();
  });
});
