import { Title } from "@/components/common/title";
import { aboutOne, aboutThree, aboutTwo } from "./data";
import { ArticleFeature } from "./article-feature/article-feature";

export const ScreenAboutPage = () => {
  return (
    <section className="layout-container">
      <Title>About of nic out </Title>
      <p className="text-xl tracking-wide text-muted-foreground text-end italic">
        “Giving up smoking is the easiest thing in the world. I know because
        I’ve done it thousands of times.”
      </p>
      <p className="text-end text-xs italic"> — Mark Twain</p>

      <ArticleFeature img={aboutOne.img} paragraph={aboutOne.paragraph}>
        {aboutOne.title}
      </ArticleFeature>
      <ArticleFeature
        styles="md:flex-row-reverse"
        img={aboutTwo.img}
        paragraph={aboutTwo.paragraph}>
        {aboutTwo.title}
      </ArticleFeature>
      <ArticleFeature img={aboutThree.img} paragraph={aboutThree.paragraph}>
        {aboutThree.title}
      </ArticleFeature>
    </section>
  );
};
