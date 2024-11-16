import { Title } from "@/components/common/title";
import { products, ProductType } from "@/constant/products";
import { CustomLink } from "@/components/common/custom-link";
import { SingleProduct } from "./single-product/single-product";

export const ProductFeature = () => {
  const sliceProducts = products.slice(0, 3);
  return (
    <section className="layout-container my-32">
      <Title>Our Products</Title>
      <ul className="flex gap-6 flex-wrap justify-center items-center transition-all duration-150">
        {sliceProducts.map((product: ProductType) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            price={product.price}
            img={product.img}
            packs={product.packs}
            title={product.title}
          />
        ))}
      </ul>
      <CustomLink link="/products">See our all products</CustomLink>
    </section>
  );
};
