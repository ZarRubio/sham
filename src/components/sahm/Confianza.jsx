import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'

const COPY = {
  es: {
    stepsKicker: 'Cómo comprar',
    stepsTitle: 'Acompañamiento real desde la consulta hasta la entrega.',
    stepsText:
      'Diseñamos el flujo para que puedas pedir rápido, comparar opciones con criterio y recibir el producto correcto sin fricciones.',
    steps: [
      {
        title: 'Cuéntanos tu moto y lo que necesitas',
        text: 'Envíanos marca, modelo, año y medida. También tu ciudad para cotizar con tiempos de entrega reales.',
        meta: 'Validación de compatibilidad',
        icon: '01',
      },
      {
        title: 'Te proponemos opciones claras con precio',
        text: 'Comparas marcas, disponibilidad y tiempos de despacho antes de decidir. Sin sorpresas al pagar.',
        meta: 'Cotización con contexto',
        icon: '02',
      },
      {
        title: 'Coordinamos pago, envío y seguimiento',
        text: 'Cerramos el pedido contigo y te acompañamos hasta que lo recibas en tu ciudad.',
        meta: 'Seguimiento comercial',
        icon: '03',
      },
    ],
    ctaKicker: 'Atención comercial',
    ctaTitle: 'Tu pedido sale con claridad, no con suposiciones.',
    ctaText:
      'Si compras para ti, tu taller o tu negocio, te guiamos por compatibilidad, stock real y tiempos de entrega verificados.',
    ctaPrimary: 'Hablar por WhatsApp',
    ctaSecondary: 'Ver productos',
    ctaMessage: 'Hola, quiero asesoría para elegir repuestos compatibles para mi moto. Mi modelo es: ',
    testimonialsKicker: 'Testimonios',
    testimonialsTitle: 'La confianza se construye en los detalles.',
    testimonialStats: [
      { value: '4.9/5', label: 'Valoración de atención' },
      { value: '48h', label: 'Promedio entrega Lima' },
      { value: '96%', label: 'Clientes que vuelven' },
    ],
    testimonials: [
      {
        quote: 'Necesitaba una llanta 2.75-17 urgente para un cliente del taller y me ayudaron a validar la medida en minutos. Todo llegó al día siguiente como lo prometieron.',
        author: 'Jorge Mendoza',
        role: 'Taller de motos',
        city: 'Los Olivos, Lima',
        initials: 'JM',
        stars: 5,
      },
      {
        quote: 'Lo mejor fue que me explicaron las diferencias entre opciones antes de venderme. Eso te da confianza cuando compras a distancia sin ver el producto.',
        author: 'Diana Rojas',
        role: 'Motociclista urbana',
        city: 'Arequipa',
        initials: 'DR',
        stars: 5,
      },
      {
        quote: 'Tenemos compras recurrentes para nuestra flota de delivery y siempre responden con stock claro y precio confirmado. Eso nos permite planificar sin sorpresas.',
        author: 'Rider Express SAC',
        role: 'Flota de delivery',
        city: 'San Juan de Lurigancho',
        initials: 'RE',
        stars: 5,
      },
    ],
    faqKicker: 'Preguntas frecuentes',
    faqTitle: 'Lo que más nos preguntan antes de comprar',
    faqText: 'Compatibilidad, despacho, pagos y cómo funciona la compra por WhatsApp.',
    faqBadge: 'Toca una pregunta para ver la respuesta',
    faq: [
      {
        q: '¿Cómo validan si el repuesto sirve para mi moto?',
        a: 'Te pedimos marca, modelo, año y en algunos casos una foto o código de referencia. Con esa información validamos compatibilidad antes de cotizar. No cobramos por la asesoría.',
      },
      {
        q: '¿Atienden motos Honda Wave, Bajaj, Yamaha y TVS?',
        a: 'Sí, trabajamos con repuestos compatibles para las marcas más comunes en el mercado peruano: Honda, Yamaha, Bajaj, TVS, Suzuki, Lifan y otras. Solo dinos modelo y año.',
      },
      {
        q: '¿Puedo comprar si estoy fuera de Lima?',
        a: 'Sí. Coordinamos envíos a todo el país. Lima en 24–48h, regiones en 48–72h. Te compartimos tiempos estimados y seguimiento apenas sale el pedido.',
      },
      {
        q: '¿Puedo pagar con Yape o Plin?',
        a: 'Sí, aceptamos Yape, Plin, transferencia bancaria y efectivo contraentrega según la zona. Te confirmamos todas las opciones disponibles al cerrar tu pedido.',
      },
      {
        q: '¿Atienden talleres o compras recurrentes?',
        a: 'Sí, trabajamos con talleres, flotas y negocios que necesitan continuidad. Podemos ayudarte con pedidos frecuentes y selección de producto por rotación.',
      },
      {
        q: '¿Qué pasa si me llega un producto incorrecto?',
        a: 'Te acompañamos en la postventa. Si hay algún error, coordinamos la solución de inmediato por WhatsApp. La responsabilidad es nuestra si hubo un error en la validación.',
      },
    ],
    step: 'Paso',
  },
  en: {
    stepsKicker: 'How to buy',
    stepsTitle: 'Real support from first message to final delivery.',
    stepsText:
      'We designed the flow so you can order fast, compare options with context and receive the right product without friction.',
    steps: [
      {
        title: 'Tell us your bike and what you need',
        text: 'Send brand, model, year and size. Include your city so we can quote with real delivery times.',
        meta: 'Fitment validation',
        icon: '01',
      },
      {
        title: 'We send clear options with pricing',
        text: 'Compare brands, stock and delivery timing before deciding. No surprises at checkout.',
        meta: 'Quote with context',
        icon: '02',
      },
      {
        title: 'We coordinate payment, shipping and follow-up',
        text: 'We close the order with you and stay with you until it arrives in your city.',
        meta: 'Commercial follow-up',
        icon: '03',
      },
    ],
    ctaKicker: 'Commercial support',
    ctaTitle: 'Your order moves with clarity, not guesswork.',
    ctaText:
      'Whether you buy for yourself, your workshop or your business, we guide you through fitment, real stock and verified delivery timelines.',
    ctaPrimary: 'Talk on WhatsApp',
    ctaSecondary: 'Browse products',
    ctaMessage: 'Hi, I want help choosing compatible spare parts for my motorcycle. My model is: ',
    testimonialsKicker: 'Testimonials',
    testimonialsTitle: 'Trust is built in the details.',
    testimonialStats: [
      { value: '4.9/5', label: 'Service rating' },
      { value: '48h', label: 'Average Lima delivery' },
      { value: '96%', label: 'Repeat customers' },
    ],
    testimonials: [
      {
        quote: 'I needed a 2.75-17 tire urgently for a workshop client and they validated the size in minutes. Everything arrived the next day just as promised.',
        author: 'Jorge Mendoza',
        role: 'Motorcycle workshop',
        city: 'Los Olivos, Lima',
        initials: 'JM',
        stars: 5,
      },
      {
        quote: 'What I liked most is that they explained the differences between options before trying to sell me something. That builds trust when you buy remotely.',
        author: 'Diana Rojas',
        role: 'Urban rider',
        city: 'Arequipa',
        initials: 'DR',
        stars: 5,
      },
      {
        quote: 'We place recurring orders for our delivery fleet and they always respond with clear stock and confirmed pricing. That lets us plan without surprises.',
        author: 'Rider Express SAC',
        role: 'Delivery fleet',
        city: 'San Juan de Lurigancho',
        initials: 'RE',
        stars: 5,
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Frequently asked questions before you buy',
    faqText: 'Fitment, shipping, payments and how ordering on WhatsApp works.',
    faqBadge: 'Tap a question to reveal the answer',
    faq: [
      {
        q: 'How do you validate if a part fits my motorcycle?',
        a: 'We ask for brand, model, year and sometimes a photo or reference code. With that information we validate fitment before quoting. No charge for the advice.',
      },
      {
        q: 'Do you carry parts for Honda Wave, Bajaj, Yamaha and TVS?',
        a: 'Yes, we work with compatible parts for the most common brands in the Peruvian market: Honda, Yamaha, Bajaj, TVS, Suzuki, Lifan and others. Just send us the model and year.',
      },
      {
        q: 'Can I order if I am outside Lima?',
        a: 'Yes. We coordinate nationwide shipping. Lima in 24–48h, regions in 48–72h. We share estimated delivery times and tracking as soon as the order leaves.',
      },
      {
        q: 'Can I pay with Yape or Plin?',
        a: 'Yes, we accept Yape, Plin, bank transfer and cash on delivery depending on the area. We confirm all available options when closing your order.',
      },
      {
        q: 'Do you work with workshops or repeat orders?',
        a: 'Yes, we support workshops, fleets and businesses that need continuity. We can help with repeat orders and product selection based on turnover.',
      },
      {
        q: 'What happens if I receive the wrong product?',
        a: 'We support you after the sale. If there is any issue, we coordinate the solution immediately on WhatsApp. The responsibility is ours if there was a validation error.',
      },
    ],
    step: 'Step',
  },
}

export default function Confianza({ lang }) {
  const [ref, visible] = useFadeIn()
  const [openIndex, setOpenIndex] = useState(0)
  const copy = COPY[lang]

  return (
    <section
      ref={ref}
      className={`px-4 py-16 transition-all duration-700 sm:px-6 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-[6px]'}`}
    >
      <div className="mx-auto max-w-7xl space-y-14">
        {/* ── How to buy ── */}
        <div id="como-comprar" className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-[2rem] border border-sahm-purple/15 bg-white p-8 shadow-xl shadow-sahm-purple/10 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.stepsKicker}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">{copy.stepsTitle}</h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{copy.stepsText}</p>

            <div className="mt-8 grid gap-4">
              {copy.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="grid gap-4 rounded-[1.5rem] border border-sahm-purple/10 bg-slate-50 p-5 sm:grid-cols-[72px_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sahm-purple text-center text-white shadow-lg shadow-sahm-purple/25">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-sahm-yellow">{copy.step}</p>
                      <p className="text-2xl font-black">{index + 1}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.13em] text-sahm-purple">{step.meta}</p>
                    <h3 className="mt-2 text-xl font-black text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] bg-sahm-purple p-8 text-white shadow-2xl shadow-sahm-purple/20 sm:p-10">
            <div className="soft-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sahm-yellow">{copy.ctaKicker}</p>
              <h3 className="mt-4 text-3xl font-black leading-tight">{copy.ctaTitle}</h3>
              <p className="mt-4 text-base text-white/80">{copy.ctaText}</p>

              <div className="mt-8 grid gap-3">
                <a
                  href={buildWhatsAppMessageUrl(copy.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-sahm-yellow px-6 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
                >
                  <WhatsAppIconSmall />
                  {copy.ctaPrimary}
                </a>
                <a
                  href="#/categorias"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15 active:scale-[0.97]"
                >
                  {copy.ctaSecondary}
                </a>
              </div>

              {/* Trust micro-signals */}
              <ul className="mt-8 space-y-2">
                {[
                  lang === 'es' ? 'Sin costo de asesoría' : 'No advisory fee',
                  lang === 'es' ? 'Stock confirmado antes de pagar' : 'Stock confirmed before payment',
                  lang === 'es' ? 'Yape, Plin y transferencia' : 'Yape, Plin and bank transfer',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckIconWhite />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* ── Testimonials ── */}
        <div id="testimonios" className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.testimonialsKicker}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">{copy.testimonialsTitle}</h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {copy.testimonialStats.map((stat, index) => (
                <article
                  key={stat.label}
                  style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
                  className={`flex min-h-[116px] flex-col justify-center rounded-[1.5rem] border border-sahm-purple/10 bg-white px-5 py-4 shadow-lg shadow-sahm-purple/10 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sahm-purple/15 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-5 opacity-0 blur-[6px]'}`}
                >
                  <p className="text-3xl font-black text-sahm-purple">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-500">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.testimonials.map((item, index) => (
              <article
                key={item.author}
                style={{ transitionDelay: visible ? `${index * 110}ms` : '0ms' }}
                className={`flex h-full min-h-[330px] flex-col rounded-[1.75rem] border border-sahm-purple/15 bg-white p-6 shadow-lg shadow-sahm-purple/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-sahm-purple/15 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[6px]'}`}
              >
                <StarRating count={item.stars} />
                <p className="mt-4 flex-1 min-h-[128px] overflow-hidden text-base leading-relaxed text-slate-600">"{item.quote}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sahm-yellow text-sm font-black text-sahm-purple">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">{item.author}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{item.role} · {item.city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div id="faq" className="grid gap-8 rounded-[2rem] border border-sahm-purple/15 bg-white p-8 shadow-xl shadow-sahm-purple/10 sm:p-10 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.faqKicker}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">{copy.faqTitle}</h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">{copy.faqText}</p>
            <span className="mt-6 inline-flex rounded-full border border-sahm-yellow/50 bg-yellow-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-sahm-purple">
              {copy.faqBadge}
            </span>
          </div>

          <div className="space-y-3">
            {copy.faq.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article key={item.q} className="overflow-hidden rounded-[1.5rem] border border-sahm-purple/10 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="text-base font-black text-slate-900">{item.q}</span>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sahm-purple shadow-sm transition ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <PlusIcon />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-sahm-yellow" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  )
}

function CheckIconWhite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="shrink-0 text-sahm-yellow">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WhatsAppIconSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
