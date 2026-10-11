"use client";

import { motion } from "motion/react";
import AnchorLink from "../AnchorLink";
import { shared, type Content } from "@/content";

export default function Hero({ c }: { c: Content }) {
  const { profile, ui } = c;

  // Split on the first space so the surname can sit on its own line on
  // narrow screens, where the full name would otherwise wrap mid-word.
  const [givenName, ...restOfName] = profile.name.split(" ");
  const familyName = restOfName.join(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center px-6 py-32"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-sky-400"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          /* bg-clip-text paints the gradient only inside the element's box, so
             the box has to be tall enough for Thai below-base vowels — at the
             utilities' default line-height of 1 they fall outside it and
             vanish. The extra bottom padding covers the deepest marks. */
          className="mt-6 bg-linear-to-b from-white via-white to-white/55 bg-clip-text pb-[0.14em] text-5xl font-semibold leading-[1.22] tracking-tight text-transparent sm:text-7xl"
        >
          <span className="block sm:inline">{givenName}</span>
          {familyName && <span className="block sm:inline"> {familyName}</span>}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-slate-300"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <AnchorLink
              href="#work"
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
            >
              {ui.hero.viewWork}
            </AnchorLink>
            <a
              href={`mailto:${shared.email}`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/50 hover:bg-white/5"
            >
              {ui.hero.getInTouch}
            </a>
          </div>

          {/* Secondary action, so it sits on its own line below the pair. */}
          <a
            href={shared.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-400 underline-offset-4 transition hover:text-white hover:underline"
          >
            {ui.hero.downloadCv}
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-slate-400"
        >
          {shared.orbitTags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/10 px-3 py-1">
              {tag}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-slate-500"
      >
        <span className="block animate-bounce">{ui.hero.scroll}</span>
      </motion.div>
    </section>
  );
}
