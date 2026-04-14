import { useFadeIn } from '../../hooks/useFadeIn'

const PASOS = [
  {
    title: 'Nos escribes por WhatsApp',
    text: 'Nos pasas modelo de moto o codigo de pieza y tu ciudad.',
  },
  {
    title: 'Te enviamos opciones',
    text: 'Comparas marcas, precios y tiempos de entrega antes de pagar.',
  },
  {
    title: 'Despacho y seguimiento',
    text: 'Coordinamos envio y te mantenemos informado hasta la entrega.',
  },
]

const TESTIMONIOS = [
  {
    quote: 'La atencion es rapida y siempre me recomiendan la pieza correcta.',
    author: 'Jorge M. - Taller Independiente',
  },
  {
    quote: 'Me llego en 48 horas y el empaque vino impecable.',
    author: 'Diana R. - Motociclista',
  },
  {
    quote: 'Manejo flota y SAHM me mantiene el stock estable todo el mes.',
    author: 'Rider Express SAC',
  },
]

const FAQ = [
  {
    q: 'Como se si el repuesto aplica a mi moto?',
    a: 'Te pedimos marca, modelo y anio para validar compatibilidad antes de cotizar.',
  },
  {
    q: 'Hacen envios fuera de Lima?',
    a: 'Si. Enviamos a todo el pais con operadores confiables y numero de seguimiento.',
  },
  {
    q: 'Que metodos de pago aceptan?',
    a: 'Transferencia, Yape y otros medios coordinados por WhatsApp al confirmar pedido.',
  },
]

export default function Confianza() {
  const [ref, visible] = useFadeIn()

  return (
    <section
      ref={ref}
      className={`px-6 py-16 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <div id="como-comprar" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">Como comprar</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Proceso simple en 3 pasos</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PASOS.map((paso, index) => (
              <article key={paso.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-sahm-purple">Paso {index + 1}</p>
                <h3 className="mt-2 text-lg font-black text-slate-900">{paso.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{paso.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="testimonios">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">Testimonios</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Confianza construida en cada pedido</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TESTIMONIOS.map(item => (
              <blockquote key={item.author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/30">
                <p className="text-slate-700">"{item.quote}"</p>
                <footer className="mt-4 text-sm font-bold text-slate-900">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div id="faq" className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg shadow-slate-200/40">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">FAQ</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Respuestas rapidas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {FAQ.map(item => (
              <article key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-black text-slate-900">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
