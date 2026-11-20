'use client'

import Link from 'next/link'

export default function CartConfirmation({ show, onDismiss }) {
  if (!show) return null

  return (
    <div role="status" className="mt-3 rounded-xl border-2 border-green-200 bg-green-50 p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="text-sm font-bold text-green-800">Producto agregado al carrito</p>
      </div>
      <div className="mt-3 flex gap-2">
        <Link
          href="/carrito"
          className="flex-1 rounded-lg bg-sahm-yellow py-2.5 text-center text-sm font-heading font-bold uppercase tracking-wide text-black transition hover:brightness-95"
        >
          Ver carrito
        </Link>
        <button
          type="button"
          onClick={onDismiss}
          className="flex-1 rounded-lg border-2 border-gray-200 py-2.5 text-center text-sm font-heading font-bold uppercase tracking-wide text-gray-600 transition hover:border-gray-300 hover:text-black"
        >
          Seguir comprando
        </button>
      </div>
    </div>
  )
}
