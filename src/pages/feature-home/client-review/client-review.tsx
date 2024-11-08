import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews, ReviewType } from "../data";
import { Title } from "@/components/common/title";
import { SingleClientReview } from "./single-client-review/single-client-review";

export const ClientReview = () => {
  return (
    <section className="my-28 layout-container">
      <Title>What our happy Customer say</Title>

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
