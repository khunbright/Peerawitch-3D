import Reveal from "../Reveal";
import Section from "../Section";
import { profile } from "@/content/profile";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-300">{profile.profileText}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid gap-4">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              >
                <dt className="text-2xl font-semibold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
