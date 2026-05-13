"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { capabilities, stats } from "@/lib/data";
import { useCountUp } from "@/hooks/use-count-up";
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
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
    >
      <p className="text-4xl font-black text-white md:text-5xl">
        {count}
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
            <motion.div
              className="glass-panel rounded-[32px] p-6 md:p-8"
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-electric">
                Founder story
              </p>
              <p className="mt-5 text-xl leading-8 text-white/76">
                Aman Kumar started Magadh Digital with a simple belief: regional
                brands deserve the same visual intensity, strategic polish and
                motion craft that global studios use. The result is a Patna-based
                studio that shoots, edits, brands and ships with taste.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {capabilities.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-5"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-electric/10 opacity-0 transition group-hover:opacity-100" />
              <Icon className="relative h-6 w-6 text-orange" />
              <p className="relative mt-8 text-lg font-semibold text-white">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
