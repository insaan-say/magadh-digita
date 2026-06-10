"use client";

import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function AutomotiveShowcase() {
  return (
    <section
      id="automotive"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      <div className="absolute inset-0 scale-105">
        <Image
          src="/portfolio/royal-enfield-xuv-hero.jpg"
          alt="Royal Enfield and Mahindra XUV cinematic frame"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.46]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.48),rgba(0,0,0,0.88))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(255,90,31,0.22),transparent_24rem)]" />
      <div className="smoke-layer" />

      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-orange">
              Automotive showcase
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2.35rem,6.4vw,5.6rem)] font-black uppercase leading-[0.9] tracking-normal text-white">
              Built for speed, smoke and road presence.
            </h2>
          </div>

          <div className="glass-panel rounded-[34px] p-6 md:p-8">
            <p className="text-base leading-7 text-white/76 md:text-lg">
              Our automobile work is framed like a trailer: low camera, hard
              contrast, motion blur, engine attitude and edits that make every
              machine feel heavier than the screen.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Royal Enfield", "Mahindra XUV", "Road reels"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/36 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <span className="mt-5 block h-1 rounded-full bg-gradient-to-r from-orange via-electric to-violet" />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <MagneticButton href="#contact" variant="outline">
                Book Automotive Shoot
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {[
            {
              src: "/portfolio/royal-enfield-road.jpg",
              title: "Motorcycle tension"
            },
            {
              src: "/portfolio/mahindra-xuv-dust.jpg",
              title: "SUV impact"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-semibold text-white md:text-2xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
