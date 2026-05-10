import { StatCard } from "@/components/shared/StatCard";
import { SanityStatsData } from "@/types/Sanity/stats";
import { STATS_FALLBACK } from "@/lib/FallBack/statsFallback";

interface StatsSectionProps {
  data?: SanityStatsData | null;
}

export const StatsSection = ({ data }: StatsSectionProps) => {
  const d: typeof STATS_FALLBACK = {
    stats: data?.stats?.length ? data.stats : STATS_FALLBACK.stats,
  }

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {d.stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};
