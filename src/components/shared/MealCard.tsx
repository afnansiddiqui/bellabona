import Image from "next/image";
import { MealItem } from "@/types/FallBack/meal";
import { CrossIcon } from "@/components/shared/icons/CrossIcon";
import { ThumbsUpIcon } from "@/components/shared/icons/ThumbsUpIcon";

export const MealCard = ({ meal }: { meal: MealItem }) => {
  return (
    <div className="flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] bg-white p-4 text-left shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1 md:w-auto">
      {/* Image Container with Badge */}
      <div className="relative w-full overflow-hidden rounded-[16px] bg-[#F9FEEC] pt-[60px] md:pt-[70px]">
        <div className="absolute left-4 top-4 z-20 md:left-5 md:top-5">
          <span className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-[12px] font-medium text-[#1f1f1f] shadow-sm md:px-4 md:py-2 md:text-[13px]">
            {meal.tag}
            <CrossIcon className="h-3 w-3 text-[#4A545E]" />
          </span>
        </div>
        <div className="relative aspect-[1.15/1] w-full">
          <Image
            src={meal.image}
            alt={meal.title}
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-5 flex flex-col px-2 pb-2">
        <h3 className="mb-2 text-[18px] font-semibold text-[#1f1f1f] md:text-[20px]">
          {meal.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[14px] text-[#1f1f1f] md:text-[15px]">
          <ThumbsUpIcon className="h-4 w-4 text-[#1f1f1f]" />
          <span className="font-semibold">{meal.rating}</span>
          <span className="text-[#8c8c8c]">({meal.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};
