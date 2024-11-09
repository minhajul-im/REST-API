import { work } from "../data";
import { Title } from "@/components/common/title";

export const WorkFeature = () => {
  return (
    <section className="my-28 layout-container">
      <Title>How does nic-out work?</Title>

      {work.map((item: string, idx: number) => (
        <p
          key={idx}
          className="text-muted-foreground text-xl tracking-wide leading-relaxed max-w-[850px] mx-auto pb-6">
          {item}
        </p>
      ))}
    </section>
  );
};
