import { features, FeatureType } from "../data";
import { SingleTest } from "./single-test/single-test";

export const TestFeature = () => {
  return (
    <section className="my-28 layout-container">
      <h2 className="text-4xl font-bold tracking-wide py-20 text-center uppercase">
        GET Less Tar / Same Taste with Nic Out
      </h2>

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
