import type { Metadata } from "next";
import { absoluteUrl, isPublicSite, metadataOrigin, site } from "@/config/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    metadataBase: new URL(metadataOrigin),
    title: { absolute: path === "/" ? title : `${title} | ${site.name}` },
    description,
    applicationName: site.name,
    keywords: [...site.seo.keywords],
    alternates: { canonical: absoluteUrl(path) },
    robots: {
      index: isPublicSite,
      follow: true,
      googleBot: {
        index: isPublicSite,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      title: path === "/" ? site.seo.socialTitle : `${title} | ${site.name}`,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: site.seo.locale,
      images: [
        {
          url: absoluteUrl(site.seo.socialImage),
          width: 1200,
          height: 630,
          alt: site.seo.socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: path === "/" ? site.seo.socialTitle : `${title} | ${site.name}`,
      description,
      images: [
        {
          url: absoluteUrl(site.seo.socialImage),
          alt: site.seo.socialImageAlt,
        },
      ],
      ...(site.seo.twitterHandle ? { creator: site.seo.twitterHandle } : {}),
    },
    ...(site.developer.publicName
      ? {
          authors: [{ name: site.developer.publicName }],
          creator: site.developer.publicName,
        }
      : {}),
    ...(site.developer.organization
      ? { publisher: site.developer.organization }
      : {}),
  };
}
