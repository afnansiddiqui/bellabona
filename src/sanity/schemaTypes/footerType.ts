import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({ name: 'followHeading', title: 'Follow Us Heading', type: 'string' }),
    defineField({ name: 'followDescription', title: 'Follow Us Description', type: 'text' }),
    defineField({ name: 'followEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'quickLinksHeading', title: 'Quick Links Column Heading', type: 'string' }),
    defineField({
      name: 'quickLinks', title: 'Quick Links', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', title: 'Label', type: 'string' }, { name: 'href', title: 'Href', type: 'string' }] }],
    }),
    defineField({ name: 'discoverHeading', title: 'Discover Column Heading', type: 'string' }),
    defineField({
      name: 'discoverLinks', title: 'Discover Links', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', title: 'Label', type: 'string' }, { name: 'href', title: 'Href', type: 'string' }] }],
    }),
    defineField({ name: 'policyHeading', title: 'Policy Column Heading', type: 'string' }),
    defineField({
      name: 'policyLinks', title: 'Policy Links', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'label', title: 'Label', type: 'string' }, { name: 'href', title: 'Href', type: 'string' }] }],
    }),
    defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string' }),
  ],
})
