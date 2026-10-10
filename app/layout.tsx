import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://narayan-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "Shenehashis Dutta | Digital Marketing & Social Media (Ex-Software Engineer)",
  description:
    "Portfolio of Shenehashis Dutta — Hands-on digital marketing experience supporting social media, content planning, SEO research, and campaign execution with a disciplined software engineering background.",
  keywords: [
    "Shenehashis Dutta",
    "Digital Marketing",
    "Social Media",
    "Content Planning",
    "SEO",
    "Software Engineer transitioning to marketing",
    "Kolkata",
    "MSP Steel",
    "Walplast",
    "FIFA 2026 Campaign",
    "Drychem",
    "Zee Bangla Sonar",
  ],
  openGraph: {
    title: "Shenehashis Dutta | Digital Marketing & Social Media",
    description:
      "Hands-on digital marketing experience supporting social media, content planning, and campaign execution, backed by a software engineering foundation.",
    url: "https://narayan-portfolio.vercel.app",
    siteName: "Shenehashis Dutta Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shenehashis Dutta - Digital Marketing & Social Media Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenehashis Dutta | Digital Marketing & Social Media",
    description:
      "Hands-on digital marketing experience supporting social media, content planning, and campaign execution with a software engineering foundation.",
    images: ["/og-image.png"],
  },
  verification: {
    google: [
      "6x06xSK9bRi8XlKDYG_qT-iqt09Qfr14wG-XRoM484I",
      "OC32z1Xr7tfycDCgs_mcxqXHijkGObchNe94iJHb0pw",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script src="/theme.js" strategy="beforeInteractive" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shenehashis Dutta",
              jobTitle: "Digital Marketing Professional",
              url: "https://narayan-portfolio.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/im-rayn/",
                "https://github.com/imrayn06",
                "https://x.com/imsneh06?s=09",
              ],
              knowsAbout: [
                "Social Media Marketing",
                "Content Planning",
                "Campaign Coordination",
                "SEO Research",
                "Software Engineering",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Shenehashis Dutta Portfolio",
              url: "https://narayan-portfolio.vercel.app",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-dark-bg text-warm-white antialiased min-h-screen`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen bg-dark-bg text-warm-white transition-colors duration-200">
            {children}
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
