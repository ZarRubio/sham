import {
  CATALOG_CATEGORY_DATA,
  CATALOG_COMMERCE_DATA,
  CATALOG_IMAGE_ROOT,
  CATALOG_PRODUCT_CONTENT,
  CATALOG_PRODUCT_DATA,
  OPTIMIZED_IMAGE_ROOT,
} from './catalogData'

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

export function formatPrice(value) {
  if (typeof value !== 'number') return ''
  return `S/ ${value.toFixed(2)}`
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

  if (stock >= 3) {
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

export function getProductLabel(productItem, lang = 'es') {
  if (productItem.category === 'Llantas') return `${lang === 'en' ? 'Tire' : 'Llanta'} ${productItem.name}`
  if (productItem.category === 'Carburadores') return `${lang === 'en' ? 'Carburetor' : 'Carburador'} ${productItem.name}`
  return `${lang === 'en' ? 'Tube' : 'Cámara'} ${productItem.name}`
}

export function getProductWhatsAppMessage(productItem, prefix, lang = 'es') {
  const sku = productItem.sku ? ` | SKU: ${productItem.sku}` : ''
  return `${prefix} ${getProductLabel(productItem, lang)} - ${productItem.subcategory}${sku}`
}

export function getCategoryBySlug(slug) {
  return CATALOG_CATEGORIES.find(cat => cat.id === slug)
}
