import {
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const soicals = [
  {
    id: crypto.randomUUID(),
    icon: MdEmail,
    link: "mailto:programmer.minhajul@gmail.com",
  },
  {
    id: crypto.randomUUID(),
    icon: FaFacebook,
    link: "https://www.facebook.com/minhajul.im",
  },
  {
    id: crypto.randomUUID(),
    icon: FaFacebookMessenger,
    link: "https://m.me/minhajul.im",
  },
  {
    id: crypto.randomUUID(),
    icon: FaWhatsapp,
    link: "https://wa.me/+8801301109244",
  },
  {
    id: crypto.randomUUID(),
    icon: FaPhone,
    link: "tel:+8801301109244",
  },
];
