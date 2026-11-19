import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LINKS, buildWhatsAppMessageUrl } from '../../config/site'

const quickLinks = [
  ['Inicio', '/'],
  ['Productos', '/productos'],
  ['Nosotros', '/nosotros'],
  ['Contacto', '/contacto'],
]

const catalogLinks = [
  ['Llantas', '/categorias/llantas'],
  ['Cámaras', '/categorias/camaras'],
  ['Carburadores', '/categorias/carburadores'],
]

const contactItems = [
  {
    title: 'Dirección',
    text: 'Av. Manco Cápac 115 - La Victoria, Lima, Perú.',
    Icon: MapPinIcon,
  },
  {
    title: 'Horario',
    text: 'Lunes a Viernes de 9:00 a.m. a 6:00 p.m.',
    Icon: ClockIcon,
  },
]

const paymentMethods = ['Yape', 'Plin', 'Transferencia', 'Efectivo']

// URLs live in config/site.js (SOCIAL_LINKS); networks without a URL are not rendered.
const socialLinks = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: LinkedInIcon },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon },
].filter(link => link.href)

export default function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black px-4 pt-16 text-white sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black" aria-hidden="true" />
      <div className="absolute left-[-120px] top-12 h-72 w-72 rounded-full bg-sahm-yellow/15 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-160px] bottom-[-120px] h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
            <Image
              src="/images/Logos/SAHM_Blanco_SAHM.svg"
              alt="SAHM Parts"
              width={190}
              height={58}
              className="h-12 w-auto object-contain"
              style={{ width: 'auto' }}
            />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/78">
              Llantas, cámaras y carburadores para motocicletas. Stock real, asesoría directa y despachos coordinados para clientes, talleres y negocios en todo el Perú.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactItems.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-sahm-night/35 p-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sahm-yellow text-sahm-purple">
                    <Icon />
                  </span>
                  <p className="mt-3 font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-yellow">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/78">{text}</p>
                </div>
              ))}
            </div>

            <a
              href={buildWhatsAppMessageUrl('Hola, quiero cotizar productos SAHM. La categoría, medida o referencia es: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sahm-yellow px-6 py-3.5 font-heading text-sm font-extrabold uppercase tracking-wide text-sahm-purple shadow-lg shadow-sahm-yellow/20 transition hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
            >
              <WhatsAppIcon />
              Cotizar por WhatsApp
            </a>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <FooterPanel title="Links rápidos">
              <div className="grid gap-2.5">
                {quickLinks.map(([label, href]) => (
                  <FooterLink key={href} href={href}>{label}</FooterLink>
                ))}
              </div>
            </FooterPanel>

            <FooterPanel title="Catálogo">
              <div className="grid gap-2.5">
                {catalogLinks.map(([label, href]) => (
                  <FooterLink key={href} href={href}>{label}</FooterLink>
                ))}
              </div>
            </FooterPanel>

            <FooterPanel title="Métodos de pago">
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map(method => (
                  <span key={method} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wide text-white/85">
                    {method}
                  </span>
                ))}
              </div>
            </FooterPanel>

            <FooterPanel title="Redes sociales">
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} de Grupo NBG (se abre en una pestaña nueva)`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-sahm-yellow hover:text-sahm-yellow"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                Síguenos para novedades, stock y referencias disponibles.
              </p>
            </FooterPanel>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SAHM Parts. Todos los derechos reservados.</p>
          <p>Repuestos para motos - Lima, Perú</p>
        </div>
      </div>
    </footer>
  )
}

function FooterPanel({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur-md">
      <h2 className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-yellow">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="group inline-flex items-center justify-between gap-3 rounded-xl px-1 py-1.5 text-sm text-white/78 transition hover:text-white">
      <span>{children}</span>
      <span className="h-px w-5 bg-sahm-yellow/0 transition group-hover:bg-sahm-yellow" aria-hidden="true" />
    </Link>
  )
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
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

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.44 1.34 4.94L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.2h.01A9.9 9.9 0 0 0 12.04 2Zm5.83 14.2c-.25.7-1.43 1.33-2 1.42-.52.08-1.18.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.03-1.31-5-4.36-5.15-4.56-.15-.2-1.23-1.64-1.23-3.13s.78-2.22 1.06-2.52c.28-.31.61-.38.81-.38h.58c.18.01.43-.07.67.51.25.6.85 2.08.92 2.23.08.15.13.33.03.53-.1.2-.15.32-.31.49-.15.18-.32.39-.46.52-.15.15-.31.31-.13.61.18.31.79 1.31 1.7 2.12 1.17 1.04 2.16 1.36 2.47 1.51.31.15.49.13.67-.08.2-.23.77-.9.98-1.2.2-.31.41-.26.69-.16.28.1 1.79.84 2.1.99.31.15.51.23.59.36.08.13.08.75-.18 1.5Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M14 8.5V6.8c0-.7.46-.86.78-.86H17V2.12L13.94 2C10.54 2 9.77 4.55 9.77 6.18V8.5H7v3.98h2.77V22H14v-9.52h3.38l.16-1.56.25-2.42H14Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13v5.42h-4v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54v4.88h-4v-11Z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M16.6 4.1c.9 1.2 2 1.9 3.4 2.1v3.3c-1.3 0-2.4-.34-3.4-1v5.8c0 3.7-2.4 6-5.9 6-3 0-5.1-1.95-5.1-4.77 0-3.28 2.75-5.2 6.1-4.58v3.35c-1.48-.48-2.77.18-2.77 1.24 0 .84.7 1.42 1.7 1.42 1.35 0 2.18-.82 2.18-2.42V2h3.78v2.1Z" />
    </svg>
  )
}
