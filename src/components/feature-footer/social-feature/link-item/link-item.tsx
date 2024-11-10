type LinkType = {
  children: React.ReactNode;
  link?: string;
};

export const LinkItem = ({ children, link = "#" }: LinkType) => {
  return (
    <a
      href={link}
      className="border border-gray-300 p-2 rounded-full aspect-square text-muted-foreground transition-all duration-500 hover:text-indigo-600 hover:border-indigo-600 focus-within:outline-0 focus-within:text-indigo-600 focus-within:border-indigo-600">
      {children}
    </a>
  );
};
