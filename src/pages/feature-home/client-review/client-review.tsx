import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SingleClientReview } from "./single-client-review/single-client-review";

export const ClientReview = () => {
  return (
    <section className="my-28 layout-container">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-wide py-20 text-center uppercase">
          What our happy Customer say
        </h2>
      </div>

      <article className="mx-auto px-10">
        <Carousel className="w-full">
          <CarouselContent className="">
            {reviews.map((review: ReviewType, idx: number) => (
              <CarouselItem key={idx} className="p-4 md:basis-1/2 lg:basis-1/3">
                <SingleClientReview name={review.name} where={review.where}>
                  {review.comment}
                </SingleClientReview>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </article>
    </section>
  );
};

type ReviewType = {
  name: string;
  where: string;
  comment: string;
};

const reviews: ReviewType[] = [
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
