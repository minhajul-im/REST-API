import { FeatureBottom } from "./feature-bottom/feature-bottom";
import { FeatureContact } from "./feature-contact/feature-contact";
import { SocialFeature } from "./social-feature/social-feature";
// import { FeatureSocial } from "./feature-social/feature-social";

export const ScreenFooter = () => {
  return (
    <footer className="pt-16 layout-container">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 flex flex-col justify-center lg:justify-start">
          <a
            href=""
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center justify-center lg:justify-start">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none">
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              Company
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm text-center lg:text-start text-muted-foreground">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. de omnis iste natus!
            </p>
            <p className="text-sm">
              Sed ut perspiciatis unde omnis iste natus!
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
