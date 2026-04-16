import { Fragment } from 'react'
import { WhatsAppIcon as WhatsAppIconBase } from './icons'

const COPY = {
  es: [
    { Icon: CheckCircleIcon, text: 'Stock listo para despacho' },
    { Icon: TruckIcon, text: 'Envíos a todo el Perú' },
    { Icon: ShieldCheckIcon, text: 'Compatibilidad validada' },
    { Icon: UsersIcon, text: '500+ clientes atendidos' },
    { Icon: WrenchIcon, text: 'Talleres y flotas' },
    { Icon: WhatsAppIcon, text: 'Pedidos por WhatsApp' },
  ],
  en: [
    { Icon: CheckCircleIcon, text: 'Stock ready to ship' },
    { Icon: TruckIcon, text: 'Nationwide shipping in Peru' },
    { Icon: ShieldCheckIcon, text: 'Fitment validated' },
    { Icon: UsersIcon, text: '500+ customers served' },
    { Icon: WrenchIcon, text: 'Workshops and fleets' },
    { Icon: WhatsAppIcon, text: 'Orders on WhatsApp' },
  ],
}

export default function TrustBar({ lang }) {
  const items = COPY[lang]
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden bg-sahm-purple py-2.5">
      {/* Desktop: static flex row */}
      <div className="mx-auto hidden max-w-7xl items-center justify-center px-6 lg:flex">
        {items.map((item, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="mx-1 h-3.5 w-px shrink-0 bg-white/25" />}
            <TrustItem item={item} />
          </Fragment>
        ))}
      </div>

      {/* Mobile: scrolling marquee */}
      <div className="flex overflow-hidden lg:hidden" aria-hidden="true">
        <div className="flex shrink-0 animate-marquee items-center">
          {doubled.map((item, i) => (
            <Fragment key={i}>
              <TrustItem item={item} />
              <span className="mx-1 h-3.5 w-px shrink-0 bg-white/25" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

function TrustItem({ item }) {
  const { Icon, text } = item
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 px-3 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white/85">
      <Icon />
      {text}
    </span>
  )
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-4 9-8 10C8 21 4 17 4 12V6l8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return <WhatsAppIconBase size={13} />
}
