# Essential Words: verified product reference

Inspected on 2026-11-19. Source: `D:\Projects\essential_words\essential_words_flutter`.
The Flutter project was accessed read-only. No Flutter commands, dependency installation, formatting, or source changes were performed. Website implementation and derived assets live in the Next.js repository.

## Evidence inspected

- `README.md`, `pubspec.yaml`, `lib/app.dart`.
- All nine images in `docs/screenshots/`, plus `assets/images/icon.png`.
- All eight screens in `lib/screens/`: books, units, unit menu, learn, flashcards, quiz, results, and search.
- `lib/widgets/animated_flip.dart`, `word_card.dart`, `common.dart`.
- `lib/theme/app_theme.dart`, `app_scroll_behavior.dart`.
- `lib/state/app_state.dart`, `lib/models/vocabulary.dart`.
- `lib/services/vocabulary_repository.dart`, `pronunciation.dart`, `progress_storage.dart`.
- Six vocabulary JSON books and bundled font files/licenses.

## Product and navigation

Essential Words is an English–Uzbek vocabulary learning application. The library contains **6 books, 30 units per book, 180 units, 20 words per unit, and 3,600 word entries**. Counts were independently calculated from the six JSON assets. Do not describe these as 3,600 unique English spellings; the collection can repeat words.

Navigation: Books (`/`) → units (`/units/:book`) → unit menu (`/unit/:book/:unit`) → study mode. Available study modes:

| Mode                 | Verified behavior                                                                                                                          | Source                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Review All Words     | All 20 unit words; spelling, Uzbek translation(s), part of speech, pronunciation control, reversible learned status                        | `learn_screen.dart`, `word_card.dart`                                |
| Practice Flashcards  | Unit's unlearned words; reveal translation; previous/next; mark Learning/Learned; flip back                                                | `flashcards_screen.dart`                                             |
| English → Uzbek Quiz | Four choices, one answer per question, immediate correct/incorrect feedback, next question                                                 | `quiz_screen.dart`, `models/vocabulary.dart`                         |
| Uzbek → English Quiz | Same workflow, reversed question and answer languages                                                                                      | Same as above                                                        |
| Results              | Percentage, score/total, correct/incorrect counts, retry, return to unit                                                                   | `results_screen.dart`                                                |
| Dictionary           | Case-insensitive substring search across all six books; English/Uzbek selector; source book/unit and pronunciation; open the result's unit | `search_screen.dart`, `vocabulary_repository.dart`, `word_card.dart` |

The dictionary has a `/search` route; do not invent a persistent bottom navigation bar. Custom mobile scheme routes use `essentialenglishwords:///...`; no public app base URL was found.

## Learning and progress semantics

- Users explicitly mark a word learned or learning. Unit, book, and library progress count learned word IDs and round to integer percentages.
- Progress updates immediately and is queued to local SQLite storage. Theme preference and completed quiz attempts are also stored locally.
- A flashcard session snapshots unlearned words once. A word marked learned stays navigable for that session and is excluded when a new session opens. An empty deck offers word review.
- Previous/next resets the revealed face. Deck position is separate from learned-word progress.
- Quiz questions follow unit order; answer options shuffle, using other unit/book words as distractors. Quiz results **do not mark words learned**.
- The state retains the latest 100 quiz results in memory; older attempts remain in the database. No user-facing historical chart or streak screen was found. Do not market one.
- Core study uses bundled data and requires no account. No cloud synchronization, spaced repetition algorithm, AI tutoring, daily goals, leaderboards, subscriptions, or example sentences were verified.
- Pronunciation uses English (US) device/browser text-to-speech. Availability depends on the platform and installed voice; offline audio needs an offline voice. README reports no Linux pronunciation implementation. Do not claim recorded/native-speaker audio or universally offline pronunciation.
- Web storage is origin-bound and can be removed by clearing site data. Do not promise permanent backup.

## Flashcard animation

`lib/widgets/animated_flip.dart` implements a **420 ms Y-axis rotation**, with `Curves.easeInOutCubic`. Rotation travels from 0 to π; the visible face switches at π/2. The back uses `angle - π`, keeping its text readable. Perspective is `Matrix4.setEntry(3, 2, .0015)` (approximately a 667 px perspective distance). `AnimatedSize` adjusts height over **180 ms** with `easeOutCubic`, top aligned. Reverse playback flips back. A new word has a new widget key. When the system disables animations, faces switch immediately.

The website demo uses a 420 ms perspective Y flip, an equivalent cubic timing function, readable faces, and an immediate reduced-motion alternative. It is a labeled website sample, not an embedded Flutter session. There are no invented swipe gestures or automatic learned-state changes. Sample progress remains in memory and does not affect the Flutter app.

## Design reference

