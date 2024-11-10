import { Title } from "@/components/common/title";
import { AllProductFeature } from "./all-products-feature/all-products-feature";

export const ScreenProductsPage = () => {
  return (
    <section className="layout-container mb-20">
      <Title>Our Nic Out Products</Title>
      <AllProductFeature />
    </section>
  );
};
