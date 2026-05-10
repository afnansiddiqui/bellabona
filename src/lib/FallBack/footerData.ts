import { SanityFooterData } from '@/types/Sanity/footer'

export const FOOTER_FALLBACK: SanityFooterData = {
  followHeading: 'Folge uns!',
  followDescription: 'Lorem ipsum Text Text Text Text Text',
  followEmail: 'fragen@bellabona.com',
  quickLinksHeading: 'Schnellzugriffe',
  quickLinks: [
    { label: 'für arbeitgeber', href: '#' },
    { label: 'für mitarbeiter', href: '#' },
    { label: 'Werde Teil des Bella&Bona-Teams!', href: '#' },
    { label: 'über uns', href: '#' },
    { label: 'fallstudien', href: '#' },
    { label: 'blogs', href: '#' },
  ],
  discoverHeading: 'Entdecken',
  discoverLinks: [
    { label: 'unser menü', href: '#' },
    { label: 'geschäfts-catering', href: '#' },
    { label: 'tägliches mittagessen', href: '#' },
  ],
  policyHeading: 'Unsere Richtlinien',
  policyLinks: [
    { label: 'nutzungsbedingungen', href: '#' },
    { label: 'datenschutz', href: '#' },
    { label: 'cookies', href: '#' },
  ],
  copyrightText: 'Bella&Bona Copyright © 2025. Mit Liebe gestaltet.',
  footerImage: '/assets/footerLogo.png',
}
