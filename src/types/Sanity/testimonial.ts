export interface SanityTestimonialItem {
  quote: string;
  author: string;
  role: string;
  leftImage: string;
  rightImage: string;
}

export interface SanityTestimonialData {
  heading: string;
  testimonials: SanityTestimonialItem[];
}
