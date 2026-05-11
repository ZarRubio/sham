import { useEffect } from 'react'
import Navbar from '../components/sahm/Navbar'
import Hero from '../components/sahm/Hero'
import TrustBar from '../components/sahm/TrustBar'
import Beneficios from '../components/sahm/Beneficios'
import Confianza from '../components/sahm/Confianza'
import ProductosDestacados from '../components/sahm/ProductosDestacados'
import Footer from '../components/sahm/Footer'
import FloatingWhatsApp from '../components/sahm/FloatingWhatsApp'
import ScrollProgress from '../components/sahm/ScrollProgress'

const PAGE_TITLE = {
  es: 'SAHM — Llantas, cámaras y repuestos para moto',
  en: 'SAHM — Motorcycle tires, tubes and spare parts',
}

export default function Sahm({ lang, setLang }) {
  useEffect(() => {
    document.title = PAGE_TITLE[lang]
  }, [lang])

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased text-slate-900">
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <ProductosDestacados lang={lang} />
      <Beneficios lang={lang} />
      <Confianza lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  )
}
