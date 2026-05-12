import { useEffect } from 'react'
import Navbar from '../components/sahm/Navbar'
import Footer from '../components/sahm/Footer'
import ScrollProgress from '../components/sahm/ScrollProgress'
import { WhatsAppIcon } from '../components/sahm/icons'
import { useCart } from '../context/CartContext'
import { CATALOG_PRODUCTS, getProductLabel } from '../config/catalog'
import { buildWhatsAppMessageUrl } from '../config/site'

const COPY = {
  es: {
    title: 'Mi pedido',
    items: item => `${item} artículo${item === 1 ? '' : 's'}`,
    empty: 'Tu carrito está vacío.',
    emptyText: 'Agrega productos desde el catálogo para armar tu pedido.',
    browseCatalog: 'Ir al catálogo',
    ref: 'Ref',
    remove: 'Eliminar',
    clear: 'Vaciar carrito',
    sendOrder: 'Enviar pedido por WhatsApp',
    continueShopping: 'Seguir comprando',
    waHeader: 'Hola, quiero hacer el siguiente pedido:\n\n',
    waFooter: '\n\n¿Tienen stock y cuál es el precio total? Mi ciudad es: ',
    waLine: (qty, label, code, sub) => `• ${qty}x ${label} · Ref: ${code} (${sub})`,
  },
  en: {
    title: 'My order',
    items: item => `${item} item${item === 1 ? '' : 's'}`,
    empty: 'Your cart is empty.',
    emptyText: 'Add products from the catalog to build your order.',
    browseCatalog: 'Go to catalog',
    ref: 'Ref',
    remove: 'Remove',
    clear: 'Clear cart',
    sendOrder: 'Send order on WhatsApp',
    continueShopping: 'Continue shopping',
    waHeader: 'Hi, I want to place the following order:\n\n',
    waFooter: '\n\nDo you have stock and what is the total price? My city is: ',
    waLine: (qty, label, code, sub) => `• ${qty}x ${label} · Ref: ${code} (${sub})`,
  },
}

function buildOrderMessage(items, lang, copy) {
  const lines = items.map(({ productId, qty }) => {
    const product = CATALOG_PRODUCTS.find(p => p.id === productId)
    if (!product) return null
    const label = getProductLabel(product, lang)
    return copy.waLine(qty, label, product.code, product.subcategory)
  }).filter(Boolean)

  return copy.waHeader + lines.join('\n') + copy.waFooter
}

export default function CartPage({ lang, setLang }) {
  const { items, removeFromCart, updateQty, clearCart, totalItems } = useCart()
  const copy = COPY[lang]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    document.title = lang === 'es' ? 'Mi pedido — SAHM' : 'My order — SAHM'
  }, [lang])

  const cartProducts = items.map(item => ({
    ...item,
    product: CATALOG_PRODUCTS.find(p => p.id === item.productId),
  })).filter(i => i.product)

  const waUrl = buildWhatsAppMessageUrl(buildOrderMessage(items, lang, copy))

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />

      <main className="px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">{copy.title}</h1>
              {totalItems > 0 && (
                <p className="mt-1 text-sm font-semibold text-slate-500">{copy.items(totalItems)}</p>
              )}
            </div>
            {cartProducts.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="cursor-pointer rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-red-500 transition hover:border-red-400 hover:text-red-600 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                {copy.clear}
              </button>
            )}
          </div>

          {cartProducts.length === 0 ? (
            <div className="mt-12 rounded-[2rem] border border-sahm-purple/15 bg-[#fff9df] p-10 text-center">
              <p className="text-2xl font-black text-slatem-900">{copy.empty}</p>
              <p className="mt-3 text-slate-600">{copy.emptyText}</p>
              <a
                href="#/productos"
                className="mt-6 inline-flex rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5"
              >
                {copy.browseCatalog}
              </a>
            </div>
          ) : (
            <>
              <div className="mt-6 space-y-3">
                {cartProducts.map(({ product, qty }) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    qty={qty}
                    lang={lang}
                    copy={copy}
                    onQtyChange={newQty => updateQty(product.id, newQty)}
                    onRemove={() => removeFromCart(product.id)}
                  />
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href="#/productos"
                  className="inline-flex items-center justify-center rounded-full border border-sahm-purple/20 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-sahm-purple transition hover:border-sahm-purple hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  {copy.continueShopping}
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-sahm-yellow px-8 py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900 shadow-lg shadow-sahm-yellow/30 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
                >
                  <WhatsAppIcon size={16} />
                  {copy.sendOrder}
                </a>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  )
}

function CartItem({ product, qty, lang, copy, onQtyChange, onRemove }) {
  const label = getProductLabel(product, lang)

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-sahm-purple/10 bg-white p-4 shadow-sm">
      <a href={product.productUrl} className="shrink-0">
        <img
          src={product.images[0].card}
          alt={label}
          className="h-20 w-20 rounded-xl object-contain bg-slate-50 p-1"
          loading="lazy"
        />
      </a>

      <div className="min-w-0 flex-1">
        <a href={product.productUrl}>
          <p className="truncate text-sm font-black text-slate-900 hover:text-sahm-purple">{label}</p>
        </a>
        <p className="mt-0.5 font-mono text-xs text-slate-400">{copy.ref}: {product.code}</p>
        <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-sahm-purple">{product.subcategory}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={() => onQtyChange(qty - 1)}
            className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-l-xl text-slate-600 transition hover:bg-slate-100 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sahm-purple"
            aria-label="Decrease quantity"
          >
            <MinusIcon />
          </button>
          <span className="w-8 text-center text-sm font-black text-slate-900">{qty}</span>
          <button
            type="button"
            onClick={() => onQtyChange(qty + 1)}
            className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-r-xl text-slate-600 transition hover:bg-slate-100 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sahm-purple"
            aria-label="Increase quantity"
          >
            <PlusIcon />
          </button>
        </div>

        <button
          type="button"
          onClick={onRemove}
          className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition hover:bg-red-50 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          aria-label={copy.remove}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M5 12h14" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
    </svg>
  )
}
