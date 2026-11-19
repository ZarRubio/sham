'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CartProvider } from '../../context/CartContext'

gsap.registerPlugin(ScrollTrigger)

export default function Providers({ children }) {
  const scope = useRef(null)
  const lenisRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({
      duration: 1.08,
      lerp: 0.09,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    // Drive Lenis through GSAP's ticker so ScrollTrigger reads the same
    // scroll position that Lenis is rendering — prevents trigger desync.
    gsap.ticker.lagSmoothing(0)
    const tick = time => lenis.raf(time * 1000)
    gsap.ticker.add(tick)

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
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
      ScrollTrigger.refresh()
    })
  }, [pathname])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const context = gsap.context(() => {
      frame = requestAnimationFrame(() => {
        gsap.utils.toArray('.gsap-reveal').forEach(element => {
          gsap.fromTo(element,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
              },
            },
          )
        })

        ScrollTrigger.refresh()
      })
    }, scope)

    return () => {
      cancelAnimationFrame(frame)
      context.revert()
      ScrollTrigger.refresh()
    }
  }, [pathname])

  return (
    <CartProvider>
      <div ref={scope}>{children}</div>
    </CartProvider>
  )
}
