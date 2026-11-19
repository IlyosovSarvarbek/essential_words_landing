"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon, type IconName } from "./ui-icon";

const screens: {
  name: string;
  file: string;
  icon: IconName;
  title: string;
  text: string;
  height: number;
}[] = [
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
];

export function AppGallery() {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];
  return (
    <div className="gallery-shell">
      <div className="gallery-copy">
        <div
          className="gallery-selectors"
          role="group"
          aria-label="Choose an actual app screenshot"
        >
          {screens.map((item, index) => (
            <button
              key={item.file}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <Icon name={item.icon} />
              <span>{item.name}</span>
              <span className="selector-mark" aria-hidden="true">
                {selected === index ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>
        <div className="gallery-description" aria-live="polite">
          <h3>{screen.title}</h3>
          <p>{screen.text}</p>
        </div>
      </div>
      <figure className="gallery-preview">
        <div className="gallery-grid" />
        <div className="gallery-phone">
          <Image
            key={screen.file}
            src={`/app/${screen.file}.webp`}
            alt={`${screen.name}: original Essential Words application screenshot. ${screen.text}`}
            width={780}
            height={screen.height}
            sizes="(max-width: 600px) 260px, 300px"
          />
        </div>
        <figcaption>
          ESSENTIAL WORDS <span>·</span> {screen.name.toUpperCase()}
        </figcaption>
      </figure>
    </div>
  );
}
