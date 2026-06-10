import { cookies } from "next/headers";
import { AdminLogin } from "@/components/dashboard/admin-login";
import { AdminLogout } from "@/components/dashboard/admin-logout";
import { hasSupabaseConfig } from "@/lib/server/env";
import { getAdminCookieName, verifyAdminToken } from "@/lib/server/admin-auth";
import { createServerSupabaseClient } from "@/lib/server/supabase";
import type { AnalyticsEvent } from "@/types/lead";

export const dynamic = "force-dynamic";

type DashboardData = {
  events: AnalyticsEvent[];
};

function StatCard({
  label,
  value
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm uppercase tracking-[0.18em] text-white/40">{label}</p>
      <p className="mt-5 text-4xl font-black text-white">{value}</p>
    </div>
  );
}

function countBy<T extends Record<string, unknown>>(items: T[], key: keyof T) {
  return items.reduce<Record<string, number>>((acc, item) => {
    const value = String(item[key] || "Unknown");
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function BarList({ data }: { data: Record<string, number> }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = Math.max(...entries.map(([, value]) => value), 1);

  return (
    <div className="space-y-3">
      {entries.map(([label, value]) => (
        <div key={label}>
          <div className="flex justify-between text-sm text-white/64">
            <span>{label}</span>
            <span>{value}</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange to-electric"
              style={{ width: `${(value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

async function getDashboardData(): Promise<DashboardData> {
  if (!hasSupabaseConfig()) {
    return { events: [] };
  }

  const supabase = createServerSupabaseClient();
  const events = await supabase
    .from("analytics_events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  return {
    events: (events.data || []) as AnalyticsEvent[]
  };
}

export default async function MagadhAdminPage() {
  const token = (await cookies()).get(getAdminCookieName())?.value;
  const authenticated = verifyAdminToken(token);

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-black px-4 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-orange">
            Magadh Digital
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-normal md:text-6xl">
            Owner dashboard
          </h1>
          <p className="mt-4 text-white/52">
            Hidden analytics dashboard. Login is protected by the
            `MAGADH_ADMIN_PASSWORD` environment variable.
          </p>
          <AdminLogin />
        </div>
      </main>
    );
  }

  const data = await getDashboardData();
  const visitors = new Set(data.events.map((event) => event.session_id)).size;
  const avgDuration =
    data.events.length > 0
      ? Math.round(
          data.events.reduce((sum, event) => sum + (event.duration_seconds || 0), 0) /
            data.events.length
        )
      : 0;

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-orange">
              Magadh Admin
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-normal md:text-6xl">
              Analytics dashboard
            </h1>
          </div>
          <AdminLogout />
        </header>

        {!hasSupabaseConfig() ? (
          <div className="mt-8 rounded-[24px] border border-orange/30 bg-orange/10 p-5 text-orange">
            Supabase env is not configured yet, so dashboard data is empty.
          </div>
        ) : null}

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Visitors" value={visitors} />
          <StatCard label="Events" value={data.events.length} />
          <StatCard
            label="Page views"
            value={data.events.filter((event) => event.event_name === "page_view").length}
          />
          <StatCard label="Avg time" value={`${avgDuration}s`} />
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-semibold">Device type</h2>
            <div className="mt-5">
              <BarList data={countBy(data.events, "device_type")} />
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-semibold">Visitor source</h2>
            <div className="mt-5">
              <BarList data={countBy(data.events, "source")} />
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-semibold">City/location</h2>
            <div className="mt-5">
              <BarList data={countBy(data.events, "city")} />
            </div>
          </div>
        </section>
        <section className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-white/58">
          Contact form submissions are sent by email only and are not stored in
          the database.
        </section>
      </div>
    </main>
  );
}
