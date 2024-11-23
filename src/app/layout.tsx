import "@/style/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeProvider from "@/providers/theme-provider";
import { ScreenHeader } from "@/components/feature-header/screen-header";
import { ScreenFooter } from "@/components/feature-footer/screen-footer";
import { WhatsAppFeature } from "@/components/feature-whatsapp/feature-whatsapp";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nic Out by packnjar",
  description: `What is Nic-Out? It is a high performance health product. Disposable Cigarette Filter in the form of cigarette holder makes smoking safer or enables smoker to quit easier, if this option should have been chosen. How does Nic-Out work? The Nic-Out is a cigarette holder with mechanical filtering insert, which selectively absorbs from the smoke large molecules of the tar and other toxic and carcinogenic poly-nuclear aromatic compounds. What are the advantages of Nic-Out? Scientific and practical knowledge show that Nic-Out works effectively. It is made from transparent plastic and makes visible concentration of collected tar. This provides important psychological effect in order to build negative image of smoking consequences and to prevent further ruining of public health.`,
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
          <WhatsAppFeature />
        </ThemeProvider>
      </body>
    </html>
  );
}
