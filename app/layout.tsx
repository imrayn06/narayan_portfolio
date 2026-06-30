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
  title: "Shenehashis Dutta | Digital Marketing Strategist & Brand Strategist",
  description: "Digital Marketing Strategist with 4+ years of experience in content strategy, community engagement, client coordination, media coordination, brand strategy, and marketing analytics. Open to Social Media Strategist, Community Manager, and Client Servicing roles.",
  keywords: "Digital Marketing Strategist, Social Media Strategist, Community Manager, Brand Strategy, Content Strategy, Marketing Analytics, Campaign Management, Audience Growth, Client Servicing, Media Coordination",
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
