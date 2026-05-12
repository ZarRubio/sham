import { useEffect } from 'react'
import Navbar from '../components/sahm/Navbar'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'
import TrustBar from '../components/sahm/TrustBar'
import { WhatsAppIcon } from '../components/sahm/icons'
import { buildWhatsAppMessageUrl } from '../config/site'

const COPY = {
  es: {
    title: 'Nosotros — SAHM',
    kicker: 'Quiénes somos',
    heading: 'Distribución especializada de repuestos para moto en el Perú.',
    intro:
      'SAHM es un distribuidor comercial de llantas, cámaras y repuestos para moto con sede en Lima. Trabajamos con compradores directos, talleres mecánicos y flotas de delivery que necesitan stock confirmado, asesoría técnica y despacho coordinado a todo el país.',
    missionKicker: 'Lo que nos diferencia',
    mission: [
      {
        title: 'Asesoría antes de vender',
        text: 'Validamos compatibilidad por modelo, medida y uso antes de cotizar. No te vendemos lo que tenemos; te ayudamos a elegir lo que necesitas.',
        icon: 'target',
      },
      {
        title: 'Stock real, no promesas',
        text: 'Confirmamos disponibilidad y tiempos de entrega antes del pago. Cada pedido sale con seguimiento comercial desde el primer mensaje.',
        icon: 'box',
      },
      {
        title: 'Cobertura nacional',
        text: 'Despacho a Lima en 24–48h y regiones en 48–72h. Coordinamos el envío y te acompañamos hasta la entrega.',
        icon: 'map',
      },
      {
        title: 'Atención para taller y flota',
        text: 'Trabajamos con talleres y negocios que necesitan pedidos recurrentes, precios consistentes y respuesta rápida.',
        icon: 'users',
      },
    ],
    coverageKicker: 'Cobertura de despacho',
    coverageTitle: 'Lima y todo el Perú.',
    coverage: [
      { zone: 'Lima Metropolitana', time: '24 – 48 horas', highlight: true },
      { zone: 'Arequipa', time: '48 – 72 horas', highlight: false },
      { zone: 'Trujillo', time: '48 – 72 horas', highlight: false },
      { zone: 'Chiclayo', time: '48 – 72 horas', highlight: false },
      { zone: 'Piura', time: '48 – 72 horas', highlight: false },
      { zone: 'Otras regiones', time: 'Consultar', highlight: false },
    ],
    ctaKicker: 'Hablemos',
    ctaTitle: 'Cuéntanos qué necesitas y te ayudamos a resolverlo.',
    ctaButton: 'Escribir por WhatsApp',
    ctaMessage: 'Hola, quiero información sobre SAHM y sus productos. ',
  },
  en: {
    title: 'About — SAHM',
    kicker: 'Who we are',
    heading: 'Specialized distribution of motorcycle parts in Peru.',
    intro:
      'SAHM is a commercial distributor of motorcycle tires, tubes and spare parts based in Lima. We work with direct buyers, mechanic workshops and delivery fleets that need confirmed stock, technical guidance and coordinated shipping across the country.',
    missionKicker: 'What sets us apart',
    mission: [
      {
        title: 'Guidance before selling',
        text: 'We validate fitment by model, size and use case before quoting. We do not sell you what we have; we help you choose what you need.',
        icon: 'target',
      },
      {
        title: 'Real stock, no promises',
        text: 'We confirm availability and delivery timelines before payment. Every order ships with commercial follow-up from the first message.',
        icon: 'box',
      },
      {
        title: 'Nationwide coverage',
        text: 'Shipping to Lima in 24–48h and regions in 48–72h. We coordinate the delivery and stay with you until it arrives.',
        icon: 'map',
      },
      {
        title: 'Workshop and fleet support',
        text: 'We work with workshops and businesses that need recurring orders, consistent pricing and fast response.',
        icon: 'users',
      },
    ],
    coverageKicker: 'Shipping coverage',
    coverageTitle: 'Lima and all of Peru.',
    coverage: [
      { zone: 'Metropolitan Lima', time: '24 – 48 hours', highlight: true },
      { zone: 'Arequipa', time: '48 – 72 hours', highlight: false },
      { zone: 'Trujillo', time: '48 – 72 hours', highlight: false },
      { zone: 'Chiclayo', time: '48 – 72 hours', highlight: false },
      { zone: 'Piura', time: '48 – 72 hours', highlight: false },
      { zone: 'Other regions', time: 'On request', highlight: false },
    ],
    ctaKicker: 'Let\'s talk',
    ctaTitle: 'Tell us what you need and we will help you solve it.',
    ctaButton: 'Write on WhatsApp',
    ctaMessage: 'Hi, I want information about SAHM and its products. ',
  },
}

export default function AboutPage({ lang, setLang }) {
  const copy = COPY[lang]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    document.title = copy.title
  }, [copy.title])

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <TrustBar lang={lang} />

      <main className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-20">

          {/* Hero */}
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sahm-purple">{copy.kicker}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {copy.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{copy.intro}</p>
          </section>

          {/* Mission cards */}
          <section>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sahm-purple">{copy.missionKicker}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {copy.mission.map(item => (
                <article
                  key={item.title}
                  className="card-shine flex flex-col rounded-[1.75rem] border border-sahm-purple/15 bg-white p-7 shadow-lg shadow-sahm-purple/10"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sahm-yellow text-sahm-purple shadow-lg shadow-sahm-yellow/30">
                    <MissionIcon type={item.icon} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Coverage */}
          <section className="rounded-[2rem] border border-sahm-purple/15 bg-[#fff9df] p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sahm-purple">{copy.coverageKicker}</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{copy.coverageTitle}</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {copy.coverage.map(row => (
                <div
                  key={row.zone}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${
                    row.highlight
                      ? 'border-sahm-purple/20 bg-sahm-purple text-white shadow-lg shadow-sahm-purple/20'
                      : 'border-sahm-purple/10 bg-white text-slate-900'
                  }`}
                >
                  <p className={`text-sm font-black ${row.highlight ? 'text-white' : 'text-slate-900'}`}>{row.zone}</p>
                  <p className={`text-sm font-semibold ${row.highlight ? 'text-sahm-yellow' : 'text-sahm-purple'}`}>{row.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden rounded-[2rem] bg-sahm-purple p-10 text-center text-white shadow-2xl shadow-sahm-purple/20 sm:p-14">
            <div className="soft-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sahm-yellow">{copy.ctaKicker}</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">{copy.ctaTitle}</h2>
              <a
                href={buildWhatsAppMessageUrl(copy.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-sahm-yellow px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
              >
                <WhatsAppIcon size={16} />
                {copy.ctaButton}
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}

function MissionIcon({ type }) {
  if (type === 'target') return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  )
  if (type === 'box') return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10l9 4 9-4V7M12 11v10" />
    </svg>
  )
  if (type === 'map') return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  )
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}
