"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "peer min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-electric/70 focus:bg-electric/[0.04]",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
