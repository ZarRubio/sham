'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import { CATALOG_PRODUCTS, getProductLabel } from '../../config/catalog'
import { buildWhatsAppMessageUrl } from '../../config/site'
import QuantitySelector from './QuantitySelector'

function buildMessage(items) {
  const lines = items.map(item => {
    const product = CATALOG_PRODUCTS.find(entry => entry.id === item.productId)
    if (!product) return null
    const sku = product.sku ? `SKU: ${product.sku}` : `Ref: ${product.code}`
    return `- ${item.qty}x ${getProductLabel(product, 'es')} | ${sku} | ${product.subcategory}`
  }).filter(Boolean)

  return `Hola, quiero hacer el siguiente pedido:\n\n${lines.join('\n')}\n\n¿Tienen stock y cuál es el precio total? Mi ciudad es: `
}

export default function CartClient() {
  const { items, removeFromCart, updateQty, clearCart, totalItems, hasHydrated } = useCart()
  const cartProducts = items.map(item => ({
    ...item,
    product: CATALOG_PRODUCTS.find(product => product.id === item.productId),
  })).filter(item => item.product)

  if (!hasHydrated) {
    return (
      <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="font-heading text-3xl font-extrabold uppercase text-black">Cargando pedido...</p>
        <p className="mt-3 text-gray-500">Estamos revisando tu selección guardada.</p>
      </div>
    )
  }

  if (cartProducts.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="font-heading text-3xl font-extrabold uppercase text-black">Tu pedido está vacío.</p>
        <p className="mt-3 text-gray-500">Agrega productos del catálogo para cotizar con un asesor.</p>
        <Link
          href="/productos"
          className="mt-6 inline-block rounded-xl bg-sahm-yellow px-7 py-3 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
        >
          Ir al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Pedido</span>
          <h1 className="mt-1 font-heading text-4xl font-extrabold uppercase italic text-black">Mi selección</h1>
          <p className="mt-1 text-sm text-gray-500">{totalItems} artículo{totalItems !== 1 ? 's' : ''} listos para cotizar.</p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="w-fit rounded-xl border-2 border-red-100 px-5 py-2 text-xs font-bold uppercase tracking-wide text-red-400 transition hover:border-red-200 hover:text-red-500"
        >
          Vaciar pedido
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {cartProducts.map(({ product, qty }) => (
          <article key={product.id} className="grid gap-4 rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm sm:grid-cols-[80px_1fr_auto] sm:items-center">
            <div className="relative h-20 w-20 rounded-xl bg-gray-50">
              <Image
                src={product.images[0].card}
                alt={getProductLabel(product, 'es')}
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>
            <div>
              <Link href={product.productUrl} className="font-heading text-base font-extrabold uppercase text-black hover:text-sahm-purple">
                {getProductLabel(product, 'es')}
              </Link>
              <p className="mt-0.5 font-mono text-xs text-gray-400">
                {product.sku ? `SKU ${product.sku}` : `REF ${product.code}`}
              </p>
              <span className="mt-1 inline-block rounded-full bg-sahm-purple px-2.5 py-0.5 text-[10px] font-heading font-bold uppercase text-white">
                {product.category}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <QuantitySelector qty={qty} onChange={newQty => updateQty(product.id, newQty)} />
              <button
                type="button"
                onClick={() => removeFromCart(product.id)}
                className="text-xs font-bold uppercase tracking-wide text-gray-400 transition hover:text-red-500"
              >
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
        <Link
          href="/productos"
          className="text-center text-sm font-bold text-gray-400 transition hover:text-black sm:px-4"
        >
          ← Seguir comprando
        </Link>
        <a
          href={buildWhatsAppMessageUrl(buildMessage(items))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 rounded-xl bg-green-500 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600 hover:shadow-green-500/40 active:scale-[0.98] sm:py-3.5"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enviar pedido por WhatsApp
        </a>
      </div>
    </div>
  )
}
