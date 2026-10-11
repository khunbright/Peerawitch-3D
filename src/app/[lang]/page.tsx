import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import SceneCanvas from "@/components/three/SceneCanvas";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { getContent, languages, shared, type Lang } from "@/content";

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const c = getContent(lang);
  const langs = languages.map((code) => ({ code, label: getContent(code).ui.langShort }));

  return (
    <SmoothScroll>
      <SceneCanvas />
      <Nav lang={lang} name={c.profile.name} nav={c.ui.nav} langs={langs} />
      <main className="relative">
        <Hero c={c} />
        <About c={c} />
        <Skills c={c} />
        <Experience c={c} />
        <Education c={c} />
        <Contact c={c} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {shared.copyrightYear} {c.profile.name}
      </footer>
    </SmoothScroll>
  );
}
