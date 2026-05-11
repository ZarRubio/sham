import { useMemo, useState } from 'react'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { WhatsAppIcon } from './icons'
import {
  CATALOG_CATEGORIES,
  CATALOG_PRODUCTS,
  getProductLabel,
  getProductWhatsAppMessage,
  getSubcategories,
} from '../../config/catalog'
import { useFadeIn } from '../../hooks/useFadeIn'

const ALL_SUBCATEGORIES = 'all'

const COPY = {
  es: {
    kicker: 'Catálogo SAHM',
    title: 'Referencias reales, fotos reales y consulta directa.',
    text: 'Filtra por familia y subcategoría para encontrar la medida correcta. Cada producto usa las fotos agregadas al catálogo local.',
    catalogButton: 'Consultar catálogo completo',
    askAvailability: 'Consultar precio y stock',
    viewProduct: 'Ver producto',
    categoryLabel: 'Familia',
    subcategoryLabel: 'Subcategoría',
    allLabel: 'Todas',
    resultsLabel: 'productos',
    refLabel: 'Ref',
    photoLabel: 'Foto',
    prevPhotoLabel: 'Foto anterior',
    nextPhotoLabel: 'Foto siguiente',
    waCatalog: 'Hola, quiero recibir el catálogo completo de SAHM con precios y disponibilidad',
    waProductPrefix: 'Hola, quiero consultar precio y disponibilidad de',
    empty: 'No hay productos en esta selección.',
  },
  en: {
    kicker: 'SAHM catalog',
    title: 'Real references, real photos and direct inquiry.',
    text: 'Filter by family and subcategory to find the right size. Each product uses the photos added to the local catalog.',
    catalogButton: 'Ask for full catalog',
    askAvailability: 'Check price and stock',
    viewProduct: 'View product',
    categoryLabel: 'Family',
    subcategoryLabel: 'Subcategory',
    allLabel: 'All',
    resultsLabel: 'products',
    refLabel: 'Ref',
    photoLabel: 'Photo',
    prevPhotoLabel: 'Previous photo',
    nextPhotoLabel: 'Next photo',
    waCatalog: 'Hi, I want the full SAHM catalog with prices and availability',
    waProductPrefix: 'Hi, I want to check price and availability for',
    empty: 'There are no products in this selection.',
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
                <ProductoCard producto={item} copy={copy} lang={lang} />
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
      className={`cursor-pointer rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.09em] transition ${
        active
          ? 'bg-sahm-purple text-white shadow-lg shadow-sahm-purple/20'
          : 'border border-slate-200 bg-white text-slate-600 hover:border-sahm-purple hover:text-sahm-purple'
      }`}
    >
      {children}
    </button>
  )
}

function ProductoCard({ producto, copy, lang }) {
  const productLabel = getProductLabel(producto, lang)
  const waMessage = getProductWhatsAppMessage(producto, copy.waProductPrefix, lang)
  const waUrl = buildWhatsAppMessageUrl(waMessage)

  return (
    <article className="card-shine group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-sahm-purple/15 bg-white shadow-lg shadow-sahm-purple/10 transition duration-300 hover:-translate-y-1 hover:border-sahm-purple/25 hover:shadow-xl hover:shadow-sahm-purple/20">
      <span className="absolute right-3 top-3 z-10 rounded-full bg-sahm-purple px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white shadow">
        {producto.category}
      </span>

      <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-100">
        <img
          src={producto.images[0].card}
          alt={productLabel}
          className="h-72 w-full object-contain p-5 transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sahm-purple/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-sahm-purple">
            {producto.subcategory}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
            {producto.images.length} {copy.photoLabel.toLowerCase()}s
          </span>
        </div>

        <h3 className="mt-3 min-h-[64px] text-2xl font-black leading-tight text-slate-900">{productLabel}</h3>
        <p className="mt-1 font-mono text-xs tracking-wide text-slate-400">
          {copy.refLabel}: {producto.code}
        </p>

        <div className="mt-auto grid gap-3 pt-5">
          <a
            href={producto.productUrl}
            className="inline-flex w-full items-center justify-center rounded-xl bg-sahm-purple py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.97]"
          >
            {copy.viewProduct}
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sahm-yellow py-3 text-xs font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
          >
            <WhatsAppIcon size={13} />
            {copy.askAvailability}
          </a>
        </div>
      </div>
    </article>
  )
}

