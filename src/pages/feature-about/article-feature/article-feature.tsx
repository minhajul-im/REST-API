import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Paragraph } from "@/components/common/paragraph";

type ArticleType = {
  img: string;
  styles?: string;
  children: string;
  paragraph: string;
};

export const ArticleFeature = ({
  img,
  styles,
  children,
  paragraph,
}: ArticleType) => {
  return (
    <article className={`block md:flex py-20 flex-col md:flex-row ${styles}`}>
      <div
        className={`h-[320px] md:h-[370px] lg:h-[400px] relative w-full md:w-1/2  rounded pb-8 md:pb-0 pr-0 ${
          styles ? "md:pl-4" : "md:pr-4"
        }`}>
        {img ? (
          <Image
            src={img}
            fill
            className="w-full h-full absolute rounded"
            alt={children}
          />
        ) : (
          <Skeleton className="w-full h-full rounded absolute" />
        )}
      </div>
      <div
        className={`w-full md:w-1/2 pl-0 pt-8 md:pt-0 pr-0 ${
          styles ? "md:pr-6" : "md:pl-6"
        }`}>
        <h3 className="text-2xl font-medium text-muted-foreground pb-6">
          {children}
        </h3>
        <Paragraph>{paragraph}</Paragraph>
      </div>
    </article>
  );
};
