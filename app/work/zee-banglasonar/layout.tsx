import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zee BanglaSonar — July 2026 Instagram Content Calendar | Shenehashis Dutta",
  description:
    "Strategic social media case study and 16-post editorial framework for Zee BanglaSonar, featuring content pillars, Bengali copywriting, and observed July 2026 Instagram Insights performance data.",
  openGraph: {
    title: "Zee BanglaSonar — July 2026 Instagram Content Calendar",
    description:
      "Stories, emotions & the Bengali audience: a 16-post editorial framework and observed July 2026 Instagram metrics.",
    url: "https://narayan-portfolio.vercel.app/work/zee-banglasonar",
    type: "article",
    images: [
      {
        url: "/work/zee-banglasonar/zee-01-recap-summary.webp",
        width: 1200,
        height: 1588,
        alt: "Zee BanglaSonar July 2026 Instagram Content Calendar Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zee BanglaSonar — July 2026 Instagram Content Calendar",
    description:
      "Stories, emotions & the Bengali audience: a 16-post editorial framework and observed July 2026 Instagram metrics.",
    images: ["/work/zee-banglasonar/zee-01-recap-summary.webp"],
  },
};

export default function ZeeBanglaSonarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
