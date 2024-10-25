import Link from "next/link";
import Image from "next/image";
import log from "@/assets/images/logo-new.png";
import { ThemeToggle } from "./theme-toggle/theme-toggle";
import { MobileNavbar } from "./mobile-navbar/mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar/desktop-navbar";

export const ScreenHeader = () => {
  return (
    <header className="z-10 sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <section className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="w-6 h-6 relative ms-4">
            <Image
              src={log}
              alt="logo"
              fill
              sizes="auto"
              className="absolute"
            />
          </Link>
        </nav>
        <nav className="flex flex-1 items-center justify-end space-x-2">
          <section className="flex items-center mr-4">
            <DesktopNavbar />
            <ThemeToggle />
            <MobileNavbar />
          </section>
        </nav>
      </section>
    </header>
  );
};
