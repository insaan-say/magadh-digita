"use client";

import { useEffect, useRef, useState } from "react";

export function LazyServiceVideo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden rounded-[1.55rem] opacity-35 mix-blend-screen"
      aria-hidden="true"
    >
      {active ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/service-reel.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
