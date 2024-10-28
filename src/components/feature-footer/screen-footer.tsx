import { FeatureBottom } from "./feature-bottom/feature-bottom";
import { FeatureContact } from "./feature-contact/feature-contact";
import { SocialFeature } from "./social-feature/social-feature";
// import { FeatureSocial } from "./feature-social/feature-social";

export const ScreenFooter = () => {
  return (
    <footer className="pt-16 mx-auto px-4 md:px-6 lg:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href=""
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center">
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
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur. de omnis iste natus!
            </p>
            <p className="text-sm text-gray-800">
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
