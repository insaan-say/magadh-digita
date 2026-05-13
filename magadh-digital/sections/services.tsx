"use client";

import { motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { services, type Service } from "@/lib/data";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const Icon = service.icon;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 12;
    const rotateX = ((y / bounds.height) - 0.5) * -12;
    setTilt({ rotateX, rotateY });
  };

  return (
    <motion.div
      className="group relative min-h-80 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
      style={{ transformStyle: "preserve-3d" }}
      animate={tilt}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.055, type: "spring", stiffness: 160, damping: 18 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
    >
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.accent}`} />
      <div className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${service.accent} opacity-[0.18] blur-3xl transition group-hover:opacity-[0.32]`} />
      <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/40">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <p className="mt-20 text-2xl font-semibold leading-tight text-white">
        {service.title}
      </p>
      <p className="mt-4 text-sm leading-7 text-white/58">{service.description}</p>
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/42">
          0{index + 1}
        </span>
        <span className="h-2 w-2 rounded-full bg-orange shadow-[0_0_18px_rgba(255,90,31,0.9)]" />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const scope = useGsapReveal<HTMLElement>();

  return (
    <section ref={scope} id="services" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(35,213,255,0.045),transparent)]" />
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Motion, marketing and brand systems for ambitious teams."
            copy="Each service is designed as a production lane, from shoot planning and editing to brand systems, websites and conversion-focused campaigns."
          />
          <p className="max-w-sm text-sm leading-7 text-white/50" data-reveal>
            We combine creative direction, field production and web craft so a
            brand does not feel assembled from disconnected vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
