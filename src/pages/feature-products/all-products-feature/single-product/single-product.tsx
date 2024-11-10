import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductType } from "../../data";
import { Skeleton } from "@/components/ui/skeleton";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const SingleProduct = ({ img, price, id }: ProductType) => {
  return (
    <Card
      className={cn(
        "w-[380px] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-blue-500"
      )}>
      <CardContent className="pt-6">
        <div className="max-w-xs h-[320px] relative rounded">
          {img ? (
            <Image
              fill
              src={img}
              alt={id}
              className="w-full h-full absolute object-cover rounded"
            />
          ) : (
            <Skeleton className="w-full h-full absolute" />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-base font-medium text-muted-foreground flex items-center gap-2">
          <span>৳</span>
          <span>
            {price}
            {".00"}
          </span>
        </div>
        <Link
          className={cn(buttonVariants({ variant: "outline" }))}
          href={`/products/${id}`}>
          Check Out
        </Link>
      </CardFooter>
    </Card>
  );
};
