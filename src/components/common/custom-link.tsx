import Link from "next/link";
import { MoveRight } from "lucide-react";

type LinkType = {
  link: string;
  children: string;
};

export const CustomLink = ({ link, children }: LinkType) => {
  return (
    <Link
      className="text-end my-10 flex gap-4 justify-end items-center text-blue-600 font-medium text-xl"
      href={link}>
      <span>{children}</span> <MoveRight />
    </Link>
  );
};
