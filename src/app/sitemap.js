import { CATEGORIES } from '../config/categories'
import { CATALOG_PRODUCTS } from '../config/catalog'
import { SITE_URL } from '../lib/seo'

export const dynamic = 'force-static'

// URLs end in "/" to match trailingSlash: true (otherwise each entry 308-redirects).
// /carrito/ and /buscar/ are noindex, so they are left out. No lastModified:
// a build timestamp would claim every page changed on every deploy.
export default function sitemap() {
  const staticRoutes = ['/', '/productos/', '/categorias/', '/nosotros/', '/contacto/']
  const categoryRoutes = CATEGORIES.filter(category => category.enabled).map(category => `/categorias/${category.id}/`)
  const productRoutes = CATALOG_PRODUCTS.map(product => `${product.productUrl}/`)

  return [...staticRoutes, ...categoryRoutes, ...productRoutes].map(route => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/productos') || route.startsWith('/categorias') ? 0.8 : 0.6,
  }))
}
