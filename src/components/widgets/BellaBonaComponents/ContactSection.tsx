import { ContactProfileCard } from '@/components/shared/ContactProfileCard'
import { ContactForm } from '@/components/shared/ContactForm'
import { SanityContactData } from '@/types/Sanity/contact'

interface ContactSectionProps {
  data?: SanityContactData | null
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  return (
    <section className="w-full bg-white py-[80px] px-5 md:px-10">
      <div className="max-w-[980px] mx-auto flex flex-col lg:flex-row gap-[36px] items-stretch">
        <ContactProfileCard data={data} />
        <ContactForm data={data} />
      </div>
    </section>
  )
}
