import { useFadeIn } from '../../hooks/useFadeIn'

const COPY = {
  es: {
    kicker: 'Por qué elegir SAHM',
    introTitle: 'Una experiencia comercial pensada para resolver rápido y vender con confianza.',
    introText:
      'Nos enfocamos en que encuentres la pieza correcta, con stock claro y acompañamiento real desde la consulta hasta la entrega.',
    chips: ['Asesoría por modelo', 'Despacho coordinado', 'Atención para taller y flota'],
    items: [
      {
        title: 'Compatibilidad sin errores',
        subtitle: 'Te ayudamos a elegir la medida correcta antes de comprar.',
        icon: 'fit',
      },
      {
        title: 'Stock con respuesta real',
        subtitle: 'Confirmamos disponibilidad y tiempo de entrega antes de avanzar con tu pedido.',
        icon: 'stock',
      },
      {
        title: 'Cobertura nacional',
        subtitle: 'Despacho a Lima y provincias con atención rápida y seguimiento.',
        icon: 'route',
      },
      {
        title: 'Postventa que responde',
        subtitle: 'Te acompañamos incluso después de tu compra.',
        icon: 'shield',
      },
    ],
  },
  en: {
    kicker: 'Why SAHM',
    introTitle: 'A commercial experience built to move fast and help you buy with confidence.',
    introText:
      'We focus on helping you choose the right part, with clear stock and real support from first message to final delivery.',
    chips: ['Model-based guidance', 'Coordinated shipping', 'Workshop and fleet support'],
    items: [
      {
        title: 'Fitment without mistakes',
        subtitle: 'We help you choose the right size before you buy.',
        icon: 'fit',
      },
      {
        title: 'Real stock response',
        subtitle: 'We confirm availability and delivery time before moving forward with your order.',
        icon: 'stock',
      },
      {
        title: 'Nationwide coverage',
        subtitle: 'Shipping to Lima and provinces with fast response and tracking.',
        icon: 'route',
      },
      {
        title: 'After-sales that answers',
        subtitle: 'We support you even after your purchase.',
        icon: 'shield',
      },
    ],
  },
}

export default function Beneficios({ lang }) {
  const [ref, visible] = useFadeIn()
  const copy = COPY[lang]

  return (
    <section id="beneficios" ref={ref} className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p
          className={`text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple transition-all duration-500 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-[4px]'}`}
        >
          {copy.kicker}
        </p>

        <div className="mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article
            className={`relative overflow-hidden rounded-[2rem] border border-sahm-purple/20 bg-sahm-purple p-8 text-white shadow-2xl shadow-sahm-purple/20 sm:p-10 transition-all duration-600 ease-out ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[6px]'}`}
            style={{ transitionDelay: visible ? '60ms' : '0ms' }}
          >
            <div className="soft-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <h2 className="max-w-xl text-3xl font-black leading-tight sm:text-4xl">{copy.introTitle}</h2>
              <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{copy.introText}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {copy.chips.map(chip => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-sahm-yellow"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {copy.items.map((item, index) => (
              <article
                key={item.title}
                style={{ transitionDelay: visible ? `${100 + index * 90}ms` : '0ms' }}
                className={`card-shine group flex h-full min-h-[260px] flex-col rounded-[1.75rem] border border-sahm-purple/15 bg-white p-6 shadow-lg shadow-sahm-purple/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sahm-purple/30 hover:shadow-xl hover:shadow-sahm-purple/20 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[6px]'}`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sahm-yellow text-sahm-purple shadow-lg shadow-sahm-yellow/30 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon type={item.icon} />
                </div>
                <h3 className="min-h-[56px] text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 min-h-[96px] overflow-hidden text-sm leading-relaxed text-slate-600">{item.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Icon({ type }) {
  if (type === 'fit') return <TargetIcon />
  if (type === 'stock') return <WarehouseIcon />
  if (type === 'route') return <RouteIcon />
  return <ShieldCheckIcon />
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  )
}

function WarehouseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10l9 4 9-4V7" />
    </svg>
  )
}

function RouteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17a3 3 0 110-6c.34 0 .66.06.96.18A5 5 0 0116 9a4 4 0 011.18 7.82" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8M14 13l4 4-4 4" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  )
}
