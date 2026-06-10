"use client";

import { Quote } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const scope = useGsapReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section ref={scope} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_30rem)]" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Creative work that feels polished before the audience ever scrolls."
          copy="The studio focuses on clarity, taste and cinematic pacing, whether the project is a corporate campaign, cafe launch or automotive reel."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_0.45fr]">
          <div className="glass-panel relative min-h-[360px] overflow-hidden rounded-[34px] p-7 md:p-10">
            <div className="absolute right-8 top-8 h-36 w-36 rounded-full bg-electric/12 blur-3xl" />
            <Quote className="h-10 w-10 text-orange" />

            <div className="mt-12">
              <p className="text-balance text-2xl font-semibold leading-tight text-white md:text-4xl">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-10">
                <p className="text-lg font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/42">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.name}
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-[28px] border p-5 text-left transition",
                  active === index
                    ? "border-orange/50 bg-orange/10"
                    : "border-white/10 bg-white/[0.035] hover:bg-white/[0.06]"
                )}
              >
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-2 text-sm text-white/48">{item.role}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
