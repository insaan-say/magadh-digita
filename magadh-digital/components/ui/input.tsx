"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "peer h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 pt-4 text-sm text-white outline-none transition placeholder:text-transparent focus:border-electric/70 focus:bg-electric/[0.04]",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
