import { useEffect, useState } from 'react'
import { WHATSAPP_URL, buildWhatsAppMessageUrl } from '../../config/site'
import { useFadeIn } from '../../hooks/useFadeIn'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80'

const COPY = {
  es: {
    badge: 'Distribuidor oficial — Lima y despacho nacional',
    titleA: 'Llantas, camaras',
    titleB: 'y repuestos de moto.',
    desc: 'Asesoramos por WhatsApp, validamos compatibilidad y despachamos a todo el pais con tiempos reales.',
    ctaPrimary: 'Cotizar ahora',
    ctaSecondary: 'Ver catalogo',
    features: ['Compatibilidad validada', 'Despacho nacional', 'Atencion para taller y flota'],
    fastReply: 'Respuesta rapida',
    advisor: 'Hablar con asesor',
    supportTitle: 'Cobertura nacional',
    supportText: 'Atendemos pedidos para ciudad, ruta y negocio con seguimiento real y coordinacion comercial.',
    supportMeta: '12 marcas activas',
    serviceTitle: 'Asesoria tecnica',
    serviceText: 'Te ayudamos a elegir antes de comprar, sin adivinar medidas ni compatibilidades.',
    serviceMeta: 'Respuesta en 8 min',
    stats: [
      { target: 500, suffix: '+', label: 'Clientes atendidos', duration: 1400 },
      { target: 48, suffix: 'h', label: 'Entrega nacional', duration: 1100 },
      { target: 98, suffix: '%', label: 'Recompra', duration: 1500 },
    ],
    waQuote: 'Hola, quiero una cotizacion completa para mi moto',
    alt: 'Moto en ruta con repuestos de calidad',
    scrollDown: 'Descubrir',
  },
  en: {
    badge: 'Official distributor — Lima and nationwide shipping',
    titleA: 'Tires, tubes',
    titleB: 'and motorcycle parts.',
    desc: 'We advise on WhatsApp, validate fitment and ship nationwide with real delivery timelines.',
    ctaPrimary: 'Get a quote',
    ctaSecondary: 'Browse catalog',
    features: ['Fitment checked', 'Nationwide shipping', 'Workshop and fleet service'],
    fastReply: 'Fast reply',
    advisor: 'Talk to an advisor',
    supportTitle: 'Nationwide coverage',
    supportText: 'We support city, highway and business orders with real tracking and commercial coordination.',
    supportMeta: '12 active brands',
    serviceTitle: 'Technical guidance',
    serviceText: 'We help you choose the right option before checkout, not after a wrong order.',
    serviceMeta: 'Reply in 8 min',
    stats: [
      { target: 500, suffix: '+', label: 'Customers served', duration: 1400 },
      { target: 48, suffix: 'h', label: 'Nationwide delivery', duration: 1100 },
      { target: 98, suffix: '%', label: 'Repeat purchase', duration: 1500 },
    ],
    waQuote: 'Hi, I want a full quote for my motorcycle',
    alt: 'Motorcycle on the road with quality spare parts',
    scrollDown: 'Discover',
  },
}

function useCountUp(target, duration, active) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let rafId
    const start = performance.now()
    const update = now => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) rafId = requestAnimationFrame(update)
    }
    rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, active])

  return count
}

