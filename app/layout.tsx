import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shenehashis Dutta (Narayan) | Digital Marketing & Social Media Marketing | Mind & Matter",
  description: "Shenehashis Dutta (Narayan) is a Digital Marketing Strategist and Social Media Marketing expert with 4+ years of experience. Explore insights on Mind & Matter, brand strategy, and content strategy.",
  keywords: "Shenehashis Dutta, Narayan, Digital Marketing, Social Media Marketing, Mind & Matter, Mind and Matter, Digital Marketing Strategist, Brand Strategy, Content Strategy, Marketing Analytics",
  openGraph: {
    title: "Shenehashis Dutta (Narayan) | Digital Marketing & Social Media Marketing",
    description: "Explore the portfolio of Shenehashis Dutta (Narayan), a Digital Marketing and Social Media Marketing expert focusing on Mind & Matter and strategic growth.",
    url: "https://narayan-portfolio.vercel.app",
    siteName: "Shenehashis Dutta (Narayan) Portfolio",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "6x06xSK9bRi8XlKDYG_qT-iqt09Qfr14wG-XRoM484I",
  },
};

import CustomCursor from "@/components/CustomCursor";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import ScrollSocialHint from "@/components/ScrollSocialHint";
import FloatingSocialBackground from "@/components/FloatingSocialBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <BackgroundAnimation />
          <FloatingSocialBackground />
          <CustomCursor />
          <ScrollSocialHint />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
