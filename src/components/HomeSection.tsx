"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/profile";

const TYPE_SPEED_MS = 90;

export default function HomeSection() {
  const [typed, setTyped] = useState("");
  const fullName = personalInfo.name;
  const isTyping = typed.length < fullName.length;

  useEffect(() => {
    if (typed.length >= fullName.length) return;
    const timeout = setTimeout(() => {
      setTyped(fullName.slice(0, typed.length + 1));
    }, TYPE_SPEED_MS);
    return () => clearTimeout(timeout);
  }, [typed, fullName]);

  const revealDelay = fullName.length * TYPE_SPEED_MS + 250;

  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <p className="animate-[fade-in-up_0.6s_ease-out_both] font-mono text-sm text-zinc-500 dark:text-zinc-400">
        Hi, I&apos;m
      </p>
      <h1 className="font-pixel text-4xl leading-tight text-black sm:text-6xl dark:text-zinc-50">
        {typed}
        <span
          className={
            isTyping
              ? "animate-pulse"
              : "opacity-0 transition-opacity duration-700"
          }
        >
          _
        </span>
      </h1>
      <h2
        className="text-xl font-semibold text-zinc-700 opacity-0 [animation-fill-mode:both] sm:text-2xl dark:text-zinc-300"
        style={{
          animation: `fade-in-up 0.6s ease-out ${revealDelay}ms both`,
        }}
      >
        {personalInfo.role}
      </h2>
      <p
        className="max-w-md text-base text-zinc-600 opacity-0 dark:text-zinc-400"
        style={{
          animation: `fade-in-up 0.6s ease-out ${revealDelay + 150}ms both`,
        }}
      >
        {personalInfo.tagline}
      </p>
      <div
        className="mt-4 flex flex-col gap-4 opacity-0 sm:flex-row"
        style={{
          animation: `fade-in-up 0.6s ease-out ${revealDelay + 300}ms both`,
        }}
      >
        <a
          href="#explore"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Explore my work
        </a>
        <a
          href="/cv.pdf"
          download
          className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