export default function Hero({ lang }) {
  const [statsRef, statsActive] = useFadeIn(0.6)
  const copy = COPY[lang]

  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-14 sm:pt-20 lg:pb-24">
      <div className="ambient-glow absolute -left-32 top-6 h-72 w-72" />
      <div className="ambient-glow absolute -right-24 top-20 h-80 w-80" />
      <div className="soft-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="animate-fade-up mb-5 inline-flex items-center rounded-full border border-sahm-purple/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sahm-purple shadow-sm">
            {copy.badge}
          </p>
          <h1 className="text-4xl font-black leading-[0.95] text-slate-900 sm:text-5xl lg:text-7xl">
            <span className="animate-fade-up anim-delay-75 block">{copy.titleA}</span>
            <span className="animate-fade-up anim-delay-150 block text-sahm-purple">{copy.titleB}</span>
          </h1>
          <p className="animate-fade-up anim-delay-225 mt-6 max-w-xl text-lg text-slate-600">{copy.desc}</p>

          <div className="animate-fade-up anim-delay-300 mt-8 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppMessageUrl(copy.waQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-glow-cta btn-shimmer inline-flex items-center gap-2 rounded-full bg-sahm-purple px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 active:scale-[0.97]"
            >
              {copy.ctaPrimary}
            </a>
            <a
              href="#productos"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-slate-700 transition hover:border-slate-400 active:scale-[0.97]"
            >
              {copy.ctaSecondary}
            </a>
          </div>

          <div className="animate-fade-up anim-delay-375 mt-6 flex flex-wrap gap-3">
            {copy.features.map(feature => (
              <span
                key={feature}
                className="rounded-full border border-sahm-purple/10 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Stats — count-up triggers when they enter the viewport */}
          <div
            ref={statsRef}
            className="animate-fade-up anim-delay-450 mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50"
          >
            {copy.stats.map(stat => (
              <StatCard key={stat.label} stat={stat} active={statsActive} />
            ))}
          </div>
        </div>

        <div className="animate-scale-in anim-delay-150 relative">
          <div className="absolute -bottom-6 -right-6 hidden animate-fade-up anim-delay-600 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">{copy.fastReply}</p>
            <p className="text-2xl font-black text-sahm-purple">8 min</p>
          </div>

          <div className="float-slow overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-2xl shadow-sahm-purple/20">
            <img
              src={HERO_IMAGE}
              alt={copy.alt}
              className="h-[420px] w-full rounded-[1.4rem] object-cover sm:h-[500px]"
              loading="eager"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-3 inline-flex w-full items-center justify-center rounded-xl bg-sahm-yellow py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:brightness-105 active:scale-[0.98]"
            >
              {copy.advisor}
            </a>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <DetailCard
              tone="light"
              title={copy.supportTitle}
              text={copy.supportText}
              meta={copy.supportMeta}
            />
            <DetailCard
              tone="dark"
              title={copy.serviceTitle}
              text={copy.serviceText}
              meta={copy.serviceMeta}
            />
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="relative mx-auto mt-14 flex max-w-7xl justify-center lg:justify-start">
        <a
          href="#beneficios"
          aria-label={copy.scrollDown}
          className="group flex flex-col items-center gap-2 text-slate-500 transition hover:text-sahm-purple"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 transition group-hover:opacity-100">
            {copy.scrollDown}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/80 shadow-sm transition group-hover:border-sahm-purple group-hover:shadow-md">
            <svg
              className="animate-scroll-bounce"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}

function StatCard({ stat, active }) {
  const value = useCountUp(stat.target, stat.duration, active)

  return (
    <article className="rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-2xl font-black text-sahm-purple sm:text-3xl">
        {value}
        {stat.suffix}
      </p>
      <p className="text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">{stat.label}</p>
    </article>
  )
}

function DetailCard({ tone, title, text, meta }) {
  const cardClass =
    tone === 'dark'
      ? 'border-sahm-purple/20 bg-sahm-purple text-white shadow-sahm-purple/20'
      : 'border-sahm-purple/15 bg-white/95 text-slate-900 shadow-sahm-purple/10'

  const metaClass = tone === 'dark' ? 'text-white/70' : 'text-slate-500'
  const titleClass = tone === 'dark' ? 'text-sahm-yellow' : 'text-sahm-purple'

  return (
    <article className={`rounded-[1.5rem] border p-5 shadow-lg ${cardClass}`}>
      <p className={`text-xs font-black uppercase tracking-[0.14em] ${titleClass}`}>{title}</p>
      <p className="mt-2 text-base font-bold leading-snug">{text}</p>
      <p className={`mt-3 text-sm font-semibold ${metaClass}`}>{meta}</p>
    </article>
  )
}
