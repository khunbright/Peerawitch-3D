"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const items = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "border-b border-white/10 bg-[#05070f]/70 backdrop-blur" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm text-white">
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-sky-400">.dev</span>
        </a>

        <ul className="hidden gap-6 text-sm text-slate-300 sm:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white transition hover:border-white/50 hover:bg-white/5"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
