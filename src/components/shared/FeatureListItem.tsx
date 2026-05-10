import { FeatureItem } from "@/types/FallBack/feature";
import { CheckIcon } from "@/components/shared/icons/CheckIcon";

export const FeatureListItem = ({ feature }: { feature: FeatureItem }) => {
  return (
    <li className="flex items-start gap-4 lg:gap-5">
      <div className="mt-0.5 shrink-0">
        <CheckIcon className="h-6 w-6 lg:h-8 lg:w-8" />
      </div>
      <div>
        <h3 className="mb-1.5 text-[18px] font-semibold leading-[1.3] text-[#1d0505] md:text-[20px] lg:text-[24px]">
          {feature.title}
        </h3>
        <p className="text-[14px] leading-[1.6] text-[#1d0505] lg:text-[16px]">
          {feature.description}
        </p>
      </div>
    </li>
  );
};
