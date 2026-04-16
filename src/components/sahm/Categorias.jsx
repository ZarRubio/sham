import { useEffect, useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

const COPY = {
  es: {
    kicker: 'Líneas de producto',
    title: 'Compra por necesidad, no solo por código.',
    text: 'Ordenamos las líneas más buscadas para que encuentres rápido lo que necesitas y sepas en qué puede ayudarte cada categoría.',
    cta: 'Consultar por WhatsApp',
    categoryLabel: 'Categoría',
    prevLabel: 'Categoría anterior',
    nextLabel: 'Categoría siguiente',
    items: [
      {
        nombre: 'LLANTAS',
        descripcion: 'Honda Wave, Bajaj, Yamaha, TVS y más. Medidas populares siempre en stock para ciudad, ruta y uso intensivo.',
        waMessage: 'Hola, me interesan las llantas para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
        highlights: ['2.75-17 · 3.00-17 · 90/90-17', 'Alta duración', 'Ruta y ciudad'],
      },
      {
        nombre: 'CÁMARAS',
        descripcion: 'Cámaras reforzadas para los aros más comunes. Reposición rápida y mantenimiento preventivo sin esperar.',
        waMessage: 'Hola, necesito cámaras para mi moto. Mi aro es: ',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
        highlights: ['Aros 14", 17", 18"', 'Versión reforzada', 'Listas para despacho'],
      },
      {
        nombre: 'FRENOS Y CONTROL',
        descripcion: 'Pastillas, kits y componentes de frenado para mantener la seguridad en cada trayecto.',
        waMessage: 'Hola, necesito repuestos de frenos para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
        highlights: ['Kits completos', 'Alta seguridad', 'Stock frecuente'],
      },
      {
        nombre: 'MANTENIMIENTO',
        descripcion: 'Aceites 4T, filtros y consumibles para mantener la moto operativa. Ideal para talleres y compras recurrentes.',
        waMessage: 'Hola, necesito insumos de mantenimiento para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
        highlights: ['Aceites 4T', 'Filtros de aire y aceite', 'Compra recurrente'],
      },
      {
        nombre: 'TRANSMISIÓN',
        descripcion: 'Cadenas, coronas y piñones para mantener potencia y respuesta en ruta urbana y reparto.',
        waMessage: 'Hola, necesito repuestos de transmisión para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=900&q=80',
        highlights: ['Cadenas reforzadas', 'Coronas y pinones', 'Uso diario'],
      },
      {
        nombre: 'ELÉCTRICO',
        descripcion: 'Baterías, focos, bobinas y componentes para mantener arranque confiable y sistema estable.',
        waMessage: 'Hola, necesito repuestos eléctricos para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1592853625601-bb9d23da12f0?auto=format&fit=crop&w=900&q=80',
        highlights: ['Baterias', 'Encendido', 'Luces y cableado'],
      },
      {
        nombre: 'SUSPENSIÓN',
        descripcion: 'Amortiguadores y componentes de suspensión para mejorar confort, control y seguridad.',
        waMessage: 'Hola, necesito repuestos de suspensión para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=900&q=80',
        highlights: ['Delantera y trasera', 'Mayor estabilidad', 'Ruta y ciudad'],
      },
      {
        nombre: 'ACCESORIOS',
        descripcion: 'Espejos, manijas, parrillas y accesorios funcionales para trabajo y uso diario.',
        waMessage: 'Hola, necesito accesorios para mi moto. Mi modelo es: ',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        highlights: ['Uso diario', 'Montaje rápido', 'Stock frecuente'],
      },
    ],
  },
  en: {
    kicker: 'Product lines',
    title: 'Shop by need, not only by code.',
    text: 'We organize the most requested product lines so you can find what you need faster and understand what each category solves.',
    cta: 'Ask on WhatsApp',
    categoryLabel: 'Category',
    prevLabel: 'Previous category',
    nextLabel: 'Next category',
    items: [
      {
        nombre: 'TIRES',
        descripcion: 'Honda Wave, Bajaj, Yamaha, TVS and more. Popular sizes always in stock for city, highway and heavy use.',
        waMessage: 'Hi, I am interested in tires for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
        highlights: ['2.75-17 · 3.00-17 · 90/90-17', 'High durability', 'Road and city'],
      },
      {
        nombre: 'TUBES',
        descripcion: 'Reinforced tubes for the most common rim sizes. Quick replacement and preventive maintenance without waiting.',
        waMessage: 'Hi, I need tubes for my motorcycle. My rim size is: ',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
        highlights: ['14", 17", 18" rims', 'Reinforced options', 'Ready to ship'],
      },
      {
        nombre: 'BRAKES AND CONTROL',
        descripcion: 'Pads, kits and braking components to keep safety on every ride.',
        waMessage: 'Hi, I need brake parts for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
        highlights: ['Complete kits', 'High safety', 'Frequent stock'],
      },
      {
        nombre: 'MAINTENANCE',
        descripcion: '4T oils, filters and consumables to keep the bike running. Ideal for workshops and repeat orders.',
        waMessage: 'Hi, I need maintenance supplies for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
        highlights: ['4T oils', 'Air and oil filters', 'Repeat purchase'],
      },
      {
        nombre: 'DRIVETRAIN',
        descripcion: 'Chains, sprockets and transmission parts to keep power delivery smooth for daily use.',
        waMessage: 'Hi, I need drivetrain parts for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=900&q=80',
        highlights: ['Reinforced chains', 'Sprockets', 'Daily riding'],
      },
      {
        nombre: 'ELECTRICAL',
        descripcion: 'Batteries, bulbs, coils and electrical components for reliable starting and stable operation.',
        waMessage: 'Hi, I need electrical parts for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1592853625601-bb9d23da12f0?auto=format&fit=crop&w=900&q=80',
        highlights: ['Batteries', 'Ignition', 'Lights and wiring'],
      },
      {
        nombre: 'SUSPENSION',
        descripcion: 'Shock absorbers and suspension components to improve comfort, control and safety.',
        waMessage: 'Hi, I need suspension parts for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=900&q=80',
        highlights: ['Front and rear', 'Better stability', 'Road and city'],
      },
      {
        nombre: 'ACCESSORIES',
        descripcion: 'Mirrors, levers, racks and practical accessories for work and everyday riding.',
        waMessage: 'Hi, I need accessories for my motorcycle. My model is: ',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        highlights: ['Everyday use', 'Fast install', 'Frequent stock'],
      },
    ],
  },
}

const ITEMS_PER_VIEW_DESKTOP = 3

function getVisible(items, start, count) {
  const result = []
  for (let index = 0; index < count; index += 1) {
    result.push(items[(start + index) % items.length])
  }
  return result
}

export default function Categorias({ lang }) {
  const [start, setStart] = useState(0)
  const [direction, setDirection] = useState('next')
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]
  const total = copy.items.length
  const desktopItems = getVisible(copy.items, start, ITEMS_PER_VIEW_DESKTOP)
  const desktopAnimation = direction === 'next' ? 'slide-group-enter-right' : 'slide-group-enter-left'
  const mobileAnimation = direction === 'next' ? 'slide-single-enter-right' : 'slide-single-enter-left'

  const goDesktopPrev = () => {
    setDirection('prev')
    setStart(current => (current - ITEMS_PER_VIEW_DESKTOP + total) % total)
  }

  const goDesktopNext = () => {
    setDirection('next')
    setStart(current => (current + ITEMS_PER_VIEW_DESKTOP) % total)
  }

  const goMobilePrev = () => {
    setDirection('prev')
    setStart(current => (current - 1 + total) % total)
  }

  const goMobileNext = () => {
    setDirection('next')
    setStart(current => (current + 1) % total)
  }

  useEffect(() => {
    const autoplay = setInterval(() => {
      const isDesktop = window.matchMedia('(min-width: 1280px)').matches
      const step = isDesktop ? ITEMS_PER_VIEW_DESKTOP : 1
      setDirection('next')
      setStart(current => (current + step) % total)
    }, 4400)

    return () => clearInterval(autoplay)
  }, [total])

  return (
    <section
      id="categorias"
      ref={ref}
      className="relative px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[92rem] rounded-[2rem] border border-sahm-purple/20 bg-[#fff9df] p-6 shadow-2xl shadow-sahm-purple/10 sm:p-8 md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-black text-slate-900 md:text-5xl">{copy.title}</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{copy.text}</p>
          </div>
        </div>

        <div className="mt-8 hidden items-center gap-4 xl:flex">
          <NavButton
            direction="left"
            label={copy.prevLabel}
            onClick={goDesktopPrev}
          />

          <div className="flex-1 overflow-hidden rounded-[1.5rem]">
            <div
              key={`desktop-cat-${start}-${direction}`}
              className={`grid grid-cols-3 gap-6 ${desktopAnimation}`}
            >
              {desktopItems.map((cat, index) => (
                <div
                  key={cat.nombre}
                  style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
                  className={`transition-all duration-600 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[6px]'}`}
                >
                  <CategoriaCard cat={cat} copy={copy} />
                </div>
              ))}
            </div>
          </div>

          <NavButton
            direction="right"
            label={copy.nextLabel}
            onClick={goDesktopNext}
          />
        </div>

        <div className="mt-8 xl:hidden">
          <div className="overflow-hidden rounded-[1.5rem]">
            <div key={`mobile-cat-${start}-${direction}`} className={mobileAnimation}>
              <CategoriaCard cat={copy.items[start]} copy={copy} />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <NavButton
              direction="left"
              label={copy.prevLabel}
              onClick={goMobilePrev}
            />
            <span className="text-sm font-semibold text-slate-600">
              {start + 1} / {total}
            </span>
            <NavButton
              direction="right"
              label={copy.nextLabel}
              onClick={goMobileNext}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriaCard({ cat, copy }) {
  const waUrl = buildWhatsAppMessageUrl(cat.waMessage)

  return (
    <article className="card-shine group flex h-[520px] flex-col overflow-hidden rounded-[1.9rem] border border-sahm-purple/20 bg-slate-900 shadow-2xl shadow-sahm-purple/15 sm:h-[560px] xl:h-[610px]">
      <div className="relative h-56 overflow-hidden sm:h-64 xl:h-72">
        <img
          src={cat.image}
          alt={cat.nombre}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-sahm-purple/35 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 pb-7 text-white">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-sahm-yellow">{copy.categoryLabel}</p>
        <h3 className="mt-2 min-h-[64px] text-2xl font-black leading-none sm:text-3xl">{cat.nombre}</h3>
        <p className="mt-3 min-h-[96px] text-sm leading-relaxed text-white/80">{cat.descripcion}</p>

        <div className="mt-4 min-h-[88px] space-y-2">
          {cat.highlights.map(item => (
            <span
              key={item}
              className="block w-full truncate rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-center text-[11px] font-black uppercase tracking-[0.1em] text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sahm-yellow px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-sahm-purple transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
        >
          <WhatsAppSmallIcon />
          {copy.cta}
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
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sahm-purple hover:text-sahm-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-2 lg:h-12 lg:w-12"
    >
      {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  )
}

function WhatsAppSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
