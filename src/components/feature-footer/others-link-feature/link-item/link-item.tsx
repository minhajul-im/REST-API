export const LinkItem = ({ children }: { children: string }) => {
  return (
    <li>
      <a
        href="jaascript:;"
        className="text-sm font-normal text-gray-500 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
        {children}
      </a>
    </li>
  );
};
