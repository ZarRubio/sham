# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install              # install dependencies
npm run dev              # start Next.js dev server (http://localhost:3000)
npm run build            # static export (outputs to /out)
npm run start            # serve production build locally
npm run preview          # serve /out with `serve`
npm run optimize:images  # compress catalog images with Sharp (run before build with new images)
```

No test runner or linter is configured.

## Environment

```env
# Rename .env.example to .env.local and fill in your values:
NEXT_PUBLIC_WHATSAPP_NUMBER=51987881821   # digits only, with country code, no +
```

> The env var prefix is `NEXT_PUBLIC_` (not `VITE_`). The fallback number is hardcoded in `src/config/site.js`.

## Stack

- **Next.js 16** (App Router, static export via `output: 'export'`)
- **React 19**
- **Tailwind CSS 3** — brand tokens `sahm-yellow` (`#F5C000`) and `sahm-purple` (`#3D2785`)
- **Framer Motion 12** — nav and micro-animations
- **GSAP 3 + ScrollTrigger** — scroll-driven reveals (`.gsap-reveal`) and parallax (`.parallax-media`)
- **Lenis** — smooth scroll
- **Sharp** (dev) — image optimization script

## Architecture

**Next.js App Router static export** for **SAHM** (motorcycle tire/parts distributor, Peru).
`next.config.mjs` sets `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true` for FTP deployment to Hostinger.

### Routes (`src/app/`)

| Route | File | Notes |
|---|---|---|
| `/` | `page.jsx` | Renders `HomeExperience` |
| `/productos` | `productos/page.jsx` | Product listing with filters |
| `/productos/[slug]` | `productos/[slug]/page.jsx` | Filtered product list by category slug |
| `/categorias` | `categorias/page.jsx` | Category listing |
| `/categorias/[categoria]` | `categorias/[categoria]/page.jsx` | Category detail |
| `/buscar` | `buscar/` | Fitment / search |
| `/carrito` | `carrito/` | Cart page |
| `/nosotros` | `nosotros/` | About page |
| `/contacto` | `contacto/` | Contact page |
| `*` | `not-found.jsx` | 404 page |

`layout.jsx` is a Server Component. It wraps all routes with `Providers` → `Layout` (which includes `SahmNav`, `PremiumFooter`, `FloatingWhatsApp`).

### Client Boundary

- `src/app/layout.jsx` — Server Component (metadata, fonts)
- `src/components/premium/Providers.jsx` — `'use client'`, wraps children, initializes Lenis and GSAP ScrollTrigger
- All interactive components in `src/components/premium/` are `'use client'`

### Fonts

Loaded via `next/font/google` in `layout.jsx`:
- **Barlow Condensed** — headings (`--font-heading`, weights 600/700/800)
- **Inter** — body text (`--font-body`)

### Config Layer (`src/config/`)

| File | Purpose |
|---|---|
| `site.js` | `WHATSAPP_NUMBER`, `WHATSAPP_URL`, `buildWhatsAppMessageUrl()`, feature flags `catalogReady` / `socialReady` |
| `catalogData.js` | Raw product/category data — **source of truth** for adding/removing products |
| `catalog.js` | Enriches raw data with image paths; exports `CATALOG_PRODUCTS`, `CATALOG_CATEGORIES`, `getSubcategories()`, `getProductById()`, `getProductLabel()`, `getProductWhatsAppMessage()` |
| `categories.js` | Category definitions |
| `navigation.js` | `PRODUCT_SUBCATEGORIES` keyed by `'es'` / `'en'` |

### Data Layer (`src/lib/premiumData.js`)

Derives `featuredBrands`, `premiumCategories`, `heroProduct`, `bestSellers`, `oemHighlights`, and `testimonials` from `CATALOG_PRODUCTS` for use in `HomeExperience`.

### State

- `CartContext` (`src/context/CartContext.jsx`) — cart state persisted to `localStorage` under `sahm_cart`; exposes `addToCart`, `removeFromCart`, `updateQty`, `clearCart`, `totalItems` via `useCart()` hook
- No other global state; UI state is component-local

### Components (`src/components/premium/`)

Active components used in production:

| Component | Role |
|---|---|
| `Providers.jsx` | `'use client'` wrapper; Lenis + GSAP init |
| `Layout.jsx` | Wraps page content with nav + footer |
| `SahmNav.jsx` | Main navigation bar (yellow brand navbar) |
| `PremiumFooter.jsx` | Site footer |
| `FloatingWhatsApp.jsx` | Sticky WhatsApp CTA button |
| `HomeExperience.jsx` | Home page component |
| `ProductCard.jsx` | Reusable product card |
| `ProductsClient.jsx` | Client-side product listing/filtering |
| `ProductDetailClient.jsx` | Product detail page (image, qty, cart, WhatsApp) |
| `CartClient.jsx` | Cart page |
| `CartConfirmation.jsx` | Post-add-to-cart confirmation state |
| `CategoryCard.jsx` | Category card |
| `SearchCatalogClient.jsx` | Search/fitment page |
| `QuantitySelector.jsx` | Reusable quantity selector |
| `TrustBar.jsx` | Trust indicators strip |
| `StatsTrustPanel.jsx` | Stats / social proof panel |
| `SectionHeader.jsx` | Reusable section heading |

### Legacy Components (`src/components/sahm/`)

Original Vite-era components retained but **not used in active routes**. Do not remove — may be referenced or repurposed. Do NOT migrate back to Vite.

### Hooks (`src/hooks/`)

- `useFadeIn.js` — legacy fade-in hook (from Vite era)
- `useScrollY.js` — scroll position hook (from Vite era)

## Styling

- **Tailwind CSS 3** with custom brand tokens in `tailwind.config.js`
- CSS variables: `--sahm-yellow`, `--sahm-purple`, `--font-heading`, `--font-body`
- Global utilities in `src/index.css`: `.ambient-glow`, `.soft-grid`, `.float-slow`, `.card-shine`, `.btn-shimmer`, `.premium-float`, `.magnetic-btn`, `.brand-3d`
- Custom Tailwind animations in `tailwind.config.js`: `marquee`, `fade-up`, `fade-in`, `scale-in`, `glow-cta`, `pulse-ring`, `scroll-bounce`
- `prefers-reduced-motion` respected — Lenis and GSAP skip animations entirely

## Deployment

Static export (`/out`) deployed to Hostinger via GitHub Actions FTP.

**CI workflow:** `.github/workflows/deploy-hostinger.yml`

**Required GitHub Secrets** (Settings → Secrets → Actions):

| Secret | Value |
|---|---|
| `HOSTINGER_FTP_HOST` | FTP hostname or IP from Hostinger panel |
| `HOSTINGER_FTP_USER` | FTP username |
| `HOSTINGER_FTP_PASSWORD` | FTP password |

**Important:** Hostinger panel must have the framework set to **Next.js** (not Vite). Always run `npm run optimize:images` before a build that includes new catalog images.

## Key Rules

- Do **NOT** migrate back to Vite — project is fully on Next.js App Router.
- Do **NOT** use `VITE_` env prefix — use `NEXT_PUBLIC_` instead.
- Do **NOT** mix App Router and Pages Router.
- Do **NOT** delete product data in `catalogData.js`.
- Keep the **yellow navbar** — it is SAHM brand identity.
- Keep `trailingSlash: true` and `output: 'export'` in `next.config.mjs` for static FTP deploy.
- Images must use `unoptimized: true` (set in `next.config.mjs`) since Next.js image optimization requires a server.
