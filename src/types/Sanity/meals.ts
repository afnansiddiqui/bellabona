export interface SanityMealItem {
  tag: string;
  title: string;
  rating: string;
  reviews: string;
  image: string;
}

export interface SanityMealsData {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  meals: SanityMealItem[];
}
