import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";
import { news } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: site.url, priority: 1 },
    ...nav.map((n) => ({ url: `${site.url}${n.href}`, priority: 0.8 })),
    ...news.map((n) => ({ url: `${site.url}/news/${n.slug}`, lastModified: n.date, priority: 0.5 })),
  ];
  return pages;
}
