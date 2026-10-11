import Reveal from "../Reveal";
import Section from "../Section";
import { certificates, education } from "@/content/profile";

export default function Education() {
  return (
    <Section id="education" index="04" title="Education & certificates">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <ul className="space-y-5">
            {education.map((item) => (
              <li
                key={item.school}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              >
                <h3 className="font-medium text-white">{item.school}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                <p className="mt-2 font-mono text-xs text-slate-500">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {certificates.map((cert) => (
              <li key={cert} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
