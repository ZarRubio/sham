# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (Vite)
npm run build     # production build
npm run preview   # preview production build locally
```

No test runner or linter is configured.

## Environment

Copy `.env.example` to `.env` and set the WhatsApp number:

```env
VITE_WHATSAPP_NUMBER=51999999999   # digits only, with country code, no +
```

The fallback number in `src/config/site.js` is used if the env var is absent.

## Architecture

Single-page React landing for **SAHM** (tire brand). No routing — the entire app renders `<Sahm>` from `src/pages/Sahm.jsx`.

**Bilingual (ES / EN):** Language state lives in `Sahm.jsx` as `lang` (`'es'` | `'en'`), persisted to `localStorage` under key `sahm_lang`. Every section component receives `lang` as a prop and owns its own `UI_TEXT = { es: {…}, en: {…} }` object for copy. Navigation labels come from `src/config/navigation.js` (`NAV_LINKS_BY_LANG`).

**Config layer (`src/config/`):**
- `site.js` — exports `WHATSAPP_NUMBER`, `WHATSAPP_URL`, and `buildWhatsAppMessageUrl(message)`.
- `navigation.js` — exports `NAV_LINKS_BY_LANG` keyed by `'es'` / `'en'`.

**Sections (rendered in order in `Sahm.jsx`):**
`Navbar` → `Hero` → `Beneficios` → `Confianza` → `Categorias` → `ProductosDestacados` → `Footer`

**Scroll animations:** `src/hooks/useFadeIn.js` exposes `useFadeIn(threshold?)` — returns `[ref, isVisible]` using `IntersectionObserver`. Attach `ref` to a section root and toggle a Tailwind opacity/translate class on `isVisible`.

## Styling

- **Tailwind CSS 3** with two brand tokens: `sahm-yellow` (`#F5C000`) and `sahm-purple` (`#3D2785`).
- Font: **Kanit** (loaded from Google Fonts in `src/index.css`).
- Global utility classes defined in `src/index.css`: `.ambient-glow`, `.soft-grid`, `.float-slow`.
- CSS variables (`--sahm-yellow`, `--sahm-purple`, `--bg-1`, `--bg-2`, `--ink`) are available alongside Tailwind classes.
- `prefers-reduced-motion` is respected — `scroll-behavior` and `.float-slow` animation are disabled.

## Deployment

Deployed to GitHub Pages via a CI workflow that builds and pushes to the `gh-pages` branch.
