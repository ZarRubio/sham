import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Nosotros',
  description: 'SAHM Parts: catálogo de llantas, cámaras y carburadores para motocicletas.',
}

const ABOUT_IMAGES = {
  hero: '/images/Nosotros/magnific_un-almacen-de-llantas-img_62F99x5iJO.webp',
  support: '/images/Nosotros/magnific_un-almacen-de-llantas-img_EqGCkeOuuO.webp',
  office: '/images/Nosotros/magnific_un-almacen-de-llantas-img_gJ8sg1ISXO.webp',
  cta: '/images/Nosotros/magnific_un-almacen-de-llantas-img_NZQ9WFY6D9.webp',
}

const infoCards = [
  {
    title: 'Stock real y actualizado',
    text: 'Verifica disponibilidad rápida antes de realizar tu compra.',
    image: ABOUT_IMAGES.support,
    Icon: StockIcon,
  },
  {
    title: 'Calidad para tu moto',
    text: 'Llantas, cámaras y carburadores seleccionados para brindar rendimiento y confianza.',
    image: ABOUT_IMAGES.hero,
    Icon: ShieldIcon,
  },
  {
    title: 'Envíos a todo el Perú',
    text: 'Despachos coordinados para clientes, talleres y negocios.',
    image: ABOUT_IMAGES.cta,
    Icon: TruckIcon,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-sahm-cream pb-24">
      <section className="relative px-4 pt-10 sm:px-6 lg:pt-14">
        <div className="absolute right-[-160px] top-[-120px] h-[360px] w-[360px] rounded-full border border-sahm-purple/10" aria-hidden="true" />
        <div className="absolute bottom-8 left-[-120px] h-[260px] w-[260px] rounded-full bg-sahm-yellow/25 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="py-8 lg:py-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple shadow-sm backdrop-blur">
              <SparkIcon />
              Somos SAHM
            </span>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-extrabold uppercase italic leading-none text-black sm:text-6xl lg:text-7xl">
              Repuestos para avanzar con confianza
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              En SAHM PARTS ofrecemos llantas, cámaras y carburadores para motocicletas, seleccionados para brindar calidad, rendimiento y confianza en cada recorrido. Atendemos a clientes finales, talleres y negocios del sector motero.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-sahm-purple px-6 py-3 font-heading text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-sahm-purple/20 transition hover:-translate-y-0.5 hover:bg-sahm-night"
              >
                Cotizar ahora
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center justify-center rounded-xl border-2 border-sahm-purple/15 bg-white/80 px-6 py-3 font-heading text-sm font-extrabold uppercase tracking-wide text-sahm-purple transition hover:-translate-y-0.5 hover:border-sahm-purple hover:bg-white"
              >
                Ver productos
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black shadow-2xl shadow-sahm-purple/20">
            <Image
              src={ABOUT_IMAGES.hero}
              alt="Almacén SAHM con llantas, productos y branding de la marca"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sahm-purple/58 via-sahm-purple/20 to-sahm-night/72" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <div className="max-w-xl rounded-2xl border border-white/20 bg-sahm-night/70 p-5 shadow-xl backdrop-blur-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sahm-yellow text-sahm-purple">
                  <BuildingIcon />
                </span>
                <h2 className="mt-5 font-heading text-3xl font-extrabold uppercase italic text-white">
                  Respaldo, stock y atención nacional
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Una operación pensada para abastecer a clientes, talleres y negocios con referencias listas para cotizar y despachar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="relative min-h-[260px] overflow-hidden rounded-2xl bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black p-6 shadow-xl shadow-sahm-purple/10 transition hover:-translate-y-1">
            <Image
              src={ABOUT_IMAGES.office}
              alt=""
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sahm-purple/68 via-sahm-purple/40 to-sahm-night/82" />
            <div className="relative flex h-full flex-col justify-end">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sahm-yellow text-sahm-purple">
                <MapPinIcon />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-extrabold uppercase text-white">Nuestras oficinas</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Av. Manco Cápac 115 - La Victoria, Lima, Perú.
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3">
            {infoCards.map(({ title, text, image, Icon }) => (
              <article
                key={title}
                className="group relative min-h-[260px] overflow-hidden rounded-2xl bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black p-5 shadow-lg shadow-sahm-purple/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sahm-purple/20"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sahm-purple/70 via-sahm-purple/44 to-sahm-night/82" />
                <div className="relative flex h-full flex-col justify-end">
                  <span className="mb-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-sahm-yellow backdrop-blur transition group-hover:bg-sahm-yellow group-hover:text-sahm-purple">
                    <Icon />
                  </span>
                  <h2 className="mt-8 font-heading text-xl font-extrabold uppercase leading-tight text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black shadow-2xl shadow-sahm-purple/20">
          <Image
            src={ABOUT_IMAGES.cta}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sahm-purple/88 via-sahm-purple/68 to-sahm-night/76" />
          <div className="relative flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-yellow">Atención directa</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase italic text-white sm:text-4xl">
                ¿Tienes alguna consulta?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
                Escríbenos por WhatsApp con la categoría, medida o referencia que necesitas y te ayudamos a confirmar stock, precio y despacho.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sahm-yellow px-7 py-3.5 font-heading text-sm font-extrabold uppercase tracking-wide text-sahm-purple shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
      <path d="M10 1.8 11.9 7l5.3 1.9-5.3 1.9L10 16.2l-1.9-5.4-5.3-1.9L8.1 7 10 1.8z" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-5h3v5M8 7h1M12 7h1M8 11h1M12 11h1M17 9h1a2 2 0 0 1 2 2v10" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function StockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8 4.5L20 12M4 16.5 12 21l8-4.5" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 19 6v5c0 4.6-2.9 8.6-7 10-4.1-1.4-7-5.4-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h12v10H3zM15 10h4l2 3v3h-6z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}
