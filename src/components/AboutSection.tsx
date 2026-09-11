"use client";

import { useState } from "react";
import { decodeContact, getEducation, getPersonalInfo } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { locale, t } = useLanguage();
  const personalInfo = getPersonalInfo(locale);
  const education = getEducation(locale);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-pixel text-2xl text-black sm:text-3xl dark:text-zinc-50">
        {t.about.heading}
      </h2>

      <div className="mt-10 grid gap-12 sm:grid-cols-2">
        <div>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {personalInfo.bio}
          </p>

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="w-24 shrink-0 font-medium text-zinc-500 dark:text-zinc-400">
                {t.about.location}
              </dt>
              <dd className="text-zinc-700 dark:text-zinc-300">
                {personalInfo.location}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 shrink-0 font-medium text-zinc-500 dark:text-zinc-400">
                {t.about.email}
              </dt>
              <dd className="text-zinc-700 dark:text-zinc-300">
                {emailRevealed ? (
                  <a
                    href={`mailto:${decodeContact(personalInfo.emailEncoded)}`}
                    className="hover:underline"
                  >
                    {decodeContact(personalInfo.emailEncoded)}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setEmailRevealed(true)}
                    className="underline decoration-dotted underline-offset-4 hover:text-black dark:hover:text-zinc-50"
                  >
                    {t.about.reveal}
                  </button>
                )}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="w-24 shrink-0 font-medium text-zinc-500 dark:text-zinc-400">
                {t.about.phone}
              </dt>
              <dd className="text-zinc-700 dark:text-zinc-300">
                {phoneRevealed ? (
                  <a
                    href={`tel:${decodeContact(personalInfo.phoneEncoded).replace(/\s+/g, "")}`}
                    className="hover:underline"
                  >
                    {decodeContact(personalInfo.phoneEncoded)}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPhoneRevealed(true)}
                    className="underline decoration-dotted underline-offset-4 hover:text-black dark:hover:text-zinc-50"
                  >
                    {t.about.reveal}
                  </button>
                )}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex gap-4">
            {personalInfo.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-pixel text-lg text-black dark:text-zinc-50">
            {t.about.education}
          </h3>
          <ol className="mt-6 space-y-6 border-l border-black/10 pl-6 dark:border-white/10">
            {education.map((item) => (
              <li key={item.school} className="relative">
                <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-foreground" />
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {item.period}
                </p>
                <p className="mt-1 font-semibold text-zinc-800 dark:text-zinc-200">
                  {item.degree}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.school}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
