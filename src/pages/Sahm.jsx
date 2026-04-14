import Navbar from '../components/sahm/Navbar'
import Hero from '../components/sahm/Hero'
import Beneficios from '../components/sahm/Beneficios'
import Confianza from '../components/sahm/Confianza'
import Categorias from '../components/sahm/Categorias'
import ProductosDestacados from '../components/sahm/ProductosDestacados'
import Footer from '../components/sahm/Footer'

export default function Sahm() {
  return (
    <div className="min-h-screen font-sans antialiased text-slate-900">
      <Navbar />
      <Hero />
      <Beneficios />
      <Confianza />
      <Categorias />
      <ProductosDestacados />
      <Footer />
    </div>
  )
}
