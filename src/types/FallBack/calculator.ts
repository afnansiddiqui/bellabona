export type DayOption = 1 | 2 | 3 | 4 | 5;

export type SliderIconType = "calendar" | "users";

export type ResultCardVariant = "dark" | "light";

export type SliderControlProps = {
  iconType: SliderIconType;
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  trackPercent: number;
  displayValue: string;
  minLabel: string;
  maxLabel: string;
  onChange: (value: number) => void;
};

export type ResultCardProps = {
  label: string;
  value: string;
  subLabel: string;
  infoText: string;
  variant: ResultCardVariant;
};
