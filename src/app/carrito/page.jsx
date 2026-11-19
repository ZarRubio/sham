import CartClient from '../../components/premium/CartClient'
import { pageMetadata } from '../../lib/seo'
import { CATALOG_PRODUCTS, toCardProduct } from '../../config/catalog'

export const metadata = pageMetadata({
  title: 'Mi pedido',
  description: 'Arma tu pedido SAHM y envíalo por WhatsApp.',
  path: '/carrito/',
  noindex: true,
})

export default function CartPage() {
  return (
    <main className="min-h-screen bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <CartClient products={CATALOG_PRODUCTS.map(toCardProduct)} />
      </div>
    </main>
  )
}
