import { en, type Content } from "./en";
import { th } from "./th";

export const languages = ["en", "th"] as const;
export type Lang = (typeof languages)[number];

const byLang: Record<Lang, Content> = { en, th };

export function getContent(lang: Lang): Content {
  return byLang[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "th" : "en";
}

/** Values that are the same in every language. */
export const shared = {
  email: "l.peerawitch@hotmail.com",
  phone: "088-111-5949",
  github: "https://github.com/khunbright",
  githubLabel: "github.com/khunbright",
  resumeUrl: "/Peerawitch_Lertsuksombut_CV.pdf",
  // Static so the page stays fully prerenderable (no `new Date()` at render).
  copyrightYear: 2026,
  /** Tech keywords listed under the hero. */
  orbitTags: ["TypeScript", "Next.js", "React", "Prisma", "Drizzle", "MySQL", "Node.js", "Tailwind", "Docker", "Playwright"],
};

export type { Content };
