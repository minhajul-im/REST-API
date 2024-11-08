import "@/common/style/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScreenHeader } from "@/components/feature-header/screen-header";
import { ScreenFooter } from "@/components/feature-footer/screen-footer";

const geistSans = localFont({
  src: "../common/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../common/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pack n Jar",
  description: "hey there Pack n Jar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ScreenHeader />
          {children}
          <ScreenFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
