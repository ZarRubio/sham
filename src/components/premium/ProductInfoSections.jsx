// Server Component: long-form product copy (description, compatibility, FAQ...).
// Rendered on the server so this text is written once into the HTML instead of
// also being serialized into the client payload of ProductDetailClient.

function DetailPanel({ eyebrow, title, children }) {
  if (!children) return null

  return (
    <section className="rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">{eyebrow}</p>
      <h2 className="mt-1 font-heading text-2xl font-extrabold uppercase italic text-black">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{children}</div>
    </section>
  )
}

function BulletList({ items }) {
  if (!items?.length) return null

  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-sahm-yellow" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ProductFaq({ items }) {
  if (!items?.length) return null

  return (
    <section className="rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-sm sm:p-5 lg:col-span-2">
      <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-sahm-purple">Preguntas frecuentes</p>
      <h2 className="mt-1 font-heading text-2xl font-extrabold uppercase italic text-black">Antes de comprar</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map(([question, answer]) => (
          <div key={question} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <h3 className="font-heading text-sm font-extrabold uppercase text-black">{question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function ProductInfoSections({ product }) {
  const hasContent = product.longDescription || product.compatibility || product.benefits?.length > 0
    || product.recommendation || product.technicalWarning || product.faq?.length > 0
  if (!hasContent) return null

  return (
    <section className="mt-8 grid gap-5 lg:grid-cols-2">
      <DetailPanel eyebrow="Descripción premium" title="Información del producto">
        {product.longDescription}
      </DetailPanel>

      <DetailPanel eyebrow="Compatibilidad sugerida" title="Aplicaciones">
        {product.compatibility}
      </DetailPanel>

      <DetailPanel eyebrow="Beneficios clave" title="Por qué elegirlo">
        <BulletList items={product.benefits} />
      </DetailPanel>

      <DetailPanel eyebrow="Recomendación" title="Uso técnico">
        {product.recommendation}
      </DetailPanel>

      <DetailPanel eyebrow="Advertencia técnica" title="Validar antes de instalar">
        {product.technicalWarning}
      </DetailPanel>

      {product.seoKeywords?.length > 0 && (
        <DetailPanel eyebrow="SEO" title="Búsquedas relacionadas">
          <div className="flex flex-wrap gap-2">
            {product.seoKeywords.map(keyword => (
              <span key={keyword} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                {keyword}
              </span>
            ))}
          </div>
        </DetailPanel>
      )}

      <ProductFaq items={product.faq} />
    </section>
  )
}
