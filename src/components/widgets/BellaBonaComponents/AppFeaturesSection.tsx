import Image from 'next/image'
import { FeatureListItem } from '@/components/shared/FeatureListItem'
import { SanityAppFeaturesData } from '@/types/Sanity/appFeatures'
import { APP_FEATURES_FALLBACK } from '@/lib/FallBack/appFeaturesFallback'

interface AppFeaturesSectionProps {
  data?: SanityAppFeaturesData | null
}

export const AppFeaturesSection = ({ data }: AppFeaturesSectionProps) => {
  const d: typeof APP_FEATURES_FALLBACK = {
    heading:  data?.heading  ?? APP_FEATURES_FALLBACK.heading,
    image:    data?.image    ?? APP_FEATURES_FALLBACK.image,
    features: data?.features?.length ? data.features : APP_FEATURES_FALLBACK.features,
  }

  return (
    <section className="bg-white py-20 md:py-28 border-b border-[#EAEAEA] md:border-b-0">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-[45%]">
            <div className="relative w-full aspect-625/462 overflow-hidden rounded-[16px] lg:h-full lg:aspect-auto">
              <Image
                src={d.image || '/assets/7.webp'}
                alt="App Interface"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[55%]">
            <div className="flex w-full flex-col justify-center rounded-[16px] bg-[#F8F7F6] p-8 py-10 md:p-10 lg:px-12 lg:py-14 lg:min-h-full">
              <ul className="flex flex-col gap-8">
                {d.features.map((feature, index) => (
                  <FeatureListItem key={index} feature={feature} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
