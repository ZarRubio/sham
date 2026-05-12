import { getProductLabel, getProductWhatsAppMessage } from '../../config/catalog'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { WhatsAppIcon } from './icons'

const COPY = {
  es: {
    refLabel: 'Ref',
    view: 'Ver',
    quote: 'Cotizar',
    waPrefix: 'Hola, quiero cotizar este producto',
  },
  en: {
    refLabel: 'Ref',
    view: 'View',
    quote: 'Quote',
    waPrefix: 'Hi, I want to quote this product',
  },
}

export default function ProductCard({ product, lang }) {
  const copy = COPY[lang]
  const label = getProductLabel(product, lang)
  const waUrl = buildWhatsAppMessageUrl(
    getProductWhatsAppMessage(product, copy.waPrefix, lang),
  )

  return (
    <article className="card-shine group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-sahm-purple/15 bg-white shadow-lg shadow-sahm-purple/10 transition duration-300 hover:-translate-y-1 hover:border-sahm-purple/25 hover:shadow-xl hover:shadow-sahm-purple/20">
      <span className="absolute right-3 top-3 z-10 rounded-full bg-sahm-purple px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white shadow">
        {product.category}
      </span>

      <a href={product.productUrl} className="block">
        <div className="overflow-hidden bg-gradient-to-br from-white to-slate-100">
          <img
            src={product.images[0].card}
            alt={label}
            className="h-56 w-full object-contain p-5 transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sahm-purple/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-sahm-purple">
            {product.subcategory}
          </span>
        </div>

        <h3 className="mt-3 min-h-[56px] text-xl font-black leading-tight text-slate-900">{label}</h3>
        <p className="mt-1 font-mono text-xs tracking-wide text-slate-400">
          {copy.refLabel}: {product.code}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <a
            href={product.productUrl}
            className="inline-flex items-center justify-center rounded-xl border border-sahm-purple/20 bg-white py-2.5 text-xs font-black uppercase tracking-[0.1em] text-sahm-purple transition hover:-translate-y-0.5 hover:border-sahm-purple active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1"
          >
            {copy.view}
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center justify-center gap-1.5 rounded-xl bg-sahm-yellow py-2.5 text-xs font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1"
          >
            <WhatsAppIcon size={12} />
            {copy.quote}
          </a>
        </div>
      </div>
    </article>
  )
}
