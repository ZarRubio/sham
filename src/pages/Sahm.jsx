import { useEffect } from 'react'
import Navbar from '../components/sahm/Navbar'
import Hero from '../components/sahm/Hero'
import TrustBar from '../components/sahm/TrustBar'
import Beneficios from '../components/sahm/Beneficios'
import Confianza from '../components/sahm/Confianza'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'
import { CATEGORIES } from '../config/categories'
import { useFadeIn } from '../hooks/useFadeIn'

const PAGE_TITLE = {
  es: 'SAHM — Llantas, cámaras y repuestos para moto',
  en: 'SAHM — Motorcycle tires, tubes and spare parts',
}

const GRID_COPY = {
  es: {
    kicker: 'Líneas de producto',
    title: 'Todo lo que necesita tu moto, en un solo lugar.',
    browse: 'Ver productos',
    count: n => `${n} referencias`,
    comingSoon: 'Próximamente',
  },
  en: {
    kicker: 'Product lines',
    title: 'Everything your motorcycle needs, in one place.',
    browse: 'View products',
    count: n => `${n} references`,
    comingSoon: 'Coming soon',
  },
}

export default function Sahm({ lang, setLang }) {
  useEffect(() => {
    document.title = PAGE_TITLE[lang]
  }, [lang])

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <CategoryGrid lang={lang} />
      <Beneficios lang={lang} />
      <Confianza lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}

function CategoryGrid({ lang }) {
  const [ref, visible] = useFadeIn()
  const copy = GRID_COPY[lang]

  return (
    <section ref={ref} className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
        <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">{copy.title}</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {CATEGORIES.map((cat, index) => {
            const name = lang === 'en' ? cat.nameEn : cat.name
            const description = lang === 'en' ? cat.descriptionEn : cat.description

            if (cat.comingSoon) {
              return (
                <div
                  key={cat.id}
                  style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
                  className={`relative overflow-hidden rounded-[2rem] border border-sahm-purple/10 bg-slate-100 transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[6px]'}`}
                >
                  <div className="p-6 sm:p-8">
                    <span className="mb-4 inline-flex rounded-full border border-sahm-purple/20 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-sahm-purple/50">
                      {copy.comingSoon}
                    </span>
                    <h3 className="text-3xl font-black text-slate-400 sm:text-4xl">{name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
                  </div>
                </div>
              )
            }

            return (
              <a
                key={cat.id}
                href={`#/productos/${cat.id}`}
                style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
                className={`card-shine group relative overflow-hidden rounded-[2rem] border border-sahm-purple/20 bg-slate-900 shadow-2xl shadow-sahm-purple/15 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sahm-purple/40 hover:shadow-sahm-purple/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-2 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[6px]'}`}
              >
                <div className="p-6 text-white sm:p-8">
                  <h3 className="text-3xl font-black sm:text-4xl">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full bg-sahm-yellow px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-sahm-purple transition group-hover:brightness-110">
                      {copy.browse}
                    </span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
