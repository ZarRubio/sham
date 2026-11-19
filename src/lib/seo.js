import { WHATSAPP_NUMBER } from '../config/site'
import { getProductLabel } from '../config/catalogFormat'

export const SITE_URL = 'https://sahmparts.com'
export const SITE_NAME = 'SAHM PARTS'
const DEFAULT_OG_IMAGE = { url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Per-page metadata. Next.js replaces (does not merge) the parent's `openGraph`
 * and `twitter` objects, so every page must send the full set — otherwise
 * og:url/og:title fall back to the home page values from layout.jsx.
 * `path` must include the trailing slash (trailingSlash: true).
 */
export function pageMetadata({ title, description, path, image, noindex = false }) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const images = image ? [{ url: image, alt: title }] : [DEFAULT_OG_IMAGE]

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'es_PE',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: images.map(img => img.url),
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  }
}

const clean = text => String(text || '').replace(/\s+/g, ' ').trim()

// "110 90-13" (folder-friendly name) -> "110/90-13", the way people search tire sizes.
const searchableName = text => clean(text).replace(/\b(\d{2,3}) (\d{2}-\d{2})\b/g, '$1/$2')

// Subcategory as an audience: "Cámara de motos" -> "motos", "Moto eléctrica" -> "moto eléctrica".
const audience = product => clean(product.subcategory).replace(/^c[áa]maras? de /i, '').toLowerCase()

export function productSeoTitle(product) {
  return clean(product.seoName) || `${searchableName(getProductLabel(product, 'es'))} para ${audience(product)}`
}

/** Fallback description built only from catalog data (no invented specs). */
export function productSeoDescription(product) {
  if (product.metaDescription) return clean(product.metaDescription)

  const specs = [
    product.measure && `medida ${product.measure}`,
    product.category === 'Llantas' && product.tubeType,
  ].filter(Boolean).join(', ')
  const price = typeof product.retailPrice === 'number' ? ` Precio S/ ${product.retailPrice.toFixed(2)}.` : ''

  return clean(`${productSeoTitle(product)}${specs ? ` (${specs})` : ''}.${price} Cotiza por WhatsApp con SAHM y recibe tu pedido en todo el Perú.`)
}

const AVAILABILITY = {
  available: 'https://schema.org/InStock',
  low: 'https://schema.org/LimitedAvailability',
  out: 'https://schema.org/OutOfStock',
}

export function productJsonLd(product) {
  const offer = typeof product.retailPrice === 'number'
    ? {
        '@type': 'Offer',
        url: absoluteUrl(`${product.productUrl}/`),
        priceCurrency: 'PEN',
        price: product.retailPrice.toFixed(2),
        itemCondition: 'https://schema.org/NewCondition',
        ...(AVAILABILITY[product.stockLevel] && { availability: AVAILABILITY[product.stockLevel] }),
        seller: { '@type': 'Organization', name: SITE_NAME },
      }
    : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productSeoTitle(product),
    description: clean(product.shortDescription) || productSeoDescription(product),
    image: product.images.map(image => absoluteUrl(image.detail)),
    ...(product.sku && { sku: product.sku }),
    brand: { '@type': 'Brand', name: product.brand },
    category: `${product.category} > ${product.subcategory}`,
    ...(offer && { offers: offer }),
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/favicon-192x192.png'),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: 'sales',
      areaServed: 'PE',
      availableLanguage: 'es',
    },
  }
}
