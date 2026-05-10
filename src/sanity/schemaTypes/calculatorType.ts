import { defineField, defineType } from 'sanity'

export const calculatorType = defineType({
  name: 'calculatorSection',
  title: 'Calculator Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ]
})