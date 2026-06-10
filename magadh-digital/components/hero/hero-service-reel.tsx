import Image from "next/image";
import {
  Brush,
  Car,
  Code2,
  Film,
  Megaphone,
  Search,
  UtensilsCrossed
} from "lucide-react";

const serviceVisuals = [
  { label: "Social Media", meta: "Growth / Calendar", icon: Megaphone },
  { label: "Reel Editing", meta: "Frames / Cuts", icon: Film },
  { label: "Brand Identity", meta: "Logo / Launch", icon: Brush },
  { label: "Websites", meta: "Design / Speed", icon: Code2 },
  { label: "SEO", meta: "Search / Leads", icon: Search },
  { label: "Restaurant Shoots", meta: "Food / Venue", icon: UtensilsCrossed },
  { label: "Automotive Shoots", meta: "Road / Detail", icon: Car }
];

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block">
      <div className="absolute inset-y-28 right-[7%] w-[27rem]">
        <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/48 p-4 shadow-[0_0_70px_rgba(35,213,255,0.10)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,90,31,0.16),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(35,213,255,0.12),transparent_34%)]" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-orange" />
              <span className="h-2.5 w-2.5 rounded-full bg-electric" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/44">
              Growth system
            </p>
          </div>

          <div className="relative mt-5 rounded-[1.45rem] border border-white/10 bg-white/[0.045] p-5 text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.35rem] bg-white shadow-[0_0_38px_rgba(255,90,31,0.18)]">
              <Image
                src="/brand/magadh-digital-logo.jpg"
                alt="Magadh Digital logo"
                width={104}
                height={104}
                priority
                className="h-full w-full object-contain p-3"
              />
            </div>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.28em] text-orange">
              Magadh Digital / Patna
            </p>
            <h3 className="mx-auto mt-2 max-w-sm text-xl font-black uppercase leading-tight tracking-normal text-white">
              Business growth content engine
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-white/56">
              Strategy, content, websites and campaigns that make brands look
              sharper and convert faster.
            </p>
          </div>

          <div className="relative mt-4 grid gap-2">
            {serviceVisuals.slice(0, 3).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/42">
                      <Icon className="h-4 w-4 text-orange" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                        {item.meta}
                      </span>
                    </span>
                  </div>
                  <span className="h-1.5 w-14 rounded-full bg-gradient-to-r from-orange to-electric" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
