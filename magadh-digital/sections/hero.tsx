"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { getGsap } from "@/animations/gsap";
import { contactLinks } from "@/lib/data";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((mod) => mod.HeroScene),
  { ssr: false }
);

const heroWords = ["WE BUILD", "CINEMATIC", "DIGITAL", "EXPERIENCES"];

export function HeroSection() {
  const scope = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!scope.current) return;
    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { yPercent: 110, filter: "blur(18px)", opacity: 0 },
        {
          yPercent: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.05,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.2
        }
      );

      gsap.fromTo(
        ".hero-support",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.9, ease: "power3.out" }
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      id="home"
      className="noise relative flex min-h-[100svh] overflow-hidden pt-28"
    >
      <div className="absolute inset-0 bg-radial-grid opacity-90" />
      <div className="cinematic-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/68 to-transparent" />

      <motion.div
        className="absolute right-[-20%] top-24 h-[52rem] w-[52rem] rounded-full bg-electric/10 blur-3xl md:right-[-8%]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.88, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-22rem] left-[-10rem] h-[38rem] w-[38rem] rounded-full bg-orange/14 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.72, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <HeroScene />

      <div className="section-shell z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-20">
        <div className="max-w-5xl">
          <p className="hero-support mb-5 font-mono text-xs uppercase tracking-[0.38em] text-orange opacity-0">
            Premium creative technology studio / Patna
          </p>

          <h1 className="max-w-[760px] text-balance text-[clamp(2.6rem,6.6vw,6.85rem)] font-black uppercase leading-[0.92] tracking-normal text-white drop-shadow-[0_10px_34px_rgba(0,0,0,0.78)] md:leading-[0.9]">
            {heroWords.map((word) => (
              <span key={word} className="block overflow-hidden pb-2">
                <span className="hero-word block opacity-0">{word}</span>
              </span>
            ))}
          </h1>

          <div className="hero-support mt-7 grid max-w-4xl gap-6 opacity-0 lg:grid-cols-[minmax(0,560px)_auto] lg:items-end">
            <p className="max-w-xl text-base leading-7 text-white/68 md:text-lg md:leading-8">
              Premium branding, cinematic content and modern digital presence for
              ambitious brands.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#portfolio">View Portfolio</MagneticButton>
              <MagneticButton
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                Start Project
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="hero-support mt-14 flex flex-wrap items-center gap-3 opacity-0">
          {["Cinematic Reels", "Digital Marketing", "Branding", "Websites"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60 backdrop-blur-xl"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-white/10 bg-black/40 py-3 backdrop-blur-xl">
        <div className="flex w-max animate-marquee gap-8 font-mono text-xs uppercase tracking-[0.36em] text-white/48">
          {Array.from({ length: 2 }).map((_, repeat) => (
            <div className="flex gap-8" key={repeat}>
              <span>Magadh Digital</span>
              <span>Patna Studio</span>
              <span>Restaurant Branding</span>
              <span>Automotive Cinema</span>
              <span>Founder Aman Kumar</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
