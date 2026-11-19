/**
 * Public site configuration. Never put secrets here: this file is also used by client components.
 * FILL IN the empty strings below before publication. Empty links are not rendered.
 * Set NEXT_PUBLIC_SITE_URL (https://your-real-domain) or fill in urls.website.
 */
export const site = {
  name: "Essential Words",
  description:
    "Build your English vocabulary with Uzbek translations. Explore 3,600 words, animated flashcards, pronunciation, two-way quizzes, and progress saved on your device.",
  tagline: "Build your vocabulary, one unit at a time.",
  brand: {
    first: "essential",
    second: "words",
    punctuation: ".",
    icon: "/app/icon.png",
  },
  urls: {
    website: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") || "", // FILL IN: public website origin; no trailing path.
    flutterWebApp: "https://essential-english-words-s.netlify.app/", // FILL IN: verified, hosted Flutter app URL.
    androidApk: "", // FILL IN: authorized HTTPS APK download URL.
    github: "https://github.com/IlyosovSarvarbek/essential-english-words", // FILL IN: public repository URL.
  },
  developer: {
    publicName: "Sarvarbek Ilyosov", // FILL IN: your public developer/operator name.
    organization: "Sarvar", // OPTIONAL: legal organization name.
    contactEmail: "ilyosov_sarvar@protonmail.com", // FILL IN: monitored public support/privacy/copyright email.
    country: "Uzbekistan", // FILL IN: operator country; do not infer from language/time zone.
  },
  legal: {
    lastReviewed: "2026-11-19",
    effectiveDates: { terms: "", privacy: "", credits: "" }, // FILL IN: YYYY-MM-DD, after approval.
    reviewRequired: true, // Set false only after operator/legal review of the completed pages.
    copyrightYear: 2026,
    governingLaw: "Laws of the Republic of Uzbekistan", // FILL IN after jurisdiction-specific legal review.
    hostingProvider: "Vercel", // FILL IN: actual website hosting/CDN provider(s).
    hostingRegion: "", // FILL IN: actual hosting/log processing region(s).
    hostingLogRetention: "", // FILL IN: verified hosting log retention period.
    copyrightPermissionStatus: "unverified" as "unverified" | "confirmed",
    copyrightPermissionDetails: "", // FILL IN: public scope/limitations of verified permission; no confidential contracts.
    translationCredits: "ChatGPT", // FILL IN: verified Uzbek translation authorship/license.
  },
  textbook: {
    title: "4000 Essential English Words",
    author: "Paul Nation",
    publisher: "Compass Publishing",
    publisherUrl: "https://www.compasspub.com/eng/",
    sourceUrl:
      "https://www.compasspub.com/eng/compass/skill_view.asp?h_seq=2252&location_type=s",
    copyrightGuidanceUrl: "https://www.wipo.int/en/web/copyright/faq-copyright",
    affiliation:
      "Essential Words is independently developed and is not officially affiliated with, endorsed by, or sponsored by Paul Nation or Compass Publishing. No official relationship has been verified.",
  },
  collection: {
    entries: 3600,
    books: 6,
    units: 180,
    unitsPerBook: 30,
    wordsPerUnit: 20,
  },
  seo: {
    homeTitle: "Essential Words — English–Uzbek vocabulary learning",
    socialTitle: "Essential Words — Small steps. Stronger English.",
    locale: "en_US",
    language: "en",
    languages: ["en", "uz"],
    keywords: [
      "Essential Words",
      "English Uzbek vocabulary",
      "English–Uzbek flashcards",
      "English vocabulary learning",
      "Essential English Words",
      "Uzbek vocabulary quiz",
    ],
    socialImage: "/opengraph-image",
    socialImageAlt:
      "Essential Words — Small steps. Stronger English. English–Uzbek vocabulary learning, 3,600 entries across six books.",
    twitterHandle: "", // OPTIONAL: verified @handle, otherwise omitted.
    dateModified: "2026-11-19",
    developmentOrigin: "http://localhost:3000", // Local metadata fallback only; not a claimed production domain.
  },
  navigation: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Inside the app", href: "#inside" },
    { label: "FAQ", href: "#faq" },
  ],
  legalLinks: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Credits & attribution", href: "/credits" },
  ],
  pages: {
    terms: {
      title: "Terms of Service",
      description:
        "Terms for using Essential Words, its English–Uzbek vocabulary app and website, including local learning data, acceptable use, and content rights.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How Essential Words handles local vocabulary progress, quiz results, text-to-speech, website demos, and hosting information.",
    },
    credits: {
      title: "Credits and Attribution",
      description:
        "Acknowledgments for 4000 Essential English Words by Paul Nation and Compass Publishing, plus Essential Words’ software, font, and asset credits.",
    },
  },
} as const;

export type LegalPage = keyof typeof site.pages;

function validatedOrigin(value: string): string {
  if (!value) return "";
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "config/site.ts: urls.website must be an HTTP(S) origin with no path, credentials, query, or fragment.",
    );
  }
  return url.origin;
}

export const publicOrigin = validatedOrigin(site.urls.website);
export const metadataOrigin = publicOrigin || site.seo.developmentOrigin;
export const isPublicSite = Boolean(
  publicOrigin &&
  !["localhost", "127.0.0.1", "::1", "[::1]"].includes(
    new URL(publicOrigin).hostname,
  ),
);
export const operatorName =
  site.developer.organization ||
  site.developer.publicName ||
  "Operator identity awaiting confirmation";

