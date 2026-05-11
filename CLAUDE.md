# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install              # install dependencies
npm run dev              # start dev server (Vite)
npm run build            # production build
npm run preview          # preview production build locally
npm run optimize:images  # compress catalog images with Sharp (run before build)
```

No test runner or linter is configured.

## Environment

Copy `.env.example` to `.env` and set the WhatsApp number:

```env
VITE_WHATSAPP_NUMBER=51999999999   # digits only, with country code, no +
```

The fallback number in `src/config/site.js` is used if the env var is absent.

## Architecture

React SPA for **SAHM** (motorcycle tire distributor, Peru). `App.jsx` owns routing, language state, and localStorage persistence.

**Hash-based routing (no router library):**
- `#/` → `src/pages/Sahm.jsx` — main landing page
- `#/categorias` → `src/pages/CategoriesPage.jsx` — category browser
- `#/producto/:id` → `src/pages/ProductDetail.jsx` — product detail with image gallery

`App.jsx` parses `window.location.hash` on mount and listens to `hashchange`. Language state (`lang`, `setLang`) lives in `App.jsx` and flows down to all pages and section components.

**Bilingual (ES / EN):** `lang` is `'es'` | `'en'`, persisted to `localStorage` under key `sahm_lang`. Every section component owns its own `COPY = { es: {…}, en: {…} }` object for copy. Navigation labels come from `src/config/navigation.js` (`NAV_LINKS_BY_LANG`).

**Config layer (`src/config/`):**
- `site.js` — `WHATSAPP_NUMBER`, `WHATSAPP_URL`, `buildWhatsAppMessageUrl(message)`, and feature flags `catalogReady` / `socialReady` (booleans that gate unreleased UI).
- `navigation.js` — `NAV_LINKS_BY_LANG` keyed by `'es'` / `'en'`.
- `catalogData.js` — raw product and category data (source of truth; edit here to add/remove products).
- `catalog.js` — enriches raw data with image paths and URLs; exports `CATALOG_PRODUCTS`, `CATALOG_CATEGORIES`, and helpers: `getSubcategories()`, `getProductById()`, `getProductLabel()`, `getProductWhatsAppMessage()`.

**Landing page sections (rendered in order in `Sahm.jsx`):**
`Navbar` → `Hero` → `TrustBar` → `Beneficios` → `Confianza` → `Categorias` → `ProductosDestacados` → `Footer`

**Additional components (`src/components/sahm/`):**
- `FloatingWhatsApp` — fixed floating button, visible after scroll threshold
- `ScrollProgress` — scroll progress bar at top of page
- `ComingSoonModal` — reusable modal for gated features
- `icons.jsx` — centralized inline SVG icon components

**Hooks (`src/hooks/`):**
- `useFadeIn(threshold?)` — returns `[ref, isVisible]` via `IntersectionObserver`; attach `ref` to a section root and toggle Tailwind opacity/translate on `isVisible`. Disconnects after first intersection.
- `useScrollY()` — returns current scroll Y position; used by Navbar (shadow), FloatingWhatsApp (visibility), and Hero (parallax).

**State management:** No Context API or Redux. Component-local `useState` for UI state (menus, filters, accordions, image carousels). `App.jsx` is the only global state owner (lang + routing).

## Styling

- **Tailwind CSS 3** with two brand tokens: `sahm-yellow` (`#F5C000`) and `sahm-purple` (`#3D2785`).
- Font: **Kanit** (loaded from Google Fonts in `src/index.css`).
- Global utility classes defined in `src/index.css`: `.ambient-glow`, `.soft-grid`, `.float-slow`, `.card-shine`, `.btn-shimmer`.
- CSS variables (`--sahm-yellow`, `--sahm-purple`, `--bg-1`, `--bg-2`, `--ink`) available alongside Tailwind classes.
- `tailwind.config.js` also defines custom animations: `marquee`, `fade-up`, `fade-in`, `scale-in`, `glow-cta`, `pulse-ring`, `scroll-bounce`.
- `prefers-reduced-motion` is respected — `scroll-behavior`, `.float-slow`, and all scroll animations are disabled.

## Deployment

Deployed to Hostinger via FTP using a CI workflow (`.github/workflows/`). Vite uses a relative base path (`./`) for compatibility.
