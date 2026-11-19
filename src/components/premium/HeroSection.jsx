'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { buildWhatsAppMessageUrl } from '../../config/site'

/* ── Carrusel slides ─────────────────────────────────────────────── */
const SLIDES = [
  {
    img: '/images/catalog-optimized/llantas-moto-electrica-350-10-4pr/card.webp',
    fallback: '/images/catalog-optimized/llantas-moto-electrica-350-10-4pr/detail-1.webp',
    label: 'Llantas',
    sub: 'Moto eléctrica · 3.50-10 4PR',
    href: '/categorias/llantas',
  },
  {
    img: '/images/catalog-optimized/camaras-motos-400-12-tr13/card.webp',
    fallback: '/images/catalog-optimized/camaras-motos-400-12-tr13/detail-1.webp',
    label: 'Cámaras',
    sub: 'Moto · 4.00-12 TR13',
    href: '/categorias/camaras',
  },
  {
    img: '/images/catalog-optimized/carburadores-pz26/card.webp',
    fallback: '/images/catalog-optimized/carburadores-pz26/detail-1.webp',
    label: 'Carburadores',
    sub: 'Referencia PZ26',
    href: '/categorias/carburadores',
  },
  {
    img: '/images/catalog-optimized/llantas-cargueros-electricos-400-12-8pr/card.webp',
    fallback: '/images/catalog-optimized/llantas-cargueros-electricos-400-12-8pr/detail-1.webp',
    label: 'Cargueros Eléctricos',
    sub: 'Llanta 4.00-12 8PR',
    href: '/categorias/llantas',
  },
  {
    img: '/images/catalog-optimized/camaras-bicicletas-26x2125235/card.webp',
    fallback: '/images/catalog-optimized/camaras-bicicletas-26x2125235/detail-1.webp',
    label: 'Cámaras Bicicleta',
    sub: '26x2.125·2.35',
    href: '/categorias/camaras',
  },
]

/* ── Tilt 3-D card ──────────────────────────────────────────────── */
const BENEFITS = [
  {
    id: 'stock',
    label: 'Stock confirmado',
    description: 'Validamos disponibilidad antes de cerrar tu cotización.',
  },
  {
    id: 'delivery',
    label: 'Despacho nacional',
    description: 'Coordinamos envíos para Lima y provincias según tu pedido.',
  },
]

function TiltCard({ children, className = '', disabled = false }) {
  const ref = useRef(null)
  function onMove(e) {
    if (disabled) return
    const card = ref.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const dx = (e.clientX - (left + width / 2)) / (width / 2)
    const dy = (e.clientY - (top + height / 2)) / (height / 2)
    card.style.transform = `perspective(900px) rotateY(${dx * 10}deg) rotateX(${-dy * 8}deg) scale3d(1.03,1.03,1.03)`
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className}
      style={{ transition: 'transform 0.18s ease-out', willChange: 'transform' }}>
      {children}
    </div>
  )
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

/* ── Glow orb ───────────────────────────────────────────────────── */
function GlowOrb({ className = '' }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
}