| Token/pattern            | App value/behavior                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Dark background          | `#121316`                                                                                                                         |
| Dark cards               | `#1b1b1f`, `#1f1f23`, subtle white borders                                                                                        |
| Dark primary text/accent | `#e3e2e6` / `#b3c5ff`                                                                                                             |
| Blue                     | `#0f4cd9`                                                                                                                         |
| Light background/text    | `#f9f9ff` / `#111c2d`                                                                                                             |
| Light primary            | `#0f3b9a`                                                                                                                         |
| Success                  | `#4de082` dark / `#15803d` light                                                                                                  |
| Fonts                    | Bundled Roboto regular/medium/bold; NotoSansSymbols fallback                                                                      |
| Components               | Rounded bordered cards, compact uppercase part-of-speech chips, slim progress tracks, large blue actions, Lucide-style line icons |
| Interaction              | Touch ripples, horizontal page transitions, elastic spring-back scrolling, theme toggle on Books                                  |

Website typography/layout may adapt for desktop marketing while preserving the visual identity. Screenshot content remains unchanged.

## Reusable assets and provenance

| Original Flutter path                           | Landing-page use                                                                                     |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `assets/images/icon.png` (1024 × 1024)          | `public/app/icon.png`; original blue/lavender open-book identity                                     |
| `docs/screenshots/books.png`                    | `public/app/books.webp`; real dark library                                                           |
| `docs/screenshots/units.png`                    | `public/app/units.webp`; real unit progress                                                          |
| `docs/screenshots/learning-modes.png`           | `public/app/learning-modes.webp`; real mode menu                                                     |
| `docs/screenshots/word-review.png`              | `public/app/word-review.webp`; real bilingual word list                                              |
| `docs/screenshots/flashcards.png`               | `public/app/flashcards.webp`; real revealed card, used in hero                                       |
| `docs/screenshots/quiz.png`                     | `public/app/quiz.webp`; real answer feedback                                                         |
| `docs/screenshots/results.png`                  | `public/app/results.webp`; real quiz result, not an aggregate learner outcome                        |
| `docs/screenshots/search.png`                   | `public/app/search.webp`; real dictionary results                                                    |
| `docs/screenshots/light-theme.png`              | `public/app/light-theme.webp`; real light theme                                                      |
| `assets/fonts/roboto-{regular,medium,bold}.ttf` | `public/fonts/`; self-hosted with `roboto_license.txt`                                               |
| `assets/data/books/1.json`, unit 1              | Only five public vocabulary entries transcribed into the labeled demo; no wholesale data/source copy |

Screenshots are converted to WebP for delivery; visual contents are unchanged. All nine source images are 780 × 1688 px (verified from image metadata). Platform-specific launcher/splash variants exist but are unnecessary for the website. No Flutter implementation source, signing material, credentials, databases, or private user data was copied.

## Missing assets and unverified claims

- No verified Google Play, App Store, download artifact, or public web-app URL was supplied or found in the inspected product files. Website CTAs open the local demo/gallery; no store badges or fabricated URLs.
- No vector wordmark or separate marketing brand guide was found. Use the original app icon and a text wordmark.
- No testimonial, user-count evidence, rating, pricing, official publisher attribution, CEFR/IELTS alignment, effectiveness study, or support/contact URL was found. Omit these claims.
- No separate landing-page implementation specification was supplied. The user confirmed the current Next.js directory is the destination. The implementation is local to that project.

## Landing-page implementation specification

Build a responsive Next.js landing page with a dark blue/charcoal identity, original app branding and authentic screenshot hero, verified library counts, a short study-workflow explanation, an accessible interactive five-word flashcard and quiz sample, selectable original screenshots (including both themes), concise offline/account/pronunciation FAQs, and a final demo CTA. Distinguish the sample from the real app. Keep copy focused on English–Uzbek learning, explicit recall, two quiz directions, and local progress. Support keyboard navigation, visible focus, reduced motion, narrow screens, local font delivery, and page metadata. Validate the production build and interactions where browser tooling is available. Publication and external hosting are outside the requested local project work.

## Implementation validation

- `npm run build`: successful production compilation, TypeScript validation, and static page generation.
- Real Chrome via temporary Playwright tooling: no horizontal overflow at 320, 375, 600, 768, 1024, and 1440 px.
- Flashcard reveal, reverse flip, 420 ms animation, learned/unlearned toggles, previous/next face reset, keyboard reveal, focus transfer, and immediate reduced-motion behavior verified.
- Five-question quizzes completed in both directions: 5/5 and 4/5 result cases, incorrect feedback, locked answers, retry, and independence from learned-word counts verified.
- All eight gallery choices loaded their original screenshots; FAQ keyboard activation, image loading, single main heading, and absence of browser runtime errors verified.
- Desktop and mobile captures visually inspected, including visible front/back flashcards at the mobile viewport. Offscreen 3D layers can be absent from a full-page automated capture; visible viewport captures verified that the actual card renders and operates correctly.
- Pronunciation availability handling is implemented; audible voice quality was not assessed.
- Final Flutter Git status and diff checks were clean. No application source, configuration, or assets were changed.
