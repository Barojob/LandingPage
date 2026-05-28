import { useEffect, useState } from "react";

const PAIRS = [
  { word: "인력이", tone: "blue" },
  { word: "일자리가", tone: "orange" },
] as const;

const ROTATE_MS = 2000;
const BOX_IN_MS = 120;
const CHAR_MS = 95;

export function HeroRotatingTypeWord() {
  const [pairIndex, setPairIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [boxVisible, setBoxVisible] = useState(false);

  const pair = PAIRS[pairIndex];
  const displayed = pair.word.slice(0, visibleLength);
  const showCursor = boxVisible && visibleLength < pair.word.length;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisibleLength(pair.word.length);
      setBoxVisible(true);
      return;
    }

    setVisibleLength(0);
    setBoxVisible(false);

    const boxTimer = window.setTimeout(() => setBoxVisible(true), BOX_IN_MS);

    let typeTimer = 0;
    const startTyping = window.setTimeout(() => {
      let charIndex = 0;
      typeTimer = window.setInterval(() => {
        charIndex += 1;
        setVisibleLength(charIndex);
        if (charIndex >= pair.word.length) {
          window.clearInterval(typeTimer);
        }
      }, CHAR_MS);
    }, BOX_IN_MS + 80);

    return () => {
      window.clearTimeout(boxTimer);
      window.clearTimeout(startTyping);
      if (typeTimer) window.clearInterval(typeTimer);
    };
  }, [pairIndex]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setPairIndex((i) => (i + 1) % PAIRS.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <span
        className={`hero__word-type hero__word-type--${pair.tone}${boxVisible ? " hero__word-type--visible" : ""}`}
        aria-hidden="true"
      >
        <span className="hero__word-type-inner">
          <span className="hero__word-type-measure">{pair.word}</span>
          <span className="hero__word-type-content">
            {displayed}
            {showCursor && (
              <span className="hero__word-type-cursor" aria-hidden>
                |
              </span>
            )}
          </span>
        </span>
      </span>
      <span className="hero__sr-only" aria-live="polite">
        {visibleLength >= pair.word.length ? pair.word : displayed}
      </span>
    </>
  );
}
