import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://narayan-portfolio.vercel.app";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/work/fifa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/work/bisleri", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/work/zee-banglasonar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/work/marketing-notebook", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/creative", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/motion", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/resume", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
