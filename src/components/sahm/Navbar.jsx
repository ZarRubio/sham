import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS_BY_LANG, PRODUCT_SUBCATEGORIES } from '../../config/navigation'
import { buildWhatsAppMessageUrl } from '../../config/site'
import { WhatsAppIcon } from './icons'
import { useScrollY } from '../../hooks/useScrollY'

const WA_MESSAGE = {
  es: 'Hola, quiero cotizar repuestos para mi moto. ',
  en: 'Hi, I want to get a quote for motorcycle parts. ',
}

const UI_TEXT = {
  es: {
    quoteWhatsapp: 'Cotizar por WhatsApp',
    menuLabel: 'Menú',
    langLabel: 'Idioma',
    search: 'Buscar',
    close: 'Cerrar menú',
  },
  en: {
    quoteWhatsapp: 'Quote on WhatsApp',
    menuLabel: 'Menu',
    langLabel: 'Language',
    search: 'Search',
    close: 'Close menu',
  },
}

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#/')
  const scrollY = useScrollY()
  const navLinks = NAV_LINKS_BY_LANG[lang]
  const subcategories = PRODUCT_SUBCATEGORIES[lang]
  const text = UI_TEXT[lang]
  const scrolled = scrollY > 10
  const dropdownRef = useRef(null)

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash || '#/'
      const matched = navLinks.find(link => {
        if (link.href === '#/') return hash === '#/' || hash === '' || hash === '#'
        if (link.href === '#/productos') return hash === '#/productos' || hash.startsWith('#/productos/')
        return hash === link.href || hash.startsWith(link.href + '/')
      })
      setActiveHref(matched ? matched.href : '#/')
    }

    updateActive()
    window.addEventListener('hashchange', updateActive)
    return () => window.removeEventListener('hashchange', updateActive)
  }, [navLinks])

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return
    const handler = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [dropdownOpen])

  // Close dropdown on Escape
  useEffect(() => {
    if (!dropdownOpen) return
    const handler = e => { if (e.key === 'Escape') setDropdownOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [dropdownOpen])

  const handleContactClick = e => {
    e.preventDefault()
    setMenuOpen(false)
    // If on landing page, scroll to #contacto; else navigate
    const hash = window.location.hash
    if (!hash || hash === '#/' || hash === '#') {
      const el = document.getElementById('contacto')
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.location.hash = '#contacto'
  }

  return (
    <nav className={`sticky top-0 z-50 border-b border-sahm-purple/20 bg-sahm-yellow/95 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-sahm-purple/15' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#/" className="select-none text-3xl font-black italic tracking-tight text-sahm-purple">
          SAHM
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(link => {
            if (link.hasDropdown) {
              return (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(o => !o)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className={`inline-flex cursor-pointer items-center gap-1 px-1 py-1 text-xs font-semibold uppercase tracking-[0.13em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1 rounded ${
                      activeHref === link.href ? 'text-sahm-purple' : 'text-sahm-purple/90 hover:text-sahm-purple'
                    }`}
                  >
                    {link.label}
                    <ChevronIcon open={dropdownOpen} />
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-sahm-purple transition-all duration-300 ${
                        activeHref === link.href ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-2xl border border-sahm-purple/10 bg-white py-2 shadow-xl shadow-sahm-purple/15">
                      {subcategories.map(sub => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-slate-700 transition hover:bg-sahm-purple/5 hover:text-sahm-purple"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            if (link.href === '#contacto') {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleContactClick}
                  className="relative px-1 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-sahm-purple/90 transition hover:text-sahm-purple"
                >
                  {link.label}
                </a>
              )
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-1 py-1 text-xs font-semibold uppercase tracking-[0.13em] transition ${
                  activeHref === link.href ? 'text-sahm-purple' : 'text-sahm-purple/90 hover:text-sahm-purple'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-sahm-purple transition-all duration-300 ${
                    activeHref === link.href ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitch lang={lang} setLang={setLang} label={text.langLabel} compact />

          <a
            href="#/buscar"
            aria-label={text.search}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sahm-purple/20 bg-white text-sahm-purple transition hover:border-sahm-purple hover:bg-sahm-purple/5 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1"
          >
            <SearchIcon />
          </a>

          <a
            href={buildWhatsAppMessageUrl(WA_MESSAGE[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sahm-purple px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sahm-purple/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sahm-purple/40 active:scale-[0.97]"
          >
            <WhatsAppIcon />
            {text.quoteWhatsapp}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="cursor-pointer rounded-md p-2.5 text-slate-700 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? text.close : text.menuLabel}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-sahm-purple/20 bg-sahm-yellow px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <LanguageSwitch lang={lang} setLang={setLang} label={text.langLabel} />

            {navLinks.map(link => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen(o => !o)}
                      aria-expanded={mobileProductsOpen}
                      className="flex w-full cursor-pointer items-center justify-between text-sm font-semibold uppercase tracking-[0.09em] text-sahm-purple"
                    >
                      {link.label}
                      <ChevronIcon open={mobileProductsOpen} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="mt-2 flex flex-col gap-2 pl-3">
                        {subcategories.map(sub => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className="text-sm font-semibold uppercase tracking-[0.09em] text-slate-700 transition hover:text-sahm-purple"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (link.href === '#contacto') {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-[0.09em] text-slate-800 transition hover:text-sahm-purple"
                    onClick={handleContactClick}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-[0.09em] transition ${
                    activeHref === link.href ? 'text-sahm-purple' : 'text-slate-800'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}

            <a
              href="#/buscar"
              className="text-sm font-semibold uppercase tracking-[0.09em] text-slate-800 transition hover:text-sahm-purple"
              onClick={() => setMenuOpen(false)}
            >
              {text.search}
            </a>

            <a
              href={buildWhatsAppMessageUrl(WA_MESSAGE[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-sahm-purple px-5 py-2 text-sm font-bold text-white"
              onClick={() => setMenuOpen(false)}
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

function ChevronIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
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
        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1 ${lang === 'es' ? 'bg-sahm-purple text-white' : 'text-sahm-purple/80 hover:bg-sahm-purple/10'}`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahm-purple focus-visible:ring-offset-1 ${lang === 'en' ? 'bg-sahm-purple text-white' : 'text-sahm-purple/80 hover:bg-sahm-purple/10'}`}
      >
        EN
      </button>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M20 20l-4.35-4.35" />
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
