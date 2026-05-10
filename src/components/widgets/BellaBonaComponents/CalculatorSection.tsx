"use client";

import { useState } from "react";
import { CalendarIcon } from "@/components/shared/icons/CalendarIcon";
import { SliderControl } from "@/components/shared/SliderControl";
import { ResultCard } from "@/components/shared/ResultCard";
import { SanityCalculatorData } from "@/types/Sanity/calculator";
import { CALCULATOR_FALLBACK } from "@/lib/FallBack/calculatorFallback";

const DAYS: ReadonlyArray<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

interface CalculatorSectionProps {
  data?: SanityCalculatorData | null;
}

export const CalculatorSection = ({ data }: CalculatorSectionProps) => {
  const [selectedDays, setSelectedDays] = useState(3);
  const [employees, setEmployees] = useState(50);
  const [subsidy, setSubsidy] = useState(4.4);

  const d: typeof CALCULATOR_FALLBACK = {
    heading:        data?.heading        ?? CALCULATOR_FALLBACK.heading,
    description:    data?.description    ?? CALCULATOR_FALLBACK.description,
    employeesLabel: data?.employeesLabel ?? CALCULATOR_FALLBACK.employeesLabel,
    daysLabel:      data?.daysLabel      ?? CALCULATOR_FALLBACK.daysLabel,
    budgetLabel:    data?.budgetLabel    ?? CALCULATOR_FALLBACK.budgetLabel,
    taxSavingsLabel:data?.taxSavingsLabel?? CALCULATOR_FALLBACK.taxSavingsLabel,
    ctaLabel:       data?.ctaLabel       ?? CALCULATOR_FALLBACK.ctaLabel,
    ctaHref:        data?.ctaHref        ?? CALCULATOR_FALLBACK.ctaHref,
  }

  const avgMealPrice = 9;
  const employeePaysMin = Math.max(0, avgMealPrice - subsidy).toFixed(2);
  const employeePaysMax = (Number(employeePaysMin) + 2).toFixed(2);
  const totalCostMin = Math.round(employees * selectedDays * subsidy * 4);
  const totalCostMax = Math.round(totalCostMin * 1.12);

  const employeeTrackPercent = ((employees - 20) / (250 - 20)) * 100;
  const subsidyTrackPercent = ((subsidy - 3) / (10 - 3)) * 100;

  return (
    <section className="bg-[#E9F8A8] px-4 py-12 md:py-20">
      <div className="mx-auto max-w-[1100px] rounded-[10px] bg-white px-5 py-8 md:px-12 md:py-14 min-h-[500px] md:min-h-0">

        {/* All content hidden on mobile as per Figma design */}
        <div className="hidden md:block">
          {/* Heading */}
          <h2 className="mb-10 text-center text-[1.75rem] font-semibold leading-snug tracking-tight text-gray-900 md:mb-12 md:text-[2.75rem]">
            {d.heading}
          </h2>

          {/* Days Selection */}
          <div className="mb-10 md:mb-12">
            <div className="mb-4 flex items-start gap-2.5 md:items-center">
              <div className="mt-0.5 shrink-0 md:mt-0">
                <CalendarIcon />
              </div>
              <span className="text-[15px] leading-tight text-gray-700 md:text-[17px]">
                {d.daysLabel}
              </span>
            </div>
            <div className="flex w-full flex-wrap justify-between gap-2 md:grid md:grid-cols-5 md:gap-4">
              {DAYS.map((day) => {
                const isActive = selectedDays === day;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDays(day)}
                    className={`flex flex-1 flex-col items-center justify-center rounded-[16px] border py-3 transition-all md:rounded-[24px] md:border-2 md:py-7 ${
                      isActive
                        ? "border-[#1a442e] bg-[#1a442e] text-white shadow-md"
                        : "border-gray-200 bg-white text-[#1a442e] hover:border-[#1a442e]"
                    }`}
                  >
                    <span
                      className={`text-[22px] font-medium leading-none md:text-[40px] ${isActive ? "text-white" : "text-[#1a442e]"}`}
                    >
                      {day}
                    </span>
                    <span
                      className={`mt-1 text-[10px] font-medium md:mt-1.5 md:text-[14px] ${isActive ? "text-white" : "text-[#1a442e]"}`}
                    >
                      {day === 1 ? "Day" : "Days"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sliders */}
          <div className="mb-10 space-y-8 md:mb-12 md:space-y-10">
            <SliderControl
              iconType="users"
              label={d.employeesLabel || "How many employees will roughly join?"}
              min={20}
              max={250}
              value={employees}
              trackPercent={employeeTrackPercent}
              displayValue={`${employees} Employees`}
              minLabel="20"
              maxLabel="250"
              onChange={setEmployees}
            />
            <SliderControl
              iconType="users"
              label={d.budgetLabel || "How much of each meal will your company cover?"}
              min={3}
              max={10}
              step={0.1}
              value={subsidy}
              trackPercent={subsidyTrackPercent}
              displayValue={`${subsidy.toFixed(2)} € Subsidy`}
              minLabel="3 €"
              maxLabel="10 €"
              onChange={setSubsidy}
            />
          </div>

          {/* Result Cards */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-2 md:gap-6">
            <ResultCard
              variant="dark"
              label="What your employees pay per meal"
              value={`${employeePaysMin} € – ${employeePaysMax} € / dish`}
              subLabel="Per employee per dish"
              infoText="Employees top up their virtual wallet with all common payment methods."
            />
            <ResultCard
              variant="light"
              label="What your company pays per month"
              value={`${totalCostMin} € – ${totalCostMax} € / mo`}
              subLabel="Per month total"
              infoText="You only pay what your team orders. A small service fee applies."
            />
          </div>

          {/* Email & CTA */}
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-[15px] text-gray-700 md:text-[17px]">
              {d.description}
            </p>
            <div className="flex flex-col items-stretch gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[15px] outline-none transition-colors placeholder:text-gray-400 focus:border-[#1a442e]"
              />
              <div className="flex justify-center">
                <button className="rounded-full bg-[#1a442e] px-10 py-3.5 text-[15px] font-medium text-white transition-opacity hover:opacity-90">
                  {d.ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
