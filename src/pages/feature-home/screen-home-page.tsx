import { HeroFeature } from "./feature-hero/feature-hero";
import { ProductFeature } from "./product-feature/product-feature";
import { TestFeature } from "./test-feature/test-feature";

export const ScreenHomePage = () => {
  return (
    <main>
      <HeroFeature />
      <TestFeature />
      <ProductFeature />
    </main>
  );
};
