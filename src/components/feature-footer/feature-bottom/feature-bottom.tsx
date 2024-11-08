import { ItemLink } from "./item-link/item-link";

export const FeatureBottom = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse md:flex-row md:justify-between py-5 border-t">
      <p className="text-sm text-blue-600 text-center md:text-start pt-6 md:p-0">
        &#169;2024 packNjar
      </p>
      <ul className="flex gap-2 md:gap-4 flex-col md:flex-row justify-center md:justify-start items-center">
        <ItemLink href="/faq">F.A.Q</ItemLink>
        <ItemLink href="/privacy-policy">Privacy Policy</ItemLink>
        <ItemLink href="/privacy-policy">Terms &amp; Conditions</ItemLink>
      </ul>
    </div>
  );
};
