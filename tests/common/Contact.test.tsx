import React from "react";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Contact from "../../src/components/contact/Contact";
import { contactImg, Children } from "../../src/constant/mock-data";

vi.mock("../../src/components/common/Heading", () => ({
  default: ({ children }: Children) => <h1>{children}</h1>,
}));

describe("CContact", () => {
  it("should render contact component", () => {
    render(<Contact isDark={true} />);

    expect(screen.getByText("Contact us")).toBeInTheDocument();

    const imgTxt = screen.getByAltText("contact-img");
    expect(imgTxt).toBeInTheDocument();

    expect(imgTxt).toHaveAttribute("src", contactImg);
  });
});
