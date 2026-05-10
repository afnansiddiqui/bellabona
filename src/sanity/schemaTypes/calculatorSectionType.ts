import { defineField, defineType } from 'sanity'

export const calculatorSectionType = defineType({
  name: 'calculatorSection',
  title: 'Calculator Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'employeesLabel', title: 'Employees Slider Label', type: 'string' }),
    defineField({ name: 'daysLabel', title: 'Days Slider Label', type: 'string' }),
    defineField({ name: 'budgetLabel', title: 'Budget Label', type: 'string' }),
    defineField({ name: 'taxSavingsLabel', title: 'Tax Savings Label', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'CTA Button Href', type: 'string' }),
  ],
})
