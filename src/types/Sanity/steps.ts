export interface SanityStepItem {
  badge: string;
  title: string;
  description: string;
  image?: string;
  imageBg: string;
  type: string;
}

export interface SanityStepsData {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  steps: SanityStepItem[];
}
