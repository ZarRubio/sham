import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/sahm/Navbar'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'
import TrustBar from '../components/sahm/TrustBar'
import ProductCard from '../components/sahm/ProductCard'
import Breadcrumb from '../components/sahm/Breadcrumb'
import { CATALOG_PRODUCTS, getSubcategories } from '../config/catalog'
import { getCategoryById } from '../config/categories'
import { buildWhatsAppMessageUrl } from '../config/site'
import { WhatsAppIcon } from '../components/sahm/icons'

const ALL = 'all'

const COPY = {
  es: {
    home: 'Inicio',
    products: 'Productos',
    all: 'Todas',
    results: count => `${count} producto${count === 1 ? '' : 's'}`,
    notFound: 'Categoría no encontrada.',
    notFoundText: 'La categoría que buscas no existe en el catálogo.',
    back: 'Ver todos los productos',
    comingSoonTitle: 'Próximamente',
    comingSoonText: 'Estamos preparando el catálogo de esta línea. Mientras tanto, puedes consultarnos por WhatsApp.',
    comingSoonCta: 'Consultar por WhatsApp',
  },
  en: {
    home: 'Home',
    products: 'Products',
    all: 'All',
    results: count => `${count} product${count === 1 ? '' : 's'}`,
    notFound: 'Category not found.',
    notFoundText: 'The category you are looking for does not exist in the catalog.',
    back: 'View all products',
    comingSoonTitle: 'Coming soon',
    comingSoonText: 'We are preparing the catalog for this line. In the meantime, feel free to ask us on WhatsApp.',
    comingSoonCta: 'Ask on WhatsApp',
  },
}

export default function CategoryPage({ slug, lang, setLang }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(ALL)
  const copy = COPY[lang]
  const category = getCategoryById(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  useEffect(() => {
    if (category) {
      const name = lang === 'en' ? category.nameEn : category.name
      document.title = `${name} — SAHM`
    } else {
      document.title = 'SAHM'
    }
  }, [category, lang])

  useEffect(() => {
    setSelectedSubcategory(ALL)
  }, [slug])

  const subcategories = useMemo(() => {
    if (!category || !category.enabled) return []
    return getSubcategories(category.catalogName)
  }, [category])

  const products = useMemo(() => {
    if (!category || !category.enabled) return []
    return CATALOG_PRODUCTS.filter(p => {
      const sameCategory = p.category === category.catalogName
      const sameSub = selectedSubcategory === ALL || p.subcategory === selectedSubcategory
      return sameCategory && sameSub
    })
  }, [category, selectedSubcategory])

  if (!category) {
    return (
      <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
        <ScrollProgress />
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
          <div className="max-w-md rounded-[2rem] border border-sahm-purple/15 bg-white p-8 text-center shadow-2xl shadow-sahm-purple/10">
            <h1 className="text-3xl font-black text-sahm-purple">{copy.notFound}</h1>
            <p className="mt-3 text-slate-600">{copy.notFoundText}</p>
            <a href="#/productos" className="mt-6 inline-flex rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.1em] text-white">
              {copy.back}
            </a>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    )
  }

  const categoryName = lang === 'en' ? category.nameEn : category.name
  const categoryDescription = lang === 'en' ? category.descriptionEn : category.description
  const waMessage = lang === 'en' ? category.waMessageEn : category.waMessage

  const breadcrumbItems = [
    { label: copy.home, href: '#/' },
    { label: copy.products, href: '#/productos' },
    { label: categoryName },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <TrustBar lang={lang} />

      <main className="px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-[92rem]">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">{categoryName}</h1>
              <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">{categoryDescription}</p>
            </div>
            {category.enabled && (
              <p className="shrink-0 text-sm font-semibold text-slate-500">{copy.results(products.length)}</p>
            )}
          </div>

          {category.comingSoon ? (
            <div className="mt-12 rounded-[2rem] border border-sahm-purple/15 bg-[#fff9df] p-10 text-center">
              <h2 className="text-2xl font-black text-slate-900">{copy.comingSoonTitle}</h2>
              <p className="mt-3 max-w-md mx-auto text-slate-600">{copy.comingSoonText}</p>
              <a
                href={buildWhatsAppMessageUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-6 inline-flex items-center gap-2 rounded-full bg-sahm-purple px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <WhatsAppIcon size={16} />
                {copy.comingSoonCta}
              </a>
            </div>
          ) : (
            <>
              {/* Subcategory filter */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory(ALL)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.09em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1 ${selectedSubcategory === ALL ? 'bg-sahm-purple text-white shadow-lg shadow-sahm-purple/20' : 'border border-slate-200 bg-white text-slate-600 hover:border-sahm-purple hover:text-sahm-purple'}`}
                >
                  {copy.all}
                </button>
                {subcategories.map(sub => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`cursor-pointer rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.09em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1 ${selectedSubcategory === sub ? 'bg-sahm-purple text-white shadow-lg shadow-sahm-purple/20' : 'border border-slate-200 bg-white text-slate-600 hover:border-sahm-purple hover:text-sahm-purple'}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Product grid */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} lang={lang} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}
