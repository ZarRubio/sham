import { buildWhatsAppMessageUrl } from '../../config/site'
import { WhatsAppIcon } from './icons'
import { useScrollY } from '../../hooks/useScrollY'

const COPY = {
  es: {
    tooltip: 'Chatea con nosotros',
    message: 'Hola, quiero una cotización para mi moto',
    label: 'Abrir WhatsApp',
  },
  en: {
    tooltip: 'Chat with us',
    message: 'Hi, I want a quote for my motorcycle',
    label: 'Open WhatsApp',
  },
}

export default function FloatingWhatsApp({ lang }) {
  const scrollY = useScrollY()
  const copy = COPY[lang]
  const visible = scrollY > 420

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={buildWhatsAppMessageUrl(copy.message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.label}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/50 transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/50" />
        {/* Icon */}
        <span className="relative z-10">
          <WhatsAppIcon size={26} />
        </span>
        {/* Tooltip — desktop only */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          {copy.tooltip}
        </span>
      </a>
    </div>
  )
}
