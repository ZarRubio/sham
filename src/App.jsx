import { useEffect, useMemo, useState } from 'react'
import { CartProvider } from './context/CartContext'
import Sahm from './pages/Sahm'
import ProductDetail from './pages/ProductDetail'
import CategoryPage from './pages/CategoryPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'

const LANGUAGE_STORAGE_KEY = 'sahm_lang'

function getHashRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  return hash || '/'
}

function renderPage(routePath, routeQuery, productId, categorySlug, pageProps) {
  if (productId) return <ProductDetail productId={productId} {...pageProps} />
  if (categorySlug) return <CategoryPage slug={categorySlug} {...pageProps} />

  switch (routePath) {
    case '/productos': return <ProductsPage {...pageProps} />
    case '/carrito': return <CartPage {...pageProps} />
    case '/nosotros': return <AboutPage {...pageProps} />
    case '/buscar': {
      const q = new URLSearchParams(routeQuery).get('q') || ''
      return <SearchPage query={q} {...pageProps} />
    }
    default: return <Sahm {...pageProps} />
  }
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'es')
  const [route, setRoute] = useState(getHashRoute)

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleHashChange = () => {
      const raw = window.location.hash.replace(/^#/, '') || '/'
      // Anchor-scroll: non-route hashes (no leading slash, e.g. #contacto)
      if (!raw.startsWith('/')) {
        const el = document.getElementById(raw)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      setRoute(raw)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Handle anchor on mount (e.g. direct link to #contacto)
  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, '')
    if (raw && !raw.startsWith('/')) {
      const el = document.getElementById(raw)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const routePath = route.split('?')[0]
  const routeQuery = route.includes('?') ? route.split('?')[1] : ''

  const productId = useMemo(() => {
    const match = routePath.match(/^\/producto\/([^/?#]+)/)
    return match ? decodeURIComponent(match[1]) : null
  }, [routePath])

  const categorySlug = useMemo(() => {
    const match = routePath.match(/^\/productos\/([^/?#]+)/)
    return match ? decodeURIComponent(match[1]) : null
  }, [routePath])

  return (
    <CartProvider>
      {renderPage(routePath, routeQuery, productId, categorySlug, { lang, setLang })}
    </CartProvider>
  )
}
