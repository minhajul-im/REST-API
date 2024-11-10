"use server";

import { Resend } from "resend";
import { ContactType } from "../type";
import { emailPrivetKey } from "@/constant";
import { EmailTemplate } from "./email-template/email-template";

const resend = new Resend(emailPrivetKey);

export const sendEmail = async (data: ContactType) => {
  try {
    const result = await resend.emails.send({
      from: `${data.name} <onboarding@resend.dev>`,
      to: ["minhajul.cpp@gmail.com"],
      subject: `Inquiry About Our Leather and Jute Products from ${data.name}!`,
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        number: data.number,
        message: data.message,
      }),
    });

    console.log(result);

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error };
  }
};
