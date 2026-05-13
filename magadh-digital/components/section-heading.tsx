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
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.34em] text-orange">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-normal text-white md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/62 md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
