import Image from "next/image";
import Link from "next/link";
import { SanitySupportData } from "@/types/Sanity/support";
import { SUPPORT_FALLBACK } from "@/lib/FallBack/supportFallback";

interface SupportSectionProps {
  data?: SanitySupportData | null;
}

export const SupportSection = ({ data }: SupportSectionProps) => {
  const d: typeof SUPPORT_FALLBACK = {
    heading:     data?.heading     ?? SUPPORT_FALLBACK.heading,
    description: data?.description ?? SUPPORT_FALLBACK.description,
    ctaLabel:    data?.ctaLabel    ?? SUPPORT_FALLBACK.ctaLabel,
    ctaHref:     data?.ctaHref     ?? SUPPORT_FALLBACK.ctaHref,
    image:       data?.image       ?? SUPPORT_FALLBACK.image,
  }

  return (
    <section className="w-full bg-white py-[60px] px-5 md:px-10">
      {/* Wide card — flush image on right */}
      <div
        className="mx-auto rounded-[20px] bg-[#F0F5E4] flex flex-col md:flex-row overflow-hidden max-w-[1200px]"
      >
        {/* Left: Text */}
        <div className="flex-[0_0_58%] px-6 py-10 md:px-16 md:py-14 flex flex-col justify-center">
          <h2 className="text-[#024930] text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] tracking-[-1.5px] mb-5">
            {d.heading}
          </h2>
          <p className="text-[#024930] text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-[480px]">
            {d.description}
          </p>
          <div>
            <Link
              href={d.ctaHref}
              className="inline-block bg-[#024930] text-white text-[14px] font-semibold px-7 py-[14px] rounded-full hover:opacity-90 transition-opacity"
            >
              {d.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-[0_0_42%] flex items-center justify-center px-6 pb-10 md:py-8 md:pr-8 md:pl-4">
          <div className="relative w-full h-[320px] md:h-[380px] rounded-[16px] overflow-hidden">
            <Image
              src={d.image}
              alt="Support Cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
