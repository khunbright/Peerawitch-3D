"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import AnchorLink from "./AnchorLink";
import { shared, type Content, type Lang } from "@/content";

export default function Nav({
  lang,
  name,
  nav,
  langs,
}: {
  lang: Lang;
  name: string;
  nav: Content["ui"]["nav"];
  /** Every language with the label it uses for itself, resolved server-side. */
  langs: { code: Lang; label: string }[];
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#work", label: nav.work },
    { href: "#education", label: nav.education },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-[#05070f]/70 backdrop-blur" : ""}`}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <AnchorLink href="#home" className="flex items-center gap-2.5 font-mono text-sm text-white">
          <Image
            src="/profile.png"
            alt=""
            width={832}
            height={1248}
            /* object-position pulls the head out of the full-body cut-out,
               so the nav reuses the same asset as the About portrait. */
            className="size-8 shrink-0 rounded-full border border-white/15 bg-white/10 object-cover object-[50%_4%]"
          />
          <span>
            peerawitch
            <span className="text-sky-400">.dev</span>
          </span>
        </AnchorLink>

        <ul className="hidden gap-6 text-sm text-slate-300 sm:flex">
          {items.map((item) => (
            <li key={item.href}>
              <AnchorLink href={item.href} className="transition hover:text-white">
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          {/* Both languages stay visible: one label alone cannot say whether
              it names the current page or the one a click would open. */}
          <div className="flex items-center gap-1.5 font-mono text-xs">
            {langs.map((l, i) => (
              <Fragment key={l.code}>
                {i > 0 && (
                  <span aria-hidden className="text-white/25">
                    /
                  </span>
                )}
                {l.code === lang ? (
                  <span aria-current="true" className="text-white">
                    {l.label}
                  </span>
                ) : (
                  <Link href={`/${l.code}`} hrefLang={l.code} className="text-slate-500 transition hover:text-white">
                    {l.label}
                  </Link>
                )}
              </Fragment>
            ))}
          </div>
          <a href={shared.github} target="_blank" rel="noreferrer" aria-label={`GitHub — ${name}`} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white transition hover:border-white/50 hover:bg-white/5">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
