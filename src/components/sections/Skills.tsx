import Reveal from "../Reveal";
import Section from "../Section";
import type { Content } from "@/content";

export default function Skills({ c }: { c: Content }) {
  return (
    <Section id="skills" index="02" title={c.ui.sections.skills}>
      <div className="grid gap-4 sm:grid-cols-2">
        {c.skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-sky-400/40">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
