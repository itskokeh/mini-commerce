# Fruity Store - Mini-Commerce

## Project Overview

Fruity Store is a client-side e-commerce prototype built with Next.js 14 (App Router), TypeScript, React Query, Zustand, and Tailwind CSS. It features a product catalog, product details, cart management, and a mock checkout, with all state persisted in localStorage. The app is mobile-first, accessible, and SEO-optimized.

## Design Approach

- **Layout**: Responsive grid/flex layouts using Tailwind CSS, with a custom grid utility for product cards.
- **Color**: Green-based theme for a vibrant, fruit-inspired look.
- **Responsiveness**: Mobile-first design, tested across devices using Tailwind’s responsive utilities.
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and focus styles.

## Tools & Techniques

- **Libraries**: Next.js 14, React Query (data fetching/caching), Zustand (cart state), Tailwind CSS, Lucide React (icons).
- **Patterns**: Client-side rendering with `'use client'`, derived state in Zustand, error boundaries.
- **Testing**: Playwright for E2E tests (`ShoppingCart`).
- **CI**: Deployed on Vercel and Cloudflare with automatic builds on push.

## SEO Strategy

- Meta tags and Open Graph data in `layout.tsx` and `product/[slug]/page.tsx`.
- Structured data (JSON-LD) for products.
- Optimized images with `next/image` and lazy loading.

## Error-Handling Technique

- **React Query**: Displays loading spinners and error messages for failed fetches.
- **Zustand**: Prevents negative cart quantities and handles empty cart states.
- **Not Found**: Custom 404 page with navigation back to home.

## Setup

1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `pnpm install`
3. Run dev server: `pnpm dev`
4. Run tests: `pnpm test` or `pnpm run test:e2e:cli`
5. Build: `pnpm build`

## Live Demo

[Fruity Store](https://fruitystore.kokeh.dev)

## Notes

- TypeScript strict mode with zero `any` types.
- ESLint and Prettier configured for code quality.
- Commit history follows conventional commits.
