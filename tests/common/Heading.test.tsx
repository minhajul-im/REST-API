import React from "react";
import { it, expect, describe, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import Heading from "../../src/components/common/Heading";

class IntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

describe("Heading", () => {
  it("should render heading with children", () => {
    const text = "Hello Bangladesh";

    render(<Heading>{text}</Heading>);

    const headingElement = screen.getByText(text);

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H1");
    expect(headingElement).toHaveClass(
      "text-3xl",
      "md:text-4xl",
      "lg:text-5xl",
      "text-TX-main",
      "font-fontBold"
    );
  });
});
