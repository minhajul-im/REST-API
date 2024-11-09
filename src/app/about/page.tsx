import { Metadata } from "next";
import { ScreenAboutPage } from "@/pages/feature-about/screen-about-page";

export const metadata: Metadata = {
  title: "About of Nic Out",
  description: `Nic-out is a health product that has international success for smokers, with the highest level of performance in the market!
  Nic-out is a portable filter in the form of a cigarette fairy that fits on the cigarette and reduces the damage caused by smoking by reducing and absorbing the toxins that are burned while burning the cigarette without compromising the smoker’s taste or consumption habits!
  Its main function is to help the person who smokes get rid of breathing difficulties and to allow him to start the process of reducing/stopping smoking in a more lenient way!
  The filter has been tested very carefully and is always in the process of supervising and upgrading the product in order to provide the customer with the maximum value for his money and health!
  In a box of standard filters, there are 30 filters, In the box of SLIM & HAND ROLLING filters, there are 25 filters!
  Each filter fits an average of 3-5 cigarettes. SLIM & HAND ROLLING Suitable for Slims, Super Slims, and Rollers with 6 and 5.3mm millimeter filter tips!`,
};

export default function AboutPage() {
  return <ScreenAboutPage />;
}
