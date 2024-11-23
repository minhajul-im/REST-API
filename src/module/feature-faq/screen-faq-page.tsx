import { Title } from "@/components/common/title";
import { AllQuestionAndAnswer } from "./all-question-answer/all-question-answer";

export const ScreenFeatureFaq = () => {
  return (
    <section className="layout-container">
      <Title> frequently asked question</Title>

      <AllQuestionAndAnswer />
    </section>
  );
};
