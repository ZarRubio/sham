import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

const COPY = {
  es: {
    kicker: 'Productos destacados',
    title: 'Referencias listas para mover tu compra.',
    text:
      'Una seleccion visual de productos pedidos con frecuencia para que puedas detectar rapido lo que necesitas y consultarlo al instante.',
    catalogButton: 'Solicitar catalogo',
    askAvailability: 'Consultar disponibilidad',
    prevLabel: 'Producto anterior',
    nextLabel: 'Producto siguiente',
    waCatalog: 'Hola, quiero recibir el catalogo completo de SAHM',
    waProduct: 'Hola, deseo consultar disponibilidad del producto',
    items: [
      {
        id: 1,
        nombre: 'Llanta Sportmax',
        codigo: 'BT45F',
        tag: 'Urbano',
        description: 'Opcion para uso diario con buen equilibrio entre agarre y duracion.',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 2,
        nombre: 'Llanta Pilot Street',
        codigo: 'PS103',
        tag: 'Mixto',
        description: 'Pensada para ciudad y trayectos largos con tacto estable en diferentes superficies.',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 3,
        nombre: 'Camara Universal 3.00',
        codigo: 'CM300',
        tag: 'Durable',
        description: 'Camara reforzada para reposicion frecuente y mantenimiento preventivo.',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 4,
        nombre: 'Kit de Frenos',
        codigo: 'KF2024',
        tag: 'Seguridad',
        description: 'Conjunto de piezas para mejorar respuesta de frenado y confiabilidad.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 5,
        nombre: 'Filtro de Aire Sport',
        codigo: 'FA150',
        tag: 'Rendimiento',
        description: 'Filtro pensado para mantenimiento agil y respuesta mas limpia del motor.',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 6,
        nombre: 'Aceite Motor 4T',
        codigo: 'AM20W50',
        tag: 'Mantenimiento',
        description: 'Lubricante para servicio periodico y continuidad de uso en ciudad o ruta.',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  en: {
    kicker: 'Featured products',
    title: 'Ready-to-move references for faster buying.',
    text:
      'A visual selection of frequently requested products so you can quickly spot what you need and ask about it right away.',
    catalogButton: 'Request catalog',
    askAvailability: 'Check availability',
    prevLabel: 'Previous product',
    nextLabel: 'Next product',
    waCatalog: 'Hi, I want the full SAHM catalog',
    waProduct: 'Hi, I want to check availability for product',
    items: [
      {
        id: 1,
        nombre: 'Sportmax Tire',
        codigo: 'BT45F',
        tag: 'Urban',
        description: 'Daily-use option with a strong balance between grip and durability.',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 2,
        nombre: 'Pilot Street Tire',
        codigo: 'PS103',
        tag: 'Mixed',
        description: 'Built for city rides and longer trips with stable feel across surfaces.',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 3,
        nombre: 'Universal Tube 3.00',
        codigo: 'CM300',
        tag: 'Durable',
        description: 'Reinforced tube for frequent replacement and preventive maintenance.',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 4,
        nombre: 'Brake Kit',
        codigo: 'KF2024',
        tag: 'Safety',
        description: 'Part set designed to improve braking response and overall confidence.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 5,
        nombre: 'Sport Air Filter',
        codigo: 'FA150',
        tag: 'Performance',
        description: 'Filter built for agile maintenance and cleaner engine response.',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 6,
        nombre: '4T Engine Oil',
        codigo: 'AM20W50',
        tag: 'Maintenance',
        description: 'Lubricant for scheduled service and everyday riding continuity.',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
}

const ITEMS_PER_VIEW = 3

function getVisible(items, start, count) {
  const result = []

  for (let index = 0; index < count; index += 1) {
    result.push(items[(start + index) % items.length])
  }

  return result
}

export default function ProductosDestacados({ lang }) {
  const [start, setStart] = useState(0)
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]
  const visibles = getVisible(copy.items, start, ITEMS_PER_VIEW)
  const mobileItem = copy.items[start % copy.items.length]

  return (
    <section
      id="productos"
      ref={ref}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-sahm-purple/20 bg-[#fff9df] p-8 shadow-2xl shadow-sahm-purple/10 md:p-10">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-5xl">{copy.title}</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{copy.text}</p>
          </div>
          <a
            href={buildWhatsAppMessageUrl(copy.waCatalog)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5"
          >
            {copy.catalogButton}
          </a>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <NavBtn
            direction="left"
            label={copy.prevLabel}
            onClick={() => setStart(current => (current - 1 + copy.items.length) % copy.items.length)}
          />

          <div className="grid flex-1 grid-cols-3 gap-5">
            {visibles.map((item, index) => (
              <div
                key={`${item.id}-${start}`}
                style={{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }}
                className={`transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              >
                <ProductoCard producto={item} copy={copy} />
              </div>
            ))}
          </div>

          <NavBtn
            direction="right"
            label={copy.nextLabel}
            onClick={() => setStart(current => (current + 1) % copy.items.length)}
          />
        </div>

        <div className="lg:hidden">
          <ProductoCard producto={mobileItem} copy={copy} />

          <div className="mt-5 flex items-center justify-center gap-4">
            <NavBtn
              direction="left"
              label={copy.prevLabel}
              onClick={() => setStart(current => (current - 1 + copy.items.length) % copy.items.length)}
            />
            <span className="text-sm font-semibold text-slate-600">
              {(start % copy.items.length) + 1} / {copy.items.length}
            </span>
            <NavBtn
              direction="right"
              label={copy.nextLabel}
              onClick={() => setStart(current => (current + 1) % copy.items.length)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductoCard({ producto, copy }) {
  const waUrl = buildWhatsAppMessageUrl(`${copy.waProduct} ${producto.codigo} - ${producto.nombre}`)

  return (
    <article className="card-shine group overflow-hidden rounded-[1.75rem] border border-sahm-purple/15 bg-white shadow-lg shadow-sahm-purple/10 transition duration-300 hover:-translate-y-1 hover:border-sahm-purple/25 hover:shadow-xl hover:shadow-sahm-purple/20 cursor-default">
      <div className="overflow-hidden">
        <img
          src={producto.image}
          alt={producto.nombre}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-600">
          {producto.tag}
        </span>
        <h3 className="mt-4 text-xl font-black text-slate-900">{producto.nombre}</h3>
        <p className="mt-1 font-mono text-xs tracking-wide text-slate-400">Ref: {producto.codigo}</p>
        <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-slate-600">{producto.description}</p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer mt-5 inline-flex w-full items-center justify-center rounded-xl bg-sahm-yellow py-3 text-xs font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
        >
          {copy.askAvailability}
        </a>
      </div>
    </article>
  )
}

function NavBtn({ onClick, direction, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sahm-purple hover:text-sahm-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-2"
    >
      {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  )
}

