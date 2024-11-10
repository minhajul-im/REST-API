import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, ProductType } from "@/constant/products";
import { ScreenSingleProduct } from "@/pages/feature-single-product/screen-single-product";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const product = products.find((item: ProductType) => item.id === slug);

  return {
    title: product?.title,
    description: ``,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
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
