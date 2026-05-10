import Image from "next/image";
import { SanityTestimonialData } from "@/types/Sanity/testimonial";
import { TESTIMONIAL_FALLBACK } from "@/lib/FallBack/testimonialFallback";

interface TestimonialSectionProps {
  data?: SanityTestimonialData | null;
}

export const TestimonialSection = ({ data }: TestimonialSectionProps) => {
  const d: typeof TESTIMONIAL_FALLBACK = {
    heading:      data?.heading ?? TESTIMONIAL_FALLBACK.heading,
    testimonials: data?.testimonials?.length ? data.testimonials : TESTIMONIAL_FALLBACK.testimonials,
  }

  return (
    <section className="w-full bg-[#E5F99E] py-16 lg:py-24 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.2] font-bold text-[#0A0A0A] whitespace-pre-line">
          {d.heading}
        </h2>
      </div>

      {d.testimonials.map((item, idx) => (
        <div key={idx} className="relative mx-auto w-full flex items-center justify-center gap-3 md:gap-4 h-[380px] md:h-[500px] overflow-hidden max-w-[1600px] mb-8 last:mb-0">
          {/* Left Image — group eating */}
          <div
            className="relative shrink-0 w-[40%] md:w-[28%] h-[240px] md:h-[390px] rounded-[20px] md:rounded-[24px] overflow-hidden"
          >
            <Image
              src={item.leftImage || "/Frame1312321120.png"}
              alt="Team having lunch"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover object-[right_center]"
              unoptimized
            />
          </div>

          {/* Center Card */}
          <div
            className="relative z-10 bg-[#18442D] rounded-[24px] flex flex-col justify-between text-center px-6 py-8 md:px-11 md:py-14 w-[75%] max-w-[340px] md:max-w-none shrink-0 md:w-auto md:flex-1 h-[340px] md:h-[480px]"
          >
            <div className="flex-1 flex items-center justify-center">
              <p className="text-white text-[16px] sm:text-[18px] md:text-[26px] lg:text-[28px] leading-[1.55] font-normal">
                {"\""}{item.quote}{"\""}
              </p>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col items-center">
              <p className="text-white font-semibold text-[14px] md:text-[15px]">{item.author}</p>
              <p className="text-[#E5F99E] text-[12px] md:text-[13px] mt-1 opacity-90">
                {item.role}
              </p>
            </div>
          </div>

          {/* Right Image — woman with glasses */}
          <div
            className="relative shrink-0 w-[40%] md:w-[28%] h-[240px] md:h-[390px] rounded-[20px] md:rounded-[24px] overflow-hidden"
          >
            <Image
              src={item.rightImage || "/Frame1312321118.png"}
              alt="Person enjoying meal"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover object-[left_center]"
              unoptimized
            />
          </div>
        </div>
      ))}
    </section>
  );
};