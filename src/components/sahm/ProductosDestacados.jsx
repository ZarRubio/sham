import { useMemo, useState } from 'react'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { WhatsAppIcon } from './icons'
import {
  CATALOG_CATEGORIES,
  CATALOG_PRODUCTS,
  getSubcategories,
} from '../../config/catalog'
import { useFadeIn } from '../../hooks/useFadeIn'
import ProductCard from './ProductCard'

const ALL_SUBCATEGORIES = 'all'

const COPY = {
  es: {
    kicker: 'Catálogo SAHM',
    title: 'Referencias reales, fotos reales y consulta directa.',
    text: 'Filtra por familia y subcategoría para encontrar la medida correcta.',
    catalogButton: 'Consultar catálogo completo',
    categoryLabel: 'Familia',
    subcategoryLabel: 'Subcategoría',
    allLabel: 'Todas',
    resultsLabel: 'productos',
    empty: 'No hay productos en esta selección.',
    waCatalog: 'Hola, quiero recibir el catálogo completo de SAHM con precios y disponibilidad',
  },
  en: {
    kicker: 'SAHM catalog',
    title: 'Real references, real photos and direct inquiry.',
    text: 'Filter by family and subcategory to find the right size.',
    catalogButton: 'Ask for full catalog',
    categoryLabel: 'Family',
    subcategoryLabel: 'Subcategory',
    allLabel: 'All',
    resultsLabel: 'products',
    empty: 'There are no products in this selection.',
    waCatalog: 'Hi, I want the full SAHM catalog with prices and availability',
  },
}

export default function ProductosDestacados({ lang }) {
  const [selectedCategory, setSelectedCategory] = useState(CATALOG_CATEGORIES[0].name)
  const [selectedSubcategory, setSelectedSubcategory] = useState(ALL_SUBCATEGORIES)
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]

  const subcategories = useMemo(() => getSubcategories(selectedCategory), [selectedCategory])

  const filteredProducts = useMemo(
    () =>
      CATALOG_PRODUCTS.filter(product => {
        const sameCategory = product.category === selectedCategory
        const sameSubcategory = selectedSubcategory === ALL_SUBCATEGORIES || product.subcategory === selectedSubcategory
        return sameCategory && sameSubcategory
      }),
    [selectedCategory, selectedSubcategory],
  )

  const handleCategoryChange = category => {
    setSelectedCategory(category)
    setSelectedSubcategory(ALL_SUBCATEGORIES)
  }

  return (
    <section id="productos" ref={ref} className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[92rem] rounded-[2rem] border border-sahm-purple/20 bg-[#fff9df] p-6 shadow-2xl shadow-sahm-purple/10 sm:p-8 md:p-10">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.kicker}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-5xl">{copy.title}</h2>
            <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">{copy.text}</p>
          </div>
          <a
            href={buildWhatsAppMessageUrl(copy.waCatalog)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 sm:w-auto"
          >
            <WhatsAppIcon size={13} />
            {copy.catalogButton}
          </a>
        </div>

        <div className="rounded-[1.5rem] border border-sahm-purple/15 bg-white/80 p-4 shadow-sm sm:p-5">
          <FilterGroup label={copy.categoryLabel}>
            {CATALOG_CATEGORIES.map(category => {
              const label = lang === 'en' ? category.nameEn : category.name
              return (
                <FilterButton
                  key={category.id}
                  active={selectedCategory === category.name}
                  onClick={() => handleCategoryChange(category.name)}
                >
                  {label}
                </FilterButton>
              )
            })}
          </FilterGroup>

          <div className="mt-4 border-t border-sahm-purple/10 pt-4">
            <FilterGroup label={copy.subcategoryLabel}>
              <FilterButton
                active={selectedSubcategory === ALL_SUBCATEGORIES}
                onClick={() => setSelectedSubcategory(ALL_SUBCATEGORIES)}
              >
                {copy.allLabel}
              </FilterButton>
              {subcategories.map(subcategory => (
                <FilterButton
                  key={subcategory}
                  active={selectedSubcategory === subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory}
                </FilterButton>
              ))}
            </FilterGroup>
          </div>

          <p className="mt-4 text-sm font-bold text-slate-500">
            {filteredProducts.length} {copy.resultsLabel}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((item, index) => (
              <div
                key={item.id}
                style={{ transitionDelay: visible ? `${Math.min(index, 5) * 70}ms` : '0ms' }}
                className={`h-full transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[6px]'}`}
              >
                <ProductCard product={item} lang={lang} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-sahm-purple/25 bg-white/70 p-8 text-center text-sm font-semibold text-slate-500">
            {copy.empty}
          </div>
        )}
      </div>
    </section>
  )
}

function FilterGroup({ label, children }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      <p className="min-w-32 text-[11px] font-black uppercase tracking-[0.14em] text-sahm-purple">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.09em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1 ${
        active
          ? 'bg-sahm-purple text-white shadow-lg shadow-sahm-purple/20'
          : 'border border-slate-200 bg-white text-slate-600 hover:border-sahm-purple hover:text-sahm-purple'
      }`}
    >
      {children}
    </button>
  )
}