export function absoluteUrl(path = "/") {
  return new URL(path, metadataOrigin).toString();
}

export function formatLegalDate(value: string) {
  if (!value) return "Awaiting operator confirmation";
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime()))
    throw new Error("Legal dates must use YYYY-MM-DD in config/site.ts.");
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

// Existing marketing copy and public demonstration data, preserved from the original page.
export const features = [
  {
    icon: "layers",
    title: "Recall before you reveal.",
    text: "Give your memory a moment. Flip the card to see the Uzbek translation, then decide what you know.",
  },
  {
    icon: "audio",
    title: "Learn how it sounds.",
    text: "Hear English pronunciation as you review. Listen with your device’s English text-to-speech voice.",
  },
  {
    icon: "quiz",
    title: "Put your words to the test.",
    text: "Practice English to Uzbek or Uzbek to English. Get immediate feedback with four-choice quizzes.",
  },
  {
    icon: "progress",
    title: "See your progress grow.",
    text: "Mark words as learned and see your progress across every unit, book, and the whole collection.",
  },
] as const;
export const faqs = [
  [
    "What can I learn with Essential Words?",
    "Explore 3,600 English–Uzbek vocabulary entries across six books. Each book has 30 units of 20 words, with English spelling, Uzbek translations, and parts of speech. Review, practice flashcards, or take a quiz in either direction.",
  ],
  [
    "Can I study offline?",
    "Yes. Vocabulary is bundled with the app, so core word review, flashcards, quizzes, and progress tracking work offline. Pronunciation depends on your device’s speech engine and requires an installed offline English voice to work without a connection.",
  ],
  [
    "Do I need an account?",
    "No account is needed. Your learned words, theme preference, and completed quiz attempts are saved locally on your device. There is no cloud synchronization; clearing app or browser site data can remove locally saved progress.",
  ],
  [
    "How do flashcards and quizzes affect my progress?",
    "You choose which words to mark as learned. New flashcard sessions focus on words you haven’t marked learned yet. Quiz scores measure your answers for that attempt and do not automatically change your learned-word progress. You can revisit all words through word review.",
  ],
  [
    "Can I search in Uzbek?",
    "Yes. The dictionary lets you choose English or Uzbek and search across all six books. Each result shows its book and unit, so you can return to the word in context.",
  ],
  [
    "Does pronunciation work on every device?",
    "The app uses English (US) text-to-speech. Availability and voice quality depend on the platform and installed voices. The Flutter app currently has no Linux pronunciation implementation. The website sample uses your browser’s speech support.",
  ],
];
export const screenshots = [
  {
    name: "Your library",
    file: "books",
    icon: "book",
    title: "A clear place to begin.",
    text: "Choose from six books. See how many words you’ve learned across the collection and within each book.",
    height: 1688,
  },
  {
    name: "Units & progress",
    file: "units",
    icon: "progress",
    title: "Every word adds up.",
    text: "See learned-word counts and completion percentages for each unit. Twenty words give every session a clear focus.",
    height: 1688,
  },
  {
    name: "Learning modes",
    file: "learning-modes",
    icon: "layers",
    title: "Find your way to practice.",
    text: "Review every word, open your unlearned flashcards, or take a quiz in either direction. Each unit brings the choices together.",
    height: 1688,
  },
  {
    name: "Word review",
    file: "word-review",
    icon: "audio",
    title: "Get to know every word.",
    text: "See English words, Uzbek meanings, and parts of speech. Listen to pronunciation and choose which words to mark as learned.",
    height: 1688,
  },
  {
    name: "Two-way quizzes",
    file: "quiz",
    icon: "quiz",
    title: "Practice in both directions.",
    text: "Test English to Uzbek or Uzbek to English. Four choices and immediate feedback help you check what you remember.",
    height: 1688,
  },
  {
    name: "Quiz results",
    file: "results",
    icon: "check",
    title: "See how that session went.",
    text: "Review your score, correct and incorrect answer counts, then retry or return to your unit. This screenshot shows an example quiz attempt.",
    height: 1688,
  },
  {
    name: "Bilingual dictionary",
    file: "search",
    icon: "search",
    title: "Find the word on your mind.",
    text: "Search English words or Uzbek translations across all six books. Results show the source book and unit for a quick return to learning.",
    height: 1688,
  },
  {
    name: "Light theme",
    file: "light-theme",
    icon: "sun",
    title: "A little lighter, if you like.",
    text: "Choose between the app’s light and dark themes. The library and your learning tools stay familiar in either one.",
    height: 1688,
  },
] as const;
export const sampleWords = [
  { english: "afraid", uzbek: "qo'rqqan, cho'chigan", part: "adjective" },
  { english: "agree", uzbek: "fikriga qo'shilmoq, rozi bo'lmoq", part: "verb" },
  { english: "angry", uzbek: "jahli chiqqan, badjahl", part: "adjective" },
  { english: "arrive", uzbek: "yetib kelmoq, kelmoq", part: "verb" },
  { english: "attack", uzbek: "hujum qilmoq, hujum uyushtirmoq", part: "verb" },
] as const;
