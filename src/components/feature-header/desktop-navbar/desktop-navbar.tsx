"use client";

import { usePathname } from "next/navigation";
import { NavbarLink } from "./navbar-link/navbar-link";

export const DesktopNavbar = () => {
  const pathName = usePathname();

  const path = pathName as string;
  return (
    <ul className="hidden md:flex items-center gap-8">
      <NavbarLink path={path} href="/">
        Home
      </NavbarLink>
      <NavbarLink path={path} href="/products">
        Products
      </NavbarLink>
      <NavbarLink path={path} href="/about">
        About
      </NavbarLink>
      <NavbarLink path={path} href="/contact">
        Contact
      </NavbarLink>
      <NavbarLink path={path} href="/faq">
        FAQ
      </NavbarLink>
    </ul>
  );
};
