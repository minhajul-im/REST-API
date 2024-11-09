import { products, ProductType } from "../data";
import { SingleProduct } from "./single-product/single-product";

export const AllProductFeature = () => {
  return (
    <ul className="flex gap-6 flex-wrap justify-center items-center transition-all duration-150">
      {products.map((product: ProductType) => (
        <SingleProduct
          key={product.id}
          id={product.id}
          price={product.price}
          img={product.img}
          title={product.title}
          packs={product.packs}
        />
      ))}
    </ul>
  );
};
