import { defineField, defineType } from 'sanity'

export const navbarType = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'object',
  fields: [
    defineField({ name: 'downloadMenuLabel', title: 'Download Menu Label', type: 'string' }),
    defineField({ name: 'downloadMenuHref', title: 'Download Menu Href', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'CTA Button Href', type: 'string' }),
    defineField({
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
    }),
  ],
})
