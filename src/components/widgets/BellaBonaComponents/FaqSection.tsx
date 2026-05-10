"use client";

import { useState } from "react";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { SanityFaqData } from "@/types/Sanity/faq";
import { FAQ_FALLBACK } from "@/lib/FallBack/faqFallback";

interface FaqSectionProps {
  data?: SanityFaqData | null;
}

export const FaqSection = ({ data }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const d: typeof FAQ_FALLBACK = {
    heading: data?.heading ?? FAQ_FALLBACK.heading,
    faqs:    data?.faqs?.length ? data.faqs : FAQ_FALLBACK.faqs,
  }

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-[80px] px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 px-4 text-center">
          <h2 className="text-[#1A211E] text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[1.2] tracking-[-0.5px] whitespace-pre-line">
            {d.heading}
          </h2>
        </div>

        <div className="flex flex-col">
          {d.faqs.map((faq, index) => (
            <FaqAccordion
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
