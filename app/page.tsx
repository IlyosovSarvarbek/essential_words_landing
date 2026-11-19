import Image from "next/image";
import { site, features, faqs } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { SiteHeader, SiteFooter } from "./components/site-chrome";
import { PageMotion } from "./components/page-motion";
import { StructuredData } from "./components/structured-data";
import { Icon } from "./components/ui-icon";
import { StudyDemo } from "./components/study-demo";
import { AppGallery } from "./components/app-gallery";

export const metadata = pageMetadata(site.seo.homeTitle, site.description, "/");

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader home />
      <PageMotion />
      <StructuredData />
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
                alt={`${site.name}’ real book library with six books and learning progress`}
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
              Actual screens from {site.name}
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
              <strong>{site.collection.entries.toLocaleString("en-US")}</strong>
              <span>vocabulary entries</span>
            </div>
            <div>
              <strong>{site.collection.books}</strong>
              <span>books to explore</span>
            </div>
            <div>
              <strong>{site.collection.units}</strong>
              <span>focused units</span>
            </div>
            <div>
              <strong>{site.collection.wordsPerUnit}</strong>
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
            <Image src={site.brand.icon} alt="" width={72} height={72} />
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
      <SiteFooter home />
    </>
  );
}
