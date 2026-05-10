import { SliderControlProps } from "@/types/FallBack/calculator";
import { CalendarIcon } from "@/components/shared/icons/CalendarIcon";
import { UsersIcon } from "@/components/shared/icons/UsersIcon";

export const SliderControl = ({
  iconType,
  label,
  min,
  max,
  step = 1,
  value,
  trackPercent,
  displayValue,
  minLabel,
  maxLabel,
  onChange,
}: SliderControlProps) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
      <div className="flex shrink-0 items-start gap-2.5 md:w-[280px]">
        <div className="mt-0.5 shrink-0">
          {iconType === "calendar" ? <CalendarIcon /> : <UsersIcon />}
        </div>
        <p className="text-[15px] leading-tight text-gray-700 md:text-[17px]">
          {label}
        </p>
      </div>
      <div className="flex-1">
        <div className="relative mb-2 flex h-[24px] w-full items-center">
          <div className="absolute left-0 right-0 h-[4px] rounded-full bg-pink-100" />
          {/* style required: dynamic runtime % cannot be a static Tailwind class */}
          <div
            className="absolute left-0 h-[4px] rounded-full bg-pink-300"
            style={{ width: `${trackPercent}%` }}
          />
          {/* style required: dynamic runtime % cannot be a static Tailwind class */}
          <div
            className="absolute h-4 w-4 -translate-x-1/2 rounded-full bg-pink-400 shadow-sm"
            style={{ left: `${trackPercent}%` }}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
        <div className="flex items-center justify-between text-[12px] font-medium text-gray-500 md:text-[13px]">
          <span>{minLabel}</span>
          <span className="font-semibold text-gray-900">{displayValue}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  );
};
