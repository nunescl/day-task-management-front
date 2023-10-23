import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PilatDemi from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const inter: NextFontWithVariable = Inter({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
const pilatDemi: NextFontWithVariable = PilatDemi({
  src: "../public/fonts/PilatExtended-DemiBold.woff2",
  display: "swap",
  variable: "--font-pilat-demi",
});

const metadata: Metadata = {
  title: "Manage your tasks",
  description: "Fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${inter.variable} ${pilatDemi.variable}`}>
      {children}
    </main>
  );
}
