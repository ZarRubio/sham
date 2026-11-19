import Link from 'next/link'
import ProductsClient from '../../components/premium/ProductsClient'
import { CATALOG_PRODUCTS, toCardProduct } from '../../config/catalog'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Catálogo de llantas, cámaras y carburadores para moto',
  description: 'Catálogo SAHM de llantas para moto y moto eléctrica, cámaras y carburadores PZ con stock real y precios en soles. Cotiza por WhatsApp.',
  path: '/productos/',
})

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-7xl">

        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-black">Inicio</Link>
          <span>/</span>
          <span className="font-bold text-black">Productos</span>
        </nav>

        <h1 className="font-heading text-5xl font-extrabold uppercase italic text-black sm:text-6xl">
          Catálogo
        </h1>
        <p className="mt-2 text-gray-500">
          Llantas, cámaras y repuestos con stock real. Filtra por categoría o busca por nombre.
        </p>

        <ProductsClient products={CATALOG_PRODUCTS.map(toCardProduct)} />
      </div>
    </main>
  )
}
