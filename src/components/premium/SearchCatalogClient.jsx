'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { getProductLabel } from '../../config/catalogFormat'

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function searchProducts(products, query) {
  const q = normalize(query.trim())
  if (!q) return products
  const tokens = q.split(/\s+/).filter(Boolean)
  return products.filter(product => {
    const haystack = normalize([
      getProductLabel(product, 'es'),
      product.code,
      product.sku,
      product.measure,
      product.category,
      product.subcategory,
      product.name,
    ].join(' '))
    return tokens.every(token => haystack.includes(token))
  })
}

export default function SearchCatalogClient({ products }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchProducts(products, query), [products, query])

  return (
    <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
      <div className="reveal">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-sahm-yellow">Catálogo SAHM</p>
        <h1 className="mt-4 text-5xl font-black leading-none text-white sm:text-6xl">Busca por producto, medida o referencia.</h1>
        <p className="mt-5 text-white/55">Encuentra llantas, cámaras, repuestos y accesorios por tipo de producto. Si tienes dudas, agrega productos al carrito y cotiza por WhatsApp.</p>
      </div>

      <div className="reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
        <label className="block">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/38">Búsqueda de catálogo</span>
          <input
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Medida, referencia o subcategoría"
            className="mt-3 w-full rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-base font-bold text-white outline-none placeholder:text-white/22 focus:border-sahm-yellow/70"
          />
        </label>
        <p className="mt-4 text-sm font-semibold text-white/45">
          {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
        </p>

        {results.length > 0 ? (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {results.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 px-5 py-8 text-center">
            <p className="font-heading text-2xl font-extrabold uppercase text-white">Sin resultados</p>
            <p className="mt-2 text-sm text-white/50">Prueba con otra medida, referencia o categoría.</p>
          </div>
        )}
      </div>
    </div>
  )
}
