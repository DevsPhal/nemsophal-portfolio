"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.language.toggle}
      className="flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-black/10 px-3 text-xs font-semibold text-zinc-700 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/10"
    >
      {locale === "en" ? "ខ្មែរ" : "EN"}
    </button>
  );
}
