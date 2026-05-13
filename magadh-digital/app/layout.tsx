import type { Metadata, Viewport } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magadh.digital"),
  title: "Magadh Digital | Cinematic Digital Agency in Patna",
  description:
    "Magadh Digital is a premium creative digital agency in Patna, Bihar crafting cinematic reels, branding, websites, Meta ads and social media systems.",
  keywords: [
    "Magadh Digital",
    "digital agency Patna",
    "cinematic reel editing",
    "branding Bihar",
    "website development Patna",
    "automotive shoots",
    "restaurant branding"
  ],
  authors: [{ name: "Aman Kumar" }],
  creator: "Magadh Digital",
  openGraph: {
    title: "Magadh Digital",
    description:
      "Premium branding, cinematic content and modern digital presence for ambitious brands.",
    url: "https://magadh.digital",
    siteName: "Magadh Digital",
    images: [
      {
        url: "/brand/magadh-digital-logo.jpg",
        width: 1600,
        height: 1200,
        alt: "Magadh Digital logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
