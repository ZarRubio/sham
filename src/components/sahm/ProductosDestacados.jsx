import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'

const PRODUCTOS = [
  { id: 1, nombre: 'Llanta Sportmax', codigo: 'BT45F', tag: 'Urbano', color: 'from-orange-200 to-amber-100' },
  { id: 2, nombre: 'Llanta Pilot Street', codigo: 'PS103', tag: 'Mixto', color: 'from-sky-200 to-cyan-100' },
  { id: 3, nombre: 'Camara Universal 3.00', codigo: 'CM300', tag: 'Durable', color: 'from-violet-200 to-fuchsia-100' },
  { id: 4, nombre: 'Kit de Frenos', codigo: 'KF2024', tag: 'Seguridad', color: 'from-rose-200 to-pink-100' },
  { id: 5, nombre: 'Filtro de Aire Sport', codigo: 'FA150', tag: 'Rendimiento', color: 'from-emerald-200 to-lime-100' },
  { id: 6, nombre: 'Aceite Motor 4T', codigo: 'AM20W50', tag: 'Mantenimiento', color: 'from-yellow-200 to-amber-100' },
]

const ITEMS_PER_VIEW = 3

function getVisible(items, start, count) {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(items[(start + i) % items.length])
  }
  return result
}

export default function ProductosDestacados() {
  const [start, setStart] = useState(0)
  const [ref, visible] = useFadeIn()
  const visibles = getVisible(PRODUCTOS, start, ITEMS_PER_VIEW)
  const mobileItem = PRODUCTOS[start % PRODUCTOS.length]

  return (
    <section
      id="productos"
      ref={ref}
      className={`px-6 py-20 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-[#fffdf6] p-8 shadow-2xl shadow-slate-200/50 md:p-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">Productos destacados</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">Listos para entrega</h2>
          </div>
          <a
            href={buildWhatsAppMessageUrl('Hola, quiero recibir el catalogo completo de SAHM')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white"
          >
            Solicitar catalogo
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <NavBtn direction="left" onClick={() => setStart(s => (s - 1 + PRODUCTOS.length) % PRODUCTOS.length)} />
          <div className="grid flex-1 grid-cols-3 gap-5">
            {visibles.map(item => (
              <ProductoCard key={`${item.id}-${start}`} producto={item} />
            ))}
          </div>
          <NavBtn direction="right" onClick={() => setStart(s => (s + 1) % PRODUCTOS.length)} />
        </div>

        <div className="md:hidden">
          <ProductoCard producto={mobileItem} />
          <div className="mt-5 flex items-center justify-center gap-4">
            <NavBtn direction="left" onClick={() => setStart(s => (s - 1 + PRODUCTOS.length) % PRODUCTOS.length)} />
            <span className="text-sm font-semibold text-slate-600">{(start % PRODUCTOS.length) + 1} / {PRODUCTOS.length}</span>
            <NavBtn direction="right" onClick={() => setStart(s => (s + 1) % PRODUCTOS.length)} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductoCard({ producto }) {
  const waUrl = buildWhatsAppMessageUrl(
    `Hola, deseo consultar disponibilidad del producto ${producto.codigo} - ${producto.nombre}`
  )

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40 transition hover:-translate-y-1">
      <div className={`h-32 bg-gradient-to-r ${producto.color}`} />
      <div className="p-5">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-600">{producto.tag}</span>
        <h3 className="mt-4 text-lg font-black text-slate-900">{producto.nombre}</h3>
        <p className="mt-1 text-3xl font-black tracking-[0.12em] text-sahm-purple">{producto.codigo}</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-sahm-yellow py-3 text-xs font-black uppercase tracking-[0.1em] text-slate-900"
        >
          Consultar disponibilidad
        </a>
      </div>
    </article>
  )
}

function NavBtn({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-black text-slate-700"
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}
