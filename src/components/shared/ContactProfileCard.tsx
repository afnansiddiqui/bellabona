import Image from 'next/image'
import Link from 'next/link'
import { SanityContactData } from '@/types/Sanity/contact'
import { CONTACT_FALLBACK } from '@/lib/FallBack/contactData'

interface ContactProfileCardProps {
  data?: SanityContactData | null
}

export const ContactProfileCard = ({ data }: ContactProfileCardProps) => {
  const d: typeof CONTACT_FALLBACK = {
    cardHeading:           data?.cardHeading           ?? CONTACT_FALLBACK.cardHeading,
    cardSubheading:        data?.cardSubheading        ?? CONTACT_FALLBACK.cardSubheading,
    profileName:           data?.profileName           ?? CONTACT_FALLBACK.profileName,
    profileEmail:          data?.profileEmail          ?? CONTACT_FALLBACK.profileEmail,
    profilePhone:          data?.profilePhone          ?? CONTACT_FALLBACK.profilePhone,
    profileImage:          data?.profileImage          ?? CONTACT_FALLBACK.profileImage,
    formHeading:           data?.formHeading           ?? CONTACT_FALLBACK.formHeading,
    nameLabel:             data?.nameLabel             ?? CONTACT_FALLBACK.nameLabel,
    namePlaceholder:       data?.namePlaceholder       ?? CONTACT_FALLBACK.namePlaceholder,
    companyLabel:          data?.companyLabel          ?? CONTACT_FALLBACK.companyLabel,
    companyPlaceholder:    data?.companyPlaceholder    ?? CONTACT_FALLBACK.companyPlaceholder,
    emailLabel:            data?.emailLabel            ?? CONTACT_FALLBACK.emailLabel,
    emailPlaceholder:      data?.emailPlaceholder      ?? CONTACT_FALLBACK.emailPlaceholder,
    phoneLabel:            data?.phoneLabel            ?? CONTACT_FALLBACK.phoneLabel,
    phonePlaceholder:      data?.phonePlaceholder      ?? CONTACT_FALLBACK.phonePlaceholder,
    companySizeLabel:      data?.companySizeLabel      ?? CONTACT_FALLBACK.companySizeLabel,
    companySizePlaceholder:data?.companySizePlaceholder?? CONTACT_FALLBACK.companySizePlaceholder,
    commentsLabel:         data?.commentsLabel         ?? CONTACT_FALLBACK.commentsLabel,
    commentsPlaceholder:   data?.commentsPlaceholder   ?? CONTACT_FALLBACK.commentsPlaceholder,
    formSubmitLabel:       data?.formSubmitLabel       ?? CONTACT_FALLBACK.formSubmitLabel,
    consentText:           data?.consentText           ?? CONTACT_FALLBACK.consentText,
  }

  return (
    <div className="w-full lg:w-[520px] lg:min-w-[520px] shrink-0 bg-[#024930] rounded-[20px] px-8 pt-10 pb-8 flex flex-col justify-between lg:min-h-[620px]">
      {/* Top text */}
      <div>
        <h2 className="text-white text-[36px] md:text-[42px] font-bold leading-[1.1] tracking-[-1.5px]">
          {d.cardHeading.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-white/80 text-[15px] leading-[1.65] mt-5 max-w-[300px]">
          {d.cardSubheading}
        </p>
      </div>

      {/* Bottom: image + contact */}
      <div className="flex items-end gap-6 mt-10">
        {/* Profile image */}
        <div className="relative shrink-0 overflow-hidden bg-[#dff0c8] w-[140px] h-[160px] rounded-[12px]">
          <Image
            src={d.profileImage}
            alt={d.profileName}
            fill
            sizes="140px"
            className="object-cover object-top"
          />
        </div>

        {/* Contact info */}
        <div className="text-white pb-2">
          <p className="text-[18px] font-semibold leading-tight mb-2">
            {d.profileName}
          </p>
          <Link
            href={`mailto:${d.profileEmail}`}
            className="block text-[13px] text-white/80 hover:text-white transition-colors"
          >
            {d.profileEmail}
          </Link>
          <Link
            href={`tel:${d.profilePhone.replace(/\s/g, '')}`}
            className="block text-[13px] text-white/80 hover:text-white transition-colors mt-[3px]"
          >
            {d.profilePhone}
          </Link>
        </div>
      </div>
    </div>
  )
}
