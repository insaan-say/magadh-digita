"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/animations/gsap";

export function useGsapReveal<T extends HTMLElement>() {
  const scope = useRef<T | null>(null);

  useEffect(() => {
    if (!scope.current) return;

    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 48, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%"
            }
          }
        );
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return scope;
}
