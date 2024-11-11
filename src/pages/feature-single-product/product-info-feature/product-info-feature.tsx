import { note } from "../data";
import { Rating } from "@/components/common/rating";
import { ProductDetails } from "./product-details/product-details";

type ProductInfo = {
  price: number;
  packs: number;
  children: string | React.ReactNode;
};

export const ProductInfoFeature = ({ children, price, packs }: ProductInfo) => {
  return (
    <section className="w-full md:w-1/2 pl-0 md:pl-6 py-6">
      <h3 className="text-2xl font-medium">{children}</h3>
      <Rating />
      <h4 className="text-xl font-semibold text-blue-500 my-4">৳ {price}.00</h4>

      <h6 className="font-semibold italic text-base mb-2 text-muted-foreground">
        {packs} {packs > 1 ? "Packs" : "Pack"} and {packs * 30} Filters
      </h6>

      <ProductDetails />

      <p className="text-base text-muted-foreground italic tracking-wide my-4">
        <span className="text-[18px] text-blue-500">Note: </span>
        {note}
      </p>
    </section>
  );
};
