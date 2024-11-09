import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, FaqType } from "../data";

export const AllQuestionAndAnswer = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-[850px] mx-auto py-10 mb-10">
      {faqs.map((item: FaqType) => (
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
  );
};
