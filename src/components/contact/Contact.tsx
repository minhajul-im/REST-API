import React from "react";
import { IconType } from "../../icons";
import Heading from "../common/Heading";
import ContactIcons from "./ContactIcons";
import { contactImg } from "../../constant/mock-data";

const Contact = ({ isDark }: IconType) => {
  console.log(isDark);
  return (
    <React.Fragment>
      <section id="contact" className="pb-48 mt-16 container">
        <Heading>Contact us</Heading>

        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center py-8 tracking-wider">
          <div className="w-full md:w-1/2 py-10 flex justify-center items-center rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={contactImg}
              alt="contact-img"
            />
          </div>

          <ContactIcons isDark={isDark} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
