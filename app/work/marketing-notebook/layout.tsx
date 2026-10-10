import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Notebook — Ad Teardowns & Original Concepts | Shenehashis Dutta",
  description:
    "Ad teardowns and original concepts from digital marketing training, and what each exercise taught me about planning content.",
  openGraph: {
    title: "Marketing Notebook — Ad Teardowns & Original Concepts",
    description:
      "Ad teardowns and original concepts from digital marketing training, exploring creative analysis and content planning.",
    url: "https://narayan-portfolio.vercel.app/work/marketing-notebook",
    type: "article",
    images: [
      {
        url: "/work/marketing-notebook/poster-bisleri-party-or-recovery.webp",
        width: 1131,
        height: 1600,
        alt: "Marketing Notebook — Ad Teardowns & Original Concepts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Notebook — Ad Teardowns & Original Concepts",
    description:
      "Ad teardowns and original concepts from digital marketing training, exploring creative analysis and content planning.",
    images: ["/work/marketing-notebook/poster-bisleri-party-or-recovery.webp"],
  },
};

export default function MarketingNotebookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
