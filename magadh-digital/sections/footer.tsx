import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { contactLinks, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(35,213,255,0.12),transparent_28rem)]" />
      <div className="section-shell relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-5xl font-black uppercase leading-none tracking-normal text-white md:text-7xl">
              MD
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.34em] text-white/44">
              Magadh Digital / Patna, Bihar
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/54 transition hover:border-orange/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/42">
            (c) 2026 Magadh Digital. Founded by Aman Kumar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={contactLinks.phoneHref}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm text-white/62 transition hover:border-electric/60 hover:text-electric"
              aria-label="Call Magadh Digital"
            >
              <Phone className="h-4 w-4" />
              {contactLinks.phone}
            </a>
            <a
              href={contactLinks.mailto}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-sm text-white/62 transition hover:border-orange/60 hover:text-orange"
              aria-label="Email Magadh Digital"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">{contactLinks.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/62 transition hover:border-electric/60 hover:text-electric"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={contactLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/62 transition hover:border-orange/60 hover:text-orange"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
