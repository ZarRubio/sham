import { useState } from 'react'
import { NAV_LINKS_BY_LANG } from '../../config/navigation'
import { WHATSAPP_URL } from '../../config/site'
import { WhatsAppIcon } from './icons'
import { useScrollY } from '../../hooks/useScrollY'

const UI_TEXT = {
  es: {
    quote: 'Cotizar',
    quoteWhatsapp: 'Cotizar por WhatsApp',
    menuLabel: 'Menu',
    langLabel: 'Idioma',
  },
  en: {
    quote: 'Get quote',
    quoteWhatsapp: 'Quote on WhatsApp',
    menuLabel: 'Menu',
    langLabel: 'Language',
  },
}

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const navLinks = NAV_LINKS_BY_LANG[lang]
  const text = UI_TEXT[lang]
  const scrolled = scrollY > 10

  return (
    <nav className={`sticky top-0 z-50 border-b border-sahm-purple/20 bg-sahm-yellow/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-sahm-purple/15' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="select-none text-3xl font-black italic tracking-tight text-sahm-purple">
          SAHM
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.13em] text-sahm-purple/90 transition hover:text-sahm-purple"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitch lang={lang} setLang={setLang} label={text.langLabel} compact />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sahm-purple px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sahm-purple/40 active:scale-[0.97]"
          >
            <WhatsAppIcon />
            {text.quote}
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-1 text-slate-700 lg:hidden"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={text.menuLabel}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-sahm-purple/20 bg-sahm-yellow px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <LanguageSwitch lang={lang} setLang={setLang} label={text.langLabel} />
            {navLinks.map(link => (
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
              {text.quoteWhatsapp}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function LanguageSwitch({ lang, setLang, label, compact = false }) {
  return (
    <div className={`inline-flex items-center rounded-full border border-sahm-purple/20 bg-white/90 p-1 ${compact ? '' : 'w-fit'}`}>
      <span className="px-2 text-[11px] font-bold uppercase tracking-[0.12em] text-sahm-purple/70">{label}</span>
      <button
        type="button"
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em] transition ${lang === 'es' ? 'bg-sahm-purple text-white' : 'text-sahm-purple/80 hover:bg-sahm-purple/10'}`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em] transition ${lang === 'en' ? 'bg-sahm-purple text-white' : 'text-sahm-purple/80 hover:bg-sahm-purple/10'}`}
      >
        EN
      </button>
    </div>
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
