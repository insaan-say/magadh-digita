"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Play, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioCategory,
  type PortfolioProject
} from "@/lib/data";
import { cn } from "@/lib/utils";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

const aspectClass = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[9/12]",
  "aspect-[4/5]",
  "aspect-[1/1]"
];

function ProjectModal({
  project,
  open,
  onOpenChange
}: {
  project: PortfolioProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {project ? (
          <div className="grid max-h-[88svh] overflow-y-auto lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/74 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
                {project.category}
              </div>
            </div>

            <div className="p-6 md:p-10">
              <DialogHeader>
                <p className="font-mono text-xs uppercase tracking-[0.34em] text-orange">
                  {project.client} / {project.year}
                </p>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.description}</DialogDescription>
              </DialogHeader>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/38">
                    Format
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    {project.format}
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/38">
                    Mood
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">
                    {project.mood}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/64"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-electric"
                >
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export function PortfolioSection() {
  const scope = useGsapReveal<HTMLElement>();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(
    null
  );

  const projects = useMemo(() => {
    if (activeCategory === "All") return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      ref={scope}
      id="portfolio"
      className="relative overflow-hidden bg-[#070707] py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(255,90,31,0.12),transparent_28rem),radial-gradient(circle_at_0%_30%,rgba(35,213,255,0.09),transparent_24rem)]" />
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work with the weight of cinema and the speed of social."
            copy="A curated showcase of campaigns, restaurant visuals, cafe content, brand systems and automotive frames produced for clients across Patna and Bihar."
          />

          <div
            className="flex max-w-2xl flex-wrap gap-2 rounded-[28px] border border-white/10 bg-white/[0.035] p-2 backdrop-blur-xl"
            data-reveal
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                  activeCategory === category
                    ? "bg-white text-black"
                    : "text-white/54 hover:bg-white/10 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3" data-reveal>
          <MagneticButton href="#contact">
            Submit Inquiry
          </MagneticButton>
          <MagneticButton href="#services" variant="outline">
            Explore Services
          </MagneticButton>
        </div>

        <div className="masonry mt-14">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className="masonry-item group block w-full text-left"
              onClick={() => setSelectedProject(project)}
            >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]",
                    aspectClass[index % aspectClass.length]
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1180px) 32vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/12 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.18),transparent_22rem)]" />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/42 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/70 backdrop-blur-xl">
                    <Play className="h-3.5 w-3.5 fill-white" />
                    Preview
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-orange">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight text-white md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/58">{project.client}</p>
                  </div>
                </div>
            </button>
          ))}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      />
    </section>
  );
}
