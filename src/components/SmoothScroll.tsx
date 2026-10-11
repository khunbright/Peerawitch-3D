"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { lenisRef, pointer, prefersReducedMotion, scroll } from "@/lib/scroll";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = prefersReducedMotion();

    const updateFromScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.progress = max > 0 ? window.scrollY / max : 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    if (reduced) {
      window.addEventListener("scroll", updateFromScroll, { passive: true });
      updateFromScroll();
      return () => {
        window.removeEventListener("scroll", updateFromScroll);
        window.removeEventListener("pointermove", onPointerMove);
      };
    }

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;

    lenis.on("scroll", ({ progress, velocity }: { progress: number; velocity: number }) => {
      scroll.progress = progress;
      scroll.velocity = velocity;
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenisRef.current = null;
      lenis.destroy();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <>{children}</>;
}
