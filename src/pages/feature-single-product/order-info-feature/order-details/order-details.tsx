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
        <p>Product Price</p> <p>{product.price}.00</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Delivery Charge</p> <p>{deliveryCharge}.00</p>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <p>Total Taka</p> <p>{product.price + deliveryCharge}.00</p>
      </div>
    </div>
  );
};
