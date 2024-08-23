import React from "react";
import Title from "./Title";
import { thumbnail, video } from "../../constant/mock-data";

const Hero = () => {
  return (
    <React.Fragment>
      <section
        id="hero"
        data-testid="hero"
        className="flex h-screen items-center justify-center relative bg-[#283469] z-10">
        <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
          <video
            data-testid="hero-video"
            src={video}
            className="w-full h-full md:object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={thumbnail}></video>
        </div>

        <Title />
      </section>
    </React.Fragment>
  );
};

export default Hero;
