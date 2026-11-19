import Link from 'next/link'
import { notFound } from 'next/navigation'
import CategoryClient from '../../../components/premium/CategoryClient'
import { CATEGORIES, getCategoryById } from '../../../config/categories'
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS, getSubcategories, toCardProduct } from '../../../config/catalog'
import JsonLd from '../../../components/premium/JsonLd'
import { breadcrumbJsonLd, pageMetadata } from '../../../lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return CATEGORIES.filter(category => category.enabled).map(category => ({ categoria: category.id }))
}

export async function generateMetadata({ params }) {
  const { categoria } = await params
  const category = getCategoryById(categoria)
  if (!category) notFound()

  const label = category?.name || categoria
  const catalogCategory = CATALOG_CATEGORIES.find(c => c.id === categoria)
  return pageMetadata({
    title: `${label} para motos en Perú`,
    description: catalogCategory?.description || category?.description || `Catálogo de ${label} SAHM.`,
    path: `/categorias/${categoria}/`,
    image: catalogCategory?.image || undefined,
  })
}

export default async function CategoryPage({ params }) {
  const { categoria } = await params
  const category = getCategoryById(categoria)
  const label = category?.name || categoria
  const catalogName = category?.catalogName || label
  const products = CATALOG_PRODUCTS.filter(product => product.category === catalogName)
  const subcategories = getSubcategories(catalogName)
  const coverImage = CATALOG_CATEGORIES.find(c => c.id === categoria)?.image || ''

  return (
    <main className="min-h-screen bg-sahm-cream">
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Inicio', path: '/' },
        { name: 'Categorías', path: '/categorias/' },
        { name: label, path: `/categorias/${categoria}/` },
      ])} />

      {/* ── Mini hero banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black px-4 py-10 sm:px-6 sm:py-14">
        {/* Subtle cover image as background */}
        {coverImage && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url(${coverImage})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
            }}
          />
        )}

        {/* Gradient fade on right so image doesn't clash with text */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sahm-night via-sahm-purple/75 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          {/* breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="transition hover:text-white">Inicio</Link>
            <span>/</span>
            <Link href="/categorias" className="transition hover:text-white">Categorías</Link>
            <span>/</span>
            <span className="font-bold text-white">{label}</span>
          </nav>

          <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-yellow">Categoría</span>
          <h1 className="mt-2 font-heading text-5xl font-extrabold uppercase italic text-white sm:text-6xl lg:text-7xl">
            {label}
          </h1>

          <div className="mt-3 flex items-center gap-4">
            {category?.description && (
              <p className="max-w-xl text-sm leading-relaxed text-white/65">{category.description}</p>
            )}
          </div>

          {/* Product count pill */}
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-sahm-yellow" />
              {products.length} {products.length === 1 ? 'producto' : 'productos'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Product grid ── */}
      <div className="px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <CategoryClient products={products.map(toCardProduct)} subcategories={subcategories} />
        </div>
      </div>
    </main>
  )
}
