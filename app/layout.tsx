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

const SITE_URL = "https://www.lamtechprint.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LamTech — Barcode Labels, Ribbons & Printers | Made in India",
    template: "%s | LamTech",
  },
  description:
    "LamTech manufactures and supplies barcode labels, thermal transfer ribbons and barcode printers. Proudly Made in India, for India. A trademark brand of Syro Industries Pvt Ltd.",
  applicationName: "LamTech",
  keywords: [
    "barcode labels",
    "barcode label manufacturer India",
    "thermal transfer ribbons",
    "wax ribbon",
    "wax resin ribbon",
    "resin ribbon",
    "barcode printers",
    "thermal barcode printer",
    "label printer India",
    "direct thermal labels",
    "polyester PET labels",
    "sticker labels manufacturer",
    "barcode consumables",
    "Made in India barcode",
    "LamTech",
    "LamTech Print",
    "Syro Industries",
    "Wazirpur Delhi barcode",
    "barcode labels Delhi",
  ],
  authors: [{ name: "Syro Industries Pvt Ltd" }],
  creator: "Syro Industries Pvt Ltd",
  publisher: "Syro Industries Pvt Ltd",
  category: "Manufacturing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "LamTech",
    title: "LamTech — Barcode Labels, Ribbons & Printers | Made in India",
    description:
      "The complete barcoding stack from one dependable Indian partner — barcode labels, thermal transfer ribbons and barcode printers. Made in India, for India.",
    images: [
      {
        url: "/logo.png",
        width: 1254,
        height: 1254,
        alt: "LamTech — Barcode Labels, Ribbons & Printers",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "LamTech — Barcode Labels, Ribbons & Printers | Made in India",
    description:
      "Barcode labels, thermal transfer ribbons and barcode printers. Proudly Made in India. A trademark brand of Syro Industries Pvt Ltd.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LamTech",
  legalName: "Syro Industries Pvt Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "LamTech manufactures and supplies barcode labels, thermal transfer ribbons and barcode printers. Proudly Made in India.",
  slogan: "Made in India, for India",
  email: "info@lamtechprint.in",
  telephone: "+91-88514-33481",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "B-1 Floor, Basement, Time House 5, Commercial Complex, Wazirpur",
    addressLocality: "Delhi",
    postalCode: "110052",
    addressCountry: "IN",
  },
  areaServed: "IN",
  knowsAbout: [
    "Barcode Labels",
    "Thermal Transfer Ribbons",
    "Barcode Printers",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
