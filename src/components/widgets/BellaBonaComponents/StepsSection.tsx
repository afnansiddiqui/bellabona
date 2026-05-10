import { StepCard } from "@/components/shared/StepCard";
import { SanityStepsData } from "@/types/Sanity/steps";
import { STEPS_FALLBACK } from "@/lib/FallBack/stepsFallback";
import Link from "next/link";

interface StepsSectionProps {
  data?: SanityStepsData | null;
}

export const StepsSection = ({ data }: StepsSectionProps) => {
  const d: typeof STEPS_FALLBACK = {
    heading:  data?.heading  ?? STEPS_FALLBACK.heading,
    ctaLabel: data?.ctaLabel ?? STEPS_FALLBACK.ctaLabel,
    ctaHref:  data?.ctaHref  ?? STEPS_FALLBACK.ctaHref,
    steps:    data?.steps?.length ? data.steps : STEPS_FALLBACK.steps,
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Heading */}
        <h2 className="mx-auto mb-12 max-w-[800px] whitespace-pre-wrap text-center text-[32px] font-bold leading-[1.2] text-[#1d0505] md:mb-16 md:text-[46px] lg:text-[56px]">
          {d.heading}
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {d.steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center md:mt-16">
          <Link href={d.ctaHref || "#"}>
            <button className="rounded-full bg-[#1a442e] px-8 py-3.5 text-[15px] font-medium text-white transition-all hover:opacity-90 hover:shadow-md">
              {d.ctaLabel}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
