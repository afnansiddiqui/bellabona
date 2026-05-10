import { StatItem } from "@/types/FallBack/stat";

export const StatCard = ({ stat }: { stat: StatItem }) => {
  return (
    <div className="flex min-h-[260px] flex-col justify-between rounded-[16px] bg-[#f8f7f6] p-8 md:min-h-[300px] md:p-10">
      <h2 className="text-[56px] font-medium leading-none tracking-tight text-[#1f1f1f] md:text-[64px]">
        {stat.value}
      </h2>
      <p className="whitespace-pre-line text-[16px] leading-snug text-[#1f1f1f] md:text-[18px]">
        {stat.label}
      </p>
    </div>
  );
};
