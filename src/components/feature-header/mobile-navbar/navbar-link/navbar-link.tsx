import Link from "next/link";
import { NavbarType } from "../../type";

export const NavbarLink = ({ children, href, path }: NavbarType) => {
  return (
    <li>
      <Link
        className={`${
          path === href ? "underline text-blue-600" : "text-muted-foreground"
        } text-2xl font-medium text-center tracking-wide py-2`}
        href={href}>
        {children}
      </Link>
    </li>
  );
};
