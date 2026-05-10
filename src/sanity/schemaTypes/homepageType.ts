import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'navbar', title: 'Navbar' },
    { name: 'hero', title: 'Hero' },
    { name: 'logos', title: 'Logos' },
    { name: 'stats', title: 'Stats' },
    { name: 'appFeatures', title: 'App Features' },
    { name: 'steps', title: 'Steps' },
    { name: 'meals', title: 'Meals' },
    { name: 'perk', title: 'Perks' },
    { name: 'calculator', title: 'Calculator' },
    { name: 'ctaBanner', title: 'CTA Banner' },
    { name: 'testimonial', title: 'Testimonials' },
    { name: 'contact', title: 'Contact' },
    { name: 'support', title: 'Support' },
    { name: 'faq', title: 'FAQ' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Page Title (SEO)', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta Description (SEO)', type: 'text', group: 'seo' }),
    defineField({ name: 'globalLogoUrl', title: 'Global Logo', type: 'image', options: { hotspot: true }, group: 'seo' }),
    defineField({ name: 'globalLogoAlt', title: 'Global Logo Alt Text', type: 'string', group: 'seo' }),
    
    defineField({ name: 'navbar', title: 'Navbar', type: 'navbar', group: 'navbar' }),
    defineField({ name: 'heroSection', title: 'Hero Section', type: 'heroSection', group: 'hero' }),
    defineField({ name: 'logosSection', title: 'Logos Section', type: 'logosSection', group: 'logos' }),
    defineField({ name: 'statsSection', title: 'Stats Section', type: 'statsSection', group: 'stats' }),
    
    defineField({ name: 'appFeaturesSection', title: 'App Features Section', type: 'appFeaturesSection', group: 'appFeatures' }),
    defineField({ name: 'stepsSection', title: 'Steps Section', type: 'stepsSection', group: 'steps' }),
    defineField({ name: 'mealsSection', title: 'Meals Section', type: 'mealsSection', group: 'meals' }),
    defineField({ name: 'perkSection', title: 'Perk Section', type: 'perkSection', group: 'perk' }),
    
    defineField({ name: 'calculatorSection', title: 'Calculator Section', type: 'calculatorSection', group: 'calculator' }),
    defineField({ name: 'ctaBannerSection', title: 'CTA Banner Section', type: 'ctaBannerSection', group: 'ctaBanner' }),
    defineField({ name: 'testimonialSection', title: 'Testimonial Section', type: 'testimonialSection', group: 'testimonial' }),
    defineField({ name: 'contactSection', title: 'Contact Section', type: 'contactSection', group: 'contact' }),
    defineField({ name: 'supportSection', title: 'Support Section', type: 'supportSection', group: 'support' }),
    defineField({ name: 'faqSection', title: 'FAQ Section', type: 'faqSection', group: 'faq' }),
    defineField({ name: 'footer', title: 'Footer', type: 'footer', group: 'footer' }),
  ],
})