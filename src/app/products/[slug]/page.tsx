import { baseUrl } from "@/constant";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { description, products, ProductType } from "@/constant/products";
import { ScreenSingleProduct } from "@/module/feature-single-product/screen-single-product";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const product = products.find((item: ProductType) => item.id === slug);

  if (!product) {
    return {
      title: "Product Not Found!",
      description: "The requested product could not be found!",
    };
  }

  return {
    title: product?.title,
    description: description.join(" "),
    openGraph: {
      title: product?.title,
      description: description.join(" "),
      url: `${baseUrl}products/${slug}`,
      images: [
        {
          url: product?.img as string,
          width: 1200,
          height: 630,
          alt: product?.title || "Product Image",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product: ProductType) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item: ProductType) => item.id === slug);

  if (!product) return notFound();

  return <ScreenSingleProduct product={product} />;
}
