# SAHM Landing

Landing page built with React, Vite and Tailwind CSS.

## Requirements

- Node.js 18+ (recommended 20+)
- npm 9+

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env
```

3. Update WhatsApp number in `.env`:

```env
VITE_WHATSAPP_NUMBER=51999999999
```

Use only digits, with country code, without `+`.

## Scripts

- `npm run dev`: start development server
- `npm run build`: create production build
- `npm run preview`: preview production build

## Project structure

- `src/pages`: top-level pages
- `src/components/sahm`: landing sections
- `src/hooks`: reusable hooks
- `src/config`: shared app config (navigation and WhatsApp)
