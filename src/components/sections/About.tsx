import Image from "next/image";
import Reveal from "../Reveal";
import Section from "../Section";
import { profile } from "@/content/profile";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:gap-12">
        <Reveal>
          <figure className="group relative mx-auto w-full max-w-[240px]">
            {/* Hidden at rest so the card reads like every other one on the
                page; a soft blue glow fades in on hover. */}
            <div aria-hidden className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-[radial-gradient(120%_90%_at_50%_15%,rgba(125,211,252,0.2),rgba(56,189,248,0.12)_45%,transparent_72%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Top padding only: it drops the figure clear of the frame's top
                edge while its base stays flush with the fade below. */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] pt-2 backdrop-blur transition-colors duration-500 group-hover:border-sky-400/40">
              <Image
                src="/profile.png"
                alt={`Portrait of ${profile.name}`}
                width={832}
                height={1248}
                sizes="(min-width: 768px) 240px, 60vw"
                /* Cooled and slightly flattened so the warm studio lighting
                   doesn't clash with the scene's blue/violet palette. */
                className="aspect-4/5 w-full object-contain [filter:saturate(0.75)_contrast(1.05)_hue-rotate(-6deg)]"
              />
              {/* Dissolves the figure's hard bottom edge into the page. */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#05070f] via-[#05070f]/70 to-transparent" />
            </div>

            <figcaption className="mt-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{profile.location}</figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col justify-center gap-8">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate-300">{profile.profileText}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid gap-4 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
                  <dt className="text-2xl font-semibold text-white">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
