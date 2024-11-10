import { Title } from "@/components/common/title";
import { ContactFrom } from "./contact-from/contact-from";
import { ImageContact } from "./image-contact/image-contact";

export const ScreenContactPage = () => {
  return (
    <section className="layout-container my-16">
      <div className="mx-auto relative shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-blue-500 rounded-3xl overflow-hidden mt-4">
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-500" />
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-500" />

        <Title>Contact Us</Title>

        <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
          <ImageContact />

          <ContactFrom />
        </div>
      </div>
    </section>
  );
};
