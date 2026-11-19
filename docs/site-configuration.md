# Site configuration, legal review, and SEO

All public identity, distribution links, dates, attribution, SEO settings, navigation, collection counts, shared marketing arrays, screenshots, and demonstration entries live in [`config/site.ts`](../config/site.ts). It is imported by server and client components: **never put secrets in it**.

## Values to supply

| Configuration                                                    | What to enter                                                                                                       |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `urls.website` or `NEXT_PUBLIC_SITE_URL`                         | Actual public website origin, e.g. your real HTTPS domain, without a path. The environment variable takes priority. |
| `urls.flutterWebApp`                                             | Verified deployed Flutter app URL.                                                                                  |
| `urls.androidApk`                                                | Authorized Android APK download URL.                                                                                |
| `urls.github`                                                    | Public repository URL.                                                                                              |
| `developer.publicName`                                           | Developer's public name.                                                                                            |
| `developer.organization`                                         | Optional operator organization.                                                                                     |
| `developer.contactEmail`                                         | Monitored public contact for support, privacy, and content-rights concerns.                                         |
| `developer.country`                                              | Actual operator country; language and timezone do not establish this.                                               |
| `legal.effectiveDates`                                           | Confirmed effective dates for terms, privacy, and credits, in YYYY-MM-DD format.                                    |
| `legal.governingLaw`                                             | Provision approved after jurisdiction-specific review, if appropriate.                                              |
| `legal.hostingProvider`, `hostingRegion`, `hostingLogRetention`  | Actual hosting/CDN providers, regions, and verified log retention.                                                  |
| `legal.translationCredits`                                       | Verified Uzbek translation authorship/source and license.                                                           |
| `legal.copyrightPermissionStatus` / `copyrightPermissionDetails` | Actual verified permission status and its public scope/limitations. No confidential contracts.                      |
| `legal.reviewRequired`                                           | Keep true until the operator and legal review have been completed.                                                  |
| `seo.twitterHandle`                                              | Optional verified handle; otherwise leave empty.                                                                    |

Empty app, APK, and repository URLs produce no broken links. Once supplied, they appear as additional footer links. App/download URLs are also used where appropriate in structured data. Blank identity fields are visibly identified on legal pages rather than inventing a person or organization.

## Domain and indexing

Until a public origin is configured, metadata uses the explicit `http://localhost:3000` development fallback, pages emit `noindex`, and robots.txt disallows indexing. The sitemap remains functional with four local development URLs. These are development values, not a claimed production domain.

After configuring the real origin and rebuilding, all four pages receive correct absolute canonical, Open Graph, and Twitter URLs; robots.txt allows crawling and includes the sitemap URL. The sitemap includes `/`, `/terms`, `/privacy`, and `/credits`. Update `seo.dateModified` only when the corresponding content actually changes. No request headers or untrusted host value are used to invent canonical URLs.

The 1200 × 630 `/opengraph-image` route uses the original icon, fonts, and app screenshots. The two small PNG inputs in `public/social/` are derived from the existing website screenshots because the image renderer does not render WebP inputs reliably. The landing page continues to serve its existing optimized WebP images.

The home page emits a WebSite and SoftwareApplication JSON-LD graph. No ratings, reviews, download counts, price, license, publisher affiliation, or developer identity is fabricated. Structured data validity does not imply eligibility for every Google rich result or guarantee indexing or ranking.

## Privacy evidence and review boundaries

The Flutter repository was inspected read-only again for this change. Relevant files: `README.md`, `pubspec.yaml`, `lib/main.dart`, `lib/state/app_state.dart`, `lib/services/progress_storage.dart`, `database_web.dart`, `database_native.dart`, `legacy_progress.dart`, `pronunciation.dart`, the Android manifest, iOS Info.plist, and web bootstrap HTML.

Verified local records are learned word identifiers, a saved theme setting, and completed quiz attempts (book, unit, direction, score, total, completion timestamp). Web persistence uses SQLite/IndexedDB; native targets use local SQLite. Up to 100 quiz results are loaded into memory, while older results remain in the database. Original preferences survive legacy migration. Website demo state is in memory only.

No analytics, advertising, account server, or learning-data upload was found in the inspected app. The site has no analytics, forms, or tracking integration. This does **not** establish that hosting/CDN infrastructure stores no technical request data. Providers, logging, retention, processing locations, applicable legal bases, child-audience obligations, and any required regional disclosures need operator confirmation.

Text-to-speech may use local or network-backed voices depending on the platform/provider. The privacy policy does not promise that all pronunciation stays offline or on-device. No microphone recording is implemented. No additional app-level database encryption or remote deletion/export endpoint is claimed.

