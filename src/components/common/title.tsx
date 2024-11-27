export const Title = ({ children }: { children: string }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-wide py-20 text-center uppercase">
      {children}
    </h2>
  );
};
