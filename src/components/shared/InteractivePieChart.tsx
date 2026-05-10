import { PIE_SLICES } from "@/lib/FallBack/PieSlicesData";

export const InteractivePieChart = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[66%] h-[86%]">
        {/* Card 3 — furthest back */}
        <div className="absolute top-0 left-[8%] right-[8%] bottom-[48px] rounded-[16px] bg-white shadow-[0_-4px_14px_rgba(0,0,0,0.08)]" />

        {/* Card 2 — middle */}
        <div className="absolute top-[24px] left-[4%] right-[4%] bottom-[24px] rounded-[16px] bg-white shadow-[0_-4px_14px_rgba(0,0,0,0.1)]" />

        {/* Main Card — front */}
        <div className="absolute top-[48px] left-0 right-0 bottom-0 rounded-[16px] bg-white shadow-[0_-4px_14px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)] flex flex-col items-center justify-start pt-[32px] gap-[24px]">
          <h4 className="text-[16px] font-normal text-[#1a1a1a] m-0">
            Order frequency
          </h4>

          <svg viewBox="0 0 200 200" className="w-[90%] h-auto -rotate-90">
            {PIE_SLICES.map((slice) => (
              <circle
                key={slice.label}
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke={slice.color}
                strokeWidth="36"
                strokeDasharray={slice.dash}
                strokeDashoffset={slice.offset}
                className={`animate-[color-loop_3.2s_ease-in-out_infinite] ${slice.delayClass}`}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};
