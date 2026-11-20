# SAHM PARTS

Catálogo web de llantas, cámaras y carburadores para motos en Perú (https://sahmparts.com). Los pedidos se envían por WhatsApp; no hay checkout.

Construido con Next.js 16 (App Router), React 19 y Tailwind CSS 3.

## Requisitos

- Node.js 20+ (Hostinger compila con Node 22)
- npm 10+

## Instalación

```bash
npm install
cp .env.example .env.local
```

En `.env.local`, el número de WhatsApp va solo con dígitos, con código de país y sin `+`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=51987881821
```

Si no se define, se usa el número de respaldo de `src/config/site.js`.

## Scripts

- `npm run dev`: servidor de desarrollo en http://localhost:3000
- `npm run build`: build de producción (`next build --webpack`)
- `npm run start`: sirve el build de producción (así corre en Hostinger)
- `npm run optimize:images`: genera las imágenes WebP del catálogo (`card`, `detail-N`, `thumb-N`) con Sharp. Ejecutarlo después de agregar o cambiar fotos y subir las imágenes generadas a git.

## Despliegue

Hostinger publica automáticamente cada push a `main` (build Node.js en el servidor). Antes de hacer push, ejecuta `npm run build` en local: si el build falla en `main`, falla la publicación.

## Estructura

- `src/app`: rutas (App Router)
- `src/components/premium`: componentes activos
- `src/config`: datos del catálogo (`catalogData.js`), helpers y configuración del sitio
- `src/lib`: SEO (`seo.js`) y datos de la portada
- `src/components/sahm` y `src/hooks`: código antiguo, sin uso en las rutas actuales

Más detalles de arquitectura en `CLAUDE.md`.
