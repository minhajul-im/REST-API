import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "../../data";

export const SingleProduct = ({ img, price, id }: Product) => {
  return (
    <Card className={cn("w-[380px]")}>
      <CardContent className="pt-6">
        <div className="max-w-xs h-[320px] relative rounded">
          <Image
            fill
            src={img}
            alt={id}
            className="w-full h-full absolute object-cover rounded"
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-base font-medium text-muted-foreground flex items-center gap-2">
          <span>৳</span> <span>{price}</span>
        </div>
        <Link className={cn(buttonVariants({ variant: "outline" }))} href={"/"}>
          Check Out
        </Link>
      </CardFooter>
    </Card>
  );
};
