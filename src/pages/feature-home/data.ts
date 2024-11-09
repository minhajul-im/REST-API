import { StaticImageData } from "next/image";
import img3 from "@/assets/images/lab-test.jpg";
import img2 from "@/assets/images/save-money.jpg";
import img1 from "@/assets/images/nicout-filter.jpg";
import nicOne from "@/assets/images/nic-out1.jpg";
import nicTwo from "@/assets/images/nic-out2.jpg";
import nicThree from "@/assets/images/nic-out3.jpg";

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

export type Product = { price: string; id: string; img: StaticImageData };

export const products: Product[] = [
  {
    id: "01",
    price: "700.00",
    img: nicOne,
  },
  {
    id: "03",
    price: "2100.00",
    img: nicTwo,
  },
  {
    id: "05",
    price: "3300.00",
    img: nicThree,
  },
];

export type ReviewType = {
  name: string;
  where: string;
  comment: string;
};

export const reviews: ReviewType[] = [
  {
    name: "Debbie Stephens",
    where: "Facebook",
    comment:
      "These filters work great. They advertise that you can use them for ten 'light' cigarettes, but I find that there is enough tar after five.",
  },
  {
    name: "Gina",
    where: "Instagram",
    comment:
      "I loved these when I was still a smoker. These filters made my cigarettes taste better! I have since quit smoking, but if you still smoke, I recommend them.",
  },
  {
    name: "Amazon Customer",
    where: "Twitter",
    comment:
      "This really does what it says. My only complaint is that it does affect the strength of the cigarette.",
  },
  {
    name: "Katheen Moyer",
    where: "Facebook",
    comment:
      "I really wanted to slow down on my smoking and these little filters are great! I have slowed down and noticed quite an improvement on energy level.",
  },
  {
    name: "Frances Gabriele",
    where: "Linkedin",
    comment:
      "What I didn’t like about this product is that there were a lot of them in the box that didn’t work at all.",
  },
  {
    name: "Michael",
    where: "Instagram",
    comment:
      "The drag on the cigarette was awful hard at first, but after a day, I adjusted. These tips helped me reduce nicotine cravings, but be careful, they make the cigarette top-heavy.",
  },
  {
    name: "Melissa Hoiles",
    where: "Facebook",
    comment:
      "I just got these and yes, they work. Does not change the feel and taste of draw + inhaling. I really wish cigarette manufacturers would fit similar filters.",
  },
  {
    name: "Alexis Booras",
    where: "Linkedin",
    comment:
      "I’m not sure if this will help me quit, but it’s catching nicotine. The filter fits well and does not affect the flavor. So far, so good!",
  },
  {
    name: "Mistymeaner",
    where: "Facebook",
    comment:
      "These filters do what they say they will do and for me are good for more than ten cigs. My cough has improved, and I am hopeful they will help me quit.",
  },
  {
    name: "FRANCINE RENAUD",
    where: "Instagram",
    comment:
      "These definitely take the nicotine taste out! A little expensive but with coronavirus I do not have to go to the store for them..",
  },
];

export const faq = [
  {
    question: "What is Nic-Out?",
    answer: `It is a high performance health product. Disposable Cigarette Filter in the form of cigarette holder makes smoking safer or enables smoker to quit easier, if this option should have been chosen. It therefore allows individuals to secure their health for the lowest cost. 
    Our Company is proud to offer you this revolutionary product, which could bring the answer to one of the bitterest modern problems, and prove as solution for a Healthier Nation.`,
  },
  {
    question: "How does Nic-Out work?",
    answer: `The Nic-Out is a cigarette holder with mechanical filtering insert, which selectively absorbs from the smoke large molecules of the tar and other toxic and carcinogenic poly-nuclear aromatic compounds. The principle of action of the Nic-Out filter is based on the laws of behavior of gases in the jet engine and it was developed in a framework of space technologies. This mechanical device permits most low molecular weight species to pass through, although relatively lowering the amount of inhaled nicotine and thus diminishing cravings in those who want to quit.`,
  },
  {
    question: "What are the advantages of Nic-Out?",
    answer: `Scientific and practical knowledge show that Nic-Out works effectively. It is made from transparent plastic and makes visible concentration of collected tar. This provides important psychological effect in order to build negative image of smoking consequences and to prevent further ruining of public health. Reduction of tar in cigarette smoke has also certain “cosmetic” action. 
    The filter protects dental enamel from penetration of sticky tar, cease formation of a dental strike and helps to keep your smile snow-white. The immediate results of using the tiny device is the disappearance of the tormenting “morning cough” – usually a consequence of smoking over 15 cigarettes per day. After 2 weeks of using this filter the smokers are completely rid of the “morning cough”`,
  },
];
