import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PilatDemi from "next/font/local";

import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const inter: NextFontWithVariable = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const pilatDemi: NextFontWithVariable = PilatDemi({
  src: "../public/fonts/PilatExtended-DemiBold.woff2",
  display: "swap",
  variable: "--font-pilat-demi",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pilatDemi.variable}`}>
        {children}
      </body>
    </html>
  );
}
