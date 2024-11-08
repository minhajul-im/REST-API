import { HeroFeature } from "./feature-hero/feature-hero";
import { TestFeature } from "./test-feature/test-feature";
import { ResultFeature } from "./result-feature/result-feature";
import { ProductFeature } from "./product-feature/product-feature";
import { ClientReview } from "./client-review/client-review";

export const ScreenHomePage = () => {
  return (
    <main>
      <HeroFeature />
      <TestFeature />
      <ProductFeature />
      <ResultFeature />
      <ClientReview />
    </main>
  );
};
