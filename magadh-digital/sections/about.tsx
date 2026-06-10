"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, stats } from "@/lib/data";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

function StatCard({
  value,
  suffix,
  label
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div
      className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
    >
      <p className="text-3xl font-black text-white md:text-4xl">
        {value}
        {suffix}
      </p>
      <p className="mt-3 text-sm leading-6 text-white/54">{label}</p>
    </div>
  );
}

export function AboutSection() {
  const scope = useGsapReveal<HTMLElement>();

  return (
    <section ref={scope} id="about" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet/14 blur-3xl" />
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="About the studio"
            title={
              <>
                Bihar-born creative direction with a cinematic digital edge.
              </>
            }
            copy="Magadh Digital is a premium creative agency from Patna, founded by Aman Kumar to help ambitious brands look sharper, move faster and communicate with the confidence of a modern media company."
          />

          <div className="grid gap-4" data-reveal>
            <div className="glass-panel rounded-[32px] p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-electric">
                Founder story
              </p>
              <p className="mt-5 text-base leading-7 text-white/76 md:text-lg">
                Aman Kumar started Magadh Digital with a simple belief: regional
                brands deserve the same visual intensity, strategic polish and
                motion craft that global studios use. The result is a Patna-based
                studio that shoots, edits, brands and ships with taste.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {capabilities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-electric/10 opacity-0 transition group-hover:opacity-100" />
              <Icon className="relative h-6 w-6 text-orange" />
              <p className="relative mt-7 text-base font-semibold text-white md:text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
