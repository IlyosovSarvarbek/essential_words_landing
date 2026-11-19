import { absoluteUrl, site } from "@/config/site";

export function StructuredData() {
  const author = site.developer.publicName
    ? { "@type": "Person", name: site.developer.publicName }
    : undefined;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl(),
        name: site.name,
        description: site.description,
        inLanguage: [...site.seo.languages],
      },
      {
        "@type": "SoftwareApplication",
        "@id": absoluteUrl("/#application"),
        name: site.name,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android, iOS, Web, Windows, macOS, Linux",
        description: site.description,
        inLanguage: [...site.seo.languages],
        url: site.urls.flutterWebApp || absoluteUrl(),
        image: absoluteUrl(site.brand.icon),
        screenshot: absoluteUrl("/app/flashcards.webp"),
        featureList: [
          "English–Uzbek vocabulary",
          "Animated flashcards",
          "English and Uzbek quizzes",
          "Local learned-word progress",
          "Dictionary search",
          "Device text-to-speech pronunciation",
        ],
        ...(author ? { author } : {}),
        ...(site.urls.androidApk ? { downloadUrl: site.urls.androidApk } : {}),
        ...(site.urls.github ? { sameAs: site.urls.github } : {}),
      },
    ],
  };
  return (
    <script
      id="site-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
