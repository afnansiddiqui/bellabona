import { SanityStepsData } from '@/types/Sanity/steps'

export const STEPS_FALLBACK: SanityStepsData = {
  heading: 'From test lunch to happy teams in\n3 easy steps',
  ctaLabel: 'Schedule Free Test Lunch',
  ctaHref: '#',
  steps: [
    {
      badge: "Step 01",
      title: "Set delivery interval & budget",
      description: "Ready to go in less than a week.",
      image: "/assets/9.webp",
      imageBg: "bg-[#F3F9E3]",
      type: "image",
    },
    {
      badge: "Step 02",
      title: "Lunch runs automatically",
      description: "Team orders by 9:00 for same-day delivery.",
      image: "/assets/10.webp",
      imageBg: "bg-gray-100",
      type: "image",
    },
    {
      badge: "Step 03",
      title: "Track satisfaction & usage",
      description: "Dashboard for order volume, billing data, etc.",
      imageBg: "bg-[#FFF0ED]",
      type: "chart",
    },
  ],
}
