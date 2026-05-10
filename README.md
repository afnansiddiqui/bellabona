# BellaBona Homepage Build

This repository contains the Next.js 14+ implementation of the BellaBona homepage, fully integrated with Sanity CMS, following the provided Figma design and technical requirements.

## Technical Decisions & Architecture

### Rendering Strategy & Performance
*   **ISR (Incremental Static Regeneration)**: Used Next.js `fetch` with `revalidate` on the server-side (`src/app/(site)/page.tsx`) to pull content from Sanity. There are zero client-side `useEffect` hooks fetching data, ensuring full server-side rendering for optimal Core Web Vitals (CWV), especially LCP and SEO.
*   **Performance Optimization**: 
    *   The hero image uses `next/image` with `priority={true}` to ensure it loads immediately and avoids layout shifts.
    *   Added `sizes="(max-width: 768px) 100vw, 50vw"` attribute to optimize the image payload size depending on the device viewport.
    *   Lightweight CSS transitions (Tailwind variants) were used instead of heavy JavaScript animation libraries (like GSAP) to keep the main thread unblocked and prioritize LCP.

### Sanity CMS Integration
*   **Editor-Friendly Schema**: Migrated from a single massive document to a highly structured **Singleton Document** pattern. 
    *   Instead of a cluttered single page, editors see a clean Sanity Studio sidebar with individual documents for each section (e.g., SEO, Hero, Meals, Testimonials).
    *   This prevents accidental data loss and makes it non-intimidating for non-developers to edit specific areas confidently.
*   **Fallback Resilience**: Created robust field-level fallbacks in code so that if a content editor accidentally leaves a field blank or deletes an image, the page degrades gracefully to default values rather than throwing a runtime crash.

### Technical SEO
*   **Structured Data (JSON-LD)**: Injected `Organization` schema directly into the `RootLayout`.
*   **Dynamic Metadata**: Configured `generateMetadata` in `layout.tsx` to read dynamic `pageTitle` and `metaDescription` fields directly from the Sanity SEO settings document.
*   **Hreflang & Canonical**: Integrated into the Next.js `alternates` metadata object, anticipating a potential DE/EN bilingual setup (`hreflang: 'de'`).

## Trade-offs & What I'd Do Differently
*   **Portable Text vs Strings**: For this implementation, I utilized `string` and `text` fields rather than a full Portable Text setup for the sake of speed and simplicity, given the strict layout structures in the design. If the project scaled, migrating paragraphs to Portable Text would allow editors to inject bold tags or links natively.
*   **Animation**: Stick to lightweight Tailwind interactions, but if the client wanted more elaborate scroll-reveal animations, I would implement `framer-motion` dynamically imported so it wouldn't impact initial page load metrics.
*   **Type Safety**: We used custom TypeScript interfaces that map exactly to Sanity schemas. Moving forward, generating types automatically via `sanity typegen` would make the code strictly aligned with CMS changes.

## Local Setup
```bash
npm install
npm run dev
```
