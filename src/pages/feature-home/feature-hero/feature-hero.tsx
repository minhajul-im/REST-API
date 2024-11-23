export const HeroFeature = () => {
  return (
    <section className="flex items-center justify-center h-screen relative bg-[#283469] -z-10">
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
        <video
          data-testid="hero-video"
          src="/nicout-video.mp4"
          className="w-full h-full md:object-cover"
          muted
          autoPlay
          loop
          playsInline
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-60% to-black" />

      <div className="relative z-20 flex flex-col h-screen justify-end pb-16 md:pb-12 mx-4 w-full md:w-[750px] lg:w-[900px] text-center transition-all duration-200">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-fontBold title">
          Filters remove over 90% of the tar and reduce nicotine!
        </h1>
      </div>
    </section>
  );
};
