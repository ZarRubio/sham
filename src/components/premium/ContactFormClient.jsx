'use client'

import { useMemo, useState } from 'react'
import { buildWhatsAppMessageUrl } from '../../config/site'

const productTypes = ['Llantas', 'Cámaras', 'Carburadores', 'Otro repuesto']

const quickIntents = [
  {
    title: 'Cotización',
    text: 'Quiero cotizar precio y disponibilidad de un producto SAHM.',
    Icon: QuoteIcon,
  },
  {
    title: 'Stock',
    text: 'Quiero confirmar stock antes de realizar mi compra.',
    Icon: StockIcon,
  },
  {
    title: 'Despacho',
    text: 'Quiero consultar opciones de envío a mi ciudad.',
    Icon: TruckIcon,
  },
  {
    title: 'Atención a talleres',
    text: 'Quiero consultar compras para taller o negocio.',
    Icon: WrenchIcon,
  },
]

const initialForm = {
  productType: productTypes[0],
  reference: '',
  name: '',
  message: '',
}

export default function ContactFormClient() {
  const [form, setForm] = useState(initialForm)
  const [intent, setIntent] = useState(quickIntents[0].text)

  const whatsappMessage = useMemo(() => {
    const lines = [
      'Hola, quiero contactar con SAHM PARTS.',
      `Consulta: ${intent}`,
      `Producto: ${form.productType}`,
      form.reference ? `Referencia o medida: ${form.reference}` : 'Referencia o medida: por confirmar',
      form.name ? `Nombre: ${form.name}` : null,
      form.message ? `Detalle: ${form.message}` : null,
    ].filter(Boolean)

    return lines.join('\n')
  }, [form, intent])

  const whatsappUrl = buildWhatsAppMessageUrl(whatsappMessage)

  const updateField = event => {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="rounded-3xl bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black p-4 shadow-2xl shadow-sahm-purple/20 sm:p-6">
      <div className="rounded-2xl bg-white p-5 sm:p-7">
        <div>
          <span className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">Formulario visual</span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase italic leading-none text-black sm:text-4xl">
            Arma tu consulta
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Completa los datos que tengas. Al enviar, abriremos WhatsApp con el mensaje listo para revisar y mandar.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {quickIntents.map(({ title, text, Icon }) => {
            const active = intent === text
            return (
              <button
                key={title}
                type="button"
                onClick={() => setIntent(text)}
                aria-pressed={active}
                className={`cursor-pointer rounded-2xl border-2 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg ${
                  active
                    ? 'border-sahm-yellow bg-sahm-yellow/20 text-sahm-purple'
                    : 'border-gray-100 bg-slate-50 text-slate-700 hover:border-sahm-purple/30'
                }`}
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${active ? 'bg-sahm-purple text-sahm-yellow' : 'bg-white text-sahm-purple'}`}>
                  <Icon />
                </span>
                <span className="mt-3 block font-heading text-base font-extrabold uppercase text-black">{title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-600">{text}</span>
              </button>
            )
          })}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div>
            <label htmlFor="productType" className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-700">
              Tipo de producto
            </label>
            <select
              id="productType"
              name="productType"
              value={form.productType}
              onChange={updateField}
              className="mt-2 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none transition focus:border-sahm-purple focus:ring-4 focus:ring-sahm-purple/15"
            >
              {productTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="reference" className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-700">
                Referencia o medida
              </label>
              <input
                id="reference"
                name="reference"
                value={form.reference}
                onChange={updateField}
                placeholder="Ej. 110/90-13, PZ19"
                className="mt-2 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sahm-purple focus:ring-4 focus:ring-sahm-purple/15"
              />
            </div>

            <div>
              <label htmlFor="name" className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-700">
                Nombre opcional
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Tu nombre"
                className="mt-2 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sahm-purple focus:ring-4 focus:ring-sahm-purple/15"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={updateField}
              rows={4}
              placeholder="Cuéntanos cantidad, ciudad o cualquier detalle importante."
              className="mt-2 w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sahm-purple focus:ring-4 focus:ring-sahm-purple/15"
            />
          </div>

          <div className="rounded-2xl bg-sahm-cream p-4">
            <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">Vista previa</p>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{whatsappMessage}</p>
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-sahm-yellow px-7 py-4 font-heading text-sm font-extrabold uppercase tracking-wide text-sahm-purple shadow-lg shadow-sahm-yellow/25 transition hover:-translate-y-0.5 hover:brightness-95"
          >
            Abrir WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

function QuoteIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h5M6 19l-3 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-2 2z" />
    </svg>
  )
}

function StockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8 4.5L20 12M4 16.5 12 21l8-4.5" />
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

function WrenchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.5-3.5a6 6 0 0 1-7.7 7.7l-6.8 6.8a2 2 0 0 1-2.8-2.8l6.8-6.8a6 6 0 0 1 7.7-7.7z" />
    </svg>
  )
}
