import React from "react";
import { IconType } from "../../icons";
import { SOCIALS, SOCIAL_LINKS } from "../../constant/mock-data";

const SocialIcons = ({ isDark }: IconType) => {
  return (
    <React.Fragment>
      <div className="flex gap-4 pb-8 items-center">
        {SOCIALS.map((ICON, idx: number) => (
          <a className="text-white" key={idx} href={SOCIAL_LINKS[idx]}>
            <ICON isDark={isDark} />
          </a>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SocialIcons;
