import { useEffect, useState } from 'react'
import { FEATURE_FLAGS, buildWhatsAppMessageUrl } from '../../config/site'
import { useFadeIn } from '../../hooks/useFadeIn'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'
import ComingSoonModal from './ComingSoonModal'

const COPY = {
  es: {
    kicker: 'Productos destacados',
    title: 'Referencias listas para mover tu compra.',
    text: 'Una selección de los productos más pedidos. Detecta rápido lo que necesitas y consúltalo por WhatsApp al instante.',
    catalogButton: 'Ver catálogo completo',
    askAvailability: 'Consultar precio y stock',
    prevLabel: 'Producto anterior',
    nextLabel: 'Producto siguiente',
    waCatalog: 'Hola, quiero recibir el catálogo completo de SAHM con precios y disponibilidad',
    waProduct: 'Hola, quiero consultar precio y disponibilidad del producto',
    stockLabel: 'En stock',
    comingSoonTitle: 'Catálogo próximamente',
    comingSoonMessage: 'Estamos subiendo el catálogo completo. Estará disponible muy pronto.',
    comingSoonButton: 'Entendido',
    items: [
      {
        id: 1,
        nombre: 'Llanta 2.75-17',
        codigo: 'LL-275-17',
        tag: 'Más pedida',
        stock: true,
        description: 'Medida estándar para Honda Wave, Bajaj CT100 y similares. Alto agarre para ciudad y carretera.',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 2,
        nombre: 'Llanta 90/90-17',
        codigo: 'LL-9090-17',
        tag: 'Deportivo',
        stock: true,
        description: 'Para motos deportivas y semideportivas. Excelente respuesta en curvas y superficie seca.',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 3,
        nombre: 'Cámara reforzada 2.75-17',
        codigo: 'CM-275-17',
        tag: 'Durable',
        stock: true,
        description: 'Cámara con caucho grueso para mayor durabilidad y menos pinchazos. Ideal para taller.',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 4,
        nombre: 'Kit de pastillas de freno',
        codigo: 'KF-DISC-01',
        tag: 'Seguridad',
        stock: true,
        description: 'Par de pastillas de disco para frenado confiable. Compatible con motos comunes del mercado.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 5,
        nombre: 'Filtro de aire universal',
        codigo: 'FA-UNI-150',
        tag: 'Rendimiento',
        stock: true,
        description: 'Filtro de espuma para mantenimiento periódico. Mejora respuesta del motor y reduce consumo.',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 6,
        nombre: 'Aceite motor 4T 20W-50',
        codigo: 'AC-4T-20W50',
        tag: 'Mantenimiento',
        stock: true,
        description: 'Lubricante para servicio periódico. Protege el motor en ciudad y ruta. Recomendado para flotas.',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  en: {
    kicker: 'Featured products',
    title: 'Ready-to-move references for faster buying.',
    text: 'A selection of the most requested products. Quickly spot what you need and ask on WhatsApp right away.',
    catalogButton: 'See full catalog',
    askAvailability: 'Check price and stock',
    prevLabel: 'Previous product',
    nextLabel: 'Next product',
    waCatalog: 'Hi, I want the full SAHM catalog with prices and availability',
    waProduct: 'Hi, I want to check price and availability for product',
    stockLabel: 'In stock',
    comingSoonTitle: 'Catalog coming soon',
    comingSoonMessage: 'We are uploading the full catalog. It will be available very soon.',
    comingSoonButton: 'Got it',
    items: [
      {
        id: 1,
        nombre: 'Tire 2.75-17',
        codigo: 'LL-275-17',
        tag: 'Best seller',
        stock: true,
        description: 'Standard size for Honda Wave, Bajaj CT100 and similar. High grip for city and road.',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 2,
        nombre: 'Tire 90/90-17',
        codigo: 'LL-9090-17',
        tag: 'Sport',
        stock: true,
        description: 'For sport and semi-sport bikes. Excellent cornering response on dry surfaces.',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 3,
        nombre: 'Reinforced tube 2.75-17',
        codigo: 'CM-275-17',
        tag: 'Durable',
        stock: true,
        description: 'Thick rubber tube for longer durability and fewer flats. Ideal for workshops.',
        image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 4,
        nombre: 'Brake pad kit',
        codigo: 'KF-DISC-01',
        tag: 'Safety',
        stock: true,
        description: 'Disc brake pad pair for reliable braking. Compatible with the most common bikes in the market.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 5,
        nombre: 'Universal air filter',
        codigo: 'FA-UNI-150',
        tag: 'Performance',
        stock: true,
        description: 'Foam filter for regular maintenance. Improves engine response and reduces fuel consumption.',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 6,
        nombre: '4T engine oil 20W-50',
        codigo: 'AC-4T-20W50',
        tag: 'Maintenance',
        stock: true,
        description: 'Lubricant for regular service. Protects the engine in city and road. Recommended for fleets.',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
}

const ITEMS_PER_VIEW_DESKTOP = 3

function getVisible(items, start, count) {
  const result = []
  for (let i = 0; i < count; i += 1) result.push(items[(start + i) % items.length])
  return result
}

export default function ProductosDestacados({ lang }) {
  const [start, setStart] = useState(0)
  const [direction, setDirection] = useState('next')
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]
  const visibles = getVisible(copy.items, start, ITEMS_PER_VIEW_DESKTOP)
  const mobileItem = copy.items[start % copy.items.length]
  const desktopAnimation = direction === 'next' ? 'slide-group-enter-right' : 'slide-group-enter-left'
  const mobileAnimation = direction === 'next' ? 'slide-single-enter-right' : 'slide-single-enter-left'

  const goDesktopPrev = () => {
    setDirection('prev')
    setStart(current => (current - ITEMS_PER_VIEW_DESKTOP + copy.items.length) % copy.items.length)
  }

  const goDesktopNext = () => {
    setDirection('next')
    setStart(current => (current + ITEMS_PER_VIEW_DESKTOP) % copy.items.length)
  }

  const goMobilePrev = () => {
    setDirection('prev')
    setStart(current => (current - 1 + copy.items.length) % copy.items.length)
  }

  const goMobileNext = () => {
    setDirection('next')
    setStart(current => (current + 1) % copy.items.length)
  }

  useEffect(() => {
    const autoplay = setInterval(() => {
      const isDesktop = window.matchMedia('(min-width: 1280px)').matches
      const step = isDesktop ? ITEMS_PER_VIEW_DESKTOP : 1
      setDirection('next')
      setStart(current => (current + step) % copy.items.length)
    }, 4800)

    return () => clearInterval(autoplay)
  }, [copy.items.length])

  return (
    <>
      <section id="productos" ref={ref} className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[92rem] rounded-[2rem] border border-sahm-purple/20 bg-[#fff9df] p-6 shadow-2xl shadow-sahm-purple/10 sm:p-8 md:p-10">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-5xl">{copy.title}</h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{copy.text}</p>
            </div>
            {FEATURE_FLAGS.catalogReady ? (
              <a
                href={buildWhatsAppMessageUrl(copy.waCatalog)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 sm:w-auto"
              >
                <WhatsAppSmallIcon />
                {copy.catalogButton}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setShowComingSoon(true)}
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 sm:w-auto"
              >
                <WhatsAppSmallIcon />
                {copy.catalogButton}
              </button>
            )}
          </div>

          <div className="hidden items-center gap-5 xl:flex">
            <NavBtn direction="left" label={copy.prevLabel} onClick={goDesktopPrev} />

            <div className="flex-1 overflow-hidden rounded-[1.5rem]">
              <div key={`desktop-${start}-${direction}`} className={`grid grid-cols-3 gap-5 ${desktopAnimation}`}>
                {visibles.map((item, index) => (
                  <div
                    key={item.id}
                    style={{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }}
                    className={`transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[6px]'}`}
                  >
                    <ProductoCard producto={item} copy={copy} />
                  </div>
                ))}
              </div>
            </div>

            <NavBtn direction="right" label={copy.nextLabel} onClick={goDesktopNext} />
          </div>

          <div className="xl:hidden">
            <div className="overflow-hidden rounded-[1.5rem]">
              <div key={`mobile-${start}-${direction}`} className={mobileAnimation}>
                <ProductoCard producto={mobileItem} copy={copy} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-5">
              <NavBtn direction="left" label={copy.prevLabel} onClick={goMobilePrev} />
              <span className="text-sm font-semibold text-slate-600">
                {(start % copy.items.length) + 1} / {copy.items.length}
              </span>
              <NavBtn direction="right" label={copy.nextLabel} onClick={goMobileNext} />
            </div>
          </div>
        </div>
      </section>

      <ComingSoonModal
        open={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        title={copy.comingSoonTitle}
        message={copy.comingSoonMessage}
        buttonLabel={copy.comingSoonButton}
      />
    </>
  )
}

function ProductoCard({ producto, copy }) {
  const waUrl = buildWhatsAppMessageUrl(`${copy.waProduct} ${producto.codigo} - ${producto.nombre}`)

  return (
    <article className="card-shine group relative flex h-[450px] flex-col overflow-hidden rounded-[1.75rem] border border-sahm-purple/15 bg-white shadow-lg shadow-sahm-purple/10 transition duration-300 hover:-translate-y-1 hover:border-sahm-purple/25 hover:shadow-xl hover:shadow-sahm-purple/20 sm:h-[500px] xl:h-[540px]">
      {producto.stock && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white shadow">
          {copy.stockLabel}
        </span>
      )}

      <div className="overflow-hidden">
        <img
          src={producto.image}
          alt={producto.nombre}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 xl:h-72"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-sahm-purple/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-sahm-purple">
            {producto.tag}
          </span>
        </div>
        <h3 className="mt-3 min-h-[56px] text-xl font-black text-slate-900">{producto.nombre}</h3>
        <p className="mt-1 font-mono text-xs tracking-wide text-slate-400">Ref: {producto.codigo}</p>
        <p className="mt-3 min-h-[88px] text-sm leading-relaxed text-slate-600">{producto.description}</p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sahm-yellow py-3 text-xs font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97] sm:mt-6"
        >
          <WhatsAppSmallIcon />
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
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-sahm-purple hover:text-sahm-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-2 sm:h-12 sm:w-12"
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
