import Reveal from "../Reveal";
import Section from "../Section";
import { profile } from "@/content/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
  { label: "GitHub", value: profile.githubLabel, href: profile.github },
  { label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Get in touch">
      <Reveal>
        <p className="max-w-2xl text-lg text-slate-300">
          Open to full-stack and front-end roles. The fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <div
              key={link.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                {link.label}
              </dt>
              <dd className="mt-2 text-white">
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="transition hover:text-sky-300"
                  >
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
