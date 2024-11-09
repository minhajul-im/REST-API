export type ProductType = {
  id: string;
  price: number;
  title: string;
  packs: number;
  img: string;
};
export const products: ProductType[] = [
  {
    id: "01",
    price: 700,
    title: "Filters for Cigarette Smokers (1 Packs 30 Filters)",
    packs: 1,
    img: `https://res.cloudinary.com/dgzms5c9a/image/upload/v1731154986/y6bgjiqad0ils5qbq4cm.jpg`,
  },
  {
    id: "02",
    price: 2100,
    title: "Smoking Free Tar & Nicotine Disposable NicOut Holders for Smokers",
    packs: 3,
    img: `https://res.cloudinary.com/dgzms5c9a/image/upload/v1731155022/ijp46go24z89b5pxnttj.jpg`,
  },
  {
    id: "03",
    price: 3300,
    title:
      "Removes The Tar Not The Taste - Reusable Cigarette Filter Tips for Regular & Light Cigarettes",
    packs: 5,
    img: `https://res.cloudinary.com/dgzms5c9a/image/upload/v1731155058/eqzekweeac9onhf8ntlu.jpg`,
  },
  {
    id: "04",
    price: 4100,
    title: "Each filter is good for up to 5 Regular or 10 Light cigarettes.",
    packs: 12,
    img: `https://res.cloudinary.com/dgzms5c9a/image/upload/v1731161426/l7thu62s2uhfxwjbpujv.png`,
  },
  {
    id: "05",
    price: 8000,
    title: "Set of 2 As Seen on TV Nic Out Cigarette Low Nicotine Filter",
    packs: 24,
    img: `https://res.cloudinary.com/dgzms5c9a/image/upload/v1731161495/g45ex1yq8xyqphwhx4j4.png`,
  },
  {
    id: "06",
    price: 10000,
    title:
      "Premium Cigarette Filters Disposable Cigarette Holder and Tar-Nicotine Filtration",
    packs: 27,
    img: `https://res.cloudinary.com/dgzms5c9a/image/upload/v1731162833/zna7i2x6t3pvuojgaksj.png`,
  },
];
