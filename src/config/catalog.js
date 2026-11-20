import {
  CATALOG_CATEGORY_DATA,
  CATALOG_COMMERCE_DATA,
  CATALOG_IMAGE_ROOT,
  CATALOG_PRODUCT_CONTENT,
  CATALOG_PRODUCT_DATA,
  OPTIMIZED_IMAGE_ROOT,
} from './catalogData'
import { formatPrice, getProductLabel, getProductWhatsAppMessage } from './catalogFormat'

export { formatPrice, getProductLabel, getProductWhatsAppMessage }

function assetPath(path) {
  return encodeURI(`/${path}`)
}

function originalImagePath(product, file) {
  if (product.sourceDir) return `${CATALOG_IMAGE_ROOT}/${product.sourceDir}/${file}`
  return `${CATALOG_IMAGE_ROOT}/${product.category}/${product.subcategory}/${product.name}/${file}`
}

function optimizedImagePath(productId, file) {
  return `${OPTIMIZED_IMAGE_ROOT}/${productId}/${file}`
}


function stockMeta(stock) {
  if (typeof stock !== 'number') {
    return {
      stockLabel: 'Consultar disponibilidad',
      stockLevel: 'unknown',
    }
  }

  if (stock >= 10) {
    return {
      stockLabel: 'En stock',
      stockLevel: 'available',
    }
  }

  if (stock > 0) {
    return {
      stockLabel: 'Últimas unidades',
      stockLevel: 'low',
    }
  }

  return {
    stockLabel: 'Sin stock',
    stockLevel: 'out',
  }
}

function technicalSpecs(item, commerce) {
  const content = CATALOG_PRODUCT_CONTENT[item.id]
  if (content?.technicalDetails?.length) return content.technicalDetails

  if (!commerce) return []

  if (item.category === 'Carburadores') {
    return [
      ['Código de producto', commerce.sku],
      ['Modelo', commerce.measure],
      ['Tipo', commerce.tubeType],
      ['Presentación', commerce.unit],
      ['Disponibilidad', stockMeta(commerce.stock).stockLabel],
    ].filter(([, value]) => value !== undefined && value !== null && value !== '')
  }

  return [
    ['Código de producto', commerce.sku],
    ['Medida', commerce.measure],
    ['Clasificación', commerce.classification],
    ['Con/Sin cámara de aire', commerce.tubeType || (item.category === 'Cámaras' ? 'Cámara' : '')],
    ['Presentación', commerce.unit],
    ['Disponibilidad', stockMeta(commerce.stock).stockLabel],
  ].filter(([, value]) => value !== undefined && value !== null && value !== '')
}

function productDescriptionBullets(item, displayName) {
  const content = CATALOG_PRODUCT_CONTENT[item.id]
  if (content?.shortDescription && content?.longDescription) {
    return [content.shortDescription, content.productSheetText || content.longDescription]
  }

  if (item.category === 'Llantas') {
    const useCase = item.subcategory === 'Cargueros Eléctricos'
      ? 'cargueros eléctricos y trabajo de reparto'
      : item.subcategory === 'Moto eléctrica'
        ? 'motos eléctricas de uso diario'
        : 'motocicletas de uso urbano y trabajo diario'

    return [
      `Llanta ${displayName} pensada para ${useCase}, con construcción enfocada en estabilidad y resistencia.`,
      'Diseño de rodadura preparado para mantener buen contacto con el piso en recorridos frecuentes.',
      'Opción práctica para reposición, mantenimiento preventivo y atención de talleres o flotas.',
    ]
  }

  if (item.category === 'Cámaras') {
    return [
      `Cámara ${displayName} para reposición rápida, compatible con la medida indicada en la ficha técnica.`,
      'Fabricada para ayudar a conservar la presión de aire y acompañar el trabajo diario de la llanta.',
      'Presentación lista para talleres, tiendas y usuarios que necesitan una solución directa por medida.',
    ]
  }

  if (item.category === 'Carburadores') {
    return [
      `Carburador ${displayName} para mantenimiento o reemplazo en motores compatibles con la referencia PZ.`,
      'Cuerpo compacto con puntos de conexión visibles para facilitar la instalación y revisión técnica.',
      'Repuesto útil para talleres y usuarios que buscan recuperar respuesta estable en la alimentación de combustible.',
    ]
  }

  return [
    'Producto seleccionado para reposición y mantenimiento dentro del catálogo SAHM.',
    'Consulta compatibilidad por medida o referencia antes de cerrar tu pedido.',
    'Disponible para cotización directa con asesoría por WhatsApp.',
  ]
}

