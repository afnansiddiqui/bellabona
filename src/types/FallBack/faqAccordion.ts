import { FaqItem } from "@/types/FallBack/faq";

export type FaqAccordionProps = {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};
