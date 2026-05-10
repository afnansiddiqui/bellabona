import { groq } from 'next-sanity'

export const seoQuery = groq`
  *[_type == "seoGlobal" && _id == "seoGlobal"][0] {
    pageTitle,
    metaDescription,
    "globalLogoUrl": globalLogoUrl.asset->url,
    globalLogoAlt
  }
`

export const navbarQuery = groq`
  *[_type == "navbarSection" && _id == "navbarSection"][0] {
    downloadMenuLabel,
    downloadMenuHref,
    ctaLabel,
    ctaHref,
    links[] { label, href, hasDropdown }
  }
`

export const heroQuery = groq`
  *[_type == "heroSection" && _id == "heroSection"][0] {
    heading,
    subheadingMobile,
    subheadingDesktop,
    ctaLabel,
    ctaHref,
    "heroImage": heroImage.asset->url,
    heroImageAlt,
    appStoreHref,
    googlePlayHref,
    googleRatingScore,
    googleRatingMax
  }
`

export const logosQuery = groq`
  *[_type == "logosSection" && _id == "logosSection"][0] {
    heading,
    "image": image.asset->url
  }
`

export const statsQuery = groq`
  *[_type == "statsSection" && _id == "statsSection"][0] {
    stats[] { value, label }
  }
`

export const mealsQuery = groq`
  *[_type == "mealsSection" && _id == "mealsSection"][0] {
    heading,
    ctaLabel,
    ctaHref,
    meals[] {
      tag,
      title,
      rating,
      reviews,
      "image": image.asset->url
    }
  }
`

export const perksQuery = groq`
  *[_type == "perksSection" && _id == "perksSection"][0] {
    heading,
    perks[] { value, title, description }
  }
`

export const appFeaturesQuery = groq`
  *[_type == "appFeaturesSection" && _id == "appFeaturesSection"][0] {
    heading,
    "image": image.asset->url,
    features[] { title, description }
  }
`

export const ctaBannerQuery = groq`
  *[_type == "ctaBannerSection" && _id == "ctaBannerSection"][0] {
    heading,
    ctaLabel,
    ctaHref,
    "image": image.asset->url
  }
`

export const stepsQuery = groq`
  *[_type == "stepsSection" && _id == "stepsSection"][0] {
    heading,
    ctaLabel,
    ctaHref,
    steps[] {
      badge,
      title,
      description,
      "image": image.asset->url,
      imageBg,
      type
    }
  }
`

export const calculatorQuery = groq`
  *[_type == "calculatorSection" && _id == "calculatorSection"][0] {
    heading,
    description,
    employeesLabel,
    daysLabel,
    budgetLabel,
    taxSavingsLabel,
    ctaLabel,
    ctaHref
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonialsSection" && _id == "testimonialsSection"][0] {
    heading,
    testimonials[] {
      quote,
      author,
      role,
      "leftImage": leftImage.asset->url,
      "rightImage": rightImage.asset->url
    }
  }
`

export const contactQuery = groq`
  *[_type == "contactSection" && _id == "contactSection"][0] {
    cardHeading,
    cardSubheading,
    profileName,
    profileEmail,
    profilePhone,
    "profileImage": profileImage.asset->url,
    formHeading,
    nameLabel,
    namePlaceholder,
    companyLabel,
    companyPlaceholder,
    emailLabel,
    emailPlaceholder,
    phoneLabel,
    phonePlaceholder,
    companySizeLabel,
    companySizePlaceholder,
    commentsLabel,
    commentsPlaceholder,
    formSubmitLabel,
    consentText
  }
`

export const supportQuery = groq`
  *[_type == "supportSection" && _id == "supportSection"][0] {
    heading,
    description,
    ctaLabel,
    ctaHref,
    "image": image.asset->url
  }
`

export const faqQuery = groq`
  *[_type == "faqSection" && _id == "faqSection"][0] {
    heading,
    faqs[] { question, answer }
  }
`

export const footerQuery = groq`
  *[_type == "footerSection" && _id == "footerSection"][0] {
    followHeading,
    followDescription,
    followEmail,
    quickLinksHeading,
    quickLinks[] { label, href },
    discoverHeading,
    discoverLinks[] { label, href },
    policyHeading,
    policyLinks[] { label, href },
    copyrightText,
    "footerImage": footerImage.asset->url
  }
`
