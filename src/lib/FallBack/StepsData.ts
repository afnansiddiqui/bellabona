import { StepItem } from "@/types/FallBack/step";

export const STEPS: StepItem[] = [
  {
    badge: "Step 01",
    title: "Set delivery interval & budget",
    description: "Ready to go in less than a week.",
    image: "https://bellabona.com/hs-fs/hubfs/Frame%201312321216.webp",
    imageBg: "bg-[#F3F9E3]", // Light green
    type: "image",
  },
  {
    badge: "Step 02",
    title: "Lunch runs automatically",
    description: "Team orders by 9:00 for same-day delivery.",
    image: "https://bellabona.com/hs-fs/hubfs/Frame%201312321198.webp",
    imageBg: "bg-gray-100", // Filled by image
    type: "image",
  },
  {
    badge: "Step 03",
    title: "Track satisfaction & usage",
    description: "Dashboard for order volume, billing data, etc.",
    imageBg: "bg-[#FFF0ED]", // Light pink
    type: "chart",
  },
];
