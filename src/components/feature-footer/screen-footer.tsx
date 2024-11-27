import { FeatureBottom } from "./feature-bottom/feature-bottom";
import { SocialFeature } from "./social-feature/social-feature";
import { FeatureContact } from "./feature-contact/feature-contact";
import Image from "next/image";

export const ScreenFooter = () => {
  return (
    <footer className="pt-16 layout-container">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 items-center">
        <div className="sm:col-span-2 flex flex-col justify-center lg:justify-start">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center justify-center lg:justify-start">
            <div className="w-52 h-20 relative dark:bg-white">
              <Image src="/logo.png" alt="logo" fill />
            </div>
          </a>
          <div className="mt-6 lg:max-w-sm text-center lg:text-start text-muted-foreground">
            <p className="text-sm">
              At PacknJar, we provide high-quality cigarette filters designed to
              reduce tar and nicotine, helping smokers enjoy a smoother, less
              harmful experience.
            </p>
            <p className="text-sm">
              Our filters are available in convenient packs for easy use and
              disposal.
            </p>
          </div>
        </div>

        <FeatureContact />
        <SocialFeature />
      </div>

      <FeatureBottom />
    </footer>
  );
};
