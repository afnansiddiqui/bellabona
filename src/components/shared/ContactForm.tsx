import { FormInput } from '@/components/shared/FormInput'
import { SanityContactData } from '@/types/Sanity/contact'
import { CONTACT_FALLBACK } from '@/lib/FallBack/contactData'

interface ContactFormProps {
  data?: SanityContactData | null
}

export const ContactForm = ({ data }: ContactFormProps) => {
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
    <div className="w-full lg:flex-1 flex flex-col justify-center">
      <h3 className="text-[#024930] text-[26px] md:text-[32px] font-bold leading-[1.15] tracking-[-0.5px] mb-8">
        {d.formHeading}
      </h3>

      <form className="flex flex-col gap-[18px]">
        {/* Name + Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput label={d.nameLabel} type="text" placeholder={d.namePlaceholder} id="name" />
          <FormInput label={d.companyLabel} type="text" placeholder={d.companyPlaceholder} id="companyName" />
        </div>

        {/* Email */}
        <FormInput label={d.emailLabel} type="email" placeholder={d.emailPlaceholder} id="email" />

        {/* Phone */}
        <FormInput label={d.phoneLabel} type="text" placeholder={d.phonePlaceholder} id="phone" />

        {/* Company Size */}
        <div>
          <label htmlFor="companySize" className="block text-[13px] font-semibold text-[#024930] mb-[7px]">
            {d.companySizeLabel}
          </label>
          <select
            id="companySize"
            defaultValue=""
            className="w-full h-[46px] rounded-[8px] border border-[#DADDD9] bg-[#F0F4F8] px-4 text-[14px] text-gray-400 outline-none focus:border-[#024930] transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>{d.companySizePlaceholder}</option>
            <option value="1-5" className="text-gray-700">1-5</option>
            <option value="5-25" className="text-gray-700">5-25</option>
            <option value="25-50" className="text-gray-700">25-50</option>
            <option value="50-100" className="text-gray-700">50-100</option>
            <option value="100-500" className="text-gray-700">100-500</option>
            <option value="500-1000" className="text-gray-700">500-1000</option>
            <option value="1000+" className="text-gray-700">1000+</option>
          </select>
        </div>

        {/* Additional Comments */}
        <div>
          <label htmlFor="comments" className="block text-[13px] font-semibold text-[#024930] mb-[7px]">
            {d.commentsLabel}
          </label>
          <textarea
            id="comments"
            placeholder={d.commentsPlaceholder}
            className="w-full h-[110px] rounded-[8px] border border-[#DADDD9] bg-[#F0F4F8] px-4 py-3 text-[14px] text-gray-700 resize-none outline-none placeholder:text-gray-400 focus:border-[#024930] transition-colors"
          />
        </div>

        {/* Consent */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="consent"
            className="w-[15px] h-[15px] shrink-0 border border-[#BABFBA] rounded-[3px] accent-[#024930] cursor-pointer"
          />
          <label htmlFor="consent" className="text-[13px] text-[#666] cursor-pointer leading-snug">
            {d.consentText}
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-[52px] rounded-full bg-[#024930] text-white text-[15px] font-semibold hover:opacity-90 active:scale-[0.99] transition-all"
        >
          {d.formSubmitLabel}
        </button>
      </form>
    </div>
  )
}
