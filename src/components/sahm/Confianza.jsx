import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import { buildWhatsAppMessageUrl } from '../../config/site'

const COPY = {
  es: {
    stepsKicker: 'Como comprar',
    stepsTitle: 'Acompanamiento real desde la consulta hasta la entrega.',
    stepsText:
      'Disenamos el flujo para que puedas pedir rapido, comparar opciones con criterio y recibir el producto correcto sin fricciones.',
    steps: [
      {
        title: 'Cuentanos tu moto o necesidad',
        text: 'Envianos modelo, medida o codigo y tambien tu ciudad para cotizar de forma precisa.',
        meta: 'Validacion inicial',
      },
      {
        title: 'Te proponemos opciones claras',
        text: 'Comparas marcas, disponibilidad y tiempos de despacho antes de decidir.',
        meta: 'Cotizacion con contexto',
      },
      {
        title: 'Coordinamos pago, envio y seguimiento',
        text: 'Cerramos el pedido contigo y te acompanamos hasta que lo recibas.',
        meta: 'Seguimiento comercial',
      },
    ],
    ctaKicker: 'Atencion comercial',
    ctaTitle: 'Tu pedido sale con claridad, no con suposiciones.',
    ctaText:
      'Si compras para ti, tu taller o tu negocio, te guiamos por compatibilidad, stock y tiempos reales de entrega.',
    ctaPrimary: 'Hablar por WhatsApp',
    ctaSecondary: 'Ver productos',
    ctaMessage: 'Hola, quiero asesoria para elegir repuestos compatibles para mi moto',
    testimonialsKicker: 'Testimonios',
    testimonialsTitle: 'La confianza se gana en el detalle.',
    testimonialStats: [
      { value: '4.9/5', label: 'Valoracion de atencion' },
      { value: '48h', label: 'Promedio de entrega nacional' },
      { value: '96%', label: 'Clientes que vuelven a comprar' },
    ],
    testimonials: [
      {
        quote: 'Necesitaba una llanta urgente para un cliente del taller y me ayudaron a validar la medida en minutos. Todo llego como lo prometieron.',
        author: 'Jorge Mendoza',
        role: 'Taller independiente',
        initials: 'JM',
      },
      {
        quote: 'Lo mejor fue que me explicaron las opciones antes de venderme. Eso te da confianza cuando compras a distancia.',
        author: 'Diana Rojas',
        role: 'Motociclista urbana',
        initials: 'DR',
      },
      {
        quote: 'Tenemos compras recurrentes y siempre responden con stock claro. Eso nos ayuda a planificar mejor la operacion.',
        author: 'Rider Express SAC',
        role: 'Gestion de flota',
        initials: 'RE',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Preguntas frecuentes antes de comprar',
    faqText: 'Lo que mas nos consultan sobre compatibilidad, despacho y compra por WhatsApp.',
    faqBadge: 'Toca una pregunta para ver la respuesta',
    faq: [
      {
        q: 'Como validan si el repuesto sirve para mi moto?',
        a: 'Te pedimos marca, modelo, anio y en algunos casos una foto o codigo de referencia. Con eso validamos compatibilidad antes de cotizar.',
      },
      {
        q: 'Puedo comprar si estoy fuera de Lima?',
        a: 'Si. Coordinamos envios a todo el pais y te compartimos tiempos estimados y seguimiento apenas sale el pedido.',
      },
      {
        q: 'Atienden talleres o compras recurrentes?',
        a: 'Si, trabajamos con talleres, flotas y negocios que necesitan continuidad. Podemos ayudarte con pedidos frecuentes y seleccion de producto por rotacion.',
      },
      {
        q: 'Que medios de pago manejan?',
        a: 'La confirmacion de pago se coordina por WhatsApp segun tu pedido. Antes de pagar te dejamos claras las opciones y el detalle de despacho.',
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
        title: 'Tell us about your motorcycle or need',
        text: 'Send your model, size or part code and your city so we can quote accurately.',
        meta: 'Initial validation',
      },
      {
        title: 'We send clear options',
        text: 'Compare brands, stock and delivery timing before making a decision.',
        meta: 'Quote with context',
      },
      {
        title: 'We coordinate payment, shipping and follow-up',
        text: 'We close the order with you and stay with you until it arrives.',
        meta: 'Commercial follow-up',
      },
    ],
    ctaKicker: 'Commercial support',
    ctaTitle: 'Your order moves with clarity, not guesswork.',
    ctaText:
      'Whether you buy for yourself, your workshop or your business, we guide you through fitment, stock and real delivery timelines.',
    ctaPrimary: 'Talk on WhatsApp',
    ctaSecondary: 'Browse products',
    ctaMessage: 'Hi, I want help choosing compatible spare parts for my motorcycle',
    testimonialsKicker: 'Testimonials',
    testimonialsTitle: 'Trust is built in the details.',
    testimonialStats: [
      { value: '4.9/5', label: 'Service rating' },
      { value: '48h', label: 'Average nationwide delivery' },
      { value: '96%', label: 'Customers who buy again' },
    ],
    testimonials: [
      {
        quote: 'I needed a tire urgently for a workshop client and they helped me validate the size in minutes. Everything arrived as promised.',
        author: 'Jorge Mendoza',
        role: 'Independent workshop',
        initials: 'JM',
      },
      {
        quote: 'What I liked most is that they explained the options before trying to sell me something. That builds trust when you buy remotely.',
        author: 'Diana Rojas',
        role: 'Urban rider',
        initials: 'DR',
      },
      {
        quote: 'We place recurring orders and they always respond with clear stock information. That helps us plan operations better.',
        author: 'Rider Express SAC',
        role: 'Fleet management',
        initials: 'RE',
      },
    ],
    faqKicker: 'FAQ',
    faqTitle: 'Frequently asked questions before you buy',
    faqText: 'What customers ask us most about fitment, shipping and ordering on WhatsApp.',
    faqBadge: 'Tap a question to reveal the answer',
    faq: [
      {
        q: 'How do you validate if a part fits my motorcycle?',
        a: 'We ask for brand, model, year and sometimes a photo or reference code. With that information we validate fitment before quoting.',
      },
      {
        q: 'Can I order if I am outside Lima?',
        a: 'Yes. We coordinate nationwide shipping and share estimated delivery times and tracking as soon as the order leaves.',
      },
      {
        q: 'Do you work with workshops or repeat orders?',
        a: 'Yes, we support workshops, fleets and businesses that need continuity. We can help with repeat orders and product selection based on turnover.',
      },
      {
        q: 'Which payment methods do you offer?',
        a: 'Payment confirmation is coordinated on WhatsApp based on your order. Before you pay, we make the options and shipping details clear.',
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
      className={`px-6 py-16 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl space-y-14">
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
                  className="btn-shimmer inline-flex items-center justify-center rounded-full bg-sahm-yellow px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.97]"
                >
                  {copy.ctaPrimary}
                </a>
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15 active:scale-[0.97]"
                >
                  {copy.ctaSecondary}
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div id="testimonios" className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sahm-purple">{copy.testimonialsKicker}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">{copy.testimonialsTitle}</h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {copy.testimonialStats.map((stat, index) => (
                <article
                  key={stat.label}
                  style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
                  className={`rounded-[1.5rem] border border-sahm-purple/10 bg-white px-5 py-4 shadow-lg shadow-sahm-purple/10 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sahm-purple/15 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
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
                className={`flex h-full flex-col rounded-[1.75rem] border border-sahm-purple/15 bg-white p-6 shadow-lg shadow-sahm-purple/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-sahm-purple/15 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sahm-yellow text-base font-black text-sahm-purple transition duration-300 group-hover:scale-110">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-900">{item.author}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-slate-600">"{item.quote}"</p>
              </article>
            ))}
          </div>
        </div>

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
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="text-lg font-black text-slate-900">{item.q}</span>
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sahm-purple transition ${isOpen ? 'rotate-45' : ''}`}
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

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  )
}
