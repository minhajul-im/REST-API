import { ProductType } from "@/constant/products";
import { ProductImagesFeature } from "./images-feature/product-images-feature";
import { ProductInfoFeature } from "./product-info-feature/product-info-feature";

export const ScreenSingleProduct = ({ product }: { product: ProductType }) => {
  return (
    <section className="layout-container my-10">
      <article className="block md:flex py-20 flex-col md:flex-row">
        <ProductImagesFeature imgUrl={product?.img} />
        <ProductInfoFeature packs={product.packs} price={product.price}>
          {product.title as string}
        </ProductInfoFeature>
      </article>
    </section>
  );
};