/* ── Main Hero ──────────────────────────────────────────────────── */
export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [activeBenefit, setActiveBenefit] = useState(BENEFITS[0].id)
  const timerRef = useRef(null)
  const touchStartXRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const carouselPaused = paused || prefersReducedMotion

  const goTo = useCallback((idx) => {
    setCurrent(idx)
  }, [])

  const next = useCallback(() => {
    setCurrent(index => (index + 1) % SLIDES.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(index => (index - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  // Auto-advance every 4 s
  useEffect(() => {
    if (carouselPaused) return undefined
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [next, carouselPaused])

  const slide = SLIDES[current]
  const selectedBenefit = BENEFITS.find(benefit => benefit.id === activeBenefit) || BENEFITS[0]

  const handleCarouselKeyDown = event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      prev()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    }
  }

  const handleTouchStart = event => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null
    setPaused(true)
  }

  const handleTouchEnd = event => {
    const startX = touchStartXRef.current
    touchStartXRef.current = null
    if (startX === null) return

    const endX = event.changedTouches[0]?.clientX ?? startX
    const deltaX = endX - startX
    if (Math.abs(deltaX) < 42) return

    event.preventDefault()
    if (deltaX > 0) prev()
    else next()
  }

  return (
    <>
      <style>{`
        @keyframes float-badge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes hero-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes shimmer-btn { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes fade-up-hero{ from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slide-in    { from{opacity:0;transform:scale(0.94) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
        .carousel-img-enter { animation: slide-in 0.32s ease-out both; }
      `}</style>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:pb-20 lg:pt-28">
        {/* bg glows */}
        <GlowOrb className="h-96 w-96 bg-sahm-yellow/20 -top-24 -left-32" />
        <GlowOrb className="h-80 w-80 bg-purple-500/20 bottom-0 right-0" />
        <GlowOrb className="h-64 w-64 bg-sahm-yellow/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* atmospheric top-center radial */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(245,192,0,0.10) 0%, transparent 65%)' }} />

        {/* grid overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ── LEFT COPY ── */}
          <div style={{ animation: 'fade-up-hero 0.6s ease-out both' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-widest text-sahm-yellow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sahm-yellow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sahm-yellow" />
              </span>
              Repuestos para moto · Perú
            </span>

            <h1 className="mt-6 font-heading text-5xl font-extrabold uppercase italic leading-none text-white sm:text-6xl lg:text-7xl"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
              Llantas,{' '}
              <span className="text-sahm-yellow" style={{ WebkitTextStroke: '1px rgba(245,192,0,0.4)' }}>
                cámaras
              </span>{' '}
              y repuestos con stock real.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65"
              style={{ animation: 'fade-up-hero 0.6s 0.1s ease-out both' }}>
              Catálogo profesional para motos, talleres y flotas. Precios claros,
              asesoría directa y despacho nacional.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animation: 'fade-up-hero 0.6s 0.2s ease-out both' }}>
              <Link id="hero-cta-catalogo" href="/productos"
                className="group relative overflow-hidden rounded-2xl px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100"
                style={{ background:'linear-gradient(135deg,#f5c000 0%,#ffdc57 50%,#f5c000 100%)', backgroundSize:'200% auto', animation:'shimmer-btn 3s linear infinite', boxShadow:'0 8px 32px rgba(245,192,0,0.35),inset 0 1px 0 rgba(255,255,255,0.3)' }}>
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-[200%]" />
                <span className="relative flex items-center justify-center gap-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  Ver catálogo
                </span>
              </Link>

              <Link id="hero-cta-categorias" href="/categorias"
                className="group relative overflow-hidden rounded-2xl border-2 border-white/30 px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:scale-105 active:scale-100"
                style={{ boxShadow:'0 4px 16px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover:translate-x-[200%]" />
                <span className="relative flex items-center justify-center gap-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Ver categorías
                </span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-white/40"
              style={{ animation: 'fade-up-hero 0.6s 0.3s ease-out both' }}>
              ✓ Stock confirmado · ✓ Despacho nacional · ✓ Asesoría por WhatsApp
            </p>
          </div>

          {/* ── RIGHT CAROUSEL CARD ── */}
          <div className="flex justify-center"
            style={{ animation: 'fade-up-hero 0.7s 0.15s ease-out both' }}>
            <TiltCard className="relative w-full max-w-sm" disabled={prefersReducedMotion}>
              {/* decorative rings — static, no spin */}
              <div aria-hidden="true" className="pointer-events-none absolute -inset-4 rounded-3xl border border-white/10" />
              <div aria-hidden="true" className="pointer-events-none absolute -inset-8 rounded-full border border-sahm-yellow/10" />

              {/* card body */}
              <div
                className="relative rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md"
                tabIndex={0}
                role="region"
                aria-label="Productos destacados"
                onKeyDown={handleCarouselKeyDown}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={event => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
                }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sahm-yellow/5 via-transparent to-purple-500/10" />

                {/* image area */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-white sm:h-80"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  style={{ boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.08)' }}>

                  <Link href={slide.href} className="absolute inset-0" aria-label={`Ver ${slide.label}`}>
                    <Image
                      key={current}
                      src={slide.img}
                      alt={slide.label}
                      fill
                      sizes="(min-width: 1024px) 384px, 90vw"
                      onError={e => { e.currentTarget.src = slide.fallback }}
                      priority
                      className="carousel-img-enter object-contain p-4"
                      style={{ animation: prefersReducedMotion ? 'none' : 'slide-in 0.32s ease-out both, hero-float 4s ease-in-out infinite' }}
                    />
                  </Link>

                  {/* category label badge */}
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-sahm-purple/90 px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-sahm-yellow backdrop-blur-sm shadow-lg">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sahm-yellow" />
                    {slide.label}
                  </span>

                  {/* stock badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-green-500 px-3 py-1 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                    En stock
                  </span>

                  {/* sub label */}
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-xl bg-black/50 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm whitespace-nowrap">
                    {slide.sub}
                  </span>
                </div>

                {/* ── carousel controls ── */}
                <div className="mt-3 flex items-center justify-between gap-3">
                  {/* prev */}
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Anterior"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 active:scale-95">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* dots */}
                  <div className="flex gap-1.5">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                        aria-current={i === current ? 'true' : undefined}
                        className="grid min-h-11 min-w-8 place-items-center rounded-full">
                        <span className={`block h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-sahm-yellow' : 'w-2 bg-white/30 hover:bg-white/60'}`} />
                      </button>
                    ))}
                  </div>

                  {/* next */}
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 active:scale-95">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {!prefersReducedMotion && (
                  <button
                    type="button"
                    onClick={() => setPaused(currentPaused => !currentPaused)}
                    aria-pressed={paused}
                    className="mt-3 w-full rounded-xl border border-white/15 bg-white/10 py-2 font-heading text-[10px] font-bold uppercase tracking-widest text-white/75 transition hover:bg-white/15 hover:text-white"
                  >
                    {paused ? 'Reanudar carrusel' : 'Pausar carrusel'}
                  </button>
                )}

                {/* trust strip */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    aria-pressed={activeBenefit === 'stock'}
                    onClick={() => setActiveBenefit('stock')}
                    className={`flex min-h-11 items-center gap-2 rounded-xl px-3 py-2.5 text-left backdrop-blur-sm transition ${
                      activeBenefit === 'stock' ? 'bg-sahm-yellow text-sahm-purple' : 'bg-white/10 text-white/80 hover:bg-white/15'
                    }`}>
                    <svg className={`h-4 w-4 shrink-0 ${activeBenefit === 'stock' ? 'text-sahm-purple' : 'text-sahm-yellow'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                    <span className="font-heading text-[10px] font-bold uppercase tracking-widest">Stock confirmado</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={activeBenefit === 'delivery'}
                    onClick={() => setActiveBenefit('delivery')}
                    className={`flex min-h-11 items-center gap-2 rounded-xl px-3 py-2.5 text-left backdrop-blur-sm transition ${
                      activeBenefit === 'delivery' ? 'bg-sahm-yellow text-sahm-purple' : 'bg-white/10 text-white/80 hover:bg-white/15'
                    }`}>
                    <svg className={`h-4 w-4 shrink-0 ${activeBenefit === 'delivery' ? 'text-sahm-purple' : 'text-sahm-yellow'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h12v10H3zM15 10h4l2 3v3h-6z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
                    </svg>
                    <span className="font-heading text-[10px] font-bold uppercase tracking-widest">Despacho nacional</span>
                  </button>
                </div>

                <div className="mt-2 rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-xs leading-relaxed text-white/75">
                  <span className="font-heading font-extrabold uppercase tracking-widest text-sahm-yellow">{selectedBenefit.label}: </span>
                  {selectedBenefit.description}
                </div>

                {/* WhatsApp CTA */}
                <a href={buildWhatsAppMessageUrl(`Hola, quiero consultar ${slide.label} SAHM - ${slide.sub}.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500/90 py-3 font-heading text-xs font-bold uppercase tracking-widest text-white transition hover:bg-green-500 active:scale-[0.98]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar ahora
                </a>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>
    </>
  )
}
