import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle/theme-toggle";
import { MobileNavbar } from "./mobile-navbar/mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar/desktop-navbar";

export const ScreenHeader = () => {
  return (
    <header className="z-40 sticky top-0 w-full bg-background border-b border-gray-300">
      <section className="layout-container flex h-14 items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="w-32 h-14 relative dark:bg-white">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="absolute w-full h-full"
            />
          </Link>
        </nav>

        <nav className="flex flex-1 items-center justify-end space-x-2">
          <section className="flex items-center">
            <DesktopNavbar />
            <ThemeToggle />
            <MobileNavbar />
          </section>
        </nav>
      </section>
    </header>
  );
};
