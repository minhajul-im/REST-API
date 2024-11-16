import { ProductType } from "@/constant/products";
import { Title } from "@/components/common/title";
import { OrderInfoFeature } from "./order-info-feature/order-info-feature";
import { ProductImagesFeature } from "./images-feature/product-images-feature";
import { ProductInfoFeature } from "./product-info-feature/product-info-feature";

export const ScreenSingleProduct = ({ product }: { product: ProductType }) => {
  return (
    <section className="layout-container mb-10">
      <Title>Order Your Favorite Package</Title>

      <article className="block md:flex py-20 flex-col md:flex-row">
        <ProductImagesFeature imgUrl={product?.img} />
        <ProductInfoFeature packs={product.packs} price={product.price}>
          {product.title as string}
        </ProductInfoFeature>
      </article>

      <OrderInfoFeature product={product} />
    </section>
  );
};
