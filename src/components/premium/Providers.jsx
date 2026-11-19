'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { CartProvider } from '../../context/CartContext'

// Scroll reveal without GSAP: elements with `.reveal` that start BELOW the fold
// get `.reveal-pending` (hidden, see index.css) and fade in when they enter the
// viewport. Anything already visible on load is never hidden, so above-the-fold
// content and LCP are unaffected.
function setupScrollReveal() {
  const elements = Array.from(document.querySelectorAll('.reveal:not(.reveal-done)'))
  if (!elements.length || !('IntersectionObserver' in window)) return () => {}

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.remove('reveal-pending')
      entry.target.classList.add('reveal-done')
      observer.unobserve(entry.target)
    })
  }, { rootMargin: '0px 0px -12% 0px' })

  const fold = window.innerHeight * 0.88
  elements.forEach(element => {
    if (element.getBoundingClientRect().top > fold) {
      element.classList.add('reveal-pending')
      observer.observe(element)
    }
  })

  return () => {
    observer.disconnect()
    elements.forEach(element => element.classList.remove('reveal-pending'))
  }
}

export default function Providers({ children }) {
  const lenisRef = useRef(null)
  const pathname = usePathname()

  // Smooth wheel scrolling only for mouse/trackpad users (Lenis does nothing for
  // touch by default). Loaded on demand so phones never download or run it.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (prefersReducedMotion || !hasFinePointer) return undefined

    let cancelled = false
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenisRef.current = new Lenis({
        duration: 1.08,
        lerp: 0.09,
        smoothWheel: true,
        autoRaf: true,
      })
    })

    return () => {
      cancelled = true
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  // Back/forward (popstate) must keep the browser's restored scroll position,
  // e.g. returning from a product to the same spot in /productos/.
  const isHistoryNavRef = useRef(false)
  useEffect(() => {
    const onPopState = () => { isHistoryNavRef.current = true }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const isHistoryNav = isHistoryNavRef.current
    isHistoryNavRef.current = false
    requestAnimationFrame(() => {
      if (isHistoryNav) {
        lenisRef.current?.scrollTo(window.scrollY, { immediate: true, force: true })
      } else {
        lenisRef.current?.scrollTo(0, { immediate: true, force: true })
        window.scrollTo(0, 0)
      }
    })
  }, [pathname])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let cleanup = () => {}
    // Wait one frame so the new route's DOM (and its scroll position) is in place.
    const frame = requestAnimationFrame(() => { cleanup = setupScrollReveal() })
    return () => {
      cancelAnimationFrame(frame)
      cleanup()
    }
  }, [pathname])

  return <CartProvider>{children}</CartProvider>
}
