"use server";
import { Resend } from "resend";
import { OrderType } from "../type";
import {
  CustomerEmailTemplate,
  ManagerEmailTemplate,
} from "./email-template/email-template";
import { emailPrivetKey } from "@/constant";

const resend = new Resend(emailPrivetKey);

export const sendEmailManager = async (data: OrderType) => {
  try {
    const result = await resend.emails.send({
      from: `${data.name} <onboarding@resend.dev>`,
      to: ["minhajul.cpp@gmail.com"],
      subject: `Nicout Filters ${data.name}!`,
      react: ManagerEmailTemplate({
        name: data.name,
        email: data.email,
        number: data.number,
        address: data.address,
        district: data.district,
      }),
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const sendEmailCustomer = async (data: OrderType) => {
  console.log("customer email: ", data.email);
  try {
    const result = await resend.emails.send({
      from: `PacknJar <onboarding@resend.dev>`,
      to: [data.email],
      subject: `Your Order from PacknJar`,
      react: CustomerEmailTemplate({
        name: data.name,
        email: data.email,
        number: data.number,
        address: data.address,
        district: data.district,
      }),
    });

    console.log(result);

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error };
  }
};
