import { SocialFeature } from "./social-feature/social-feature";
import { OtherLinkFeature } from "./others-link-feature/others-link-feature";

export const ScreenFooter = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 lg:px-12 p-12 rounded-2xl">
        <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 pb-10">
          <a href="#" className="py-1.5">
            PacknJar
          </a>
          <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
            <li>
              <a
                href="jaascript:;"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
                Pagedone
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
                Products
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
                Resources
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="jaascript:;"
                className="text-lg font-normal text-gray-800 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mx-auto max-w-7xl px-4 lg:px-12 p-12 rounded-2xl">
        <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-between gap-6">
          <OtherLinkFeature />

          <SocialFeature />
        </div>
      </div>
      <p className="text-center italic text-sm py-2 text-blue-300">
        © copyright packnjar 2024
      </p>
    </footer>
  );
};
