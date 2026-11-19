import { notFound } from 'next/navigation'
import ProductDetailClient from '../../../components/premium/ProductDetailClient'
import ProductCard from '../../../components/premium/ProductCard'
import JsonLd from '../../../components/premium/JsonLd'
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS, getProductById } from '../../../config/catalog'
import { breadcrumbJsonLd, pageMetadata, productJsonLd, productSeoDescription, productSeoTitle } from '../../../lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return CATALOG_PRODUCTS.map(product => ({ slug: product.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = getProductById(slug)
  if (!product) return { title: 'Producto' }

  return pageMetadata({
    title: productSeoTitle(product),
    description: productSeoDescription(product),
    path: `${product.productUrl}/`,
    image: product.images[0]?.detail,
  })
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = getProductById(slug)
  if (!product) notFound()

  const related = CATALOG_PRODUCTS
    .filter(item => item.id !== product.id && item.category === product.category)
    .slice(0, 4)

  const category = CATALOG_CATEGORIES.find(item => item.name === product.category)
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos/' },
    ...(category ? [{ name: category.name, path: `/categorias/${category.id}/` }] : []),
    { name: productSeoTitle(product), path: `${product.productUrl}/` },
  ])

  return (
    <main className="min-h-screen overflow-x-hidden bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <JsonLd data={[productJsonLd(product), breadcrumb]} />
      <div className="mx-auto w-full max-w-7xl">
        <ProductDetailClient product={product} related={related} />
        {related.length > 0 && (
          <section className="mt-16">
            <div className="mb-6">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">También puede interesarte</span>
              <h2 className="mt-1 font-heading text-3xl font-extrabold uppercase italic text-black">Productos relacionados</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(item => <ProductCard key={item.id} product={item} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
