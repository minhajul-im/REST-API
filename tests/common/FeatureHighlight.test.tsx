import React from "react";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { FEATURES, FEATURE, Children } from "../../src/constant/mock-data";
import FeatureHighlight from "../../src/components/common/FeatureHighlights";

vi.mock("../../src/components/common/Heading", () => ({
  default: ({ children }: Children) => <h1>{children}</h1>,
}));

describe("FeatureHighlight", () => {
  it("should render feature highlight component correctly", () => {
    render(<FeatureHighlight />);

    expect(screen.getByText("Product Description")).toBeInTheDocument();

    FEATURES.forEach((item: FEATURE) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();

      expect(screen.getByText(item.desc)).toBeInTheDocument();

      const img = screen.getByAltText(item.title);
      expect(img).toBeInTheDocument();

      expect(img).toHaveAttribute("src", item.img);
    });
  });
});
