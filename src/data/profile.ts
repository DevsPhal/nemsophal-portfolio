import type { Locale } from "@/i18n/translations";

// Contact details are base64-encoded so plain-text scrapers scanning the
// rendered HTML or JS bundle can't harvest them directly. Decode only on
// user interaction — see AboutSection's reveal-on-click contact rows.
export const personalInfo = {
  name: "Nem Sophal",
  avatar: "/image/Nem_Sophal.jpeg",
  emailEncoded: "bmVtc29waGFsN0BnbWFpbC5jb20=",
  phoneEncoded: "Kzg1NSA3MSAzNDcgMTQ1Nw==",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
};

export function decodeContact(encoded: string) {
  return atob(encoded);
}

const localizedPersonalInfo: Record<
  Locale,
  { role: string; tagline: string; location: string; bio: string }
> = {
  en: {
    role: "Fullstack Developer",
    tagline: "Building clean, reliable web experiences.",
    location: "Phnom Penh, Cambodia",
    bio: "I'm a full stack developer who enjoys turning ideas into fast, accessible, and maintainable products. I care about clean architecture, thoughtful UI, and shipping things that actually help people.",
  },
  km: {
    role: "អ្នកអភិវឌ្ឍន៍កម្មវិធី Fullstack",
    tagline: "កសាងបទពិសោធន៍គេហទំព័រដ៏ស្អាត និងអាចទុកចិត្តបាន។",
    location: "ភ្នំពេញ កម្ពុជា",
    bio: "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលចូលចិត្តបំប្លែងគំនិតទៅជាផលិតផលដែលលឿន ងាយស្រួលប្រើ និងអាចថែទាំបានយូរអង្វែង។ ខ្ញុំយកចិត្តទុកដាក់លើស្ថាបត្យកម្មច្បាស់លាស់ ចំណុចប្រទាក់អ្នកប្រើដ៏ល្អ និងការចេញផ្សាយអ្វីៗដែលពិតជាជួយដល់មនុស្ស។",
  },
};

export function getPersonalInfo(locale: Locale) {
  return { ...personalInfo, ...localizedPersonalInfo[locale] };
}

const localizedEducation: Record<
  Locale,
  { school: string; degree: string; period: string; detail: string }[]
> = {
  en: [
    {
      school: "Korea Software HRD Center",
      degree: "Full Stack Development Training Program",
      period: "Jan - Jul 2026",
      detail:
        "Software development training program focused on full-stack web development. Covered front-end and back-end technologies, databases, and deployment practices.",
    },
    {
      school: "Asia Euro University",
      degree: "B.Sc. in Computer Science",
      period: "2022 — 2025",
      detail:
        "Focused on software engineering, data structures, and web development.",
    },
  ],
  km: [
    {
      school: "មជ្ឈមណ្ឌល HRD កម្មវិធីកូរ៉េ (Korea Software HRD Center)",
      degree: "កម្មវិធីបណ្តុះបណ្តាលអភិវឌ្ឍន៍កម្មវិធី Full Stack",
      period: "មករា — កក្កដា ២០២៦",
      detail:
        "កម្មវិធីបណ្តុះបណ្តាលអភិវឌ្ឍន៍កម្មវិធីផ្តោតលើការអភិវឌ្ឍន៍គេហទំព័រ Full Stack។ រួមមានបច្ចេកវិទ្យា Front-end និង Back-end មូលដ្ឋានទិន្នន័យ និងការអនុវត្តន៍ការដាក់ឱ្យប្រើប្រាស់។",
    },
    {
      school: "សាកលវិទ្យាល័យ អាស៊ី អឺរ៉ុប (Asia Euro University)",
      degree: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      period: "២០២២ — ២០២៥",
      detail:
        "ផ្តោតលើវិស្វកម្មកម្មវិធី រចនាសម្ព័ន្ធទិន្នន័យ និងការអភិវឌ្ឍន៍គេហទំព័រ។",
    },
  ],
};

