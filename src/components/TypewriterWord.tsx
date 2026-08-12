"use client";

import { useEffect, useState } from "react";

type TypewriterWordProps = {
  words: string[];
  className?: string;
};

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 300;

export default function TypewriterWord({ words, className = "" }: TypewriterWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const timer = window.setTimeout(() => setText(current.slice(0, text.length + 1)), TYPING_SPEED);
        return () => window.clearTimeout(timer);
      }
      const timer = window.setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      return () => window.clearTimeout(timer);
    }

    if (text.length > 0) {
      const timer = window.setTimeout(() => setText(current.slice(0, text.length - 1)), DELETING_SPEED);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }, PAUSE_AFTER_DELETE);
    return () => window.clearTimeout(timer);
  }, [text, phase, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
