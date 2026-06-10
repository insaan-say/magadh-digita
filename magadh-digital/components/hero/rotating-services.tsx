import { HERO_SERVICES } from "@/constants/services";

export function RotatingServices() {
  return (
    <div className="max-w-2xl rounded-[22px] border border-white/10 bg-black/34 p-3.5 backdrop-blur-xl md:p-4">
      <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/38 md:text-[10px]">
        We help businesses grow with
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {HERO_SERVICES.slice(0, 8).map((service) => (
          <span
            key={service}
            className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/70 md:px-3 md:py-2 md:text-[11px]"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}
