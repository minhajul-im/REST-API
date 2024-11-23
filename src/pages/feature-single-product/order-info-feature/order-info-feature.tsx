"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { OrderType } from "../type";
import { initialValue } from "../data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import { ProductType } from "@/constant/products";
import { Textarea } from "@/components/ui/textarea";
import { OrderDetails } from "./order-details/order-details";
import {
  // sendEmailCustomer,
  sendEmailManager,
} from "../server-action/server-action";

export const OrderInfoFeature = ({ product }: { product: ProductType }) => {
  const [inputs, setInputs] = useState<OrderType>(initialValue);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev: OrderType) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setInputs((prev: OrderType) => ({
      ...prev,
      district: value,
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
      if (inputs.email) {
        const manager = await sendEmailManager(inputs);
        // const customer = await sendEmailCustomer(inputs);
        if (manager.success) {
          setInputs(initialValue);
        }
      }
    } catch (error) {
      setError(`Failed to send message. Please try again. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const checkInput = (data: OrderType): string | null => {
    const name = data.name.trim();
    const email = data.email.trim();
    const number = data.number.trim();
    const address = data.address.trim();

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
    if (!address) {
      return "Please provide a message.";
    }
    return null;
  };

  return (
    <section className="block md:flex py-10 flex-col md:flex-row">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <h2 className="text-2xl text-blue-500 font-bold text-center mb-6">
          Give your full address...
        </h2>
        <div className="max-w-md mx-auto space-y-3 relative">
          <Input
            name="name"
            type="text"
            placeholder="*Name..."
            value={inputs.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            type="email"
            placeholder="*Email..."
            value={inputs.email}
            onChange={handleChange}
          />
          <Input
            name="number"
            type="text"
            placeholder="*Phone..."
            value={inputs.number}
            onChange={handleChange}
          />
          <Select value={inputs.district} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Your Division!" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Dhaka">Dhaka</SelectItem>
              <SelectItem value="Rangpur">Rangpur</SelectItem>
              <SelectItem value="Chittagong">Chittagong</SelectItem>
              <SelectItem value="Mymensingh">Mymensingh</SelectItem>
              <SelectItem value="Khulna">Khulna</SelectItem>
              <SelectItem value="Rajshahi">Rajshahi</SelectItem>
              <SelectItem value="Sylhet">Sylhet</SelectItem>
              <SelectItem value="Barisal">Barisal</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            rows={5}
            name="address"
            placeholder="*Address..."
            value={inputs.address}
            onChange={handleChange}
          />
          {error && (
            <p className="text-red-500 text-xs font-semibold">{error}</p>
          )}
          <Button
            type="submit"
            disabled={isLoading}
            className={`w-full font-medium flex items-center gap-4 bg-blue-500 hover:bg-blue-600 ${
              isLoading ? "cursor-not-allowed" : ""
            }`}>
            <Icons.send />
            <span>{isLoading ? "Submitting..." : "Order"}</span>
          </Button>
        </div>
      </form>

      <section className="w-full md:w-1/2">
        <OrderDetails product={product} deliveryPlace={inputs.district} />
      </section>
    </section>
  );
};
