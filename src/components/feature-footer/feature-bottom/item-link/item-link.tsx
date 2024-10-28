import Link from "next/link";

export type ItemProps = {
  href: string;
  children: string;
};

export const ItemLink = ({ href, children }: ItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        {children}
      </Link>
    </li>
  );
};
