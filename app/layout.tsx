import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LamTech — Barcode Labels, Ribbons & Printers | Made in India",
  description:
    "LamTech manufactures and supplies barcode labels, thermal transfer ribbons and barcode printers. Proudly Made in India, for India. A trademark brand of Syro Industries Pvt Ltd.",
  keywords: [
    "barcode labels",
    "thermal transfer ribbons",
    "barcode printers",
    "Made in India",
    "LamTech",
    "Syro Industries",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
