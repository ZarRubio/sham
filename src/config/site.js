const FALLBACK_WHATSAPP_NUMBER = '51987881821'

const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
const cleanNumber = String(envNumber).replace(/\D/g, '')

export const WHATSAPP_NUMBER = cleanNumber || FALLBACK_WHATSAPP_NUMBER
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

// Social profiles of Grupo NBG Import (taken from the links on gruponbgimport.com).
// Leave a value empty to hide that network in the footer.
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61583968140347',
  instagram: 'https://www.instagram.com/grupo.nbg/',
  linkedin: 'https://www.linkedin.com/company/csttirespe/',
  tiktok: '',
}

export const FEATURE_FLAGS = {
  catalogReady: false,
  socialReady: false,
}

export function buildWhatsAppMessageUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
