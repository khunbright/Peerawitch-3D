import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import SceneCanvas from "@/components/three/SceneCanvas";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <SmoothScroll>
      <SceneCanvas />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © {profile.copyrightYear} {profile.name}
      </footer>
    </SmoothScroll>
  );
}
