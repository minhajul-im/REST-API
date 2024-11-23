import { ProductType } from "@/constant/products";

type OrderType = {
  product: ProductType;
  deliveryPlace: string;
};

export const OrderDetails = ({ deliveryPlace, product }: OrderType) => {
  let deliveryCharge: number = 0;

  if (deliveryPlace === "Dhaka") {
    deliveryCharge = 60;
  } else if (
    deliveryPlace !== "Select Your Division!" &&
    deliveryPlace !== ""
  ) {
    deliveryCharge = 120;
  }

  return (
    <div className="flex justify-end flex-col gap-2">
      <h2 className="text-2xl text-blue-500 font-bold text-end mb-6">
        Your Bill Details
      </h2>
      <h5 className="text-end">{product.title}</h5>
      <h6 className="my-2 text-end">
        {product.packs} {product.packs > 1 ? "Packs " : "Pack "} and{" "}
        {product.packs * 30} Filters
      </h6>

      <div className="flex justify-between items-center">
        <span>Product Price</span>
        <span>{product.price}.00</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Delivery Charge</span>
        <span>{deliveryCharge}.00</span>
      </div>

      <hr />

      <div className="flex justify-between items-center">
        <span>Total Taka</span>
        <span>{product.price + deliveryCharge}.00</span>
      </div>
    </div>
  );
};
