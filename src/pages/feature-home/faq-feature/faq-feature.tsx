import { Title } from "@/components/common/title";
import { CustomLink } from "@/components/common/custom-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqFeature = () => {
  return (
    <section className="layout-container my-32">
      <Title> frequently asked question</Title>
      <Accordion type="single" collapsible className="max-w-[850px] mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <CustomLink link="/faq">You Can See Question</CustomLink>
    </section>
  );
};
