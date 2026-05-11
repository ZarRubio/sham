import { useEffect, useMemo, useState } from 'react'
import Sahm from './pages/Sahm'
import ProductDetail from './pages/ProductDetail'
import CategoriesPage from './pages/CategoriesPage'

const LANGUAGE_STORAGE_KEY = 'sahm_lang'

function getHashRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  return hash || '/'
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'es')
  const [route, setRoute] = useState(getHashRoute)

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleHashChange = () => setRoute(getHashRoute())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const productId = useMemo(() => {
    const match = route.match(/^\/producto\/([^/?#]+)/)
    return match ? decodeURIComponent(match[1]) : null
  }, [route])

  if (productId) {
    return <ProductDetail productId={productId} lang={lang} setLang={setLang} />
  }

  if (route === '/categorias') {
    return <CategoriesPage lang={lang} setLang={setLang} />
  }

  return <Sahm lang={lang} setLang={setLang} />
}
