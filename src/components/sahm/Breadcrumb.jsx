import { Fragment } from 'react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {item.href
            ? <a href={item.href} className="transition hover:text-sahm-purple">{item.label}</a>
            : <span className="text-sahm-purple">{item.label}</span>
          }
        </Fragment>
      ))}
    </nav>
  )
}
