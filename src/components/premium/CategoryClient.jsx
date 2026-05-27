'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'

export default function CategoryClient({ products, subcategories }) {
  const [active, setActive] = useState('Todas')
  const comparisonProducts = products.filter(product => product.comparison)

  const filtered = useMemo(() => {
    if (active === 'Todas') return products
    return products.filter(p => p.subcategory === active)
  }, [products, active])

  return (
    <>
      {/* ── Filtros de subcategoría ── */}
      {subcategories.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar productos por subcategoría">
          <button
            type="button"
            onClick={() => setActive('Todas')}
            aria-pressed={active === 'Todas'}
            className={`rounded-full px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wide transition ${
              active === 'Todas'
                ? 'bg-sahm-purple text-white shadow-md'
                : 'border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-black'
            }`}
          >
            Todas
          </button>
          {subcategories.map(sub => (
            <button
              key={sub}
              type="button"
              onClick={() => setActive(sub)}
              aria-pressed={active === sub}
              className={`rounded-full px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wide transition ${
                active === sub
                  ? 'bg-sahm-purple text-white shadow-md'
                  : 'border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-black'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* ── Contador ── */}
      <p className="mt-4 text-sm text-gray-500" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
      </p>

      {/* ── Grid de productos ── */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-16 py-12 text-center">
          <p className="font-heading text-2xl font-bold uppercase text-gray-300">Sin resultados</p>
          <p className="mt-2 text-gray-400">No hay productos en esta subcategoría.</p>
        </div>
      )}
      {comparisonProducts.length > 0 && (
        <section className="mt-12 rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm sm:p-5">
          <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">Tabla comparativa</p>
          <h2 className="mt-1 font-heading text-2xl font-extrabold uppercase italic text-black">Carburadores PZ</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-sahm-purple/15">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-sahm-purple text-white">
                  {['Modelo', 'Diámetro', 'Cilindrada sugerida', 'Uso recomendado', 'Nivel de flujo', 'Observación técnica'].map(label => (
                    <th key={label} className="px-4 py-3 font-heading text-xs font-extrabold uppercase tracking-wide text-sahm-yellow">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonProducts.map(product => (
                  <tr key={product.id} className="border-t border-sahm-purple/10">
                    <td className="px-4 py-3 font-heading text-sm font-extrabold uppercase text-black">{product.name}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-600">{product.comparison.diameter}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-600">{product.comparison.displacement}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-600">{product.comparison.use}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-600">{product.comparison.flow}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-600">{product.comparison.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  )
}
