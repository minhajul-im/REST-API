import React from "react";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import About from "../../src/components/about/About";
import { ABOUT, WORK, Children } from "../../src/constant/mock-data";

vi.mock("../../src/components/common/Heading", () => ({
  default: ({ children }: Children) => <h1>{children}</h1>,
}));

describe("About", () => {
  it("should render About Component", () => {
    render(<About />);

    expect(screen.getByText("About Us")).toBeInTheDocument();

    ABOUT.forEach((text: string) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(screen.getByText("how does it work?")).toBeInTheDocument();

    WORK.forEach((text: string) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