## Attribution and rights

The credits page acknowledges _4000 Essential English Words_ by Paul Nation, published by Compass Publishing. It states that Essential Words is independently developed with no verified official affiliation. It distinguishes the app's verified 3,600 entries from the textbook series title.

No permission to redistribute textbook-related content or translations was verified. The operator should establish the actual rights, licensing scope, or applicable legal basis for the bundled content, translations, screenshots, website examples, and downloadable releases. Acknowledgment and educational intent do not by themselves resolve permission requirements. The completed legal text requires review for the actual operator, audience, jurisdiction, and deployment; it is not a declaration of legal compliance.

Sources checked on 2026-11-19:

- [Compass Publishing's official listing](https://www.compasspub.com/eng/compass/skill_view.asp?h_seq=2252&location_type=s) confirms the series, author, and publisher context.
- [WIPO copyright FAQ](https://www.wipo.int/en/web/copyright/faq-copyright) describes authorization and jurisdiction-dependent exceptions.
- [GSAP React integration](https://gsap.com/resources/React/) and [gsap.matchMedia](<https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/>) informed animation lifecycle and responsive cleanup.
- Installed Next.js documentation under `node_modules/next/dist/docs/` informed metadata, JSON-LD, robots, sitemap, and social image implementation.

## Animation implementation

`app/components/page-motion.tsx` uses `useGSAP()` with scoped DOM selection and `gsap.matchMedia()`. It adds a staggered hero timeline, masked headline reveals, coordinated original mockups, one-time ScrollTrigger section reveals, scrubbed parallax, and fine-pointer/focus hover effects. `app-gallery.tsx` adds a short screenshot transition with a separate scoped hook.

All matchMedia contexts, event listeners, animation tweens, ScrollTriggers, and refresh callbacks are cleaned up. Changing reduced-motion preferences reverts inline animation styles; breakpoint changes do not replay the hero entrance. Touch layouts use smaller movement distances. No pinning, scroll hijacking, smooth-scroll replacement, new marketing sections, or headline DOM restructuring is introduced. The existing flashcard flip remains the app-inspired 420 ms CSS interaction.

The server-rendered content is visible without JavaScript; only hydrated motion setup introduces reveal styles. Existing font/image delivery and image dimensions are retained, animations use transform/opacity/clip-path, and no continuously running decorative animation is added. Real-world Core Web Vitals still depend on hosting, network, and user devices; no field-performance score or ranking guarantee is claimed.

## Validation

Run the required project checks with:

```sh
npx tsc --noEmit
npm run lint
npm run build
```

Browser QA is performed against the production server in Chrome. It covers all legal pages and local links, all metadata, local and configured-origin SEO behavior, the social preview, no-JavaScript content, normal/reduced motion, responsive layouts, original flashcards/quizzes/gallery/FAQ behavior, and animation cleanup across client navigation. Temporary captures and test scripts are ignored under `.qa/`.

Verified on 2026-11-19:

- TypeScript, ESLint, and the production build passed.
- Original landing-page section dimensions, heading/mockup positions, fonts, and colors matched the pre-change capture exactly at 375, 768, and 1440 px with reduced motion enabled. Only the requested footer links were added to the existing page chrome.
- Responsive overflow checks passed from 320 through 1440 px. Terms, Privacy, and Credits loaded with complete content and unique metadata on desktop and mobile.
- Chrome observed changing hero animation frames, intermediate and completed ScrollTrigger reveal states, scrubbed parallax, hover motion, gallery transitions, live reduced-motion reversion, and cleanup/reinitialization across client navigation.
- Existing flashcards, reversible learned state, both quiz directions, scores, gallery choices, and FAQ keyboard controls passed regression checks.
- All original header anchors, home branding, the hero exploration link, legal-page links, and legal-to-home anchors worked. Refreshes triggered by lazy images wait for scroll end so they do not interrupt native smooth anchor scrolling.
- Metadata/canonical/OG/Twitter fields, all four sitemap entries, local robots behavior, JSON-LD, visible no-JavaScript HTML, and the rendered 1200 × 630 social image were checked. The image was also visually inspected to confirm both product screenshots rendered.
- An isolated configured-origin test verified public indexing, production canonical/social URLs, and the robots sitemap reference without putting a fictional domain in the actual configuration.
- A local desktop lab run recorded zero cumulative layout shift. This is not a field Core Web Vitals assessment or a guarantee for deployed users.
- The Flutter repository's final Git status and relevant-file diff remained clean.
