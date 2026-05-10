import { FaqAccordionProps } from "@/types/FallBack/faqAccordion";
import { PlusCircleIcon } from "@/components/shared/icons/PlusCircleIcon";
import { MinusCircleIcon } from "@/components/shared/icons/MinusCircleIcon";

export const FaqAccordion = ({ faq, isOpen, onToggle }: FaqAccordionProps) => {
  return (
    <div className="border-b-[1.5px] border-[#AFB2B1] py-[22px] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 text-left outline-none py-1 group"
      >
        <span className="text-[18px] md:text-[20px] font-semibold text-[#1A211E] leading-[1.4] pr-4">
          {faq.question}
        </span>
        <span className="shrink-0 text-[#64748B] group-hover:text-[#1A211E] transition-colors">
          {isOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#64748B] text-[16px] leading-[1.6] max-w-[800px]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};
