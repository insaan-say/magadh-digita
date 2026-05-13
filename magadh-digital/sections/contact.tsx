"use client";

import { FormEvent, useState } from "react";
import { Instagram, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks } from "@/lib/data";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="relative block">
      {children}
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-[0.18em] text-white/38 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/34 peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-electric">
        {label}
      </span>
    </label>
  );
}

export function ContactSection() {
  const scope = useGsapReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const brand = String(formData.get("brand") || "");
    const contact = String(formData.get("contact") || "");
    const service = String(formData.get("service") || "");
    const brief = String(formData.get("brief") || "");
    const subject = encodeURIComponent(`Project enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Brand: ${brand}`,
        `Phone or email: ${contact}`,
        `Service: ${service}`,
        "",
        "Project brief:",
        brief
      ].join("\n")
    );

    setSent(true);
    window.location.href = `${contactLinks.mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={scope}
      id="contact"
      className="relative overflow-hidden bg-[#060606] py-28 md:py-36"
    >
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-orange/14 blur-3xl" />
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Start a project"
              title="Let's build something Patna talks about."
              copy="Share the brand, campaign or shoot you want to create. Magadh Digital can help with strategy, visuals, content systems and the website behind it."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2" data-reveal>
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-electric/60 hover:bg-electric/10"
              >
                <MessageCircle className="h-6 w-6 text-electric" />
                <p className="mt-8 text-lg font-semibold text-white">WhatsApp</p>
                <p className="mt-2 text-sm text-white/46">{contactLinks.phone}</p>
              </a>
              <a
                href={contactLinks.phoneHref}
                className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-electric/60 hover:bg-electric/10"
              >
                <Phone className="h-6 w-6 text-electric" />
                <p className="mt-8 text-lg font-semibold text-white">Call</p>
                <p className="mt-2 text-sm text-white/46">{contactLinks.phone}</p>
              </a>
              <a
                href={contactLinks.mailto}
                className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-orange/60 hover:bg-orange/10"
              >
                <Mail className="h-6 w-6 text-orange" />
                <p className="mt-8 text-lg font-semibold text-white">Email</p>
                <p className="mt-2 break-all text-sm text-white/46">
                  {contactLinks.email}
                </p>
              </a>
              <a
                href="https://www.instagram.com/magadh.digital?igsh=MWk4c2FyaG43ZDg0Zg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener"
                className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-orange/60 hover:bg-orange/10"
              >
                <Instagram className="h-6 w-6 text-orange" />
                <p className="mt-8 text-lg font-semibold text-white">Instagram</p>
                <p className="mt-2 text-sm text-white/46">See the studio signal</p>
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            className="glass-panel relative overflow-hidden rounded-[36px] p-5 md:p-8"
            data-reveal
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric/16 blur-3xl" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name">
                <Input name="name" placeholder="Name" required />
              </Field>
              <Field label="Brand">
                <Input name="brand" placeholder="Brand" />
              </Field>
              <Field label="Phone or email">
                <Input name="contact" placeholder="Phone or email" required />
              </Field>
              <Field label="Service">
                <Input name="service" placeholder="Service" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Project brief">
                  <Textarea name="brief" placeholder="Project brief" required />
                </Field>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="orange" size="lg">
                <Send className="h-4 w-4" />
                Send Enquiry
              </Button>
              {sent ? (
                <p className="text-sm text-electric">
                  Email compose opened. WhatsApp is fastest for urgent shoots.
                </p>
              ) : (
                <p className="text-sm text-white/42">
                  Response-first design, production and launch support.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
