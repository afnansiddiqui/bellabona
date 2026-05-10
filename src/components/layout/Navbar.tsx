import Link from 'next/link'
import { BellaBonaLogo } from '@/components/shared/BellaBonaLogo'
import { ChevronDownIcon } from '@/components/shared/icons/ChevronDownIcon'
import { MobileNavbar } from '@/components/layout/MobileNavbar'
import { SanityNavbarData } from '@/types/Sanity/navbar'
import { NAVBAR_FALLBACK } from '@/lib/FallBack/navbarData'

interface NavbarProps {
  data?: SanityNavbarData | null
  globalLogoUrl?: string
  globalLogoAlt?: string
}

export const Navbar = ({ data, globalLogoUrl, globalLogoAlt }: NavbarProps) => {
  const d: typeof NAVBAR_FALLBACK = {
    downloadMenuLabel: data?.downloadMenuLabel ?? NAVBAR_FALLBACK.downloadMenuLabel,
    downloadMenuHref: data?.downloadMenuHref ?? NAVBAR_FALLBACK.downloadMenuHref,
    ctaLabel: data?.ctaLabel ?? NAVBAR_FALLBACK.ctaLabel,
    ctaHref: data?.ctaHref ?? NAVBAR_FALLBACK.ctaHref,
    links: data?.links?.length ? data.links : NAVBAR_FALLBACK.links,
  }

  return (
    <header className="relative z-20 bg-white py-4 shadow-[rgba(0,0,0,0.05)_0px_4px_8px_-2px] md:py-8">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
        {/* LEFT: Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <BellaBonaLogo logoUrl={globalLogoUrl} logoAlt={globalLogoAlt} />

          <ul className="hidden list-none items-center gap-6 p-0 m-0 md:flex">
            {d.links.map((link) =>
              link.hasDropdown ? (
                <li key={link.href}>
                  <button
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-[15px] text-[#024930] transition-opacity duration-100 hover:opacity-70"
                  >
                    {link.label}
                    <ChevronDownIcon />
                  </button>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#024930] no-underline transition-opacity duration-100 hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT: Desktop CTAs + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href={d.downloadMenuHref}
            className="hidden text-[15px] text-[#024930] underline underline-offset-4 decoration-[#024930] transition-opacity duration-100 hover:opacity-70 md:block"
          >
            {d.downloadMenuLabel}
          </Link>

          <Link
            href={d.ctaHref}
            className="hidden rounded-full bg-[#024930] px-8 py-3.5 text-[14px] font-medium text-white transition-opacity duration-100 hover:opacity-90 md:inline-flex"
          >
            {d.ctaLabel}
          </Link>

          <div className="hidden items-center rounded-md border border-gray-200 bg-gray-100 p-[3px] md:flex">
            <button className="rounded border border-gray-100 bg-white px-3 py-1 text-[13px] font-semibold text-gray-900 shadow-sm">
              EN
            </button>
            <button className="rounded px-3 py-1 text-[13px] font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900">
              DU
            </button>
          </div>

          <MobileNavbar />
        </div>
      </nav>
    </header>
  )
}
