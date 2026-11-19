import Link from 'next/link'
import ContactFormClient from '../../components/premium/ContactFormClient'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Contacto',
  description: 'Contacta a SAHM por WhatsApp para cotizar llantas, cámaras y carburadores para moto. Asesoría directa y despacho a todo el Perú.',
  path: '/contacto/',
})

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-sahm-cream pb-24">
      <section className="relative px-4 pt-10 sm:px-6 lg:pt-14">
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-sahm-purple/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="py-8 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple shadow-sm">
              <ChatIcon />
              Contacto
            </span>
            <h1 className="mt-5 font-heading text-5xl font-extrabold uppercase italic leading-none text-black sm:text-6xl lg:text-7xl">
              Cotiza con un asesor
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Envíanos tu categoría, medida o referencia y recibe una respuesta con stock, precio y opciones claras de despacho.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard title="Horario" text="Lunes a sábado, 9 a. m. - 6 p. m. Respuesta rápida por WhatsApp." Icon={ClockIcon} />
              <InfoCard title="Despacho" text="Envíos a todo el Perú. Confirma disponibilidad antes de pagar." Icon={TruckIcon} />
            </div>

            <Link
              href="/productos"
              className="mt-7 inline-flex font-heading text-sm font-extrabold uppercase tracking-wide text-sahm-purple transition hover:text-black hover:underline"
            >
              Volver al catálogo de productos
            </Link>
          </div>

          <ContactFormClient />
        </div>
      </section>
    </main>
  )
}

function InfoCard({ title, text, Icon }) {
  return (
    <article className="rounded-2xl border-2 border-white bg-white p-5 shadow-sm">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sahm-yellow text-sahm-purple">
        <Icon />
      </span>
      <h2 className="mt-3 font-heading text-lg font-extrabold uppercase text-black">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </article>
  )
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4A8 8 0 1 1 21 12z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h12v10H3zM15 10h4l2 3v3h-6z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}
