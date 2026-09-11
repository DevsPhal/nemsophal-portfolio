"use client";

import { Copyright } from "lucide-react";
import { personalInfo } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-black/10 flex items-center justify-center gap-2 px-6 py-8 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      <Copyright size={15} strokeWidth={2} /> {new Date().getFullYear()}{" "}
      {personalInfo.name}. {t.footer.rights}
    </footer>
  );
}
