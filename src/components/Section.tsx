import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            <span className="font-mono text-sm text-sky-400/80">{index}</span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
