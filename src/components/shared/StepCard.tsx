import Image from "next/image";
import { SanityStepItem } from "@/types/Sanity/steps";
import { InteractivePieChart } from "./InteractivePieChart";

export const StepCard = ({
  step,
  index,
}: {
  step: SanityStepItem;
  index: number;
}) => {
  return (
    <div className="flex flex-col">
      {/* Image/Chart Container with Hover Animation */}
      <div
        className={`group relative mb-6 aspect-square w-full overflow-hidden rounded-[24px] ${step.imageBg} transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-lg`}
      >
        {step.type === "chart" ? (
          <InteractivePieChart />
        ) : (
          <Image
            src={step.image!}
            alt={step.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover ${index !== 1 ? "p-8 scale-110 object-contain" : ""} transition-transform duration-700 ease-out group-hover:scale-105`}
            unoptimized={true}
          />
        )}
      </div>

      {/* Step Content */}
      <div className="flex flex-col items-start">
        <span className="mb-4 inline-flex items-center rounded-full bg-[#E9F8A8] px-4 py-1.5 text-[12px] font-medium text-[#1a442e]">
          {step.badge}
        </span>
        <h3 className="mb-2.5 text-[20px] font-semibold text-[#1d0505] md:text-[22px]">
          {step.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-gray-700 md:text-[16px]">
          {step.description}
        </p>
      </div>
    </div>
  );
};
