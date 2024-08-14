import React from "react";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { coverImg } from "../../src/constant/mock-data";
import CoverImage from "../../src/components/common/CoverImage";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe("CoverImage", () => {
  it("should render cover image", () => {
    render(<CoverImage />);

    expect(screen.getByText("See The Result!")).toBeInTheDocument();

    const imageText = screen.getByAltText("simple demo");
    expect(imageText).toBeInTheDocument();
    expect(imageText).toHaveAttribute("src", coverImg);
  });
});
