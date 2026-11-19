import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...site.legalLinks.map((link) => link.href)].map((path) => ({
    url: absoluteUrl(path),
    lastModified: site.seo.dateModified,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.3,
  }));
}
