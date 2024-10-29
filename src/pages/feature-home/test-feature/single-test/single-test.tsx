import Image from "next/image";
import { cn } from "@/lib/utils";
import { FeatureType } from "../../data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const SingleTest = ({ img, title, desc }: FeatureType) => {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <div className="w-[300px] h-[300px] relative mx-auto">
        <Image
          fill
          className="w-full h-full object-cover rounded absolute"
          src={img}
          alt={title}
        />
      </div>

      <p className="text-muted-foreground text-sm tracking-wider p-5 text-center">
        {desc}
      </p>
    </Card>
  );
};
