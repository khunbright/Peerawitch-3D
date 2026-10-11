import Reveal from "../Reveal";
import Section from "../Section";
import { shared, type Content } from "@/content";

export default function Contact({ c }: { c: Content }) {
  const links = [
    { label: c.ui.contact.email, value: shared.email, href: `mailto:${shared.email}` },
    {
      label: c.ui.contact.phone,
      value: shared.phone,
      href: `tel:${shared.phone.replace(/-/g, "")}`,
    },
    { label: c.ui.contact.github, value: shared.githubLabel, href: shared.github },
    { label: c.ui.contact.location, value: c.profile.location },
  ];

  return (
    <Section id="contact" index="05" title={c.ui.sections.contact}>
      <Reveal>
        <p className="max-w-full text-lg text-slate-300">{c.ui.contact.intro}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <div key={link.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{link.label}</dt>
              <dd className="mt-2 text-white">
                {link.href ? (
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="transition hover:text-sky-300">
                    {link.value}
                  </a>
                ) : (
                  link.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
