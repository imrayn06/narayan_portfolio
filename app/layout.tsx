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
  keywords: "Shenehashis Dutta, Narayan, Mind & Matter, Mind and Matter, Digital Marketing Strategy, Digital Campaign Management, Client Servicing, Performance Marketing, Social Media Management, Social Media Strategy, Customer Acquisition, Demand Generation, Integrated Marketing, Growth Marketing, Brand Marketing, Marketing Communications, Lead Generation, Customer Journey Mapping, Community Management, Content Strategy, Content Marketing, Organic Growth, Social Listening, Engagement Strategy, Meta Ads, Google Ads, PPC Campaigns, Paid Social, Campaign Optimization, Media Buying, ROAS Optimization, A/B Testing, Brand Strategy, Brand Positioning, Go-to-Market Strategy, Client Relationship Management, Account Management, Stakeholder Management, Media Coordination, Campaign Coordination, Vendor Management, Cross-Functional Collaboration, Google Analytics 4 (GA4), Marketing Analytics, Data Analysis, KPI Tracking, Performance Analysis, ROI Analysis, Data-Driven Decision Making, Conversion Rate Optimization (CRO), Search Engine Optimization (SEO), On-Page SEO, Keyword Research, Content Optimization, AI-Assisted Marketing, Generative AI, Prompt Engineering, Marketing Automation, msp, msp steel, msp steel marketing, walplast, walplast marketing, drychem, zee bangla, zee bangla sonar, zee bangla sonar marketing",
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
import FloatingSocialBackground from "@/components/FloatingSocialBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <BackgroundAnimation />
          <FloatingSocialBackground />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
