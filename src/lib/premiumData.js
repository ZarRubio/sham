import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from '../config/catalog'

const RAW_CATEGORIES = [
  {
    id: 'llantas',
    label: 'Llantas',
    eyebrow: 'Agarre diario',
    href: '/categorias/llantas',
    text: 'Medidas listas para trabajo diario, reparto urbano y motos eléctricas.',
  },
  {
    id: 'camaras',
    label: 'Cámaras',
    eyebrow: 'Reposición rápida',
    href: '/categorias/camaras',
    text: 'Referencias por aro, válvula y uso para reposición segura.',
  },
  {
    id: 'carburadores',
    label: 'Carburadores',
    eyebrow: 'Reposición',
    href: '/categorias/carburadores',
    text: 'Referencias PZ listas para mantenimiento y reemplazo.',
  },
  {
    id: 'repuestos',
    label: 'Repuestos',
    eyebrow: 'Mantenimiento',
    href: '/categorias/repuestos',
    text: 'Piezas seleccionadas por tipo de producto y referencia.',
  },
  {
    id: 'accesorios',
    label: 'Accesorios',
    eyebrow: 'Complementos',
    href: '/categorias/accesorios',
    text: 'Productos para mantenimiento, seguridad y cuidado.',
  },
]

export const premiumCategories = RAW_CATEGORIES.map(cat => {
  const catalogCategory = CATALOG_CATEGORIES.find(c => c.id === cat.id)
  const count = CATALOG_PRODUCTS.filter(p => p.category === (catalogCategory?.name || cat.label)).length

  return {
    ...cat,
    image: catalogCategory?.image || '',
    count,
  }
}).filter(category => category.count > 0)

export const heroProduct = CATALOG_PRODUCTS.find(product => product.id === 'llantas-moto-electrica-350-10-4pr') || CATALOG_PRODUCTS[0]

export const bestSellers = [
  'llantas-motos-110-90-13-56l',
  'camaras-motos-400-12-tr13',
  'carburadores-pz26',
  'llantas-moto-electrica-350-10-4pr',
  'camaras-motos-300-12-tr87',
  'carburadores-pz19',
  'llantas-cargueros-electricos-400-12-8pr',
  'camaras-bicicletas-29x195235',
]
  .map(id => CATALOG_PRODUCTS.find(product => product.id === id))
  .filter(Boolean)

// Home "Más vendidos": only products that can be ordered. Out-of-stock picks are
// skipped and the list is topped up with other in-stock products (catalog order).
const BEST_SELLERS_COUNT = 8
const isAvailable = product => product.stockLevel !== 'out'
export const availableBestSellers = [
  ...bestSellers.filter(isAvailable),
  ...CATALOG_PRODUCTS.filter(product => isAvailable(product) && !bestSellers.includes(product)),
].slice(0, BEST_SELLERS_COUNT)

export const catalogHighlights = [
  'Búsqueda por medida, aro y tipo de uso',
  'Atención para talleres, flotas y compradores directos',
  'Cotización por WhatsApp con stock real',
]

export const testimonials = [
  {
    quote: 'Nos ayudaron a ubicar la medida correcta sin perder tiempo. La cotización llegó rápido y clara.',
    name: 'Taller urbano',
    meta: 'Lima',
  },
  {
    quote: 'La presentación del producto y la asesoría nos dio confianza para comprar por volumen.',
    name: 'Flota delivery',
    meta: 'Perú',
  },
  {
    quote: 'Buen seguimiento por WhatsApp y opciones concretas para decidir.',
    name: 'Cliente recurrente',
    meta: 'Motociclista',
  },
]