export function getEducation(locale: Locale) {
  return localizedEducation[locale];
}

export const skills = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next Js", level: 88 },
    { name: "Tailwind CSS/Bootstrap", level: 85 },
  ],
  backend: [
    { name: "Java/Spring Boot", level: 85 },
    { name: "Rest API/JPA", level: 80 },
  ],
  databases: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Firebase", level: 75 },
    { name: "Redis", level: 65 },
  ],
  tools: [
    { name: "Git, GitHub/Gitlab", level: 90 },
    { name: "Docker", level: 70 },
    { name: "Linux", level: 95 },
    { name: "Postman", level: 80 },
  ],
};

const localizedAchievements: Record<
  Locale,
  { title: string; year: string; detail: string }[]
> = {
  en: [
    {
      title: "Build POS Systems Management To Defence Thesis",
      year: "2026",
      detail:
        "Led a 6-person team to build a Coffee POS Management platform in 4 months.",
    },
    {
      title: "Participated in Coding Challenges at Korea Software HRD Center",
      year: "2026",
      detail:
        "Recognized for a capstone project on real-time collaborative tools.",
    },
    {
      title: "Final Project HRD EventHub",
      year: "2026",
      detail:
        "Merged contributions to several community-maintained web libraries at internal events.",
    },
  ],
  km: [
    {
      title: "សាងសង់ប្រព័ន្ធគ្រប់គ្រង POS សម្រាប់ការពារនិក្ខេបបទ",
      year: "២០២៦",
      detail:
        "ដឹកនាំក្រុម ៦នាក់ ដើម្បីបង្កើតវេទិកាគ្រប់គ្រង POS សម្រាប់ហាងកាហ្វេក្នុងរយៈពេល ៤ខែ។",
    },
    {
      title: "ចូលរួមការប្រកួតសរសេរកូដនៅមជ្ឈមណ្ឌល HRD កម្មវិធីកូរ៉េ",
      year: "២០២៦",
      detail:
        "ទទួលបានការទទួលស្គាល់សម្រាប់គម្រោងបញ្ចប់ការសិក្សាស្តីពីឧបករណ៍សហការតាមពេលវេលាជាក់ស្តែង។",
    },
    {
      title: "គម្រោងបញ្ចប់ការសិក្សា HRD EventHub",
      year: "២០២៦",
      detail:
        "បានរួមចំណែកទៅក្នុងបណ្ណាល័យគេហទំព័រជាច្រើនដែលថែទាំដោយសហគមន៍ក្នុងព្រឹត្តិការណ៍ផ្ទៃក្នុង។",
    },
  ],
};

export function getAchievements(locale: Locale) {
  return localizedAchievements[locale];
}

const localizedCertificates: Record<
  Locale,
  { title: string; issuer: string; year: string }[]
> = {
  en: [
    {
      title: "Participated in Coding Challenges at Korea Software HRD Center",
      issuer: "Korea Software HRD Center",
      year: "2026",
    },
    {
      title: "Basic Course of Korea Software HRD Center",
      issuer: "Korea Software HRD Center",
      year: "2026",
    },
  ],
  km: [
    {
      title: "ចូលរួមការប្រកួតសរសេរកូដនៅមជ្ឈមណ្ឌល HRD កម្មវិធីកូរ៉េ",
      issuer: "មជ្ឈមណ្ឌល HRD កម្មវិធីកូរ៉េ",
      year: "២០២៦",
    },
    {
      title: "វគ្គសិក្សាមូលដ្ឋាននៃមជ្ឈមណ្ឌល HRD កម្មវិធីកូរ៉េ",
      issuer: "មជ្ឈមណ្ឌល HRD កម្មវិធីកូរ៉េ",
      year: "២០២៦",
    },
  ],
};

export function getCertificates(locale: Locale) {
  return localizedCertificates[locale];
}
