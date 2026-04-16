import { useEffect, useState } from 'react'
import Navbar from '../components/sahm/Navbar'
import TrustBar from '../components/sahm/TrustBar'
import Hero from '../components/sahm/Hero'
import Beneficios from '../components/sahm/Beneficios'
import Confianza from '../components/sahm/Confianza'
import Categorias from '../components/sahm/Categorias'
import ProductosDestacados from '../components/sahm/ProductosDestacados'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'

const LANGUAGE_STORAGE_KEY = 'sahm_lang'

export default function Sahm() {
  const [lang, setLang] = useState(() => localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'es')

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="min-h-screen font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <TrustBar lang={lang} />
      <Hero lang={lang} />
      <Beneficios lang={lang} />
      <Confianza lang={lang} />
      <Categorias lang={lang} />
      <ProductosDestacados lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}
