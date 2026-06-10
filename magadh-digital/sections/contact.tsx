"use client";

import { Instagram, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { OFFICIAL_CONTACT } from "@/constants/contact";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export function ContactSection() {
  const scope = useGsapReveal<HTMLElement>();

  return (
    <section
      ref={scope}
      id="contact"
      className="relative overflow-hidden bg-[#060606] py-20 md:py-32"
    >
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-orange/10 blur-3xl" />
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Start a project"
              title="Let's build something Patna talks about."
              copy="Submit your inquiry directly from the website. We store it securely, notify the studio, and use the details to plan the right growth path for your brand."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2" data-reveal>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <Phone className="h-5 w-5 text-electric" />
                <p className="mt-6 text-base font-semibold text-white">Phone</p>
                <p className="mt-2 text-sm text-white/52">{OFFICIAL_CONTACT.phone}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
                <Mail className="h-5 w-5 text-orange" />
                <p className="mt-6 text-base font-semibold text-white">Email</p>
                <p className="mt-2 break-all text-sm text-white/52">
                  {OFFICIAL_CONTACT.email}
                </p>
              </div>
              <a
                href={OFFICIAL_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-orange/60 hover:bg-orange/10 sm:col-span-2"
              >
                <Instagram className="h-5 w-5 text-orange" />
                <p className="mt-6 text-base font-semibold text-white">Instagram</p>
                <p className="mt-2 text-sm text-white/52">Studio work and reels</p>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
