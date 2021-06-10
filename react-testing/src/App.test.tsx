import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("when we search in the tests", () => {
  test("we found Daniel", () => {
    render(<App />);
    const linkElement = screen.getByText(/Daniel/i);
    expect(linkElement).toBeInTheDocument();
  });
});
