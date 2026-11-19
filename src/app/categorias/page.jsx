import Link from 'next/link'
import CategoryCard from '../../components/premium/CategoryCard'
import { premiumCategories } from '../../lib/premiumData'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Categorías de repuestos para moto',
  description: 'Explora las categorías SAHM: llantas para moto y moto eléctrica, cámaras para moto y bicicleta, y carburadores PZ. Cotiza por WhatsApp.',
  path: '/categorias/',
})

export default function CategoriesPage() {
  const heroImages = premiumCategories
    .map(category => category.image)
    .filter(Boolean)

  return (
    <main className="min-h-screen bg-sahm-cream">
      <div className="relative overflow-hidden bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black px-4 py-10 sm:px-6 sm:py-14">
        {heroImages.length > 0 && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.07] sm:block">
            {heroImages.slice(0, 3).map((image, index) => (
              <div
                key={image}
                className="absolute h-56 w-56 bg-contain bg-center bg-no-repeat sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                style={{
                  backgroundImage: `url(${image})`,
                  right: `${index * 18}%`,
                  top: `${10 + index * 18}%`,
                }}
              />
            ))}
          </div>
        )}

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-sahm-night via-sahm-purple/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="transition hover:text-white">Inicio</Link>
            <span>/</span>
            <span className="font-bold text-white">Categorías</span>
          </nav>

          <span className="text-xs font-heading font-bold uppercase tracking-widest text-sahm-yellow">Catálogo</span>
          <h1 className="mt-2 font-heading text-5xl font-extrabold uppercase italic text-white sm:text-6xl lg:text-7xl">
            Categorías
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Elige una línea de producto para ver el catálogo completo.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-sahm-yellow" />
              {premiumCategories.length} {premiumCategories.length === 1 ? 'categoría' : 'categorías'}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-sahm-cream px-4 pb-24 pt-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {premiumCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
