import { Metadata } from "next";
import { ScreenFeatureFaq } from "@/pages/feature-faq/screen-feature-faq";

export const metadata: Metadata = {
  title: "Frequently Asked Question",
  description: `What is Nic-Out?
Answer: It is a high-performance health product designed as a disposable cigarette filter to make smoking safer or help smokers quit.

How does Nic-Out work?
Answer: Nic-Out is a cigarette holder with a mechanical filter that absorbs tar and carcinogens, reducing nicotine intake to help smokers reduce cravings.

Where and how is it made?
Answer: Nic-Out is developed in Israel and manufactured overseas using Grade-A plastic, the same used for baby bottles, with a patented technology.

What are the advantages of Nic-Out?
Answer: It reduces tar in smoke, helps with dental protection, eliminates morning cough, and promotes a healthier smoking experience.

Does Nic-Out come in one size or can I get it for slim cigarettes?
Answer: Nic-Out filters are available for both regular and slim-sized cigarettes.

What is the Packing of Nic-Out?
Answer: Nic-Out filters are packed in cigarette-type boxes with 30 filters for regular-sized cigarettes or 25 for slim cigarettes, with 20 packs per carton.`,
};

export default function FaqPage() {
  return <ScreenFeatureFaq />;
}
