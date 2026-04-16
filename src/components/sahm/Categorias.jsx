import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

const COPY = {
  es: {
    kicker: 'Categorias',
    title: 'Compra por necesidad, no solo por codigo.',
    text:
      'Ordenamos las lineas mas buscadas para que encuentres rapido lo que necesitas y sepas en que puede ayudarte cada categoria.',
    cta: 'Explorar',
    categoryLabel: 'Categoria',
    prevLabel: 'Categoria anterior',
    nextLabel: 'Categoria siguiente',
    items: [
      {
        nombre: 'LLANTAS',
        descripcion: 'Opciones para ciudad, ruta y uso intensivo con marcas de alta rotacion.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
        highlights: ['Medidas populares', 'Alta duracion', 'Ruta y ciudad'],
      },
      {
        nombre: 'CAMARAS',
        descripcion: 'Camaras reforzadas para cambios rapidos, mantenimiento y reposicion.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=80',
        highlights: ['Aros comunes', 'Version reforzada', 'Listas para despacho'],
      },
      {
        nombre: 'FRENOS Y CONTROL',
        descripcion: 'Pastillas, kits y componentes de seguridad para frenado confiable.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
        highlights: ['Kits y repuestos', 'Seguridad', 'Stock frecuente'],
      },
      {
        nombre: 'MANTENIMIENTO',
        descripcion: 'Filtros, aceites y consumibles para mantener la moto lista para seguir rodando.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
        highlights: ['Aceites 4T', 'Filtros', 'Compra recurrente'],
      },
    ],
  },
  en: {
    kicker: 'Categories',
    title: 'Shop by need, not only by code.',
    text:
      'We organize the most requested product lines so you can find what you need faster and understand what each category solves.',
    cta: 'Explore',
    categoryLabel: 'Category',
    prevLabel: 'Previous category',
    nextLabel: 'Next category',
    items: [
      {
        nombre: 'TIRES',
        descripcion: 'Options for city, highway and heavy use with high-demand brands.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
        highlights: ['Popular sizes', 'High durability', 'Road and city'],
      },
      {
        nombre: 'TUBES',
        descripcion: 'Reinforced tubes for quick replacement, maintenance and restocking.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=80',
        highlights: ['Common rims', 'Reinforced options', 'Ready to ship'],
      },
      {
        nombre: 'BRAKES AND CONTROL',
        descripcion: 'Pads, kits and safety components for reliable braking performance.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
        highlights: ['Kits and parts', 'Safety first', 'Frequent stock'],
      },
      {
        nombre: 'MAINTENANCE',
        descripcion: 'Filters, oils and consumables to keep the bike ready for the next ride.',
        href: '#productos',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
        highlights: ['4T oils', 'Filters', 'Repeat purchase'],
      },
    ],
  },
}

export default function Categorias({ lang }) {
  const [start, setStart] = useState(0)
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]
  const total = copy.items.length

  return (
    <section
      id="categorias"
      ref={ref}
      className="relative px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-black text-slate-900 md:text-5xl">{copy.title}</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{copy.text}</p>
          </div>
        </div>

        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
          {copy.items.map((cat, index) => (
            <div
              key={cat.nombre}
              style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
              className={`transition-all duration-600 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <CategoriaCard cat={cat} copy={copy} />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <CategoriaCard cat={copy.items[start]} copy={copy} />
          <div className="mt-4 flex items-center justify-center gap-4">
            <NavButton
              direction="left"
              label={copy.prevLabel}
              onClick={() => setStart(current => (current - 1 + total) % total)}
            />
            <span className="text-sm font-semibold text-slate-600">
              {start + 1} / {total}
            </span>
            <NavButton
              direction="right"
              label={copy.nextLabel}
              onClick={() => setStart(current => (current + 1) % total)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriaCard({ cat, copy }) {
  return (
    <article className="card-shine group relative overflow-hidden rounded-[1.9rem] border border-sahm-purple/20 bg-slate-900 shadow-2xl shadow-sahm-purple/15">
      <img
        src={cat.image}
        alt={cat.nombre}
        className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-sahm-purple/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-sahm-yellow">{copy.categoryLabel}</p>
        <h3 className="mt-2 text-3xl font-black leading-none">{cat.nombre}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-white/80">{cat.descripcion}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {cat.highlights.map(item => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={cat.href}
          className="btn-shimmer mt-5 inline-flex items-center gap-2 rounded-full bg-sahm-yellow px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-sahm-purple transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
        >
          {copy.cta}
          <ArrowIcon />
        </a>
      </div>
    </article>
  )
}

function NavButton({ onClick, direction, label }) {
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

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}
