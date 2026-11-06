import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { productPages, solutionPages } from "@/lib/pages";

// Add inner pages here as they are built.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...["/solutions", ...solutionPages.map((p) => `/solutions/${p.slug}`), "/products", ...productPages.map((p) => `/products/${p.slug}`), "/projects", "/about", "/resources", "/contact"].map((p) => ({
      url: `${siteUrl}${p}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8,
    })),
  ];
}
