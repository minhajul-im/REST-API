"use client";

import "./whatsapp.css";
import Image from "next/image";
// import { useEffect } from "react";
import whatsapp from "@/assets/images/whatsapp.png";

export const WhatsAppFeature = () => {
  const phone = "01616292567";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodingMgs = "Hey there, How's going?";
  const url = `${baseUrl}?phone=${phone}&text=${encodingMgs}&type=phone_number&app_absent=0`;

  // useEffect(() => {
  //   const el = document.querySelector(".whatsapp-link");

  //   const handleScroll = () => {
  //     if (window.scrollY < 10) {
  //       el?.classList.add("visible");
  //     } else {
  //       el?.classList.remove("visible");
  //     }
  //   };

  //   const checkScroll = () => {
  //     const height = document.documentElement.scrollHeight;
  //     const clientHeight = document.documentElement.clientHeight;

  //     if (height > clientHeight) {
  //       window.addEventListener("scroll", handleScroll);
  //     } else {
  //       el?.classList.add("visible");
  //     }
  //   };

  //   checkScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <a
      href={url}
      className="whatsapp-link relative"
      target="_blank"
      rel="noreferrer noopener">
      <span className="absolute top-2 left-2 -z-50 size-10">
        <span className="flex justify-center items-center size-full animate-ping rounded-full bg-green-500/75"></span>
      </span>

      <Image
        className="whatsapp-icon z-50"
        src={whatsapp}
        alt="whatsapp"
        sizes="100vh"
        style={{ width: "55px", height: "55px" }}
      />
    </a>
  );
};
