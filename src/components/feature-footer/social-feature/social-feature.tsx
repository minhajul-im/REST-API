import { links } from "../data";
import { LinkItem } from "./link-item/link-item";
import { Icons } from "@/components/icons/icons";

export const SocialFeature = () => {
  return (
    <div className="text-center md:text-start">
      <h4 className="text-base font-bold tracking-wide pb-4">Social</h4>

      <div className="flex items-center gap-4 justify-center md:justify-start">
        <LinkItem link={links.facebook}>{Icons.facebook()}</LinkItem>
        <LinkItem>{Icons.instagram()}</LinkItem>
        <LinkItem>{Icons.youtube()}</LinkItem>
        <LinkItem>{Icons.x()}</LinkItem>
        <LinkItem>{Icons.linkedin()}</LinkItem>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Follow us, You will get the up-to-date offer!
      </p>
    </div>
  );
};
