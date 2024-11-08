import Image from "next/image";
import { Title } from "@/components/common/title";
import img from "@/assets/images/beautiful-hand-with-nicout.jpg";

export const ResultFeature = () => {
  return (
    <section className="layout-container my-24">
      <Title>GET Less Tar / Same Taste with Nic Out</Title>

      <p className="text-xl tracking-wide text-muted-foreground max-w-xs md:max-w-xl lg:max-w-2xl mx-auto transition-all duration-150">
        <span className="py-4 block">
          Nic-out is a health product that has an international success for
          smokers, with the highest level of performance in the market.
        </span>
        <span className="my-6 block">
          Nic-out is a portable filter in the form of a cigarette fairy that
          fits on the cigarette and reduces the damage caused by smoking by
          reducing and absorbing the toxins that are burned while burning the
          cigarette without compromising the smoker’s taste or consumption
          habits.
        </span>
      </p>

      <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-[200px] sm:h-[350px] md:h-[420px] lg:h-[520px] relative rounded mx-auto my-10 transition-all duration-150">
        <Image
          src={img}
          alt="result"
          fill
          className="rounded absolute w-full h-full"
        />
      </div>
    </section>
  );
};
