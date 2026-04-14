import { useEffect, useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { WHATSAPP_URL, buildWhatsAppMessageUrl } from '../../config/site'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80'

const STATS = [
  { target: 500, suffix: '+', label: 'Clientes atendidos', duration: 1400 },
  { target: 48, suffix: 'h', label: 'Entrega nacional', duration: 1100 },
  { target: 98, suffix: '%', label: 'Recompra', duration: 1500 },
]

function useCountUp(target, duration, active) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    const start = performance.now()
    const update = now => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [target, duration, active])

  return count
}

export default function Hero() {
  const [ref, visible] = useFadeIn(0.2)

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden px-6 pb-20 pt-14 sm:pt-20">
      <div className="ambient-glow absolute -left-32 top-6 h-72 w-72" />
      <div className="ambient-glow absolute -right-24 top-20 h-80 w-80" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <p className="mb-5 inline-flex items-center rounded-full border border-sahm-purple/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sahm-purple shadow-sm">
            Distribucion oficial para moto y taller
          </p>
          <h1 className="text-4xl font-black leading-[0.95] text-slate-900 sm:text-5xl lg:text-7xl">
            Repuestos confiables,
            <span className="block text-sahm-purple">ruta asegurada.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Llantas, camaras y repuestos con respaldo. Te asesoramos por WhatsApp y despachamos a todo el pais con tiempos reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppMessageUrl('Hola, quiero una cotizacion completa para mi moto')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sahm-purple px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-sahm-purple/30 transition hover:-translate-y-0.5"
            >
              Cotizar ahora
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-slate-700 transition hover:border-slate-400"
            >
              Ver catalogo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/50">
            {STATS.map(stat => (
              <StatCard key={stat.label} stat={stat} active={visible} />
            ))}
          </div>
        </div>

        <div className={`relative transition-all delay-100 duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">Respuesta rapida</p>
            <p className="text-2xl font-black text-sahm-purple">8 min</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-2xl shadow-sahm-purple/20">
            <img
              src={HERO_IMAGE}
              alt="Moto en ruta con repuestos de calidad"
              className="h-[500px] w-full rounded-[1.4rem] object-cover"
              loading="eager"
            />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-sahm-yellow py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900"
            >
              Hablar con asesor
            </a>
          </div>
        </div>
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
