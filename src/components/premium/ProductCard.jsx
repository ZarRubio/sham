'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import { getProductLabel } from '../../config/catalog'
import QuantitySelector from './QuantitySelector'
import CartConfirmation from './CartConfirmation'

export default function ProductCard({ product, priority = false }) {
  const [qty, setQty] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { addToCart } = useCart()
  const label = getProductLabel(product, 'es')

  const handleAdd = () => {
    addToCart(product.id, qty)
    setShowConfirmation(true)
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sahm-yellow/30 hover:shadow-xl hover:shadow-sahm-purple/10">

      {/* Image */}
      <Link href={product.productUrl} className="relative block h-52 overflow-hidden bg-gray-50">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-sahm-purple px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-wider text-white">
          {product.category}
        </span>
        <Image
          src={product.images[0].card}
          alt={label}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
        />
        {/* Yellow accent stripe */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-sahm-yellow transition-transform duration-300 group-hover:scale-x-100"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-sahm-purple">
          {product.subcategory}
        </p>
        <h3 className="mt-1 font-heading text-lg font-extrabold uppercase leading-tight text-black">
          {label}
        </h3>
        <p className="mt-0.5 font-mono text-xs text-gray-400">REF {product.code}</p>

        {/* Price + availability */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-extrabold text-sahm-purple">Cotizar precio y stock</span>
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-700">
            En stock
          </span>
        </div>

        {/* Quantity + actions */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cant.</span>
            <QuantitySelector qty={qty} onChange={setQty} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={product.productUrl}
              className="rounded-lg border-2 border-gray-200 py-2.5 text-center text-xs font-heading font-bold uppercase tracking-wide text-gray-700 transition hover:border-gray-400 hover:text-black"
            >
              Ver ficha
            </Link>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-lg bg-sahm-yellow py-2.5 text-xs font-heading font-bold uppercase tracking-wide text-black transition hover:brightness-95 active:scale-[0.97]"
            >
              Agregar pedido
            </button>
          </div>
        </div>

        <CartConfirmation show={showConfirmation} onDismiss={() => setShowConfirmation(false)} />
      </div>
    </article>
  )
}
