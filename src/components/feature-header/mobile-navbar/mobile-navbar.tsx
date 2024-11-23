"use client";

import {
  Sheet,
  SheetClose,
  SheetTitle,
  SheetFooter,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavbarLink } from "./navbar-link/navbar-link";

export const MobileNavbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const path = pathName as string;

  return (
    <nav className="block md:hidden">
      <Sheet open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        <SheetContent className="fixed inset-0 z-50" side="top">
          <SheetHeader>
            <div className="flex justify-between items-center">
              <SheetTitle className="text-white">Pack n Jar</SheetTitle>
              <SheetClose asChild>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </SheetClose>
            </div>
            <SheetDescription className="hidden">
              this is pack n jar site
            </SheetDescription>
          </SheetHeader>

          <ul className="flex items-center justify-center gap-4 flex-col mt-28">
            <NavbarLink path={path} href="/">
              Home
            </NavbarLink>
            <NavbarLink path={path} href="/products">
              Products
            </NavbarLink>
            <NavbarLink path={path} href="/about">
              About us
            </NavbarLink>
            <NavbarLink path={path} href="/contact">
              Contact us
            </NavbarLink>
            <NavbarLink path={path} href="/faq">
              FAQ
            </NavbarLink>
          </ul>

          <SheetFooter>
            <SheetClose asChild>
              <Button className="hidden" type="submit">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
