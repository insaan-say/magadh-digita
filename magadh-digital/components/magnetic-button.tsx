"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
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
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.45 }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;

        const relX = event.clientX - bounds.left - bounds.width / 2;
        const relY = event.clientY - bounds.top - bounds.height / 2;
        setPosition({ x: relX * 0.14, y: relY * 0.22 });
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      className={cn(
        "group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-7 text-sm font-semibold uppercase tracking-[0.12em] transition",
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
    </motion.a>
  );
}
