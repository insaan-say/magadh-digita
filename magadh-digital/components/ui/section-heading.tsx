import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)} data-reveal>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-orange">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-[1.04] tracking-normal text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/62 md:text-base md:leading-7">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
