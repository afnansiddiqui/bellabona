import Image from 'next/image'
import Link from 'next/link'
import { StoreBadge } from '@/components/shared/StoreBadge'
import { GoogleRating } from '@/components/shared/GoogleRating'
import { SanityHeroData } from '@/types/Sanity/hero'
import { HERO_FALLBACK } from '@/lib/FallBack/heroData'

interface HeroSectionProps {
  data?: SanityHeroData | null
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const d: typeof HERO_FALLBACK = {
    heading:            data?.heading            ?? HERO_FALLBACK.heading,
    subheadingMobile:   data?.subheadingMobile   ?? HERO_FALLBACK.subheadingMobile,
    subheadingDesktop:  data?.subheadingDesktop  ?? HERO_FALLBACK.subheadingDesktop,
    ctaLabel:           data?.ctaLabel           ?? HERO_FALLBACK.ctaLabel,
    ctaHref:            data?.ctaHref            ?? HERO_FALLBACK.ctaHref,
    heroImage:          data?.heroImage          ?? HERO_FALLBACK.heroImage,
    appStoreHref:       data?.appStoreHref       ?? HERO_FALLBACK.appStoreHref,
    googlePlayHref:     data?.googlePlayHref     ?? HERO_FALLBACK.googlePlayHref,
    googleRatingScore:  data?.googleRatingScore  ?? HERO_FALLBACK.googleRatingScore,
    googleRatingMax:    data?.googleRatingMax    ?? HERO_FALLBACK.googleRatingMax,
  }

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Left Column */}
        <div className="flex min-h-[420px] flex-col justify-between rounded-[32px] bg-[#1a442e] p-6 md:min-h-0 md:p-12 lg:p-14">
          <div>
            <h1 className="text-[2.5rem] font-medium leading-[1.1] tracking-tight text-[#E6FFA9] md:text-[3.5rem] md:leading-[1.05] lg:text-[4.2rem]">
              {d.heading.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </div>
          <div>
            <p className="mb-4 text-[16px] leading-snug text-[#D8F4A2] md:mb-8 md:max-w-[550px] md:text-[17px] md:leading-relaxed">
              <span className="block md:hidden">{d.subheadingMobile}</span>
              <span className="hidden md:inline">{d.subheadingDesktop}</span>
            </p>
            <Link
              href={d.ctaHref}
              className="flex w-full items-center justify-center rounded-full bg-[#E6FFA9] py-4 text-[16px] font-medium text-[#024930] transition-transform hover:scale-105 active:scale-95 md:inline-flex md:w-auto md:px-8"
            >
              {d.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] md:h-auto md:min-h-[500px] lg:min-h-[600px]">
            <Image
              src={d.heroImage}
              alt="Team enjoying lunch"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="origin-top-left scale-[1.15] object-cover md:origin-center md:scale-100 md:object-bottom"
              priority
            />
            <div className="absolute hidden items-center gap-4 md:flex md:bottom-6 md:left-9">
              <StoreBadge href={d.googlePlayHref} store="google" variant="desktop" />
              <StoreBadge href={d.appStoreHref} store="apple" variant="desktop" />
            </div>
          </div>

          <div className="flex w-full items-center justify-between px-1 pt-3 md:hidden">
            <StoreBadge href={d.googlePlayHref} store="google" variant="mobile" />
            <StoreBadge href={d.appStoreHref} store="apple" variant="mobile" />
            <GoogleRating score={d.googleRatingScore} max={d.googleRatingMax} />
          </div>
        </div>
      </div>
    </section>
  )
}
