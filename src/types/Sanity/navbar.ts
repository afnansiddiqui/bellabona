export interface SanityNavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface SanityNavbarData {
  downloadMenuLabel: string;
  downloadMenuHref: string;
  ctaLabel: string;
  ctaHref: string;
  links: SanityNavLink[];
}
