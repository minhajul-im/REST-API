import Link from "next/link";
import { NavbarType } from "../../type";

export const NavbarLink = ({ children, href, path }: NavbarType) => {
  return (
    <li
      className={`${
        path === href && "text-blue-600"
      } text-base tracking-wide font-normal cursor-pointer`}>
      <Link className="md:px-1 lg:px-3" href={href}>
        {children}
      </Link>
    </li>
  );
};
