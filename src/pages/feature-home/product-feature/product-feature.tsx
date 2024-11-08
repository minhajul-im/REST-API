import { Product, products } from "../data";
import { Title } from "@/components/common/title";
import { CustomLink } from "@/components/common/custom-link";
import { SingleProduct } from "./single-product/single-product";

export const ProductFeature = () => {
  return (
    <section className="layout-container my-32">
      <Title>Our Products</Title>
      <ul className="flex gap-6 flex-wrap justify-center items-center transition-all duration-150">
        {products.map((product: Product) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            price={product.price}
            img={product.img}
          />
        ))}
      </ul>
      <CustomLink link="/products">See our all products</CustomLink>
    </section>
  );
};
