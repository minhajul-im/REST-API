import { work } from "../data";
import { Title } from "@/components/common/title";
import { Paragraph } from "@/components/common/paragraph";

export const WorkFeature = () => {
  return (
    <section className="my-28 layout-container">
      <Title>How does nic-out work?</Title>

      {work.map((item: string, idx: number) => (
        <Paragraph key={idx}>{item}</Paragraph>
      ))}
    </section>
  );
};
