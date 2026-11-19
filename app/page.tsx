import Image from "next/image";
import { Icon } from "./components/ui-icon";
import { StudyDemo } from "./components/study-demo";
import { AppGallery } from "./components/app-gallery";

const features = [
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

const faqs = [
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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#" aria-label="Essential Words home">
            <Image src="/app/icon.png" alt="" width={43} height={43} />
            <span>
              essential<span className="brand-light">words</span>
              <span className="brand-period">.</span>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#inside">Inside the app</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button-small button-outline" href="#try-it">
            Try a flashcard
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="language-tag">
                EN <span>+</span> UZ
              </span>{" "}
              A little practice. A bigger vocabulary.
            </div>
            <h1 id="hero-heading">
              Small steps.
              <br />
              Stronger
              <br />
              <span className="blue-text">English.</span>
            </h1>
            <p className="hero-description">
              Make new words part of your everyday.
              <br className="desktop-break" /> Learn English with Uzbek
              translations, flip a flashcard, and build your vocabulary one unit
              at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#try-it">
                <Icon name="layers" /> Try a flashcard
              </a>
              <a className="button button-quiet" href="#inside">
                <Icon name="play" /> Explore the app
              </a>
            </div>
            <div className="hero-assurances">
              <span>
                <Icon name="check" /> No account needed
              </span>
              <span>
                <Icon name="offline" /> Study offline
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <span className="visual-caption">YOUR NEXT WORD IS WAITING</span>
            <div className="phone phone-back">
              <Image
                src="/app/books.webp"
                alt="Essential Words’ real book library with six books and learning progress"
                width={780}
                height={1688}
                sizes="240px"
                preload
              />
            </div>
            <div className="phone phone-front">
              <div className="phone-camera" />
              <Image
                src="/app/flashcards.webp"
                alt="Actual flashcard screen: afraid, with the Uzbek translation qo’rqqan, cho’chigan and Learning and Learned controls"
                width={780}
                height={1688}
                sizes="(max-width: 600px) 240px, 280px"
                preload
              />
            </div>
            <div className="visual-note">
              <span className="note-icon">
                <Icon name="book" />
              </span>
              <span>
                English in your mind.
                <br />
                <strong>Uzbek by your side.</strong>
              </span>
            </div>
            <span className="screenshot-caption">
              Actual screens from Essential Words
            </span>
          </div>
        </section>
        <section className="stats-strip" aria-label="The vocabulary collection">
          <div className="container stats-inner">
            <p>
              A clear path.
              <br />
              <strong>One word at a time.</strong>
            </p>
            <div>
              <strong>3,600</strong>
              <span>vocabulary entries</span>
            </div>
            <div>
              <strong>6</strong>
              <span>books to explore</span>
            </div>
            <div>
              <strong>180</strong>
              <span>focused units</span>
            </div>
            <div>
              <strong>20</strong>
              <span>words in each unit</span>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="section container"
          aria-labelledby="features-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">BUILT AROUND THE WAY YOU LEARN</p>
              <h2 id="features-heading">
                Meet a word.
                <br />
                Make it <span className="muted-heading">yours.</span>
              </h2>
            </div>
            <p>
              A simple rhythm of review, recall, and practice.
              <br />
              Everything you need for your next study session.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature">
                <div className="feature-icon">
                  <Icon name={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="how-it-works" className="workflow-section">
          <div className="container workflow-inner">
            <div>
              <p className="eyebrow">A ROUTINE YOU CAN COME BACK TO</p>
              <h2>
                Your next unit.
                <br />
                Your own pace.
              </h2>
              <p className="section-description">
                Start with 20 words. Find your rhythm.
                <br />
                Pick up where you left off.
              </p>
              <a className="text-link" href="#try-it">
                Get a feel for it <Icon name="layers" />
              </a>
            </div>
            <ol className="workflow-list">
              <li>
                <span className="workflow-icon">
                  <Icon name="book" />
                </span>
                <div>
                  <h3>Choose a book and a unit</h3>
                  <p>
                    Six books give your vocabulary a clear structure. Every unit
                    keeps the focus on 20 words.
                  </p>
                </div>
              </li>
              <li>
                <span className="workflow-icon">
                  <Icon name="layers" />
                </span>
                <div>
                  <h3>Review. Listen. Recall.</h3>
                  <p>
                    Read the translations, hear the words, then practice with
                    flashcards. Mark words learned when you’re ready.
                  </p>
                </div>
              </li>
              <li>
                <span className="workflow-icon">
                  <Icon name="quiz" />
                </span>
                <div>
                  <h3>Check what you remember</h3>
                  <p>
                    Quiz yourself in either language, see your score, and try
                    again. Your learned-word progress stays saved locally.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section
          id="try-it"
          className="section container demo-section"
          aria-labelledby="demo-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE PRACTICE STARTS HERE</p>
              <h2 id="demo-heading">
                Don’t just read about it.
                <br />
                <span className="blue-text">Give it a flip.</span>
              </h2>
            </div>
            <p>
              Five real words from Book 1, Unit 1.
              <br />A small taste of your next learning session.
            </p>
          </div>
          <StudyDemo />
        </section>
        <section
          id="inside"
          className="section gallery-section container"
          aria-labelledby="gallery-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LOOK INSIDE ESSENTIAL WORDS</p>
              <h2 id="gallery-heading">
                Less getting in your way.
                <br />
                <span className="muted-heading">
                  More getting to know words.
                </span>
              </h2>
            </div>
            <span className="authentic-label">
              <Icon name="check" /> Actual app screenshots
            </span>
          </div>
          <AppGallery />
        </section>
        <section className="comfort-strip">
          <div className="container comfort-inner">
            <Icon name="offline" />
            <div>
              <h3>Your vocabulary. Wherever you are.</h3>
              <p>
                Core learning works offline. No account to create. Progress
                saved on your device.
              </p>
            </div>
            <span className="comfort-tag">READY WHEN YOU ARE</span>
          </div>
        </section>
        <section
          id="faq"
          className="section container faq-section"
          aria-labelledby="faq-heading"
        >
          <div>
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2 id="faq-heading">
              A few words
              <br />
              before you start.
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="container closing-section">
          <div className="closing-icon">
            <Image src="/app/icon.png" alt="" width={72} height={72} />
          </div>
          <p className="eyebrow">YOUR NEXT WORD IS A SMALL STEP AWAY</p>
          <h2>
            A little more English.
            <br />
            <span className="blue-text">Every time you practice.</span>
          </h2>
          <a className="button button-primary" href="#try-it">
            <Icon name="layers" /> Try your first flashcard
          </a>
          <p className="closing-note">English + Uzbek. One unit at a time.</p>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="brand footer-brand" href="#">
          <Image src="/app/icon.png" alt="" width={32} height={32} />
          <span>
            essential<span className="brand-light">words</span>
            <span className="brand-period">.</span>
          </span>
        </a>
        <p>Build your vocabulary, one unit at a time.</p>
        <a href="#faq">Questions & answers</a>
        <span>© 2026 Essential Words</span>
      </footer>
    </>
  );
}
