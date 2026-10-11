"use client";

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
