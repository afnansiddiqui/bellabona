import { PerkItem } from "@/types/FallBack/perk";

export const PerkCard = ({ perk }: { perk: PerkItem }) => {
  return (
    <div className="flex flex-col justify-between rounded-[16px] bg-[#024930] px-8 py-10 text-[#F9FFE9] md:px-8 md:py-[50px]">
      <div>
        <h3 className="mb-2 text-[50px] font-medium leading-[1.2] lg:text-[64px]">
          {perk.value}
        </h3>
        <p className="text-[20px] leading-[1.4] opacity-90 lg:text-[30px]">
          {perk.title}
        </p>
      </div>
      <div className="mt-12 lg:mt-[42px]">
        <p className="text-[16px] leading-[1.75] md:text-[18px]">
          {perk.description}
        </p>
      </div>
    </div>
  );
};
