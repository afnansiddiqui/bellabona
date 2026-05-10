import Image from 'next/image'
import Link from 'next/link'
import { SanityCtaBannerData } from '@/types/Sanity/ctaBanner'
import { CTA_BANNER_FALLBACK } from '@/lib/FallBack/ctaBannerData'

interface CTABannerSectionProps {
  data?: SanityCtaBannerData | null
}

export const CTABannerSection = ({ data }: CTABannerSectionProps) => {
  const d: typeof CTA_BANNER_FALLBACK = {
    heading:  data?.heading  ?? CTA_BANNER_FALLBACK.heading,
    ctaLabel: data?.ctaLabel ?? CTA_BANNER_FALLBACK.ctaLabel,
    ctaHref:  data?.ctaHref  ?? CTA_BANNER_FALLBACK.ctaHref,
    image:    data?.image    ?? CTA_BANNER_FALLBACK.image,
  }

  return (
    <section className="bg-white py-20 md:py-28 border-b border-[#EAEAEA] md:border-b-0">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col overflow-hidden rounded-[24px] bg-[#FFF0ED] lg:flex-row lg:items-center">
          {/* Left Content */}
          <div className="flex w-full flex-col items-start justify-center p-6 md:p-12 lg:w-[58.33%] lg:px-[50px] lg:py-[60px]">
            <h2 className="mb-6 max-w-[500px] text-[28px] font-bold leading-[1.2] text-[#9A0103] md:text-[36px] lg:text-[50px]">
              {d.heading}
            </h2>
            <Link
              href={d.ctaHref}
              className="w-full rounded-full bg-[#9A0103] px-8 py-3.5 text-[16px] font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md md:w-auto text-center"
            >
              {d.ctaLabel}
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex w-full justify-center p-6 pt-0 md:p-12 md:pt-0 lg:w-[41.66%] lg:p-12 lg:pl-0">
            <div className="relative w-full max-w-[530px]">
              <Image
                src={d.image}
                alt={d.heading}
                width={530}
                height={327}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
