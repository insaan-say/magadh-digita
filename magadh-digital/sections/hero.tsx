"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { RotatingServices } from "@/components/hero/rotating-services";
import { HeroScene } from "@/components/hero/hero-service-reel";

const heroWords = ["WE BUILD", "CINEMATIC", "DIGITAL", "EXPERIENCES"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="noise relative flex min-h-[88svh] overflow-hidden pt-24 md:pt-28"
    >
      <div className="absolute inset-0 bg-radial-grid opacity-70" />
      <div className="cinematic-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/68 to-transparent" />
      <div className="absolute right-[-18%] top-24 h-[38rem] w-[38rem] rounded-full bg-electric/8 blur-3xl md:right-[-8%]" />
      <div className="absolute bottom-[-18rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-orange/10 blur-3xl" />

      <HeroScene />

      <div className="section-shell z-10 flex min-h-[calc(88svh-7rem)] flex-col justify-center pb-16 md:pb-20">
        <div className="max-w-5xl">
          <p className="mb-4 max-w-2xl font-mono text-[11px] uppercase tracking-[0.28em] text-orange">
            Premium creative technology studio / Patna
          </p>

          <h1 className="max-w-[560px] text-balance text-[clamp(1.75rem,4.1vw,4.35rem)] font-black uppercase leading-[1.04] tracking-normal text-white drop-shadow-[0_10px_34px_rgba(0,0,0,0.78)] md:leading-[1]">
            {heroWords.map((word) => (
              <span key={word} className="block pb-1">
                {word}
              </span>
            ))}
          </h1>

          <div className="mt-6 grid max-w-3xl gap-5 lg:grid-cols-[minmax(0,460px)_auto] lg:items-end">
            <p className="max-w-md text-[15px] leading-6 text-white/68 md:text-base md:leading-7">
              Premium branding, cinematic content and modern digital presence for
              ambitious brands.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#portfolio">View Portfolio</MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                Start Project
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <RotatingServices />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-white/10 bg-black/40 py-3 backdrop-blur-xl">
        <div className="section-shell flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/48">
          <span>Magadh Digital</span>
          <span>Patna Studio</span>
          <span>Restaurant Branding</span>
          <span>Automotive Cinema</span>
        </div>
      </div>
    </section>
  );
}
