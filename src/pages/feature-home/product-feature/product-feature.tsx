import { SingleProduct } from "./single-product/single-product";

export const ProductFeature = () => {
  return (
    <section className="layout-container my-28">
      <h1 className="text-3xl font-bold text-center my-10">Our Products</h1>
      <ul className="flex gap-6 flex-wrap justify-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </ul>
    </section>
  );
};
