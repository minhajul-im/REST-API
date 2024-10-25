import { LinkItem } from "./link-item/link-item";

export const OtherLinkFeature = () => {
  return (
    <ul className="flex items-center gap-9">
      <LinkItem>Terms</LinkItem>
      <LinkItem>Privacy</LinkItem>
      <LinkItem>Cookies</LinkItem>
    </ul>
  );
};
