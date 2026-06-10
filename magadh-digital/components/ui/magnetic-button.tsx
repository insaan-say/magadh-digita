"use client";

import { ArrowUpRight } from "lucide-react";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  children: ReactNode;
  variant?: "solid" | "outline";
  icon?: boolean;
};

export function MagneticButton({
  children,
  className,
  variant = "solid",
  icon = true,
  ...props
}: MagneticButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-xs font-semibold uppercase tracking-[0.11em] transition md:h-[3.25rem] md:px-7",
        variant === "solid"
          ? "bg-white text-black shadow-glow hover:bg-electric"
          : "border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl hover:border-orange/60 hover:bg-orange/10",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
      {icon ? (
        <ArrowUpRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </a>
  );
}
