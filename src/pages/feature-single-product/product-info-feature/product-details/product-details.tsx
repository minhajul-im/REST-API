import { description } from "@/constant/products";

export const ProductDetails = () => {
  return (
    <ul className="border-t border-muted-foreground mt-4">
      {description.map((item: string) => (
        <li
          key={item}
          className="list-disc text-base text-foreground tracking-normal py-1 mt-1 ml-4">
          {item}
        </li>
      ))}
    </ul>
  );
};
