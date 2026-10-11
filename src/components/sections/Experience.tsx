import Reveal from "../Reveal";
import Section from "../Section";
import { experience } from "@/content/profile";

export default function Experience() {
  return (
    <Section id="work" index="03" title="Experience">
      <ol className="relative space-y-12 border-l border-white/10 pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.company + job.period} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-sky-400/15 sm:-left-[47px]" />

            <Reveal delay={Math.min(i, 3) * 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                <span className="font-mono text-xs text-slate-400">{job.period}</span>
              </div>
              <p className="mt-1 text-sky-300">{job.title}</p>

              {job.highlights && (
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 space-y-4">
                {job.projects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-sky-400/40"
                  >
                    <h4 className="text-base font-medium text-white">
                      {project.name}{" "}
                      <span className="font-normal text-slate-400">— {project.summary}</span>
                    </h4>

                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md bg-sky-400/10 px-2 py-0.5 font-mono text-[11px] text-sky-200"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-slate-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
