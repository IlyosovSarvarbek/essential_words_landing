"use client";

import { useRef, useState } from "react";
import { Icon } from "./ui-icon";
import { sampleWords as words } from "@/config/site";

// Five public entries from assets/data/books/1.json, Unit 1. See docs/product-reference.md.

export function StudyDemo() {
  const [mode, setMode] = useState<"flashcards" | "quiz">("flashcards");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [learned, setLearned] = useState<number[]>([]);
  const [audioMessage, setAudioMessage] = useState("");
  const [reverse, setReverse] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const frontAction = useRef<HTMLButtonElement>(null);
  const backAction = useRef<HTMLButtonElement>(null);
  const word = words[index];
  const quizWord = words[question];
  const known = learned.includes(index);
  const candidates = [0, 1, 2, 3].map(
    (offset) => (question + offset) % words.length,
  );
  const rotation = (question + 2) % candidates.length;
  const options = [
    ...candidates.slice(rotation),
    ...candidates.slice(0, rotation),
  ];

  function speak(english: string) {
    if (
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) {
      setAudioMessage("Pronunciation isn’t available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(english);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.onend = () => setAudioMessage("");
    utterance.onerror = (event) => {
      if (event.error !== "interrupted" && event.error !== "canceled")
        setAudioMessage(
          "No English voice is available. Try a browser with English speech support.",
        );
    };
    setAudioMessage(`Playing “${english}”…`);
    window.speechSynthesis.speak(utterance);
  }
  function move(delta: number) {
    setIndex(index + delta);
    setFlipped(false);
    setAudioMessage("");
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }
  function flip() {
    setFlipped(!flipped);
    requestAnimationFrame(() => {
      (flipped ? frontAction : backAction).current?.focus({
        preventScroll: true,
      });
    });
  }
  function mark(value: boolean) {
    setLearned((previous) =>
      value
        ? [...new Set([...previous, index])]
        : previous.filter((item) => item !== index),
    );
  }
  function resetQuiz() {
    setQuestion(0);
    setAnswer(null);
    setScore(0);
    setFinished(false);
  }
  function selectAnswer(selected: number) {
    if (answer !== null) return;
    setAnswer(selected);
    if (selected === question) setScore((value) => value + 1);
  }
  function nextQuestion() {
    if (question === words.length - 1) setFinished(true);
    else {
      setQuestion(question + 1);
      setAnswer(null);
    }
  }

  return (
    <div className="demo-shell">
      <div className="demo-intro">
        <span className="demo-label">
          <Icon name="book" /> BOOK 1 · UNIT 1
        </span>
        <h3>
          A word worth
          <br />
          {" "}
          remembering.
        </h3>
        <p>
          Think of the meaning first.
          <br />
          {" "}
          Then turn the card and see
          <br className="desktop-break" /> how much you know.
        </p>
        <div className="demo-tabs" role="group" aria-label="Choose sample mode">
          <button
            aria-pressed={mode === "flashcards"}
            onClick={() => setMode("flashcards")}
          >
            <Icon name="layers" /> Flashcards
          </button>
          <button
            aria-pressed={mode === "quiz"}
            onClick={() => setMode("quiz")}
          >
            <Icon name="quiz" /> Mini quiz
          </button>
        </div>
        <p className="demo-disclaimer">
          Interactive website sample.
          <br />
          {" "}
          Your app progress stays separate.
        </p>
      </div>
      <div className="demo-playground">
        {mode === "flashcards" ? (
          <div className="flashcard-demo">
            <div className="demo-progress-label">
              <span>Flashcard practice</span>
              <span aria-live="polite">
                {index + 1} OF {words.length}
              </span>
            </div>
            <div className="progress-track">
              <span
                style={{ width: `${((index + 1) / words.length) * 100}%` }}
              />
            </div>
            <div className="flip-scene" key={index}>
              <div className={`flip-card ${flipped ? "is-flipped" : ""}`}>
                {[false, true].map((back) => (
                  <div
                    className={`card-face ${back ? "card-back" : "card-front"}`}
                    key={String(back)}
                    inert={back !== flipped}
                    aria-hidden={back !== flipped}
                  >
                    <div className="card-top">
                      <span className="part-chip">{word.part}</span>
                      <button
                        className="audio-button"
                        onClick={() => speak(word.english)}
                        aria-label={`Listen to ${word.english}`}
                      >
                        <Icon name="audio" />
                      </button>
                    </div>
                    <button
                      className="card-word-button"
                      onClick={flip}
                      aria-expanded={flipped}
                      aria-label={
                        back
                          ? `Hide translation of ${word.english}`
                          : `Reveal translation of ${word.english}`
                      }
                    >
                      <span className="card-word">{word.english}</span>
                      {back ? (
                        <span className="translation-box">
                          <span>O‘ZBEKCHA TARJIMA</span>
                          <strong lang="uz">{word.uzbek}</strong>
                        </span>
                      ) : (
                        <span className="recall-hint">
                          What does it mean in Uzbek?
                        </span>
                      )}
                    </button>
                    <button
                      className={back ? "flip-back-button" : "reveal-button"}
                      ref={back ? backAction : frontAction}
                      onClick={flip}
                    >
                      <Icon name="flip" />{" "}
                      {back ? "Flip back" : "Reveal translation"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-bottom">
              <div className="learned-buttons">
                <button
                  disabled={!flipped}
                  aria-pressed={!known}
                  onClick={() => mark(false)}
                >
                  <Icon name="flip" /> Learning
                </button>
                <button
                  disabled={!flipped}
                  className={known ? "is-learned" : ""}
                  aria-pressed={known}
                  onClick={() => mark(true)}
                >
                  <Icon name="check" /> Learned
                </button>
              </div>
              <div className="deck-navigation">
                <button
                  disabled={index === 0}
                  onClick={() => move(-1)}
                  aria-label="Previous flashcard"
                >
                  Previous
                </button>
                <button
                  disabled={index === words.length - 1}
                  onClick={() => move(1)}
                  aria-label="Next flashcard"
                >
                  Next
                </button>
              </div>
            </div>
            <p className="demo-feedback" aria-live="polite">
              {learned.length} of {words.length} sample words marked learned
              {!flipped ? " · Reveal to mark a word" : ""}
            </p>
          </div>
        ) : (
          <div className="quiz-demo">
            <div
              className="quiz-directions"
              role="group"
              aria-label="Quiz direction"
            >
              <button
                aria-pressed={!reverse}
                onClick={() => {
                  setReverse(false);
                  resetQuiz();
                }}
              >
                English to Uzbek
              </button>
              <button
                aria-pressed={reverse}
                onClick={() => {
                  setReverse(true);
                  resetQuiz();
                }}
              >
                Uzbek to English
              </button>
            </div>
            {finished ? (
              <div className="sample-results" aria-live="polite">
                <div className="score-circle">
                  {Math.round((score / words.length) * 100)}
                  <span>%</span>
                </div>
                <h3>Quiz completed.</h3>
                <p>
                  {score} of {words.length} correct answers
                </p>
                <p className="quiz-score-note">
                  Quiz scores are separate from learned-word progress.
                </p>
                <button className="button button-primary" onClick={resetQuiz}>
                  Try again
                </button>
              </div>
            ) : (
              <>
                <div className="demo-progress-label">
                  <span>Mini quiz</span>
                  <span>
                    QUESTION {question + 1} OF {words.length}
                  </span>
                </div>
                <div className="progress-track">
                  <span
                    style={{
                      width: `${((question + 1) / words.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="quiz-word">
                  <span className="part-chip">{quizWord.part}</span>
                  <h3 lang={reverse ? "uz" : "en"}>
                    {reverse ? quizWord.uzbek : quizWord.english}
                  </h3>
                </div>
                <div className="quiz-options">
                  {options.map((option, optionIndex) => (
                    <button
                      key={option}
                      disabled={answer !== null}
                      className={
                        answer !== null && option === question
                          ? "answer-correct"
                          : answer === option
                            ? "answer-wrong"
                            : ""
                      }
                      onClick={() => selectAnswer(option)}
                    >
                      <span>{String.fromCharCode(65 + optionIndex)}</span>
                      <span lang={reverse ? "en" : "uz"}>
                        {reverse ? words[option].english : words[option].uzbek}
                      </span>
                      {answer !== null && option === question && (
                        <Icon name="check" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="quiz-bottom">
                  <p role="status">
                    {answer === null
                      ? "Choose the matching meaning."
                      : answer === question
                        ? "To‘g‘ri javob! Correct."
                        : "Keep practicing. The correct answer is highlighted."}
                  </p>
                  <button
                    className="reveal-button"
                    disabled={answer === null}
                    onClick={nextQuestion}
                  >
                    {question === words.length - 1
                      ? "See results"
                      : "Next question"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
        <p className="audio-status" role="status">
          {audioMessage}
        </p>
      </div>
    </div>
  );
}
