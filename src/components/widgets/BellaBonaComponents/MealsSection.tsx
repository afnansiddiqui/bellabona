import { MealCard } from "@/components/shared/MealCard";
import { SanityMealsData } from "@/types/Sanity/meals";
import { MEALS_FALLBACK } from "@/lib/FallBack/mealsFallback";
import Link from "next/link";

interface MealsSectionProps {
  data?: SanityMealsData | null;
}

export const MealsSection = ({ data }: MealsSectionProps) => {
  const d: typeof MEALS_FALLBACK = {
    heading:  data?.heading  ?? MEALS_FALLBACK.heading,
    ctaLabel: data?.ctaLabel ?? MEALS_FALLBACK.ctaLabel,
    ctaHref:  data?.ctaHref  ?? MEALS_FALLBACK.ctaHref,
    meals:    data?.meals?.length ? data.meals : MEALS_FALLBACK.meals,
  }

  return (
    <section className="bg-[#E6FBA0] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        {/* Heading */}
        <h2 className="mx-auto mb-12 max-w-[900px] whitespace-pre-wrap text-[32px] font-medium leading-[1.2] tracking-tight text-[#024930] md:mb-16 md:text-[48px] lg:text-[52px]">
          {d.heading}
        </h2>

        {/* Cards Wrapper: Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:grid md:grid-cols-2 md:gap-6 md:overflow-x-visible md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {d.meals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-16">
          <Link href={d.ctaHref || "#"}>
            <button className="w-full rounded-full bg-[#024930] px-8 py-4 text-[16px] font-medium text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg md:w-auto md:py-3.5">
              {d.ctaLabel}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
