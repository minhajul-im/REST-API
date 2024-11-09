import { Title } from "@/components/common/title";
import { CustomLink } from "@/components/common/custom-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "../data";

export const FaqFeature = () => {
  return (
    <section className="layout-container my-32">
      <Title> frequently asked question</Title>
      <Accordion
        type="single"
        collapsible
        className="max-w-[850px] mx-auto pb-6">
        {faq.map((item) => (
          <AccordionItem value={item.question} key={item.question}>
            <AccordionTrigger className="text-2xl tracking-wide font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-xl tracking-wide leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <CustomLink link="/faq">You Can See Question</CustomLink>
    </section>
  );
};
