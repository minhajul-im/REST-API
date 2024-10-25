import React from "react";
import { LinkItem } from "./link-item/link-item";
import { Icons } from "./all-icon/all-icon";

export const SocialFeature = () => {
  return (
    <div className="flex items-center gap-4">
      <LinkItem>{Icons.facebook()}</LinkItem>
      <LinkItem>{Icons.instagram()}</LinkItem>
      <LinkItem>{Icons.x()}</LinkItem>
      <LinkItem>{Icons.linkedin()}</LinkItem>
      <LinkItem>{Icons.youtube()}</LinkItem>
    </div>
  );
};
