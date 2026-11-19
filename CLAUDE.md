# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website/catalog for **SAHM**, a motorcycle tire, tube and carburetor distributor in Peru. There is no backend or checkout: the cart and every CTA end in a prefilled WhatsApp message. UI copy is Spanish (some data carries `En` fields for English).

## Commands

```bash
npm install
npm run dev              # Next.js dev server (http://localhost:3000)
npm run build            # `prebuild` deletes /out, then `next build --webpack` (webpack, not Turbopack: Turbopack's PostCSS worker crashes on Hostinger)
npm run start            # run the production build (next start) — this is how the site runs in production
npm run preview          # `serve out` — leftover from static-export days; /out is no longer produced
npm run optimize:images  # regenerate WebP images from catalog photos (Sharp)
```

No test runner or linter is configured. Verify changes with `npm run build` and the dev server.

## Environment

`NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, country code, no `+`) in `.env.local`. Read in `src/config/site.js`, which falls back to a hardcoded number. Note: `.env.example` and `README.md` are stale Vite-era files (they still say `VITE_WHATSAPP_NUMBER` / Vite) — the `VITE_` prefix does nothing here.

## Stack

Next.js 16 App Router (JSX, no TypeScript) · React 19 · Tailwind CSS 3 (brand tokens `sahm-yellow` `#F5C000`, `sahm-purple` `#3D2785`, plus `sahm-cream` etc. in `tailwind.config.js`) · Framer Motion · GSAP + ScrollTrigger · Lenis smooth scroll · Sharp (dev, image script).

## Architecture

### Catalog data pipeline (the core of the site)

Everything product-related derives from `src/config/catalogData.js` → `src/config/catalog.js`:

- `catalogData.js` holds four separate structures, all keyed by product `id`:
  - `CATALOG_CATEGORY_DATA` — categories (`llantas`, `camaras`, `carburadores`), each with a `coverProductId`.
  - `CATALOG_PRODUCT_DATA` — the product list: `id`, `category`, `subcategory`, `name`, `files` (photo filenames + labels), optional `sourceDir`.
  - `CATALOG_COMMERCE_DATA` — SKU, measure, price, stock, etc. per id.
  - `CATALOG_PRODUCT_CONTENT` — optional SEO/long-form content (seoName, descriptions, FAQ, technicalDetails…) per id.
- `catalog.js` merges these into `CATALOG_PRODUCTS` (adds `slug` = `id`, image URLs, stock labels, spec rows, description bullets) and `CATALOG_CATEGORIES`, plus helpers (`getProductById`, `getCategoryBySlug`, `getSubcategories`, `getProductLabel`, `getProductWhatsAppMessage`).
- `catalog.js` contains **per-category branching on the Spanish category name** (`'Llantas'`, `'Cámaras'`, `'Carburadores'`) for labels, spec rows and description bullets. A new category needs a branch in each of those functions.
- **There are three separate category lists** that must agree on the category `id` (`llantas`, `camaras`, `carburadores`, …):
  - `CATALOG_CATEGORY_DATA` in `catalogData.js` — catalog categories with cover product/image.
  - `CATEGORIES` in `src/config/categories.js` — has an `enabled` flag and a `catalogName` that must match a product's `category` string. It drives `/categorias/[categoria]` `generateStaticParams` and `sitemap.js` (only `enabled` categories get pages). `repuestos` and `accesorios` exist here but are disabled.
  - `RAW_CATEGORIES` in `src/lib/premiumData.js` — home/`/categorias` cards; entries with zero products are filtered out.
- `src/lib/premiumData.js` also exports `heroProduct` (hardcoded id), `bestSellers`, `catalogHighlights`, `testimonials` for the home page.

**Images:** original photos live under `public/images/FOTOS SAHM/<category>/<subcategory>/<name>/` (or `sourceDir`). `npm run optimize:images` writes `public/images/catalog-optimized/<id>/card.webp` (900px), `detail-N.webp` (1800px) and `thumb-N.webp` (240px, gallery thumbnails), which is what the site actually renders (`next/image` is unoptimized, so there is no srcset — pick the smallest file that fits). `node scripts/optimize-catalog-images.mjs --thumbs-only` regenerates only thumbnails. Adding a product = add entries to the data structures above + drop photos in place + run the optimize script. Adding a category additionally means touching all three category lists and the `catalog.js` branches.

### Routes (`src/app/`)

