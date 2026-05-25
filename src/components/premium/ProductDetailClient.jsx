'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { formatPrice, getProductLabel, getProductWhatsAppMessage } from '../../config/catalog'
import QuantitySelector from './QuantitySelector'
import CartConfirmation from './CartConfirmation'

function stockBadgeClass(level) {
  if (level === 'available') return 'bg-green-100 text-green-700'
  if (level === 'low') return 'bg-amber-100 text-amber-700'
  if (level === 'out') return 'bg-red-100 text-red-700'
  return 'bg-gray-100 text-gray-600'
}

function TechnicalSpecsTable({ specs }) {
  if (!specs?.length) return null

  return (
    <section className="mt-8 min-w-0 rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm sm:p-5 lg:col-span-2">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">Ficha técnica</p>
          <h2 className="font-heading text-2xl font-extrabold uppercase italic text-black">Datos específicos</h2>
        </div>
        <p className="text-xs text-gray-400">Información comercial según lista SAHM.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-sahm-purple/15">
        <table className="min-w-[760px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-sahm-purple text-white">
              {specs.map(([label]) => (
                <th key={label} className="px-5 py-4 align-top font-heading text-xs font-extrabold uppercase tracking-wide text-sahm-yellow">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              {specs.map(([label, value]) => (
                <td key={label} className="border-t border-sahm-purple/10 px-5 py-4 text-sm font-semibold text-slate-600">
                  {value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function ProductDetailClient({ product, related }) {
  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)
  const actionsRef = useRef(null)
  const { addToCart, items } = useCart()
  const label = getProductLabel(product, 'es')
  const inCart = useMemo(() => items.find(item => item.productId === product.id), [items, product.id])
  const hasMultipleImages = product.images.length > 1
  const priceLabel = formatPrice(product.retailPrice) || 'Consultar precio'
  const canAddToCart = product.stockLevel !== 'out'

  // Show sticky bar when the native action buttons scroll out of view (mobile only)
  useEffect(() => {
    const el = actionsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const showPreviousImage = () => {
    setActiveImage(current => (current === 0 ? product.images.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveImage(current => (current === product.images.length - 1 ? 0 : current + 1))
  }

  const handleGalleryKeyDown = event => {
    if (!hasMultipleImages) return
    if (event.key === 'ArrowLeft') showPreviousImage()
    if (event.key === 'ArrowRight') showNextImage()
  }

  const handleAdd = () => {
    if (!canAddToCart) return
    addToCart(product.id, qty)
    setShowConfirmation(true)
  }

  return (
    <>
    <section className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">

      {/* Image gallery */}
      <div className="min-w-0 overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-3 shadow-sm sm:p-4">
        <div
          className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 sm:aspect-[4/3] lg:min-h-[480px]"
          tabIndex={0}
          role="region"
          aria-label={`Galería de imágenes de ${label}`}
          onKeyDown={handleGalleryKeyDown}
        >
          <motion.div
            key={product.images[activeImage].detail}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={product.images[activeImage].detail}
              alt={label}
              fill
              loading={activeImage === 0 ? 'eager' : 'lazy'}
              sizes="(min-width: 1024px) 54vw, (min-width: 640px) 92vw, 100vw"
              className="object-contain p-5 sm:p-8"
            />
          </motion.div>
          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Ver imagen anterior"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-sahm-purple shadow-lg transition hover:bg-sahm-yellow hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-yellow sm:left-4"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Ver imagen siguiente"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-black/10 bg-white/90 text-sahm-purple shadow-lg transition hover:bg-sahm-yellow hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-yellow sm:right-4"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                <span>{activeImage + 1}</span>
                <span className="text-white/45">/</span>
                <span>{product.images.length}</span>
              </div>
            </>
          )}
        </div>
        {hasMultipleImages && (
          <div className="mt-4 flex max-w-full gap-3 overflow-x-auto overscroll-x-contain pb-1">
            {product.images.map((image, index) => (
              <button
                key={image.detail}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Ver imagen ${index + 1}: ${image.label}`}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-gray-50 transition sm:h-24 sm:w-24 ${
                  activeImage === index
                    ? 'border-sahm-yellow shadow-md shadow-sahm-yellow/20'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <Image src={image.detail} alt="" fill sizes="96px" className="object-contain p-2" />
                {activeImage === index && (
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-sahm-yellow" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Purchase area */}
      <aside className="min-w-0 flex flex-col justify-start pt-2">
        <Link
          href="/productos"
          className="w-fit text-sm font-bold text-gray-400 transition hover:text-black"
        >
          ← Volver al catálogo
        </Link>

        <span className="mt-6 text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">
          {product.subcategory}
        </span>
        <h1 className="mt-2 font-heading text-4xl font-extrabold uppercase leading-tight text-black sm:text-5xl">
          {label}
        </h1>
        <p className="mt-1 font-mono text-sm text-gray-400">
          {product.sku ? `SKU ${product.sku}` : `REF ${product.code}`}
        </p>

        {/* Price + availability */}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <span className="font-heading text-3xl font-extrabold uppercase text-sahm-purple">{priceLabel}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${stockBadgeClass(product.stockLevel)}`}>
            {product.stockLabel}
          </span>
        </div>

        {/* Features */}
        <div className="mt-5 rounded-xl border-2 border-gray-100 bg-gray-50 p-4">
          {[
            product.sku ? `Código SKU ${product.sku}` : 'Código por confirmar',
            product.retailPrice ? 'Precio publicado en catálogo' : 'Precio sujeto a cotización',
            `${product.stockLabel} para atención comercial`,
          ].map(item => (
            <p key={item} className="flex items-center gap-2 py-1 text-sm text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-sahm-yellow" />
              {item}
            </p>
          ))}
        </div>

        {/* Cart in status */}
        {inCart && !showConfirmation && (
          <p className="mt-4 text-sm font-bold text-sahm-purple">
            Ya tienes {inCart.qty} en tu pedido.
          </p>
        )}

        {/* Quantity */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-wide text-gray-500">Cantidad</span>
          <QuantitySelector qty={qty} onChange={setQty} />
        </div>

        {/* Buttons */}
        <div ref={actionsRef} className="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!canAddToCart}
            className="rounded-xl bg-sahm-yellow px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            {canAddToCart ? 'Agregar al carrito' : 'Sin stock'}
          </button>
          <a
            href={buildWhatsAppMessageUrl(getProductWhatsAppMessage(product, 'Hola, quiero consultar precio y disponibilidad de', 'es'))}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-gray-200 px-6 py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wide text-gray-700 transition hover:border-gray-400 hover:text-black"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <CartConfirmation show={showConfirmation} onDismiss={() => setShowConfirmation(false)} />
      </aside>

      <TechnicalSpecsTable specs={product.technicalSpecs} />
    </section>

    {/* Sticky mobile CTA — appears when the native buttons scroll off-screen */}
    {stickyVisible && (
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white px-4 pb-safe pt-3 shadow-2xl lg:hidden"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleAdd}
            disabled={!canAddToCart}
            className="rounded-xl bg-sahm-yellow py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-black transition active:brightness-90 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          >
            {canAddToCart ? 'Agregar' : 'Sin stock'}
          </button>
          <a
            href={buildWhatsAppMessageUrl(getProductWhatsAppMessage(product, 'Hola, quiero consultar precio y disponibilidad de', 'es'))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition active:brightness-90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotizar
          </a>
        </div>
      </div>
    )}
    </>
  )
}
