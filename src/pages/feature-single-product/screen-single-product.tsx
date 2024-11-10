import { ProductType } from "@/constant/products";

export const ScreenSingleProduct = ({ product }: { product: ProductType }) => {
  return (
    <section className="layout-container my-10">
      <p>{JSON.stringify(product)}</p>
    </section>
  );
};
