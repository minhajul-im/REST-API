import { ItemLink } from "./item-link/item-link";

export const FeatureBottom = () => {
  return (
    <div className="flex justify-center flex-col-reverse md:flex-row md:justify-between py-5 border-t">
      <p className="text-sm text-gray-600 text-center md:text-start">
        &#169;2024 packNjar
      </p>
      <ul className="flex mb-6 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 flex-row justify-center">
        <ItemLink href="/faq">F.A.Q</ItemLink>

        <ItemLink href="/privacy-policy">Privacy Policy</ItemLink>
        <ItemLink href="/privacy-policy">Terms &amp; Conditions</ItemLink>
      </ul>
    </div>
  );
};
