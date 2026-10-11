"use client";

import dynamic from "next/dynamic";

// WebGL only exists in the browser, and the canvas is purely decorative,
// so it stays out of the server render entirely.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function SceneCanvas() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-[#05070f]"
    >
      <Scene />
      {/* Darkens the lower half so body copy stays readable over the scene. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070f]/55 to-[#05070f]/90" />
    </div>
  );
}
