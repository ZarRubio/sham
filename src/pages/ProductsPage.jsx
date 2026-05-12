import { useEffect } from 'react'
import Navbar from '../components/sahm/Navbar'
import TrustBar from '../components/sahm/TrustBar'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'
import { CATEGORIES } from '../config/categories'
import { buildWhatsAppMessageUrl } from '../config/site'
import { WhatsAppIcon } from '../components/sahm/icons'

const COPY = {
  es: {
    title: 'Productos — SAHM',
    kicker: 'Catálogo',
    heading: 'Elige tu línea de producto.',
    subheading: 'Llantas, cámaras, repuestos y accesorios para moto. Stock confirmado, asesoría por modelo y despacho a todo el Perú.',
    comingSoon: 'Próximamente',
    helpKicker: '¿No sabes qué necesitas?',
    helpTitle: 'Cuéntanos tu modelo y te ayudamos a elegir.',
    helpText: 'Escríbenos el modelo de tu moto o la pieza que buscas y te respondemos con stock real y compatibilidad validada.',
    helpCta: 'Consultar por WhatsApp',
    helpMessage: 'Hola, no sé exactamente qué producto necesito para mi moto. Mi modelo es: ',
  },
  en: {
    title: 'Products — SAHM',
    kicker: 'Catalog',
    heading: 'Choose your product line.',
    subheading: 'Tires, tubes, spare parts and accessories for motorcycles. Confirmed stock, model-based guidance and nationwide shipping.',
    comingSoon: 'Coming soon',
    helpKicker: "Not sure what you need?",
    helpTitle: 'Tell us your model and we will help you choose.',
    helpText: 'Send us your motorcycle model or the part you are looking for and we will reply with real stock and validated fitment.',
    helpCta: 'Ask on WhatsApp',
    helpMessage: 'Hi, I am not sure exactly what product I need for my motorcycle. My model is: ',
  },
}

export default function ProductsPage({ lang, setLang }) {
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

      <main className="px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">{copy.heading}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{copy.subheading}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {CATEGORIES.map(cat => {
              const name = lang === 'en' ? cat.nameEn : cat.name
              const description = lang === 'en' ? cat.descriptionEn : cat.description
              const cta = lang === 'en' ? cat.ctaEn : cat.cta

              if (cat.comingSoon) {
                return (
                  <div
                    key={cat.id}
                    className="relative flex flex-col justify-between rounded-[2rem] border border-sahm-purple/10 bg-slate-50 p-8 sm:p-10"
                  >
                    <span className="mb-4 inline-flex w-fit rounded-full border border-sahm-purple/20 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-sahm-purple/60">
                      {copy.comingSoon}
                    </span>
                    <div>
                      <h2 className="text-3xl font-black text-slate-400 sm:text-4xl">{name}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={cat.id}
                  href={`#/productos/${cat.id}`}
                  className="card-shine group flex flex-col justify-between rounded-[2rem] border border-sahm-purple/20 bg-sahm-purple p-8 text-white shadow-2xl shadow-sahm-purple/20 transition hover:-translate-y-1 hover:border-sahm-purple/40 hover:shadow-sahm-purple/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-2 sm:p-10"
                >
                  <div>
                    <h2 className="text-3xl font-black sm:text-4xl">{name}</h2>
                    <p className="mt-3 text-base leading-relaxed text-white/80">{description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    <span className="rounded-full bg-sahm-yellow px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-sahm-purple transition group-hover:brightness-110">
                      {cta}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Help section */}
          <section className="mt-12 rounded-[2rem] border border-sahm-purple/15 bg-[#fff9df] p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sahm-purple">{copy.helpKicker}</p>
                <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">{copy.helpTitle}</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">{copy.helpText}</p>
              </div>
              <a
                href={buildWhatsAppMessageUrl(copy.helpMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer shrink-0 inline-flex items-center gap-2 rounded-full bg-sahm-purple px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white shadow-lg shadow-sahm-purple/25 transition hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <WhatsAppIcon size={16} />
                {copy.helpCta}
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
