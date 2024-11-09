export const Paragraph = ({ children }: { children: string }) => {
  return (
    <p className="text-muted-foreground text-xl tracking-wide leading-relaxed max-w-[850px] mx-auto pb-6">
      {children}
    </p>
  );
};
