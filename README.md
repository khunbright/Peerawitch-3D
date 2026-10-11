# Portfolio 3D — Peerawitch Lertsuksombut

Next.js (App Router) portfolio with a WebGL hero scene that reacts to scroll.

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

Everything shown on the page — name, tagline, skills, jobs, projects, education,
certificates, contact links — lives in **`src/content/profile.ts`**. Change that
file; no component edits needed.

The downloadable CV is `public/Peerawitch_Lertsuksombut_CV.pdf`
(linked via `profile.resumeUrl`).

## Structure

| Path | What it is |
| --- | --- |
| `src/content/profile.ts` | All site content |
| `src/components/three/Scene.tsx` | The 3D scene (core, rings, satellites, starfield, camera rig) |
| `src/components/three/SceneCanvas.tsx` | Fixed background canvas, client-only |
| `src/components/SmoothScroll.tsx` | Lenis smooth scrolling + scroll/pointer tracking |
| `src/lib/scroll.ts` | Shared scroll/pointer values the scene reads in `useFrame` |
| `src/components/sections/*` | Hero, About, Skills, Experience, Education, Contact |

## How the 3D reacts to scroll

Scroll progress and pointer position are written to a plain mutable object
(`src/lib/scroll.ts`) rather than React state, and the canvas reads it inside
`useFrame`. That keeps 60fps scrolling from triggering React re-renders.

Scroll drives: camera dolly + arc, core scale, ring tilt.
Pointer drives: camera parallax.

`prefers-reduced-motion` disables Lenis and the parallax, and drops the star count.

## Deploy

Push to GitHub and import on Vercel — zero config needed.
