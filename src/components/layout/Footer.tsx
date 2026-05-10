import Link from 'next/link'
import Image from 'next/image'
import {
  EmailIcon,
  GoogleIconFooter,
  TwitterIconFooter,
  InstagramIconFooter,
  LinkedInIconFooter,
  AppleIconFooter,
  PlayStoreIconFooter,
} from '@/components/shared/icons/FooterSocialIcons'
import { SanityFooterData } from '@/types/Sanity/footer'
import { FOOTER_FALLBACK } from '@/lib/FallBack/footerData'

interface FooterProps {
  data?: SanityFooterData | null
}

export const Footer = ({ data }: FooterProps) => {
  const d: typeof FOOTER_FALLBACK = {
    followHeading:    data?.followHeading    ?? FOOTER_FALLBACK.followHeading,
    followDescription:data?.followDescription?? FOOTER_FALLBACK.followDescription,
    followEmail:      data?.followEmail      ?? FOOTER_FALLBACK.followEmail,
    quickLinksHeading:data?.quickLinksHeading?? FOOTER_FALLBACK.quickLinksHeading,
    quickLinks:       data?.quickLinks?.length ? data.quickLinks : FOOTER_FALLBACK.quickLinks,
    discoverHeading:  data?.discoverHeading  ?? FOOTER_FALLBACK.discoverHeading,
    discoverLinks:    data?.discoverLinks?.length ? data.discoverLinks : FOOTER_FALLBACK.discoverLinks,
    policyHeading:    data?.policyHeading    ?? FOOTER_FALLBACK.policyHeading,
    policyLinks:      data?.policyLinks?.length ? data.policyLinks : FOOTER_FALLBACK.policyLinks,
    copyrightText:    data?.copyrightText    ?? FOOTER_FALLBACK.copyrightText,
    footerImage:      data?.footerImage      ?? FOOTER_FALLBACK.footerImage,
  }

  return (
    <footer className="bg-[#1C4633] pt-16 text-white pb-8 overflow-hidden relative font-sans">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Top Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-16 md:mb-24">
          {/* Column 1: Follow Us */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] font-bold">{d.followHeading}</h3>
            <p className="text-[14px] md:text-[13px] font-light text-gray-100 leading-relaxed">
              {d.followDescription}
            </p>
            <Link
              href={`mailto:${d.followEmail}`}
              className="flex items-center gap-3 mt-1 text-[15px] md:text-[13px] text-white hover:opacity-80 transition-opacity"
            >
              <EmailIcon className="w-5 h-5" />
              {d.followEmail}
            </Link>
            <div className="flex items-center gap-5 md:gap-4 mt-2">
              <Link href="#" aria-label="Google" className="hover:opacity-80 transition-opacity">
                <GoogleIconFooter className="w-[26px] h-[26px] md:w-[22px] md:h-[22px]" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                <TwitterIconFooter className="w-[26px] h-[26px] md:w-[22px] md:h-[22px]" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <InstagramIconFooter className="w-[26px] h-[26px] md:w-[22px] md:h-[22px]" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <LinkedInIconFooter className="w-[26px] h-[26px] md:w-[22px] md:h-[22px]" />
              </Link>
              <Link href="#" aria-label="Apple" className="hover:opacity-80 transition-opacity">
                <AppleIconFooter className="w-[26px] h-[26px] md:w-[22px] md:h-[22px]" />
              </Link>
              <Link href="#" aria-label="Play Store" className="hover:opacity-80 transition-opacity">
                <PlayStoreIconFooter className="w-[26px] h-[26px] md:w-[22px] md:h-[22px]" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] md:text-[17px] font-bold mb-1">{d.quickLinksHeading}</h3>
            {d.quickLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-[15px] md:text-[13px] text-gray-100 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Discover */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] md:text-[17px] font-bold mb-1">{d.discoverHeading}</h3>
            {d.discoverLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-[15px] md:text-[13px] text-gray-100 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 4: Policies */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] md:text-[17px] font-bold mb-1">{d.policyHeading}</h3>
            {d.policyLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-[15px] md:text-[13px] text-gray-100 hover:text-white transition-colors leading-tight max-w-[140px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Large Typography Image */}
      <div className="w-full flex justify-center mt-6 relative z-0">
        <Image
          src={d.footerImage || '/assets/footerLogo.png'}
          alt="BellaBona"
          width={1920}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 mt-10 md:mt-16 relative z-10">
        <div className="border-t border-white/20 pt-6 pb-2 text-center">
          <p className="text-[13px] text-gray-200 font-light leading-loose md:leading-normal">
            {d.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  )
}
