const FALLBACK_WHATSAPP_NUMBER = '51999999999'

const envNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ''
const cleanNumber = String(envNumber).replace(/\D/g, '')

export const WHATSAPP_NUMBER = cleanNumber || FALLBACK_WHATSAPP_NUMBER
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function buildWhatsAppMessageUrl(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
