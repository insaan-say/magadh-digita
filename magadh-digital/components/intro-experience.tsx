"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const particleSeeds = Array.from({ length: 74 }, (_, index) => {
  const angle = (index / 74) * Math.PI * 2;
  const distance = 120 + ((index * 29) % 180);
  return {
    id: index,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size: 2 + ((index * 7) % 5),
    delay: (index % 9) * 0.018
  };
});

function playIntroTone() {
  if (typeof window === "undefined") return;

  const AudioContextCtor =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextCtor) return;

  const context = new AudioContextCtor();
  const oscillator = context.createOscillator();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(58, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(92, context.currentTime + 1.15);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(420, context.currentTime);
  filter.frequency.exponentialRampToValueAtTime(1200, context.currentTime + 1);

  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.025, context.currentTime + 0.18);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 1.9);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 2);

  window.setTimeout(() => {
    context.close().catch(() => undefined);
  }, 2200);
}

export function IntroExperience() {
  const [activated, setActivated] = useState(false);
  const [complete, setComplete] = useState(false);
  const particles = useMemo(() => particleSeeds, []);

  const ignite = () => {
    if (activated) return;
    setActivated(true);
    playIntroTone();
    window.setTimeout(() => setComplete(true), 2700);
  };

  return (
    <AnimatePresence>
      {!complete ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(18px)" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,213,255,0.10),transparent_26rem)]" />
          <div className="cinematic-grid absolute inset-0 opacity-45" />
          <motion.div
            className="absolute h-[42rem] w-[42rem] rounded-full border border-electric/10"
            animate={{ scale: activated ? [1, 1.25, 2.4] : [0.94, 1.03, 0.94] }}
            transition={{
              duration: activated ? 1.45 : 4,
              repeat: activated ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-orange/10 blur-3xl"
            animate={{
              scale: activated ? 5 : [1, 1.2, 1],
              opacity: activated ? [0.35, 0.85, 0] : [0.4, 0.65, 0.4]
            }}
            transition={{
              duration: activated ? 1.6 : 3.8,
              repeat: activated ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />

          {particles.map((particle) => (
            <motion.span
              aria-hidden="true"
              key={particle.id}
              className="absolute left-1/2 top-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(35,213,255,0.9)]"
              style={{ height: particle.size, width: particle.size }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
              animate={
                activated
                  ? {
                      x: particle.x,
                      y: particle.y,
                      opacity: [0, 1, 0],
                      scale: [0.2, 1.4, 0.1]
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 1.25,
                delay: particle.delay,
                ease: [0.16, 1, 0.3, 1]
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center">
            <motion.button
              type="button"
              aria-label="Enter Magadh Digital"
              onClick={ignite}
              className="group relative grid h-36 w-36 place-items-center overflow-hidden rounded-[2rem] border border-white/20 bg-white text-white shadow-blue-glow outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-electric md:h-44 md:w-44"
              initial={{ scale: 0.2, opacity: 0, filter: "blur(16px)" }}
              animate={{
                scale: activated ? [1, 1.2, 8] : 1,
                opacity: activated ? [1, 1, 0] : 1,
                filter: activated ? ["blur(0px)", "blur(0px)", "blur(22px)"] : "blur(0px)"
              }}
              transition={{
                duration: activated ? 1.45 : 1.1,
                delay: activated ? 0 : 0.35,
                ease: [0.76, 0, 0.24, 1]
              }}
            >
              <span className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-electric/20 via-transparent to-orange/25 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute inset-[-1px] rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(255,90,31,0.18),transparent_55%)]" />
              <Image
                src="/brand/magadh-digital-logo.jpg"
                alt="Magadh Digital logo"
                fill
                priority
                sizes="(min-width: 768px) 176px, 144px"
                className="relative z-10 object-contain p-4"
              />
            </motion.button>

            <motion.div
              className="mt-12 overflow-hidden text-center"
              initial={false}
              animate={activated ? "show" : "hide"}
            >
              <motion.p
                className="font-mono text-xs uppercase tracking-[0.6em] text-white/50"
                variants={{
                  hide: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                Patna / Bihar / Cinema
              </motion.p>
              <motion.h1
                className="mt-4 text-4xl font-black uppercase leading-none tracking-normal text-white md:text-7xl"
                variants={{
                  hide: { y: "120%", filter: "blur(18px)" },
                  show: { y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 1, delay: 0.85, ease: [0.76, 0, 0.24, 1] }}
              >
                Magadh Digital
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
