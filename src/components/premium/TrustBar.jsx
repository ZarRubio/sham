import { Fragment } from 'react'

const trustItems = [
  { Icon: TruckIcon, text: 'Envíos a todo el Perú' },
  { Icon: UsersIcon, text: '1,200+ clientes atendidos' },
  { Icon: CardIcon, text: 'Yape y Plin aceptados' },
  { Icon: ClockIcon, text: 'Respuesta rápida' },
  { Icon: WrenchIcon, text: 'Especialistas en motos' },
  { Icon: CheckCircleIcon, text: 'Repuestos para motos' },
]

export default function TrustBar() {
  const looped = [...trustItems, ...trustItems, ...trustItems]

  return (
    <section className="overflow-hidden border-y border-sahm-yellow/45 bg-gradient-to-r from-sahm-purple via-sahm-night to-black py-2.5 shadow-inner" aria-label="Beneficios SAHM">
      <div className="flex overflow-hidden">
        {/* Pauses on hover/focus. Only the first copy is read by screen readers; the
            other two exist just to make the marquee loop seamlessly. */}
        <div className="flex w-max shrink-0 animate-marquee items-center hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {looped.map((item, index) => {
            const isCopy = index >= trustItems.length
            return (
              <Fragment key={`${item.text}-${index}`}>
                <TrustItem item={item} hidden={isCopy} />
                <span aria-hidden="true" className="mx-1 h-4 w-px shrink-0 bg-white/25" />
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrustItem({ item, hidden = false }) {
  const { Icon, text } = item
  return (
    <span aria-hidden={hidden || undefined} className="inline-flex shrink-0 items-center gap-2 px-4 py-0.5 font-heading text-[12px] font-bold uppercase tracking-wide text-white/90 sm:px-5">
      <Icon />
      {text}
    </span>
  )
}

function CheckCircleIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h12v10H3zM15 10h4l2 3v3h-6z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.8M16 3.2a4 4 0 0 1 0 7.6" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path strokeLinecap="round" d="M2.5 10h19" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.5-3.5a6 6 0 0 1-7.7 7.7l-6.8 6.8a2 2 0 0 1-2.8-2.8l6.8-6.8a6 6 0 0 1 7.7-7.7z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  )
}
