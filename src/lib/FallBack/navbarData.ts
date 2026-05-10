import { SanityNavbarData } from '@/types/Sanity/navbar'

export const NAVBAR_FALLBACK: SanityNavbarData = {
  downloadMenuLabel: 'Download menu',
  downloadMenuHref: '#download-menu',
  ctaLabel: 'Book free testing',
  ctaHref: '#booking',
  links: [
    { label: 'Daily lunch', href: '#daily-lunch' },
    { label: 'More', href: '#more', hasDropdown: true },
  ],
}
