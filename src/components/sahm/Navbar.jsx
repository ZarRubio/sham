import { useState } from 'react'
import { NAV_LINKS } from '../../config/navigation'
import { WHATSAPP_URL } from '../../config/site'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-[#f7f5ed]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="select-none text-3xl font-black italic tracking-tight text-sahm-purple">
          SAHM
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-700 transition hover:text-sahm-purple"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sahm-purple px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 hover:opacity-95"
          >
            <WhatsAppIcon />
            Cotizar
          </a>
        </div>

        <button
          className="rounded-md p-1 text-slate-700 lg:hidden"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-[#f7f5ed] px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.09em] text-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-sahm-purple px-5 py-2 text-sm font-bold text-white"
            >
              <WhatsAppIcon />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
