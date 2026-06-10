"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -54% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:px-5">
        <a href="#home" className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
            <Image
              src="/brand/magadh-digital-logo.jpg"
              alt="Magadh Digital"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.18em] text-white sm:block">
            Magadh Digital
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                active === link.href ? "text-black" : "text-white/62 hover:text-white"
              )}
            >
              {active === link.href ? (
                <span className="absolute inset-0 rounded-full bg-white" />
              ) : null}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-orange/40 bg-orange/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange transition hover:bg-orange hover:text-white md:inline-flex"
        >
          Start Project
        </a>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-black/86 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/72 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
