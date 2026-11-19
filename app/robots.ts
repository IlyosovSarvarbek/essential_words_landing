import type { MetadataRoute } from "next";
import { absoluteUrl, isPublicSite } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPublicSite
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(isPublicSite ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
