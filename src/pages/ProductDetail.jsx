import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/sahm/Navbar'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'
import { WhatsAppIcon } from '../components/sahm/icons'
import { buildWhatsAppMessageUrl } from '../config/site'
import {
  CATALOG_PRODUCTS,
  getProductById,
  getProductLabel,
  getProductWhatsAppMessage,
} from '../config/catalog'

const COPY = {
  es: {
    back: 'Volver al catálogo',
    categoryLabel: 'Categoría',
    subcategoryLabel: 'Subcategoría',
    refLabel: 'Referencia',
    galleryLabel: 'Galería',
    zoomEnable: 'Activar lupa',
    zoomDisable: 'Quitar zoom',
    zoomHint: 'Haz click o toca la imagen para acercar; vuelve a tocar para alejar',
    askAvailability: 'Consultar precio y stock',
    waProductPrefix: 'Hola, quiero consultar precio y disponibilidad de',
    notFoundTitle: 'Producto no encontrado',
    notFoundText: 'La referencia que buscas no está disponible en el catálogo actual.',
    relatedTitle: 'También puede interesarte',
  },
  en: {
    back: 'Back to catalog',
    categoryLabel: 'Category',
    subcategoryLabel: 'Subcategory',
    refLabel: 'Reference',
    galleryLabel: 'Gallery',
    zoomEnable: 'Enable magnifier',
    zoomDisable: 'Reset zoom',
    zoomHint: 'Click or tap the image to zoom in; tap again to zoom out',
    askAvailability: 'Check price and stock',
    waProductPrefix: 'Hi, I want to check price and availability for',
    notFoundTitle: 'Product not found',
    notFoundText: 'The reference you are looking for is not available in the current catalog.',
    relatedTitle: 'You may also like',
  },
}

