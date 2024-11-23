import { HeroFeature } from "./feature-hero/feature-hero";
import { TestFeature } from "./test-feature/test-feature";
import { ResultFeature } from "./result-feature/result-feature";
import { ProductFeature } from "./product-feature/product-feature";
import { ClientReview } from "./client-review/client-review";
import { FaqFeature } from "./faq-feature/faq-feature";
import { WorkFeature } from "./work-feature/work-feature";

export const ScreenHomePage = () => {
  return (
    <main>
      <HeroFeature />
      <TestFeature />
      <ProductFeature />
      <ResultFeature />
      <WorkFeature />
      <ClientReview />
      <FaqFeature />
    </main>
  );
};
