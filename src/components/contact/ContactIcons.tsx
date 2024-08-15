import React from "react";
import { IconType } from "../../icons";
import { CONTACT, CONTACT_ICONS } from "../../constant/mock-data";

const ContactIcons = ({ isDark }: IconType) => {
  return (
    <React.Fragment>
      <div className="w-full md:w-1/2 py-10 flex justify-center items-center">
        <div className="flex gap-6 flex-col">
          {CONTACT_ICONS.map((ICON, idx: number) => (
            <div key={idx} className="flex gap-4 items-center">
              <span>
                <ICON isDark={isDark} />
              </span>
              <span className="font-fontMed text-base text-TX-main tracking-wide">
                {CONTACT[idx]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactIcons;
