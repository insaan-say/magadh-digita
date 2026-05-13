"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AnimatedCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const smoothX = useSpring(x, { damping: 28, stiffness: 180, mass: 0.4 });
  const smoothY = useSpring(y, { damping: 28, stiffness: 180, mass: 0.4 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="cursor-aura"
        style={{ left: smoothX, top: smoothY }}
      />
      <motion.div
        aria-hidden="true"
        className="cursor-core"
        style={{ left: x, top: y }}
      />
    </>
  );
}
