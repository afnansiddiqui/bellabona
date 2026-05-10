import { ResultCardProps } from "@/types/FallBack/calculator";
import { InfoIcon } from "@/components/shared/icons/InfoIcon";

export const ResultCard = ({
  label,
  value,
  subLabel,
  infoText,
  variant,
}: ResultCardProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex flex-col rounded-[20px] p-6 md:p-8 ${
        isDark ? "bg-[#1a442e]" : "bg-[#E9F8A8]"
      }`}
    >
      <p
        className={`mb-4 text-center text-[14px] font-medium md:text-[15px] ${
          isDark ? "text-[#E9F8A8]" : "text-[#1a442e]"
        }`}
      >
        {label}
      </p>
      <h3
        className={`mb-2 text-center text-[22px] font-medium md:text-[30px] ${
          isDark ? "text-white" : "text-[#1a442e]"
        }`}
      >
        {value}
      </h3>
      <p
        className={`mb-6 text-center text-[12px] md:text-[13px] ${
          isDark ? "text-white/60" : "text-[#1a442e]/60"
        }`}
      >
        {subLabel}
      </p>
      <div
        className={`mt-auto flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 ${
          !isDark ? "shadow-sm" : ""
        }`}
      >
        <div className="mt-0.5 shrink-0">
          <InfoIcon />
        </div>
        <p className="text-[13px] leading-snug text-gray-700">{infoText}</p>
      </div>
    </div>
  );
};
