export type Locale = "en" | "km";

export const locales: Locale[] = ["en", "km"];

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      explore: "Explore",
      downloadCv: "Download CV",
      toggleMenu: "Toggle menu",
    },
    theme: {
      toggle: "Toggle dark mode",
    },
    language: {
      toggle: "Switch to Khmer",
    },
    home: {
      greeting: "Hi, I'm",
      exploreCta: "Explore my work",
      downloadCv: "Download CV",
    },
    about: {
      heading: "About Me",
      location: "Location",
      email: "Email",
      phone: "Phone",
      education: "Education",
      reveal: "Click to reveal",
    },
    explore: {
      heading: "Explore",
      skills: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools",
      achievements: "Achievements",
      certificates: "Certificates",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  km: {
    nav: {
      home: "ទំព័រដើម",
      about: "អំពីខ្ញុំ",
      explore: "ស្វែងយល់",
      downloadCv: "ទាញយក CV",
      toggleMenu: "ប្តូរម៉ឺនុយ",
    },
    theme: {
      toggle: "ប្តូរម៉ូតងងឹត",
    },
    language: {
      toggle: "ប្តូរទៅភាសាអង់គ្លេស",
    },
    home: {
      greeting: "សួស្តី ខ្ញុំឈ្មោះ",
      exploreCta: "មើលការងាររបស់ខ្ញុំ",
      downloadCv: "ទាញយក CV",
    },
    about: {
      heading: "អំពីខ្ញុំ",
      location: "ទីតាំង",
      email: "អ៊ីមែល",
      phone: "លេខទូរស័ព្ទ",
      education: "ការសិក្សា",
      reveal: "ចុចដើម្បីមើល",
    },
    explore: {
      heading: "ស្វែងយល់",
      skills: "ជំនាញ",
      frontend: "ផ្នែកខាងមុខ",
      backend: "ផ្នែកខាងក្រោយ",
      databases: "មូលដ្ឋានទិន្នន័យ",
      tools: "ឧបករណ៍",
      achievements: "សមិទ្ធផល",
      certificates: "វិញ្ញាបនបត្រ",
    },
    footer: {
      rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];
