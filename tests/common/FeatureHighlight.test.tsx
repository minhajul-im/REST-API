import React from "react";
import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import { FEATURES, FEATURE } from "../../src/constant/mock-data";
import FeatureHighlight from "../../src/components/common/FeatureHighlights";

describe("FeatureHighlight", () => {
  it("should render feature highlight component correctly", () => {
    render(<FeatureHighlight />);

    FEATURES.forEach((item: FEATURE) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();

      expect(screen.getByText(item.desc)).toBeInTheDocument();

      const img = screen.getByAltText(item.title);
      expect(img).toBeInTheDocument();

      expect(img).toHaveAttribute("src", item.img);
    });
  });
});
