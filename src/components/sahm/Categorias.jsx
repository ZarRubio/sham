import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from '../../config/catalog'
import { WhatsAppIcon } from './icons'

const COPY = {
  es: {
    kicker: 'Líneas de producto',
    title: 'El catálogo SAHM empieza por lo que más se mueve.',
    text: 'Explora las dos familias principales: llantas y cámaras. Cada una reúne subcategorías y referencias reales con fotos listas para consultar por WhatsApp.',
    cta: 'Consultar por WhatsApp',
    browse: 'Ver productos',
    categoryLabel: 'Categoría',
    productsLabel: 'referencias',
    subcategoryLabel: 'Subcategorías',
  },
  en: {
    kicker: 'Product lines',
    title: 'The SAHM catalog starts with the fastest-moving lines.',
    text: 'Explore the two main families: tires and tubes. Each one groups real subcategories and references with photos ready to ask about on WhatsApp.',
    cta: 'Ask on WhatsApp',
    browse: 'View products',
    categoryLabel: 'Category',
    productsLabel: 'references',
    subcategoryLabel: 'Subcategories',
  },
}

export default function Categorias({ lang }) {
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]

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
            <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">{copy.text}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {CATALOG_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              style={{ transitionDelay: visible ? `${index * 110}ms` : '0ms' }}
              className={`transition-all duration-600 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[6px]'}`}
            >
              <CategoriaCard cat={cat} copy={copy} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoriaCard({ cat, copy, lang }) {
  const count = CATALOG_PRODUCTS.filter(product => product.category === cat.name).length
  const waUrl = buildWhatsAppMessageUrl(cat.whatsappMessage)
  const name = lang === 'en' ? cat.nameEn : cat.name
  const description = lang === 'en' ? cat.descriptionEn : cat.description

  return (
    <article className="card-shine group flex min-h-[520px] flex-col overflow-hidden rounded-[1.9rem] border border-sahm-purple/20 bg-slate-900 shadow-2xl shadow-sahm-purple/15 sm:min-h-[560px]">
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img
          src={cat.image}
          alt={name}
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-sahm-purple/25 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sahm-yellow px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-sahm-purple">
            {copy.categoryLabel}
          </span>
          <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">
            {count} {copy.productsLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pb-7 text-white">
        <h3 className="text-3xl font-black leading-none sm:text-4xl">{name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>

        <div className="mt-5">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-sahm-yellow">{copy.subcategoryLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.highlights.map(item => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.08em] text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
          <a
            href="#/productos"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.97]"
          >
            {copy.browse}
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-sahm-yellow px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-sahm-purple transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
          >
            <WhatsAppIcon size={13} />
            {copy.cta}
          </a>
        </div>
      </div>
    </article>
  )
}

