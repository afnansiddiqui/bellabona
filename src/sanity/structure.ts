import type { StructureResolver } from 'sanity/structure'

// Helper: create a singleton list item that opens ONLY that document's fields
const singleton = (S: Parameters<StructureResolver>[0], title: string, schemaType: string, icon: string) =>
  S.listItem()
    .title(`${icon} ${title}`)
    .id(schemaType)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(schemaType)
        .title(title)
    )

export const structure: StructureResolver = (S) =>
  S.list()
    .title('BellaBona Content')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage-root')
        .child(
          S.list()
            .title('Homepage Sections')
            .items([
              singleton(S, 'SEO & Global Settings', 'seoGlobal',         ''),
              singleton(S, 'Navbar',                 'navbarSection',     ''),
              singleton(S, 'Hero Section',           'heroSection',       ''),
              singleton(S, 'Logos Section',          'logosSection',      ''),
              singleton(S, 'Stats Section',          'statsSection',      ''),
              singleton(S, 'Meals Section',          'mealsSection',      ''),
              singleton(S, 'Perks Section',          'perksSection',      ''),
              singleton(S, 'App Features Section',   'appFeaturesSection',''),
              singleton(S, 'CTA Banner Section',     'ctaBannerSection',  ''),
              singleton(S, 'Steps Section',          'stepsSection',      ''),
              singleton(S, 'Calculator Section',     'calculatorSection', ''),
              singleton(S, 'Testimonials Section',   'testimonialsSection',''),
              singleton(S, 'Contact Section',        'contactSection',    ''),
              singleton(S, 'Support Section',        'supportSection',    ''),
              singleton(S, 'FAQ Section',            'faqSection',        ''),
              singleton(S, 'Footer',                 'footerSection',     ''),
            ])
        ),
    ])
