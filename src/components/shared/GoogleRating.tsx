import { GoogleIcon } from "@/components/shared/icons/GoogleIcon";

interface GoogleRatingProps {
  score?: string;
  max?: string;
}

export const GoogleRating = ({ score = "4.7", max = "/5" }: GoogleRatingProps) => {
  return (
    <div className="flex h-[42px] items-center gap-1.5 pl-1">
      <div className="flex h-[26px] w-[26px] items-center justify-center">
        <GoogleIcon className="h-[26px] w-[26px]" />
      </div>
      <div className="flex flex-col justify-center gap-px">
        <div className="flex gap-px text-[10px] text-[#1f1f1f]">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className="flex items-baseline gap-[2px]">
          <span className="font-sans text-[14px] font-bold leading-none text-[#1f1f1f]">{score}</span>
          <span className="font-sans text-[8px] font-medium leading-none text-gray-500">{max}</span>
        </div>
      </div>
    </div>
  );
};
