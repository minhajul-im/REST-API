import { StaticImageData } from "next/image";
import img3 from "@/assets/images/lab-test.jpg";
import img2 from "@/assets/images/save-money.jpg";
import img1 from "@/assets/images/nicout-filter.jpg";

export type FeatureType = { title: string; desc: string; img: StaticImageData };

export const features: FeatureType[] = [
  {
    title: "Innovative Design",
    desc: `Our own "Easy Draw" 8-Hole Filter Design is effective and unique.`,
    img: img1,
  },
  {
    title: "Efficient and Economical",
    desc: `One of the most Economical and Effective Smoking Cessation Methods.`,
    img: img2,
  },
  {
    title: "Lab Tested",
    desc: `Nic Out removes 90% of the Tar as shown by Independent Lab Tests (1)`,
    img: img3,
  },
];
