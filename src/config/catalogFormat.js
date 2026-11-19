// Pure formatting helpers with NO catalog data imports.
// Client components must import from here (not from ./catalog), otherwise the
// whole catalogData.js (~80 KB) is bundled into every page's JavaScript.

export function formatPrice(value) {
  if (typeof value !== 'number') return ''
  return `S/ ${value.toFixed(2)}`
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
