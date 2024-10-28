import { ItemLink } from "./item-link/item-link";

export const FeatureBottom = () => {
  return (
    <div className="flex flex-col-reverse justify-between py-5 border-t lg:flex-row ">
      <p className="text-sm text-gray-600">&#169;2024 packNjar</p>
      <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <ItemLink href="/faq">F.A.Q</ItemLink>

        <ItemLink href="/privacy-policy">Privacy Policy</ItemLink>
        <ItemLink href="/privacy-policy">Terms &amp; Conditions</ItemLink>
      </ul>
    </div>
  );
};
