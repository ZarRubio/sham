import { useEffect, useState } from 'react'
import { WHATSAPP_URL, buildWhatsAppMessageUrl } from '../../config/site'
import { useFadeIn } from '../../hooks/useFadeIn'
import { useScrollY } from '../../hooks/useScrollY'
import { WhatsAppIcon } from './icons'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80'

const COPY = {
  es: {
    badge: 'Distribuidor autorizado · Lima y despacho nacional',
    titleA: 'Llantas, cámaras y repuestos para tu moto',
    titleB: 'en un solo lugar.',
    desc: 'Cotiza por WhatsApp, valida compatibilidad y recibe atención personalizada antes de comprar.',
    ctaPrimary: 'Cotizar por WhatsApp',
    ctaSecondary: 'Ver productos',
    features: ['Compatibilidad validada', 'Despacho a todo el Perú', 'Atención para taller y flota'],
    fastReplyLabel: 'Respuesta en',
    fastReplyValue: '8 min',
    advisor: 'Hablar con asesor',
    supportTitle: 'Cobertura nacional',
    supportText: 'Lima en 24–48h. Regiones en 48–72h. Seguimiento real y coordinación comercial desde el primer mensaje.',
    supportMeta: '12 marcas activas',
    serviceTitle: 'Asesoría técnica gratis',
    serviceText: 'Te ayudamos a elegir antes de comprar. Sin adivinar medidas ni compatibilidades.',
    serviceMeta: 'Sin costo adicional',
    stats: [
      { target: 1200, suffix: '+', label: 'Clientes atendidos', duration: 1800 },
      { target: 48, suffix: 'h', label: 'Entrega en Lima', duration: 1100 },
      { target: 98, suffix: '%', label: 'Tasa de recompra', duration: 1500 },
    ],
    waQuote: 'Hola, quiero cotizar repuestos para mi moto. Mi modelo es: ',
    alt: 'Moto en ruta con repuestos de calidad SAHM',
    scrollDown: 'Descubrir',
  },
  en: {
    badge: 'Authorized distributor · Lima and nationwide shipping',
    titleA: 'Tires, tubes and spare parts for your motorcycle',
    titleB: 'all in one place.',
    desc: 'Quote on WhatsApp, validate fitment and receive personalized guidance before you buy.',
    ctaPrimary: 'Quote on WhatsApp',
    ctaSecondary: 'View products',
    features: ['Fitment validated', 'Nationwide shipping', 'Workshop and fleet service'],
    fastReplyLabel: 'Reply in',
    fastReplyValue: '8 min',
    advisor: 'Talk to an advisor',
    supportTitle: 'Nationwide coverage',
    supportText: 'Lima in 24–48h. Regions in 48–72h. Real tracking and commercial follow-up from the first message.',
    supportMeta: '12 active brands',
    serviceTitle: 'Free technical guidance',
    serviceText: 'We help you choose the right option before checkout — no guessing on sizes or fitment.',
    serviceMeta: 'No extra charge',
    stats: [
      { target: 1200, suffix: '+', label: 'Customers served', duration: 1800 },
      { target: 48, suffix: 'h', label: 'Lima delivery', duration: 1100 },
      { target: 98, suffix: '%', label: 'Repeat purchase rate', duration: 1500 },
    ],
    waQuote: 'Hi, I want to quote parts for my motorcycle. My model is: ',
    alt: 'Motorcycle on the road with quality SAHM spare parts',
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
  const scrollY = useScrollY()
  const copy = COPY[lang]
  const glowShiftA = Math.min(scrollY * 0.08, 26)
  const glowShiftB = Math.min(scrollY * 0.12, 38)
  const imageShift = Math.min(scrollY * 0.06, 20)

  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div
        className="ambient-glow absolute -left-32 top-6 h-72 w-72 will-change-transform"
        style={{ transform: `translate3d(0, ${glowShiftA}px, 0)` }}
      />
      <div
        className="ambient-glow absolute -right-24 top-20 h-80 w-80 will-change-transform"
        style={{ transform: `translate3d(0, ${-glowShiftB}px, 0)` }}
      />
      <div className="soft-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="animate-fade-up mb-5 inline-flex max-w-full items-center rounded-full border border-sahm-purple/20 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-sahm-purple shadow-sm sm:text-xs sm:tracking-[0.18em]">
            {copy.badge}
          </p>
          <h1 className="text-4xl font-black leading-[0.95] text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="animate-fade-up anim-delay-75 block">{copy.titleA}</span>
            <span className="animate-fade-up anim-delay-150 block text-sahm-purple">{copy.titleB}</span>
          </h1>
          <p className="animate-fade-up anim-delay-225 mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{copy.desc}</p>

          <div className="animate-fade-up anim-delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={buildWhatsAppMessageUrl(copy.waQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-glow-cta btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-full bg-sahm-purple px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sahm-purple/40 active:scale-[0.97] sm:w-auto"
            >
              <WhatsAppIcon size={16} />
              {copy.ctaPrimary}
            </a>
            <a
              href="#/productos"
              className="btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-slate-700 transition hover:border-slate-400 active:scale-[0.97] sm:w-auto"
            >
              {copy.ctaSecondary}
            </a>
          </div>

          <div className="animate-fade-up anim-delay-375 mt-6 flex flex-wrap gap-2">
            {copy.features.map(feature => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-full border border-sahm-purple/10 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm"
              >
                <CheckIcon />
                {feature}
              </span>
            ))}
          </div>

          <div
            ref={statsRef}
            className="animate-fade-up anim-delay-450 mt-10 grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50 sm:grid-cols-3"
          >
            {copy.stats.map(stat => (
              <StatCard key={stat.label} stat={stat} active={statsActive} />
            ))}
          </div>
        </div>

        <div className="animate-scale-in anim-delay-150 relative">
          <div className="absolute -bottom-6 -right-6 hidden animate-fade-up anim-delay-600 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">{copy.fastReplyLabel}</p>
            <p className="text-2xl font-black text-sahm-purple">{copy.fastReplyValue}</p>
          </div>

          <div
            className="will-change-transform transition-transform duration-150"
            style={{ transform: `translate3d(0, ${-imageShift}px, 0)` }}
          >
            <div className="float-slow overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-2xl shadow-sahm-purple/20">
            <img
              src={HERO_IMAGE}
              alt={copy.alt}
              className="h-[320px] w-full rounded-[1.4rem] object-cover sm:h-[440px] lg:h-[500px]"
              loading="eager"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sahm-yellow py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:brightness-105 active:scale-[0.98]"
            >
              <WhatsAppIcon size={16} />
              {copy.advisor}
            </a>
            </div>
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

      <div className="relative mx-auto mt-14 flex max-w-7xl justify-center">
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
    <article className="flex min-h-[104px] flex-col justify-center rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-2xl font-black text-sahm-purple sm:text-3xl">
        {value.toLocaleString('es-PE')}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">{stat.label}</p>
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
    <article className={`flex flex-col rounded-[1.5rem] border p-5 shadow-lg ${cardClass}`}>
      <p className={`text-xs font-black uppercase tracking-[0.14em] ${titleClass}`}>{title}</p>
      <p className="mt-2 text-base font-bold leading-snug">{text}</p>
      <p className={`mt-4 text-sm font-semibold ${metaClass}`}>{meta}</p>
    </article>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="text-sahm-purple">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

