"use client";

import { useState, useEffect } from "react";
import Cursor from "./Cursor";

export default function TypingWithColoredLastWord({
  text,
  lastWord,
  speed = 50,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  const visibleText = text.slice(0, index);

  const lastWordIndex = text.lastIndexOf(lastWord);
  const isLastWordFullyVisible = index >= lastWordIndex + lastWord.length;

  const before = visibleText.slice(0, lastWordIndex);
  const maybeLastWord = visibleText.slice(lastWordIndex, index);

  return (
    <h1 className="max-w-[calc(100%-240px)] min-h-[212px] [font-family:var(--font-heading)] text-[96px] font-semibold leading-[1.1] tracking-[-5.76px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
      <span>{before}</span>
      {isLastWordFullyVisible ? (
        <span
          className="relative"
          style={{
            color: "var(--Volt-Greem)",
            transition: "color 0.5s ease-in-out",
          }}
        >
          {maybeLastWord}

          <Cursor animation={true}>Borrow</Cursor>
        </span>
      ) : (
        <span className="relative">
          {maybeLastWord}

          <Cursor animation={false}>Borrow</Cursor>
        </span>
      )}
      {index < text.length && (
        <span
          style={{
            animation: "blink 1s step-start infinite",
          }}
        >
          {" "}
          |{" "}
        </span>
      )}
      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </h1>
  );
}
