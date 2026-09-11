"use client";

import { useState } from "react";
import { personalInfo } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#explore", label: t.nav.explore },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-pixel text-lg tracking-wide text-black dark:text-zinc-50"
          onClick={() => setOpen(false)}
        >
          {personalInfo.name}
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download="Nem Sophal CV Resume.pdf"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            {t.nav.downloadCv}
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t.nav.toggleMenu}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.nav.toggleMenu}</span>
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-black/10 px-6 py-4 sm:hidden dark:border-white/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download="Nem Sophal CV Resume.pdf"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
          >
            {t.nav.downloadCv}
          </a>
        </div>
      )}
    </header>
  );
}