function product(item) {
  const commerce = CATALOG_COMMERCE_DATA[item.id]
  const content = CATALOG_PRODUCT_CONTENT[item.id] || {}
  const displayName = commerce?.displayName || item.name
  const stock = stockMeta(commerce?.stock)
  const images = item.files.map((image, index) => ({
    label: image.label,
    original: assetPath(originalImagePath(item, image.file)),
    card: assetPath(optimizedImagePath(item.id, 'card.webp')),
    detail: assetPath(optimizedImagePath(item.id, `detail-${index + 1}.webp`)),
    thumb: assetPath(optimizedImagePath(item.id, `thumb-${index + 1}.webp`)),
  }))

  return {
    ...item,
    name: displayName,
    originalName: item.name,
    slug: item.id,
    code: displayName.replace(/\s+/g, ' ').trim(),
    sku: commerce?.sku || '',
    brand: commerce?.brand || 'SAHM',
    measure: commerce?.measure || '',
    classification: commerce?.classification || '',
    tubeType: commerce?.tubeType || '',
    unit: commerce?.unit || '',
    packageQty: commerce?.packageQty,
    retailPrice: commerce?.retailPrice,
    stock: commerce?.stock,
    stockLabel: stock.stockLabel,
    stockLevel: stock.stockLevel,
    technicalSpecs: technicalSpecs(item, commerce),
    descriptionBullets: productDescriptionBullets(item, displayName),
    seoName: content.seoName || '',
    shortDescription: content.shortDescription || '',
    longDescription: content.longDescription || '',
    compatibility: content.compatibility || '',
    benefits: content.benefits || [],
    recommendation: content.recommendation || '',
    technicalWarning: content.technicalWarning || '',
    seoKeywords: content.seoKeywords || [],
    metaDescription: content.metaDescription || '',
    productSheetText: content.productSheetText || '',
    faq: content.faq || [],
    badges: content.badges || [],
    comparison: content.comparison,
    productUrl: `/productos/${item.id}`,
    images,
  }
}

export const CATALOG_PRODUCTS = CATALOG_PRODUCT_DATA.map(product)

export const CATALOG_CATEGORIES = CATALOG_CATEGORY_DATA.map(category => {
  const coverProduct = CATALOG_PRODUCTS.find(item => item.id === category.coverProductId)
  const coverImage = coverProduct?.images[category.coverImageIndex] || coverProduct?.images[0]

  return {
    ...category,
    image: coverImage?.card || '',
  }
})

export function getSubcategories(category) {
  return [...new Set(CATALOG_PRODUCTS.filter(item => item.category === category).map(item => item.subcategory))]
}

export function getProductById(id) {
  return CATALOG_PRODUCTS.find(productItem => productItem.id === id)
}

/**
 * Minimal product shape for client components (cards, listings, search, cart).
 * Server pages must pass these instead of full CATALOG_PRODUCTS entries: every
 * field given to a 'use client' component is serialized into the page payload.
 */
export function toCardProduct(item) {
  return {
    id: item.id,
    productUrl: item.productUrl,
    name: item.name,
    code: item.code,
    category: item.category,
    subcategory: item.subcategory,
    sku: item.sku,
    measure: item.measure,
    retailPrice: item.retailPrice,
    stockLabel: item.stockLabel,
    stockLevel: item.stockLevel,
    images: [{ card: item.images[0]?.card || '' }],
    ...(item.comparison && { comparison: item.comparison }),
  }
}

/** Fields the interactive part of the product page needs (long SEO copy stays server-rendered). */
export function toDetailProduct(item) {
  return {
    id: item.id,
    name: item.name,
    code: item.code,
    category: item.category,
    subcategory: item.subcategory,
    sku: item.sku,
    retailPrice: item.retailPrice,
    stockLabel: item.stockLabel,
    stockLevel: item.stockLevel,
    badges: item.badges,
    descriptionBullets: item.descriptionBullets,
    technicalSpecs: item.technicalSpecs,
    images: item.images,
  }
}

export function getCategoryBySlug(slug) {
  return CATALOG_CATEGORIES.find(cat => cat.id === slug)
}
