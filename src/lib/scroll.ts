"use client";

import type Lenis from "lenis";

/**
 * Scroll progress is shared with the 3D scene through a plain mutable ref
 * instead of React state: the canvas reads it inside useFrame, so pushing it
 * through a re-render every scroll event would be pure waste.
 */
export const scroll = { progress: 0, velocity: 0 };

export const pointer = { x: 0, y: 0 };

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * The live Lenis instance, published by SmoothScroll so in-page links can hand
 * their jump to the same engine that drives wheel scrolling. Going through
 * native anchors instead would fight Lenis mid-animation.
 */
export const lenisRef: { current: Lenis | null } = { current: null };

/** Matches the sections' `scroll-mt-24`, which Lenis does not read itself. */
const HEADER_OFFSET = -96;

/** Scrolls to an `#id` target, smoothly where motion is allowed. */
export function scrollToSection(hash: string) {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  if (lenisRef.current) {
    lenisRef.current.scrollTo(target, { offset: HEADER_OFFSET });
  } else {
    // Reduced motion, or Lenis not up yet: scroll-margin on the section
    // supplies the same offset here.
    target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }

  // Keep the URL shareable without pushing an entry the Back button cannot undo.
  history.replaceState(null, "", hash);
}
