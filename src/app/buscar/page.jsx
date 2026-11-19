import SearchCatalogClient from '../../components/premium/SearchCatalogClient'
import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata({
  title: 'Buscar productos',
  description: 'Busca productos SAHM por medida, referencia, categoría o subcategoría.',
  path: '/buscar/',
  noindex: true,
})

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sahm-purple via-sahm-night/95 to-black px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SearchCatalogClient />
      </div>
    </main>
  )
}
