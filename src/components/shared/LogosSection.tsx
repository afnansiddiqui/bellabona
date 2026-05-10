import Image from "next/image";
import { SanityLogosData } from "@/types/Sanity/logos";
import { LOGOS_FALLBACK } from "@/lib/FallBack/logosFallback";

interface LogosSectionProps {
  data?: SanityLogosData | null;
}

export const LogosSection = ({ data }: LogosSectionProps) => {
  const d: typeof LOGOS_FALLBACK = {
    heading: data?.heading ?? LOGOS_FALLBACK.heading,
    image:   data?.image   ?? LOGOS_FALLBACK.image,
  }

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16">
        <h3 className="text-center text-[24px] font-normal tracking-tight text-[#1f1f1f] md:text-[32px]">
          {d.heading}
        </h3>
        <div className="flex items-center justify-center">
          <Image
            src={d.image}
            alt="Customer logos"
            width={394}
            height={46}
            className="h-10 w-auto object-contain opacity-50 grayscale md:h-14"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
