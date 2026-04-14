import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'

const CATEGORIAS = [
  {
    nombre: 'LLANTAS',
    descripcion: 'Agarre, duracion y seguridad para ruta o ciudad.',
    href: '#productos',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900',
  },
  {
    nombre: 'CAMARAS',
    descripcion: 'Opciones reforzadas para distintas medidas de aro.',
    href: '#productos',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900',
  },
  {
    nombre: 'REPUESTOS',
    descripcion: 'Partes originales y alternativas certificadas.',
    href: '#productos',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900',
  },
]

export default function Categorias() {
  const [start, setStart] = useState(0)
  const [ref, visible] = useFadeIn()
  const total = CATEGORIAS.length

  return (
    <section
      id="categorias"
      ref={ref}
      className={`relative px-6 py-20 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">Categorias</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-5xl">Explora por tipo de necesidad</h2>

        <div className="mt-8 hidden grid-cols-3 gap-6 md:grid">
          {CATEGORIAS.map(cat => (
            <CategoriaCard key={cat.nombre} cat={cat} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <CategoriaCard cat={CATEGORIAS[start]} />
          <div className="mt-4 flex items-center justify-center gap-4">
            <NavButton direction="left" onClick={() => setStart(s => (s - 1 + total) % total)} />
            <span className="text-sm font-semibold text-slate-600">{start + 1} / {total}</span>
            <NavButton direction="right" onClick={() => setStart(s => (s + 1) % total)} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriaCard({ cat }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-slate-900 shadow-2xl shadow-slate-300/30">
      <img src={cat.image} alt={cat.nombre} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-yellow">Categoria</p>
        <h3 className="mt-2 text-3xl font-black">{cat.nombre}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/80">{cat.descripcion}</p>
        <a href={cat.href} className="mt-4 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">
          Ver productos
        </a>
      </div>
    </article>
  )
}

function NavButton({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700"
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}
