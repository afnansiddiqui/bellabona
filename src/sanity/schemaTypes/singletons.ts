import { defineType } from 'sanity'

// Each singleton wraps its object type as a top-level document.
// The Studio opens only that section's fields when clicked.

export const seoGlobalSingleton = defineType({
  name: 'seoGlobal',
  title: 'SEO & Global Settings',
  type: 'document',
  fields: [
    { name: 'pageTitle', title: 'Page Title (SEO)', type: 'string' },
    { name: 'metaDescription', title: 'Meta Description (SEO)', type: 'text' },
    { name: 'globalLogoUrl', title: 'Global Logo', type: 'image', options: { hotspot: true } },
    { name: 'globalLogoAlt', title: 'Global Logo Alt Text', type: 'string' },
  ],
})

export const navbarSingleton = defineType({
  name: 'navbarSection',
  title: 'Navbar',
  type: 'document',
  fields: [
    { name: 'downloadMenuLabel', title: 'Download Menu Label', type: 'string' },
    { name: 'downloadMenuHref', title: 'Download Menu Href', type: 'string' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
    {
      name: 'links',
      title: 'Nav Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'Href', type: 'string' },
          { name: 'hasDropdown', title: 'Has Dropdown?', type: 'boolean' },
        ],
      }],
    },
  ],
})

export const heroSingleton = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheadingMobile', title: 'Subheading (Mobile)', type: 'text' },
    { name: 'subheadingDesktop', title: 'Subheading (Desktop)', type: 'text' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'heroImageAlt', title: 'Hero Image Alt Text', type: 'string' },
    { name: 'appStoreHref', title: 'App Store Link', type: 'string' },
    { name: 'googlePlayHref', title: 'Google Play Link', type: 'string' },
    { name: 'googleRatingScore', title: 'Google Rating Score', type: 'string' },
    { name: 'googleRatingMax', title: 'Google Rating Max', type: 'string' },
  ],
})

export const logosSingleton = defineType({
  name: 'logosSection',
  title: 'Logos Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'image', title: 'Logos Image', type: 'image', options: { hotspot: true } },
  ],
})

export const statsSingleton = defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'document',
  fields: [
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
      }],
    },
  ],
})

export const mealsSingleton = defineType({
  name: 'mealsSection',
  title: 'Meals Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
    {
      name: 'meals',
      title: 'Meals',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'tag', title: 'Tag', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'rating', title: 'Rating', type: 'string' },
          { name: 'reviews', title: 'Reviews', type: 'string' },
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        ],
      }],
    },
  ],
})

export const perksSingleton = defineType({
  name: 'perksSection',
  title: 'Perks Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    {
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' },
        ],
      }],
    },
  ],
})

export const appFeaturesSingleton = defineType({
  name: 'appFeaturesSection',
  title: 'App Features Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'image', title: 'App Image', type: 'image', options: { hotspot: true } },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ],
      }],
    },
  ],
})

export const ctaBannerSingleton = defineType({
  name: 'ctaBannerSection',
  title: 'CTA Banner Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
})

export const stepsSingleton = defineType({
  name: 'stepsSection',
  title: 'Steps Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'badge', title: 'Badge (e.g. Step 01)', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          { name: 'imageBg', title: 'Image Background (Tailwind class)', type: 'string' },
          {
            name: 'type',
            title: 'Step Type',
            type: 'string',
            options: { list: ['image', 'chart'] },
          },
        ],
      }],
    },
  ],
})

export const calculatorSingleton = defineType({
  name: 'calculatorSection',
  title: 'Calculator Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'employeesLabel', title: 'Employees Label', type: 'string' },
    { name: 'daysLabel', title: 'Days Label', type: 'string' },
    { name: 'budgetLabel', title: 'Budget Label', type: 'string' },
    { name: 'taxSavingsLabel', title: 'Tax Savings Label', type: 'string' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
  ],
})

export const testimonialsSingleton = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text' },
          { name: 'author', title: 'Author Name', type: 'string' },
          { name: 'role', title: 'Author Role', type: 'string' },
          { name: 'leftImage', title: 'Left Image', type: 'image', options: { hotspot: true } },
          { name: 'rightImage', title: 'Right Image', type: 'image', options: { hotspot: true } },
        ],
      }],
    },
  ],
})

export const contactSingleton = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    { name: 'cardHeading', title: 'Card Heading', type: 'string' },
    { name: 'cardSubheading', title: 'Card Subheading', type: 'text' },
    { name: 'profileName', title: 'Profile Name', type: 'string' },
    { name: 'profileEmail', title: 'Profile Email', type: 'string' },
    { name: 'profilePhone', title: 'Profile Phone', type: 'string' },
    { name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } },
    { name: 'formHeading', title: 'Form Heading', type: 'string' },
    { name: 'nameLabel', title: 'Name Label', type: 'string' },
    { name: 'namePlaceholder', title: 'Name Placeholder', type: 'string' },
    { name: 'companyLabel', title: 'Company Label', type: 'string' },
    { name: 'companyPlaceholder', title: 'Company Placeholder', type: 'string' },
    { name: 'emailLabel', title: 'Email Label', type: 'string' },
    { name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string' },
    { name: 'phoneLabel', title: 'Phone Label', type: 'string' },
    { name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string' },
    { name: 'companySizeLabel', title: 'Company Size Label', type: 'string' },
    { name: 'companySizePlaceholder', title: 'Company Size Placeholder', type: 'string' },
    { name: 'commentsLabel', title: 'Comments Label', type: 'string' },
    { name: 'commentsPlaceholder', title: 'Comments Placeholder', type: 'string' },
    { name: 'formSubmitLabel', title: 'Submit Button Label', type: 'string' },
    { name: 'consentText', title: 'Consent Text', type: 'text' },
  ],
})

export const supportSingleton = defineType({
  name: 'supportSection',
  title: 'Support Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'ctaHref', title: 'CTA Href', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
})

export const faqSingleton = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text' },
        ],
      }],
    },
  ],
})

export const footerSingleton = defineType({
  name: 'footerSection',
  title: 'Footer',
  type: 'document',
  fields: [
    { name: 'followHeading', title: 'Follow Heading', type: 'string' },
    { name: 'followDescription', title: 'Follow Description', type: 'text' },
    { name: 'followEmail', title: 'Follow Email', type: 'string' },
    { name: 'quickLinksHeading', title: 'Quick Links Heading', type: 'string' },
    {
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }] }],
    },
    { name: 'discoverHeading', title: 'Discover Heading', type: 'string' },
    {
      name: 'discoverLinks',
      title: 'Discover Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }] }],
    },
    { name: 'policyHeading', title: 'Policy Heading', type: 'string' },
    {
      name: 'policyLinks',
      title: 'Policy Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }] }],
    },
    { name: 'copyrightText', title: 'Copyright Text', type: 'string' },
    { name: 'footerImage', title: 'Footer Image', type: 'image', options: { hotspot: true } },
  ],
})
