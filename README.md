# BellaBona Homepage Build

This repository contains the homepage implementation built with Next.js 14 (App Router), Sanity CMS, Tailwind CSS, and deployed on Vercel.

The focus of this implementation was mainly around rendering strategy, SEO structure, performance, and keeping the overall architecture simple and scalable.

---

## Technical Decisions

### Rendering Strategy

The homepage content is fetched server-side from Sanity using ISR (`revalidate`) instead of client-side fetching with `useEffect`.

This keeps the initial page load fast, improves SEO, and avoids unnecessary client-side rendering for above-the-fold content.

---

### Performance Considerations

- The hero image uses `next/image` with `priority={true}` for better LCP performance.
- Explicit image sizing and responsive `sizes` attributes were added to reduce unnecessary payload on smaller screens.
- Animations were kept lightweight using Tailwind/CSS transitions instead of heavy animation libraries.

---

## Sanity CMS Structure

The homepage content is fully editable through Sanity.

Editable sections include:
- Navigation
- Hero section
- CTA content
- Features
- Footer
- SEO fields

SEO-related fields are separated from the main content structure to keep the schema cleaner and easier to manage.

Fallback values were also added where needed to avoid runtime issues if certain fields are left empty.

---

## Technical SEO

The project includes:
- Dynamic metadata from Sanity
- Open Graph metadata
- Canonical tags
- `hreflang` structure for future multilingual support
- Organization JSON-LD schema

The goal was to keep the page fully indexable and SEO-friendly by default.

---

## Trade-offs

For this implementation, I kept the setup intentionally lightweight and avoided over-engineering.

A few areas that could be expanded further in a larger production setup:
- Portable Text for richer editor control
- Automated type generation from Sanity schemas
- More advanced animation systems if needed later

---

## Local Setup

```bash
npm install
npm run dev
