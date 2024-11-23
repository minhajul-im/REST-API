import { Metadata } from "next";
import { ScreenProductsPage } from "@/module/feature-products/screen-product-page";

export const metadata: Metadata = {
  title: "Our All NicOut Products",
  description: `Removes up to 90% of the Tar but doesn't change the Taste. Satisfaction Guaranteed - Our cigarette filters are Certified for Quality and Hygiene by the International Standards Organization, the world's #1 standards organization. Made by US Company for 20 years – Use Nic Out 8-hole cigarette filters with confidence!`,
};

export default function ProductsPage() {
  return <ScreenProductsPage />;
}
