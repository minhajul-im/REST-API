"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ItemProps = {
  href: string;
  children: string;
};

export const ItemLink = ({ href, children }: ItemProps) => {
  const path = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`text-sm text-muted-foreground transition-colors duration-300 hover:text-blue-500 ${
          path === href ? "text-blue-500" : ""
        }`}>
        {children}
      </Link>
    </li>
  );
};
