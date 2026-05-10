export interface SanityFaqItem {
  question: string;
  answer: string;
}

export interface SanityFaqData {
  heading: string;
  faqs: SanityFaqItem[];
}
