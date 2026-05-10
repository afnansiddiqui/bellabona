export interface SanityFooterLink {
  label: string;
  href: string;
}

export interface SanityFooterData {
  followHeading: string;
  followDescription: string;
  followEmail: string;
  quickLinksHeading: string;
  quickLinks: SanityFooterLink[];
  discoverHeading: string;
  discoverLinks: SanityFooterLink[];
  policyHeading: string;
  policyLinks: SanityFooterLink[];
  copyrightText: string;
}
