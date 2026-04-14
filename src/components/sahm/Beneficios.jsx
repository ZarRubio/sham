import { useFadeIn } from '../../hooks/useFadeIn'

const BENEFICIOS = [
  {
    title: 'Asesoria tecnica real',
    subtitle: 'Compatibilidad por modelo y uso.',
    Icon: HeadsetIcon,
  },
  {
    title: 'Stock actualizado',
    subtitle: 'Disponibilidad con confirmacion inmediata.',
    Icon: WarehouseIcon,
  },
  {
    title: 'Cobertura nacional',
    subtitle: 'Despachos a taller, negocio o domicilio.',
    Icon: TruckIcon,
  },
  {
    title: 'Respaldo postventa',
    subtitle: 'Seguimiento y soporte despues de la compra.',
    Icon: ShieldCheckIcon,
  },
]

export default function Beneficios() {
  const [ref, visible] = useFadeIn()

  return (
    <section
      ref={ref}
      className={`px-6 py-16 transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">Por que elegir SAHM</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Servicio pensado para taller y calle</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {BENEFICIOS.map(({ title, subtitle, Icon }, i) => (
            <article
              key={title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sahm-purple text-white shadow-lg shadow-sahm-purple/30">
                <Icon />
              </div>
              <h3 className="text-xl font-black text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeadsetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 0118 0v6h-3v-6a6 6 0 00-12 0v6H3v-6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 18a3 3 0 01-3 3h-3" />
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

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
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
