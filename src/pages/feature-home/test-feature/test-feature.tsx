import { features, FeatureType } from "../data";
import { Title } from "@/components/common/title";
import { SingleTest } from "./single-test/single-test";

export const TestFeature = () => {
  return (
    <section className="my-28 layout-container">
      <Title>GET Less Tar / Same Taste with Nic Out!</Title>

      <ul className="flex justify-center items-center gap-6 flex-wrap transition-all duration-150">
        {features.map((item: FeatureType) => (
          <SingleTest
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </section>
  );
};
