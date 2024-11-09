import Image from "next/image";
import { result } from "../data";
import { Title } from "@/components/common/title";
import img from "@/assets/images/beautiful-hand-with-nicout.jpg";

export const ResultFeature = () => {
  return (
    <section className="layout-container my-24">
      <Title>GET Less Tar / Same Taste with Nic Out</Title>

      {result.map((item: string, idx: number) => (
        <p
          key={idx}
          className="text-muted-foreground text-xl tracking-wide leading-relaxed max-w-[850px] mx-auto pb-6">
          {item}
        </p>
      ))}

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
