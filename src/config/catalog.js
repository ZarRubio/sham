import {
  CATALOG_CATEGORY_DATA,
  CATALOG_COMMERCE_DATA,
  CATALOG_IMAGE_ROOT,
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
  if (!commerce) return []

  return [
    ['Código de producto', commerce.sku],
    ['Medida', commerce.measure],
    ['Clasificación', commerce.classification],
    ['Con/Sin cámara de aire', commerce.tubeType || (item.category === 'Cámaras' ? 'Cámara' : '')],
    ['Presentación', commerce.unit],
    ['Disponibilidad', stockMeta(commerce.stock).stockLabel],
  ].filter(([, value]) => value !== undefined && value !== null && value !== '')
}

function product(item) {
  const commerce = CATALOG_COMMERCE_DATA[item.id]
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
