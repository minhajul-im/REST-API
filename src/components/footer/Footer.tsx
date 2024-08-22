import "./Footer.css";
import React from "react";
import { IconType } from "../../icons";
import SocialIcons from "./SocialIcons";

const Footer = ({ isDark }: IconType) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <h2 className="text-2xl font-fontBold text-TX-soft text-center py-4">
          Follow Us
        </h2>

        <SocialIcons isDark={isDark} />

        <div className="flex gap-6 items-center text-TX-soft font-fontMed pb-4 text-base">
          <button className="hover:text-TX-dark transition-all duration-100">
            Terms & Conditions
          </button>
          <button className="hover:text-TX-dark transition-all duration-100">
            Privacy & Policy
          </button>
        </div>

        <p className="italic text-sm">&#169;2024 packNjar </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
