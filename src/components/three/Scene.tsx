"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Torus } from "@react-three/drei";
import * as THREE from "three";
import { pointer, prefersReducedMotion, scroll } from "@/lib/scroll";

const ACCENT = "#38bdf8";
const VIOLET = "#a78bfa";

/**
 * Deterministic PRNG so the starfield is identical on every render — React's
 * purity rules rule out Math.random() here, and a fixed field also means the
 * layout never reshuffles if the component remounts.
 */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Eased follow — keeps camera/object motion from snapping on fast scrolls. */
function damp(current: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.damp(current, target, lambda, dt);
}

function Core() {
  const inner = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const p = scroll.progress;
    if (inner.current) {
      inner.current.rotation.y += dt * 0.25;
      inner.current.rotation.x = Math.sin(t * 0.2) * 0.3;
      const s = 1 + p * 0.35;
      inner.current.scale.setScalar(damp(inner.current.scale.x, s, 4, dt));
    }
    if (shell.current) {
      shell.current.rotation.y -= dt * 0.12;
      shell.current.rotation.z += dt * 0.05;
    }
  });

  return (
    <group>
      <Icosahedron ref={inner} args={[1.25, 24]}>
        <MeshDistortMaterial
          color={ACCENT}
          distort={0.35}
          speed={1.4}
          roughness={0.12}
          metalness={0.95}
        />
      </Icosahedron>
      <Icosahedron ref={shell} args={[2.1, 1]}>
        <meshBasicMaterial color={VIOLET} wireframe transparent opacity={0.22} />
      </Icosahedron>
    </group>
  );
}

function Rings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, dt) => {
    if (!group.current) return;
    group.current.rotation.z += dt * 0.08;
    group.current.rotation.x = damp(
      group.current.rotation.x,
      1.1 + scroll.progress * 1.6,
      3,
      dt,
    );
  });

  return (
    <group ref={group}>
      {[2.9, 3.6, 4.4].map((radius, i) => (
        <Torus key={radius} args={[radius, 0.012, 8, 160]} rotation={[0, (i * Math.PI) / 7, 0]}>
          <meshBasicMaterial color={i % 2 ? VIOLET : ACCENT} transparent opacity={0.35} />
        </Torus>
      ))}
    </group>
  );
}

/** Small shapes that drift around the core — one per slice of the stack. */
function Satellites({ count = 8 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const radius = 3.2 + (i % 3) * 0.55;
        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.7) * 1.4,
            Math.sin(angle) * radius,
          ] as [number, number, number],
          scale: 0.12 + (i % 4) * 0.05,
          kind: i % 3,
        };
      }),
    [count],
  );

  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.1;
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={item.position} scale={item.scale}>
            {item.kind === 0 ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : item.kind === 1 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <tetrahedronGeometry args={[1.2, 0]} />
            )}
            <meshStandardMaterial
              color={i % 2 ? ACCENT : VIOLET}
              roughness={0.25}
              metalness={0.8}
              emissive={i % 2 ? ACCENT : VIOLET}
              emissiveIntensity={0.25}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Starfield({ count }: { count: number }) {
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    const random = mulberry32(0x5eed);
    for (let i = 0; i < count; i++) {
      // Spherical shell so stars never cluster in the middle of the frame.
      const radius = 9 + random() * 16;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = radius * Math.cos(phi);
    }
    return array;
  }, [count]);

  const points = useRef<THREE.Points>(null);
  useFrame((_, dt) => {
    if (points.current) {
      points.current.rotation.y += dt * 0.012;
      points.current.rotation.x += dt * 0.004;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#cbd5f5" transparent opacity={0.75} sizeAttenuation />
    </points>
  );
}

/** Drives the camera from scroll progress and a little pointer parallax. */
function Rig({ reduced }: { reduced: boolean }) {
  useFrame((state, dt) => {
    const p = scroll.progress;
    const parallaxX = reduced ? 0 : pointer.x * 0.6;
    const parallaxY = reduced ? 0 : -pointer.y * 0.4;

    const targetZ = 7.5 + p * 4.5;
    const targetY = parallaxY + Math.sin(p * Math.PI) * 1.2;
    const targetX = parallaxX + Math.sin(p * Math.PI * 2) * 1.6;

    state.camera.position.x = damp(state.camera.position.x, targetX, 2.5, dt);
    state.camera.position.y = damp(state.camera.position.y, targetY, 2.5, dt);
    state.camera.position.z = damp(state.camera.position.z, targetZ, 2.5, dt);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContents({ reduced }: { reduced: boolean }) {
  return (
    <>
      <color attach="background" args={["#05070f"]} />
      <fog attach="fog" args={["#05070f", 12, 30]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[6, 5, 6]} intensity={120} color={ACCENT} />
      <pointLight position={[-7, -4, -4]} intensity={90} color={VIOLET} />
      <directionalLight position={[0, 6, 4]} intensity={1.1} />

      <Core />
      <Rings />
      <Satellites />
      <Starfield count={reduced ? 500 : 1400} />
      <Rig reduced={reduced} />
    </>
  );
}

export default function Scene() {
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  return (
    <Canvas
      className="!fixed inset-0"
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      frameloop={reduced ? "demand" : "always"}
    >
      <SceneContents reduced={reduced} />
    </Canvas>
  );
}
