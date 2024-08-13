import React from "react";
import Title from "./Title";
import { thumbnail, video } from "../../constant/mock-data";

const Hero = () => {
  return (
    <React.Fragment>
      <section
        id="hero"
        className="flex h-screen items-center justify-center relative bg-[#283469] z-10">
        <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
          <video
            src={video}
            className="w-full h-full md:object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={thumbnail}></video>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-60% to-black" />

        <div className="relative z-20 flex flex-col h-screen justify-end pb-16 md:pb-12 mx-4 w-full md:w-[750px] lg:w-[900px] text-center transition-all duration-200">
          <Title />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
