# Essential Words landing page

A Next.js landing page for the existing Essential Words Flutter app. Product claims, screenshots, vocabulary samples, and branding are based on a read-only inspection of the original application.

Read [the product reference](docs/product-reference.md) for the verified feature inventory, flashcard animation behavior, asset provenance, implementation scope, and missing distribution links.

Use [`config/site.ts`](config/site.ts) for public site details and editable configuration. See [configuration and legal-review notes](docs/site-configuration.md) for required values, domain/indexing behavior, copyright review, and privacy evidence.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. For a production build:

```sh
npm run build
npm start
```

## Page contents

- Responsive charcoal/blue design using the original app icon and locally hosted Roboto fonts.
- Original Flutter screenshots in the hero and an eight-view screenshot gallery.
- Five real Book 1, Unit 1 entries in an interactive flashcard and two-direction quiz sample.
- A 420 ms perspective card flip, reduced-motion support, English browser text-to-speech, reversible sample learned status, and quiz scoring independent of learned status.
- Verified learning workflow, collection counts, local progress explanation, and accessible FAQ disclosures.
- GSAP/ScrollTrigger hero and section reveals, masked headlines, product parallax, hover effects, and screenshot transitions, with responsive cleanup and reduced-motion support.
- Complete `/terms`, `/privacy`, and `/credits` pages, with shared navigation/footer and textbook attribution.
- Page-specific metadata and canonicals, Open Graph/Twitter previews, robots, sitemap, and factual SoftwareApplication/WebSite structured data.

The website sample uses in-memory state only. It does not read, write, or synchronize with the Flutter application’s data. Speech support depends on the browser and installed voices. All fonts and images are served locally; no external image or font service is required.

## Source map

| Path                                         | Purpose                                                 |
| -------------------------------------------- | ------------------------------------------------------- |
| `app/page.tsx`                               | Marketing content and page structure                    |
| `app/components/study-demo.tsx`              | Interactive vocabulary sample                           |
| `app/components/app-gallery.tsx`             | Original screenshot gallery                             |
| `app/components/ui-icon.tsx`                 | Website interface line icons                            |
| `app/globals.css`                            | Layout, responsive styles, animation, accessibility     |
| `app/layout.tsx`                             | Metadata and local fonts                                |
| `config/site.ts`                             | Public identity, links, legal details, SEO, shared data |
| `lib/metadata.ts`                            | Shared page metadata configuration                      |
| `app/components/page-motion.tsx`             | GSAP and ScrollTrigger enhancement                      |
| `app/terms/`, `app/privacy/`, `app/credits/` | Complete legal and attribution pages                    |
| `app/robots.ts`, `app/sitemap.ts`            | Crawl and sitemap configuration                         |
| `app/opengraph-image.tsx`                    | Branded 1200 × 630 social preview                       |
| `public/app/`                                | Original app icon and optimized screenshots             |
| `public/fonts/`                              | Original bundled Roboto fonts and license               |
| `docs/product-reference.md`                  | Evidence and implementation specification               |

## Distribution links

No verified store listing, downloadable release, or public Flutter web-app URL was supplied or found in the inspected product files. Calls to action currently open the website demo and screenshot gallery. Add real distribution links once supplied; do not infer store availability from Flutter platform targets.

No publication or external hosting is configured. All implementation work is contained in this repository; the original Flutter project remains unchanged.