export default function ProductDetail({ productId, lang, setLang }) {
  const [activeImage, setActiveImage] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const copy = COPY[lang]
  const product = getProductById(productId)

  useEffect(() => {
    setActiveImage(0)
    setZoomed(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [productId])

  useEffect(() => {
    document.title = product
      ? `${getProductLabel(product, lang)} — SAHM`
      : 'SAHM'
    return () => { document.title = 'SAHM' }
  }, [product, lang])

  useEffect(() => {
    setZoomed(false)
  }, [activeImage])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return CATALOG_PRODUCTS.filter(
      item => item.id !== product.id && item.category === product.category,
    ).slice(0, 3)
  }, [product])

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />

      {product ? (
        <main className="px-4 py-10 sm:px-6 lg:py-14">
          <div className="mx-auto max-w-[92rem]">
            <a
              href="#/productos"
              className="inline-flex items-center rounded-full border border-sahm-purple/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-sahm-purple shadow-sm transition hover:-translate-y-0.5 hover:border-sahm-purple"
            >
              {copy.back}
            </a>

            <section className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[2rem] border border-sahm-purple/15 bg-white/90 p-4 shadow-2xl shadow-sahm-purple/10 sm:p-6">
                <div
                  className={`relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white to-slate-100 p-4 sm:min-h-[540px] ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                  onPointerDown={event => {
                    const rect = event.currentTarget.getBoundingClientRect()
                    setZoomPosition({
                      x: Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100)),
                      y: Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100)),
                    })
                    setZoomed(current => !current)
                  }}
                >
                  <img
                    src={product.images[activeImage].detail}
                    alt={`${getProductLabel(product, lang)} ${product.images[activeImage].label}`}
                    className={`max-h-[68vh] w-full object-contain transition-transform duration-300 ease-out ${zoomed ? 'scale-[2.15]' : 'scale-100'}`}
                    style={{ transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }}
                    loading="eager"
                  />
                  <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-sahm-purple shadow">
                    {zoomed ? copy.zoomDisable : copy.zoomEnable}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.14em] text-sahm-purple">{copy.galleryLabel}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{copy.zoomHint}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setZoomed(current => !current)}
                      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.1em] transition ${
                        zoomed
                          ? 'bg-sahm-purple text-white shadow-lg shadow-sahm-purple/20'
                          : 'border border-sahm-purple/20 bg-white text-sahm-purple hover:border-sahm-purple'
                      } cursor-pointer`}
                    >
                      <MagnifierIcon />
                      {zoomed ? copy.zoomDisable : copy.zoomEnable}
                    </button>
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {product.images.map((image, index) => (
                      <button
                        key={image.detail}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        className={`rounded-xl border px-4 py-3 text-xs font-black uppercase tracking-[0.09em] transition ${
                          activeImage === index
                            ? 'border-sahm-purple bg-sahm-purple text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-sahm-purple hover:text-sahm-purple'
                        } cursor-pointer`}
                      >
                        {image.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="flex flex-col rounded-[2rem] border border-sahm-purple/15 bg-[#fff9df] p-6 shadow-2xl shadow-sahm-purple/10 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  <Badge label={copy.categoryLabel} value={product.category} />
                  <Badge label={copy.subcategoryLabel} value={product.subcategory} />
                </div>

                <h1 className="mt-6 text-4xl font-black leading-none text-slate-900 sm:text-5xl">
                  {getProductLabel(product, lang)}
                </h1>
                <p className="mt-4 font-mono text-sm tracking-wide text-slate-500">
                  {copy.refLabel}: {product.code}
                </p>

                <div className="mt-8 rounded-2xl border border-sahm-purple/10 bg-white/80 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-sahm-purple">{copy.galleryLabel}</p>
                  <div className="mt-3 space-y-2">
                    {product.images.map(image => (
                      <p key={image.detail} className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                        {image.label}
                      </p>
                    ))}
                  </div>
                </div>

                <a
                  href={buildWhatsAppMessageUrl(getProductWhatsAppMessage(product, copy.waProductPrefix, lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sahm-yellow py-4 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
                >
                  <WhatsAppIcon size={14} />
                  {copy.askAvailability}
                </a>
              </aside>
            </section>

            {relatedProducts.length > 0 && (
              <section className="mt-10">
                <h2 className="text-2xl font-black text-slate-900">{copy.relatedTitle}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {relatedProducts.map(item => (
                    <a
                      key={item.id}
                      href={item.productUrl}
                      className="group rounded-2xl border border-sahm-purple/15 bg-white p-4 shadow-lg shadow-sahm-purple/10 transition hover:-translate-y-1 hover:border-sahm-purple/30"
                    >
                      <div className="flex h-40 items-center justify-center rounded-xl bg-slate-50 p-3">
                        <img
                          src={item.images[0].card}
                          alt={getProductLabel(item, lang)}
                          className="h-full w-full object-contain transition group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-3 text-sm font-black text-slate-900">{getProductLabel(item, lang)}</p>
                      <p className="mt-1 text-xs font-bold text-slate-500">{item.subcategory}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
      ) : (
        <main className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6">
          <div className="max-w-xl rounded-[2rem] border border-sahm-purple/15 bg-white p-8 text-center shadow-2xl shadow-sahm-purple/10">
            <h1 className="text-3xl font-black text-sahm-purple">{copy.notFoundTitle}</h1>
            <p className="mt-3 text-slate-600">{copy.notFoundText}</p>
            <a
              href="#/productos"
              className="mt-6 inline-flex rounded-full bg-sahm-purple px-6 py-3 text-xs font-black uppercase tracking-[0.1em] text-white"
            >
              {copy.back}
            </a>
          </div>
        </main>
      )}

      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}

function Badge({ label, value }) {
  return (
    <span className="rounded-full border border-sahm-purple/10 bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-sahm-purple">
      {label}: {value}
    </span>
  )
}

function MagnifierIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M20 20l-4.2-4.2M11 8v6M8 11h6" />
    </svg>
  )
}

