import { PerkCard } from "@/components/shared/PerkCard";
import { SanityPerkData } from "@/types/Sanity/perk";
import { PERK_FALLBACK } from "@/lib/FallBack/perkFallback";

interface PerkSectionProps {
  data?: SanityPerkData | null;
}

export const PerkSection = ({ data }: PerkSectionProps) => {
  const d: typeof PERK_FALLBACK = {
    heading: data?.heading ?? PERK_FALLBACK.heading,
    perks:   data?.perks?.length ? data.perks : PERK_FALLBACK.perks,
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto mb-12 flex flex-col items-center justify-center text-center md:mb-16">
          <h2 className="max-w-[1000px] text-[32px] whitespace-pre-wrap font-semibold leading-[1.2] tracking-tight text-[#1b1b1b] md:text-[40px] lg:text-[56px]">
            {d.heading}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {d.perks.map((perk, index) => (
            <PerkCard key={index} perk={perk} />
          ))}
        </div>
      </div>
    </section>
  );
};
