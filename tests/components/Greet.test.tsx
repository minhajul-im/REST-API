import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should render Hello with Minhaj", () => {
    render(<Greet name="Minhaj" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
