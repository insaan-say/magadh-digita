"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  Brush,
  Car,
  Code2,
  Film,
  Megaphone,
  TrendingUp,
  UtensilsCrossed
} from "lucide-react";
import Image from "next/image";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const serviceVisuals = [
  {
    label: "Social Media",
    meta: "Growth / Calendar",
    icon: Megaphone,
    delay: 0
  },
  {
    label: "Reel Editing",
    meta: "Frames / Cuts",
    icon: Film,
    delay: 0.15
  },
  {
    label: "Brand Identity",
    meta: "Logo / Launch",
    icon: Brush,
    delay: 0.3
  },
  {
    label: "Web Presence",
    meta: "Site / Motion",
    icon: Code2,
    delay: 0.45
  },
  {
    label: "Restaurant Shoots",
    meta: "Food / Venue",
    icon: UtensilsCrossed,
    delay: 0.6
  },
  {
    label: "Automotive Shoots",
    meta: "Road / Speed",
    icon: Car,
    delay: 0.75
  }
];

const growthMetrics = [
  "More attention",
  "Better brand recall",
  "Consistent content",
  "Higher trust"
];

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 560;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const angle = i * 0.42;
      const radius = 1.1 + ((i * 31) % 160) / 58;
      const wave = Math.sin(i * 0.21) * 0.55;

      data[i * 3] = Math.cos(angle) * radius;
      data[i * 3 + 1] = (((i * 17) % 120) / 120 - 0.5) * 3.9 + wave;
      data[i * 3 + 2] = Math.sin(angle) * radius;
    }

    return data;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.045;
    points.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22) * 0.06;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#f8fbff"
        transparent
        opacity={0.52}
        depthWrite={false}
      />
    </points>
  );
}

function EnergyRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * 0.08;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.32) * 0.08;
  });

  return (
    <group ref={group} rotation={[0.75, 0.15, -0.45]}>
      <mesh scale={2.1}>
        <torusGeometry args={[1.22, 0.01, 10, 180]} />
        <meshBasicMaterial color="#ff5a1f" transparent opacity={0.74} />
      </mesh>
      <mesh scale={2.62} rotation={[0.2, 0.3, 0.65]}>
        <torusGeometry args={[1.12, 0.008, 10, 180]} />
        <meshBasicMaterial color="#23d5ff" transparent opacity={0.42} />
      </mesh>
      <mesh scale={1.55} rotation={[0.4, -0.2, 1.25]}>
        <torusGeometry args={[1.08, 0.006, 10, 150]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.34} />
      </mesh>
    </group>
  );
}

function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.45]}
      camera={{ position: [0, 0, 5.8], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 1.4, 3]} intensity={4.2} color="#23d5ff" />
        <pointLight position={[-3, -1.6, 2]} intensity={4.8} color="#ff5a1f" />
        <ParticleField />
        <EnergyRings />
        <Sparkles
          count={32}
          speed={0.2}
          size={2.1}
          color="#ffffff"
          opacity={0.28}
          scale={[4.8, 3.4, 4.8]}
        />
      </Suspense>
    </Canvas>
  );
}

function ServiceReelFrame() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[21.5rem] -translate-x-1/2 -translate-y-1/2 sm:w-[24rem] md:w-[27rem]">
      <motion.div
        className="relative max-h-[78svh] overflow-hidden rounded-[2rem] border border-white/15 bg-black/62 shadow-[0_0_80px_rgba(35,213,255,0.16),0_0_110px_rgba(255,90,31,0.12)] backdrop-blur-2xl"
        initial={{ opacity: 0, y: 36, scale: 0.94, filter: "blur(18px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
      >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,90,31,0.18),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(35,213,255,0.14),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_18px] opacity-35" />
      <motion.div
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-electric/18 to-transparent"
        animate={{ y: ["-100%", "460%"] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_18px_rgba(255,90,31,0.9)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_18px_rgba(35,213,255,0.75)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/44">
            Service reel
          </p>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[1.55rem] border border-white/10 bg-white/[0.035] p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.10),transparent_32%)]" />
          <motion.div
            className="relative mx-auto grid h-28 w-28 place-items-center rounded-[1.7rem] bg-white shadow-[0_0_45px_rgba(255,90,31,0.28),0_0_65px_rgba(35,213,255,0.20)] sm:h-32 sm:w-32"
            initial={{ y: 28, scale: 0.5, rotate: -10, opacity: 0 }}
            animate={{
              y: [0, -8, 0],
              scale: 1,
              rotate: [-1, 1.4, -1],
              opacity: 1
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.65 },
              scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Image
              src="/brand/magadh-digital-logo.jpg"
              alt="Magadh Digital logo"
              fill
              priority
              sizes="132px"
              className="object-contain p-3"
            />
          </motion.div>

          <motion.div
            className="relative mt-5 text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-orange">
              Entry frame / Magadh Digital
            </p>
            <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-normal text-white sm:text-2xl">
              Business growth content engine
            </h3>
            <p className="mx-auto mt-2 max-w-[18rem] text-xs leading-5 text-white/52">
              Strategy, visuals, reels, websites and campaigns built to make
              brands look sharper and grow faster.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-4 grid gap-2">
          {serviceVisuals.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.62,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.25 + item.delay
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/42">
                    <Icon className="h-4 w-4 text-orange" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                      {item.meta}
                    </span>
                  </span>
                </div>
                <motion.span
                  className="h-1.5 w-14 overflow-hidden rounded-full bg-white/10"
                  initial={false}
                >
                  <motion.span
                    className="block h-full rounded-full bg-gradient-to-r from-orange to-electric"
                    animate={{ width: ["30%", "86%", "48%"] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay
                    }}
                  />
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-4 rounded-2xl border border-orange/20 bg-orange/10 p-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 2.2 }}
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-orange" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Growth outcomes
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {growthMetrics.map((metric, index) => (
              <motion.span
                key={metric}
                className="rounded-full border border-white/10 bg-black/28 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white/58"
                animate={{ opacity: [0.46, 1, 0.46] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.22
                }}
              >
                {metric}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
}

export function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden md:w-[58%]"
      data-webgl-scene
    >
      <div className="absolute inset-0 opacity-70">
        <HeroCanvas />
      </div>

      <div className="absolute inset-y-20 right-[-74%] w-[30rem] opacity-40 sm:right-[-40%] sm:opacity-55 md:inset-y-24 md:right-[3%] md:w-[34rem] md:opacity-100 lg:right-[6%]">
        <motion.div
          className="relative h-full w-full"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-[2px]" />
          <div className="absolute inset-16 rounded-full border border-orange/20" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.12] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/[0.12] blur-3xl" />
          <ServiceReelFrame />
        </motion.div>
      </div>
    </div>
  );
}
