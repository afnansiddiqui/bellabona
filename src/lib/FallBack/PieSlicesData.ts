import { PieSlice } from "@/types/FallBack/pieSlice";

const C = 2 * Math.PI * 60;
const gap = 4;

export const PIE_SLICES: PieSlice[] = [
  {
    label: "slice-lightgreen",
    color: "#C7EBB5",
    dash: `${0.54 * C - gap} ${C}`,
    offset: 0,
    delayClass: "[animation-delay:0s]",
  },
  {
    label: "slice-darkgreen",
    color: "#69A84F",
    dash: `${0.2 * C - gap} ${C}`,
    offset: -0.54 * C,
    delayClass: "[animation-delay:0.8s]",
  },
  {
    label: "slice-mediumgreen",
    color: "#68BD9B",
    dash: `${0.16 * C - gap} ${C}`,
    offset: -0.74 * C,
    delayClass: "[animation-delay:1.6s]",
  },
  {
    label: "slice-pink",
    color: "#FBA1B0",
    dash: `${0.1 * C - gap} ${C}`,
    offset: -0.9 * C,
    delayClass: "[animation-delay:2.4s]",
  },
];
