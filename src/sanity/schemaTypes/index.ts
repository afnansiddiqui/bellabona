import { type SchemaTypeDefinition } from 'sanity'

import {
  seoGlobalSingleton,
  navbarSingleton,
  heroSingleton,
  logosSingleton,
  statsSingleton,
  mealsSingleton,
  perksSingleton,
  appFeaturesSingleton,
  ctaBannerSingleton,
  stepsSingleton,
  calculatorSingleton,
  testimonialsSingleton,
  contactSingleton,
  supportSingleton,
  faqSingleton,
  footerSingleton,
} from './singletons'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoGlobalSingleton,
    navbarSingleton,
    heroSingleton,
    logosSingleton,
    statsSingleton,
    mealsSingleton,
    perksSingleton,
    appFeaturesSingleton,
    ctaBannerSingleton,
    stepsSingleton,
    calculatorSingleton,
    testimonialsSingleton,
    contactSingleton,
    supportSingleton,
    faqSingleton,
    footerSingleton,
  ],
}
