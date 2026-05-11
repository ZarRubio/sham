import { useEffect } from 'react'
import Navbar from '../components/sahm/Navbar'
import TrustBar from '../components/sahm/TrustBar'
import Categorias from '../components/sahm/Categorias'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'

const PAGE_TITLE = {
  es: 'Categorías — SAHM',
  en: 'Categories — SAHM',
}

export default function CategoriesPage({ lang, setLang }) {
  useEffect(() => {
    document.title = PAGE_TITLE[lang]
  }, [lang])

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <TrustBar lang={lang} />
      <main className="pt-4">
        <Categorias lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}
