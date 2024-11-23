import { Metadata } from "next";
import { ScreenContactPage } from "@/pages/feature-contact/screen-contact-page";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Please fill out the form to the left for more information on Nic-Out Cigarette Filters – all fields are required.
  We will reply to you as soon as possible or within 5-7 business days!`,
};

export default function ContactPage() {
  return <ScreenContactPage />;
}
