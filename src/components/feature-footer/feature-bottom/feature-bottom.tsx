"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { CustomDialog } from "@/components/common/custom-dialog";
import { Paragraph } from "@/components/common/paragraph";
import { PRIVACY_POLICY, TERMS_CONDITION } from "../data";

export const FeatureBottom = () => {
  const path = usePathname();
  const [open, setOpen] = useState("");

  return (
    <section className="flex justify-center items-center flex-col-reverse md:flex-row md:justify-between py-5 border-t">
      <p className="text-sm text-blue-600 text-center md:text-start pt-6 md:p-0">
        &#169;2024 packnjar
      </p>
      <ul className="flex gap-2 md:gap-4 flex-col md:flex-row justify-center md:justify-start items-center">
        <li className={cn(buttonVariants({ variant: "link" }))}>
          <Link
            href="/faq"
            className={`text-sm text-muted-foreground transition-colors duration-300 hover:text-blue-500 ${
              path === "/faq" ? "text-blue-500" : ""
            }`}>
            F.A.Q
          </Link>
        </li>
        <CustomDialog
          linkText="Privacy Policy"
          title="Privacy Policy"
          open={open === "POLICY"}
          onClose={() => setOpen("")}
          onOpen={() => setOpen("POLICY")}>
          <Paragraph>{PRIVACY_POLICY}</Paragraph>
        </CustomDialog>

        <CustomDialog
          linkText="Terms & Conditions"
          title="Terms & Conditions"
          open={open === "TERM"}
          onClose={() => setOpen("")}
          onOpen={() => setOpen("TERM")}>
          <Paragraph>{TERMS_CONDITION}</Paragraph>
        </CustomDialog>
      </ul>
    </section>
  );
};
