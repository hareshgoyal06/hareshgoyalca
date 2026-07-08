import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Grain from "@/components/Grain";

const editorial = localFont({
  variable: "--font-editorial",
  src: [
    { path: "../public/PPEditorialOld-Ultralight.otf", weight: "200", style: "normal" },
    { path: "../public/PPEditorialOld-UltralightItalic.otf", weight: "200", style: "italic" },
    { path: "../public/PPEditorialOld-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/PPEditorialOld-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/PPEditorialOld-Ultrabold.otf", weight: "800", style: "normal" },
    { path: "../public/PPEditorialOld-UltraboldItalic.otf", weight: "800", style: "italic" },
  ],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haresh Goyal",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${editorial.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col text-[#d4d0c8] antialiased">
        <Grain />
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
