"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/constants/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

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

function SelectField({
  label,
  name,
  options
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="relative block">
      <select
        name={name}
        required
        defaultValue=""
        className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 pt-4 text-sm text-white outline-none transition focus:border-electric/70 focus:bg-electric/[0.04]"
      >
        <option value="" disabled className="bg-black">
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-black">
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] uppercase tracking-[0.18em] text-white/38">
        {label}
      </span>
    </label>
  );
}

export function ContactForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const [toast, setToast] = useState<ToastState>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setToast(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      businessName: String(formData.get("businessName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      projectType: String(formData.get("projectType") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
      startedAt,
      source: typeof window !== "undefined" ? document.referrer || "direct" : "direct"
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit inquiry.");
      }

      form.reset();
      setToast({
        type: "success",
        message: "Your inquiry has been sent successfully. We will contact you soon."
      });
    } catch (error) {
      setToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit inquiry. Please try again."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="glass-panel relative overflow-hidden rounded-[32px] p-5 md:p-8"
      data-reveal
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric/10 blur-3xl" />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name">
          <Input name="name" placeholder="Name" required autoComplete="name" />
        </Field>
        <Field label="Business name">
          <Input name="businessName" placeholder="Business name" />
        </Field>
        <Field label="Phone">
          <Input name="phone" placeholder="Phone" required inputMode="tel" />
        </Field>
        <Field label="Email">
          <Input name="email" placeholder="Email" required type="email" />
        </Field>
        <SelectField label="Project type" name="projectType" options={PROJECT_TYPES} />
        <SelectField label="Budget" name="budget" options={BUDGET_RANGES} />
        <div className="md:col-span-2">
          <Field label="Message">
            <Textarea name="message" placeholder="Message" required />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="orange" size="lg" disabled={submitting}>
          <Send className="h-4 w-4" />
          {submitting ? "Sending..." : "Submit Inquiry"}
        </Button>
        <p className="text-sm text-white/42">
          Sent directly to Magadh Digital by email.
        </p>
      </div>

      {toast ? (
        <div
          role="status"
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            toast.type === "success"
              ? "border-electric/40 bg-electric/10 text-electric"
              : "border-orange/50 bg-orange/10 text-orange"
          }`}
        >
          {toast.message}
        </div>
      ) : null}
    </form>
  );
}