- `/productos` — listing with filters (`ProductsClient`).
- `/productos/[slug]` — **product detail** page; `generateStaticParams` over `CATALOG_PRODUCTS` with `dynamicParams = false`.
- `/categorias` (cards from `premiumCategories`), `/categorias/[categoria]` (params from `config/categories.js`, products matched by `catalogName`).
- `/buscar` (search/fitment), `/carrito` (cart), `/nosotros`, `/contacto`, plus `sitemap.js`, `robots.js`, `error.jsx`, `not-found.jsx`. There is intentionally **no root `loading.jsx`**: it wrapped every page in a Suspense fallback, so the server HTML showed a loading screen and the real content arrived hidden (`<div hidden>`), adding ~1 s+ to LCP. `LoadingProgress.jsx` is kept but unused.

Pages are Server Components that read catalog config and hand data to `'use client'` components in `src/components/premium/`.

### SEO (`src/lib/seo.js`)

- Every page builds its metadata with `pageMetadata({ title, description, path, image, noindex })`. Next.js replaces (does not merge) the layout's `openGraph`/`twitter`, so skipping the helper makes the page's share preview fall back to the home page. `path` must end in `/`.
- JSON-LD is rendered server-side via `components/premium/JsonLd.jsx`: `Organization` in `layout.jsx`, `Product` + `BreadcrumbList` on product pages, `BreadcrumbList` on category pages. Product title/description fall back to text generated from catalog data when `CATALOG_PRODUCT_CONTENT` has no `seoName`/`metaDescription`.
- `/carrito/` and `/buscar/` are `noindex` and excluded from `sitemap.js`; sitemap URLs end in `/`.

### Layout & client boundary

`src/app/layout.jsx` (Server Component; metadata + `next/font` Barlow Condensed `--font-heading` / Inter `--font-body`) → `Providers.jsx` (client: Lenis, GSAP ScrollTrigger, wraps everything in `CartProvider`) → `Layout.jsx` (skip link, `Navbar`, `TrustBar`, `Footer`, `FloatingWhatsApp`). In `components/premium/`, `Navbar.jsx` and `Footer.jsx` are one-line re-exports of `SahmNav.jsx` and `PremiumFooter.jsx` — edit those.

`Providers.jsx` drives Lenis through GSAP's ticker (keeps ScrollTrigger in sync), resets scroll to top and re-runs ScrollTrigger on every `pathname` change, and animates any element with the `.gsap-reveal` class. Both Lenis and the reveals are skipped under `prefers-reduced-motion` (with a CSS fallback in `src/index.css`).

### State

`src/context/CartContext.jsx` — cart stores only `{ productId, qty }` items (product data is looked up from the catalog), persisted to `localStorage` key `sahm_cart` after a client-side hydration step (`hasHydrated`); accessed via `useCart()`. All other state is component-local.

All conversion goes through `buildWhatsAppMessageUrl()` in `src/config/site.js` (cart, product detail, contact form, nav, footer, floating button). `FEATURE_FLAGS` in `site.js` is currently not read anywhere.

### Legacy code

`src/components/sahm/` and `src/hooks/` (`useFadeIn`, `useScrollY`) are Vite-era leftovers: nothing under `src/app` or `components/premium` imports them. `components/premium/SectionHeader.jsx` is also currently unused. Don't delete them, don't build on them. Beware of same-named files in both folders (`Navbar`, `ProductCard`, `TrustBar`, `FloatingWhatsApp`) — active code is always `components/premium/`.

## Deployment

The site runs on Hostinger as a **Node.js Next.js app** (`next build` + `next start`), not a static export — `output: 'export'` was intentionally removed (commit e8928ed); do not re-add it. According to the owner, Hostinger redeploys automatically when changes are pushed to GitHub (`main`), so **a push to `main` publishes to production**. There is no CI workflow in the repo (`.github/` does not exist); the auto-deploy is configured on the Hostinger side.

Because there is no test suite, run `npm run build` locally before pushing — a broken build on `main` breaks the live deploy. Commit regenerated images in `public/images/catalog-optimized/` along with catalog changes.

## Key Rules

- Do **NOT** migrate back to Vite or use the `VITE_` env prefix.
- Do **NOT** mix App Router with Pages Router.
- Do **NOT** delete product data in `catalogData.js`.
- Keep the **yellow navbar** (`SahmNav`) — SAHM brand identity.
- Keep `images.unoptimized: true` (catalog images are pre-optimized by the Sharp script) and `trailingSlash: true` (existing URLs/sitemap depend on it).
- Both fonts use `display: 'optional'` (chosen with the owner to remove a font-swap layout shift on `/productos/`). Above-the-fold content (hero, first product image) must be visible in the server HTML — don't gate it behind a `mounted` state or a Framer Motion `initial={{ opacity: 0 }}`.
- Pushing to `main` deploys to production — only push when asked.
- Run `npm run optimize:images` after adding or changing catalog photos.
- `AGENTS.md` mirrors this file for Codex — keep the two in sync when editing either.
