import { NAV_LINKS_BY_LANG } from '../../config/navigation'
import { WHATSAPP_URL, buildWhatsAppMessageUrl } from '../../config/site'
import { WhatsAppIcon } from './icons'

// ─── Business info ───────────────────────────────────────────────────────────
// Replace these values with real data before going live.
const BUSINESS = {
  whatsapp: '+51 999 999 999',
  email: 'ventas@sahm.pe',
  address: 'Lima, Perú',
  hours: {
    es: 'Lun–Sáb, 9:00 am – 6:00 pm',
    en: 'Mon–Sat, 9:00 am – 6:00 pm',
  },
  payment: {
    es: ['Yape', 'Plin', 'Transferencia bancaria', 'Efectivo contraentrega'],
    en: ['Yape', 'Plin', 'Bank transfer', 'Cash on delivery'],
  },
  social: {
    instagram: 'https://instagram.com/sahm',
    facebook: 'https://facebook.com/sahm',
    tiktok: 'https://tiktok.com/@sahm',
  },
}
// ─────────────────────────────────────────────────────────────────────────────

const COPY = {
  es: {
    bannerKicker: '¿Ya sabes lo que necesitas?',
    bannerTitle: 'No pierdas más tiempo buscando. Te cotizamos ahora.',
    bannerText:
      'Escríbenos con el modelo de tu moto o el código del repuesto y te respondemos en minutos con stock real y opciones claras.',
    bannerPrimary: 'Cotizar por WhatsApp',
    bannerSecondary: 'Ver productos',
    bannerMessage: 'Hola, quiero cotizar repuestos para mi moto',
    brandText:
      'Distribucion comercial de llantas, camaras y repuestos para moto. Atendemos compradores directos, talleres y flotas en todo el Peru.',
    navigation: 'Navegacion',
    services: 'Lineas de producto',
    contact: 'Contacto',
    hoursLabel: 'Horario de atencion',
    addressLabel: 'Ubicacion',
    emailLabel: 'Email',
    paymentLabel: 'Medios de pago',
    socialLabel: 'Siguenos',
    backToTop: 'Volver arriba',
    rights: '2026 SAHM. Todos los derechos reservados.',
    serviceItems: ['Llantas', 'Camaras', 'Frenos y control', 'Mantenimiento'],
    badges: ['Despacho nacional', 'Stock confirmado', 'Atencion bilingue'],
  },
  en: {
    bannerKicker: 'Already know what you need?',
    bannerTitle: 'Stop searching. We will quote you right now.',
    bannerText:
      'Send us your motorcycle model or part code and we will reply in minutes with real stock and clear options.',
    bannerPrimary: 'Quote on WhatsApp',
    bannerSecondary: 'Browse products',
    bannerMessage: 'Hi, I want to get a quote for spare parts for my motorcycle',
    brandText:
      'Commercial distribution of motorcycle tires, tubes and spare parts. We serve direct buyers, workshops and fleets across Peru.',
    navigation: 'Navigation',
    services: 'Product lines',
    contact: 'Contact',
    hoursLabel: 'Business hours',
    addressLabel: 'Location',
    emailLabel: 'Email',
    paymentLabel: 'Payment methods',
    socialLabel: 'Follow us',
    backToTop: 'Back to top',
    rights: '2026 SAHM. All rights reserved.',
    serviceItems: ['Tires', 'Tubes', 'Brakes and control', 'Maintenance'],
    badges: ['Nationwide shipping', 'Confirmed stock', 'Bilingual support'],
  },
}

export default function Footer({ lang }) {
  const copy = COPY[lang]
  const navLinks = NAV_LINKS_BY_LANG[lang]
  const hours = BUSINESS.hours[lang]
  const payment = BUSINESS.payment[lang]

  return (
    <footer id="contacto" className="mt-12 bg-[#140f27] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12">

        {/* ── Closing CTA banner ── */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-sahm-purple p-8 shadow-2xl shadow-sahm-purple/25 sm:p-10">
          <div className="soft-grid absolute inset-0 opacity-25" />
          <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sahm-yellow">{copy.bannerKicker}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">{copy.bannerTitle}</h2>
              <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{copy.bannerText}</p>
            </div>
            <div className="shrink-0">
              <a
                href={buildWhatsAppMessageUrl(copy.bannerMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-sahm-yellow px-7 py-3 text-sm font-black uppercase tracking-[0.1em] text-slate-900 transition hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                {copy.bannerPrimary}
              </a>
            </div>
          </div>
        </div>

        {/* ── Footer columns ── */}
        <div className="grid gap-10 px-1 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">

          {/* Brand */}
          <div>
            <a href="#inicio" className="text-4xl font-black italic tracking-tight text-sahm-yellow">
              SAHM
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">{copy.brandText}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {copy.badges.map(badge => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sahm-yellow hover:text-sahm-yellow">
                <InstagramIcon />
              </a>
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sahm-yellow hover:text-sahm-yellow">
                <FacebookIcon />
              </a>
              <a href={BUSINESS.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-sahm-yellow hover:text-sahm-yellow">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.navigation}</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-300 transition hover:text-sahm-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.services}</h4>
            <ul className="mt-4 space-y-3">
              {copy.serviceItems.map(item => (
                <li key={item} className="text-sm text-slate-300">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.contact}</h4>

            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-sahm-yellow"><WhatsAppIcon /></span>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-200 transition hover:text-sahm-yellow"
                  >
                    {BUSINESS.whatsapp}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-sahm-yellow"><EmailIcon /></span>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">{copy.emailLabel}</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-sm text-slate-200 transition hover:text-sahm-yellow"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-sahm-yellow"><LocationIcon /></span>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">{copy.addressLabel}</p>
                  <p className="text-sm text-slate-200">{BUSINESS.address}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-sahm-yellow"><ClockIcon /></span>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">{copy.hoursLabel}</p>
                  <p className="text-sm text-slate-200">{hours}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment methods + back to top */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{copy.paymentLabel}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {payment.map(method => (
                <span
                  key={method}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200"
                >
                  {method}
                </span>
              ))}
            </div>

            <a
              href="#inicio"
              className="mt-10 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] text-sahm-yellow transition hover:text-white"
            >
              {copy.backToTop}
              <ArrowUpIcon />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 px-1 pt-5 text-center text-xs text-slate-500">
          <p>{copy.rights}</p>
        </div>

      </div>
    </footer>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}
