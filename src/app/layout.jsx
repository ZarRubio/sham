import { Barlow_Condensed, Inter } from 'next/font/google'
import '../index.css'
import Providers from '../components/premium/Providers'
import Layout from '../components/premium/Layout'
import JsonLd from '../components/premium/JsonLd'
import { SITE_URL, organizationJsonLd } from '../lib/seo'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'optional',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  // 'optional' avoids the late swap that reflowed product cards (CLS ~0.12 on /productos/).
  // The font is still preloaded, so it is normally used; if it is late, the metric-adjusted fallback stays.
  display: 'optional',
})

const siteUrl = SITE_URL
const siteTitle = 'SAHM PARTS | Repuestos para motos en Perú'
const siteDescription = 'Llantas, cámaras, carburadores y repuestos para motos. Stock real, asesoría directa y despachos a todo el Perú.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | SAHM PARTS',
  },
  description: siteDescription,
  applicationName: 'SAHM PARTS',
  keywords: [
    'repuestos para motos',
    'llantas para motos',
    'cámaras para motos',
    'carburadores para motos',
    'SAHM Parts',
    'motos Perú',
  ],
  authors: [{ name: 'SAHM PARTS' }],
  creator: 'SAHM PARTS',
  publisher: 'SAHM PARTS',
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'ecommerce',
  manifest: '/site.webmanifest',
  icons: {
    shortcut: '/favicon.ico',
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/Logos/ISOTIPO_SAHM.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: siteTitle,
    description: 'Catálogo de llantas, cámaras, carburadores y repuestos para motocicletas. Stock real, asesoría directa y despacho nacional.',
    url: siteUrl,
    siteName: 'SAHM PARTS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SAHM PARTS',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: 'Catálogo de llantas, cámaras, carburadores y repuestos para motocicletas. Stock real y despacho nacional.',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'SAHM PARTS',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
