import Link from "next/link";
import { MoveRight } from "lucide-react";
import { SingleProduct } from "./single-product/single-product";
import { Product, products } from "../data";

export const ProductFeature = () => {
  return (
    <section className="layout-container my-32">
      <h1 className="text-4xl font-bold tracking-wide text-muted-foreground py-20 text-center">
        Our Products
      </h1>
      <ul className="flex gap-6 flex-wrap justify-center">
        {products.map((product: Product) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            price={product.price}
            img={product.img}
          />
        ))}
      </ul>
      <Link
        href="/products"
        className="text-end my-10 flex gap-4 justify-end items-center text-blue-600 font-medium text-xl">
        <span>See our all products</span> <MoveRight />
      </Link>
    </section>
  );
};
