"use client";

import Image from "next/image";
import { useState } from "react";
import { allImage, ImageType } from "../data";

export const ProductImagesFeature = ({ imgUrl }: { imgUrl: string }) => {
  const [img, setImg] = useState<string>(imgUrl);

  const images = allImage.map((item: ImageType) => {
    if (item.id === "01") {
      return { ...item, img: imgUrl };
    }
    return item;
  });

  const handleClick = (id: string) => {
    const selectedItem = images.find((item: ImageType) => item.id === id);
    if (selectedItem) {
      setImg(selectedItem.img as string);
    }
  };

  return (
    <section className="w-full md:w-1/2 pr-0 pt-6 md:pr-3 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-blue-500 rounded">
      <div className="relative w-[320px] md:w-[380px] lg:w-[430px] h-[260px] md:h-[310px] lg:h-[360px] rounded mx-auto">
        <Image
          src={img}
          alt="NicOut"
          fill
          className="w-full h-full absolute rounded transition-all duration-300"
        />

        {/* <div className="hello hidden md:block absolute top-0 left-[450px] md:w-[500px] md:h-[500px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Image src={img} alt="Bro Image" fill className="rounded-md" />
        </div> */}
      </div>

      <div className="flex gap-4 py-6 items-center justify-center mx-auto">
        {images.map((item: ImageType) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`w-20 h-16 rounded-md relative md:h-20 md:w-24 cursor-pointer transition-transform duration-300 ${
              img === item.img ? "ring-4 ring-blue-500" : ""
            } hover:scale-105`}>
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="w-full h-full rounded absolute"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
