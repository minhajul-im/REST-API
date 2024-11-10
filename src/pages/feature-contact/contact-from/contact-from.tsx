"use client";

import { useState } from "react";
import { ContactType } from "../type";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "../server-action/server-action";
import { Icons } from "@/components/icons/icons";

const initialValue: ContactType = {
  name: "",
  email: "",
  number: "",
  message: "",
};

export const ContactFrom = () => {
  const [inputs, setInputs] = useState<ContactType>(initialValue);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev: ContactType) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const validationError = checkInput(inputs);

    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const { success } = await sendEmail(inputs);

      if (success) {
        setInputs(initialValue);
      }
    } catch (error) {
      setError(`Failed to send message. Please try again. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkInput = (data: ContactType): string | null => {
    const name = data.name.trim();
    const email = data.email.trim();
    const number = data.number.trim();
    const message = data.message.trim();

    if (!name) {
      return "Please provide your name.";
    }

    if (!email) {
      return "Please provide your email.";
    }
    if (!number) {
      return "Please provide your number.";
    }

    if (!emailRegex.test(email)) {
      return "Please provide a valid email address.";
    }

    if (!message) {
      return "Please provide a message.";
    }

    return null;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-tl-3xl rounded-bl-3xl">
      <h2 className="text-2xl text-blue-500 font-bold text-center mb-6">
        Send Message us
      </h2>
      <div className="max-w-md mx-auto space-y-3 relative">
        <Input
          name="name"
          type="text"
          placeholder="Name..."
          value={inputs.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email..."
          value={inputs.email}
          onChange={handleChange}
        />
        <Input
          name="phone"
          type="text"
          placeholder="Phone..."
          value={inputs.email}
          onChange={handleChange}
        />
        <Textarea
          rows={8}
          name="message"
          placeholder="Message..."
          value={inputs.message}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}
        <Button
          type="submit"
          disabled={isLoading}
          className={`w-full font-medium flex items-center gap-4 bg-blue-500 hover:bg-blue-600 ${
            isLoading ? "cursor-not-allowed" : ""
          }`}>
          <Icons.send />
          <span>{isLoading ? "Sending Message..." : "Send Message"}</span>
        </Button>
      </div>
    </form>
  );
};
