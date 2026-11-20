'use client'

import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '../../context/CartContext'
import { PRODUCT_SUBCATEGORIES } from '../../config/navigation'
import { buildWhatsAppMessageUrl } from '../../config/site'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/categorias', label: 'Productos', hasDropdown: true },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function SahmNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const wasMenuOpenRef = useRef(false)

  // Mobile menu behaves as a modal dialog: focus moves in, Escape closes it,
  // the page behind does not scroll, and focus returns to the burger button.
  useEffect(() => {
    if (!menuOpen) {
      if (wasMenuOpenRef.current) menuButtonRef.current?.focus({ preventScroll: true })
      wasMenuOpenRef.current = false
      return undefined
    }
    wasMenuOpenRef.current = true

    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const focusFrame = requestAnimationFrame(() => {
      menuRef.current?.querySelector('button, a')?.focus({ preventScroll: true })
    })
    const onKeyDown = event => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(focusFrame)
      document.documentElement.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownId = useId()
  const pathname = usePathname()
  const { totalItems, hasHydrated } = useCart()
  const subcategories = PRODUCT_SUBCATEGORIES.es

  const isActive = href => href === '/' ? pathname === '/' : pathname.startsWith(href)
  const closeDropdownOnBlur = event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setDropdownOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sahm-purple/20 bg-sahm-yellow shadow-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/Logos/SAHM_Azul_SAHM.svg"
            alt="SAHM"
            width={132}
            height={36}
            className="h-9 w-auto object-contain"
            style={{ width: 'auto' }}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(link => (
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onBlur={closeDropdownOnBlur}
                onKeyDown={event => {
                  if (event.key === 'Escape') {
                    setDropdownOpen(false)
                    event.currentTarget.querySelector('button')?.focus()
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-controls={dropdownId}
                  onClick={() => setDropdownOpen(open => !open)}
                  onFocus={() => setDropdownOpen(true)}
                  className="group relative inline-flex items-center gap-1.5 py-5 font-heading text-sm font-extrabold uppercase tracking-widest text-sahm-purple"
                >
                  {link.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                  >
                    <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.58l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.42z" />
                  </svg>
                  <span className={`absolute -bottom-px left-0 h-0.5 bg-sahm-purple transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>

                <div
                  id={dropdownId}
                  className={`absolute left-1/2 top-full w-56 -translate-x-1/2 rounded-b-2xl border border-black/10 bg-white py-3 shadow-xl shadow-sahm-purple/15 transition duration-200 ${
                    dropdownOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                  }`}
                >
                  <Link
                    href={link.href}
                    className="block px-5 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wide text-slate-700 transition hover:bg-sahm-yellow/20 hover:text-sahm-purple"
                  >
                    Ver todos
                  </Link>
                  {subcategories.map(sub => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-5 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wide text-slate-700 transition hover:bg-sahm-yellow/20 hover:text-sahm-purple"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={link.href} href={link.href} active={isActive(link.href)}>
                {link.label}
              </NavLink>
            )
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/buscar"
            aria-label="Buscar"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-sahm-purple shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
          </Link>

          <Link
            href="/carrito"
            aria-label={hasHydrated && totalItems > 0 ? `Carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}` : 'Carrito'}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-white text-sahm-purple shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <CartIcon />
            {hasHydrated && totalItems > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-sahm-purple text-[10px] font-black text-white">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>

          <a
            href={buildWhatsAppMessageUrl('Hola, quiero cotizar productos SAHM. La categoría, medida o referencia es: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex h-11 items-center gap-2 rounded-full bg-sahm-purple px-5 font-heading text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-sahm-purple/25 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <WhatsAppIcon />
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/carrito" aria-label={hasHydrated && totalItems > 0 ? `Carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}` : 'Carrito'} className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-sahm-purple">
            <CartIcon />
            {hasHydrated && totalItems > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-sahm-purple text-[10px] font-black text-white">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label="Abrir menú"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-sahm-purple"
          >
            <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_current,0_-6px_0_current]" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu — always in DOM, toggled via translate */}
      <div
        id={menuId}
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        inert={!menuOpen}
        className={`fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black px-6 py-6 lg:hidden
          transform transition-transform duration-300 ease-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
      >
        <div className="flex items-center justify-between">
          <Image src="/images/Logos/SAHM_Blanco_SAHM.svg" alt="SAHM" width={132} height={36} className="h-9 w-auto object-contain" style={{ width: 'auto' }} />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Cerrar
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-6">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/productos', label: 'Productos' },
            { href: '/categorias', label: 'Categorías' },
            { href: '/buscar', label: 'Buscar' },
            { href: '/carrito', label: 'Pedido' },
            { href: '/nosotros', label: 'Nosotros' },
            { href: '/contacto', label: 'Contacto' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-4xl font-extrabold uppercase italic text-white transition hover:text-sahm-yellow"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link href={href} className="group relative py-5 font-heading text-sm font-extrabold uppercase tracking-widest text-sahm-purple">
      {children}
      <span className={`absolute -bottom-px left-0 h-0.5 bg-sahm-purple transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </Link>
  )
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path strokeLinecap="round" d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.44 6.6 2.01 12.05 2.01c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.49-8.42z" />
    </svg>
  )
}
