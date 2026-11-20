// Server Component: only HeroSection, StatsTrustPanel and BestSellersCarousel are client islands.
import StatsTrustPanel from './StatsTrustPanel'
import HeroSection from './HeroSection'
import BestSellersCarousel from './BestSellersCarousel'
import CategoryMosaic from './CategoryMosaic'
import { availableBestSellers, catalogHighlights, premiumCategories, testimonials } from '../../lib/premiumData'
import { CATALOG_PRODUCTS, toCardProduct } from '../../config/catalog'
import { buildWhatsAppMessageUrl } from '../../config/site'

function StarRating() {
  return (
    <div className="mb-3 flex gap-0.5" role="img" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-sahm-yellow" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomeExperience() {
  const revealClass = className => `reveal ${className}`.trim()

  return (
    <>
      {/* ── 3D Hero ── */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black">
        <HeroSection stockLevels={Object.fromEntries(CATALOG_PRODUCTS.map(product => [product.id, product.stockLevel]))} />

      {/* ── Stats trust panel (below hero, same purple bg) ── */}
      <div className="relative z-10 px-4 pb-16 sm:px-6">
        <StatsTrustPanel />
      </div>
      </section>

      {/* ── Category grid ── */}
      <section className="bg-sahm-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className={revealClass('mb-8')}>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Líneas de producto</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold uppercase italic text-black">Encuentra lo que necesitas.</h2>
          </div>
          <CategoryMosaic categories={premiumCategories} />
        </div>
      </section>

      {/* ── Best sellers ── */}
      <section className="bg-sahm-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className={revealClass('mb-8')}>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Más vendidos</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold uppercase italic text-black">Referencias listas para salir.</h2>
          </div>
          <BestSellersCarousel products={availableBestSellers.map(toCardProduct)} />
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className={revealClass('')}>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-yellow">Asesoría directa</span>
              <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase italic leading-tight text-white sm:text-5xl">
                ¿No encuentras tu pieza?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Cuéntanos la categoría, medida o referencia y te ayudamos a ubicar el producto correcto antes de cotizar.
              </p>
              <a
                href={buildWhatsAppMessageUrl('Hola, quiero consultar un producto SAHM. La categoría, medida o referencia es: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-sahm-yellow px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-95"
              >
                Consultar por WhatsApp
              </a>
            </div>
            <div className={revealClass('rounded-2xl border border-white/10 bg-white/5 p-6')}>
              {catalogHighlights.map(item => (
                <p key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm font-bold text-white/70 last:border-0">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sahm-yellow" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-sahm-cream px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className={revealClass('mb-8 text-center')}>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-purple">Clientes</span>
            <h2 className="mt-2 font-heading text-4xl font-extrabold uppercase italic text-black">Lo que dicen.</h2>
          </div>
          <div className={revealClass('grid gap-4 md:grid-cols-3')}>
            {testimonials.map(item => (
              <article key={item.name} className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm">
                <StarRating />
                <p className="text-base leading-relaxed text-gray-700">“{item.quote}”</p>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="font-heading text-sm font-extrabold uppercase text-black">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
