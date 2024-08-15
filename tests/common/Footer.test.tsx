import React from "react";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/footer/Footer";

describe("Footer", () => {
  it("should render Footer Component", () => {
    render(<Footer isDark={false} />);

    const headingElement = screen.getByText(/Follow Us/i);
    expect(headingElement).toBeInTheDocument();

    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy & Policy/i)).toBeInTheDocument();

    const copyrightElement = screen.getByText(/©2024 packNjar/i);
    expect(copyrightElement).toBeInTheDocument();
  });
});
