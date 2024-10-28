import React from "react";
import { LinkItem } from "./link-item/link-item";
import { Icons } from "./all-icon/all-icon";

export const SocialFeature = () => {
  return (
    <div>
      <h4 className="text-base font-bold tracking-wide text-gray-900 pb-4">
        Social
      </h4>
      <div className="flex items-center gap-4">
        <LinkItem>{Icons.facebook()}</LinkItem>
        <LinkItem>{Icons.instagram()}</LinkItem>
        <LinkItem>{Icons.youtube()}</LinkItem>
        <LinkItem>{Icons.x()}</LinkItem>
        <LinkItem>{Icons.linkedin()}</LinkItem>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Follow us, You will get the up-to-date offer!
      </p>
    </div>
  );
};
