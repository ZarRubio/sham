import { NAV_LINKS } from '../../config/navigation'
import { WHATSAPP_URL } from '../../config/site'

export default function Footer() {
  return (
    <footer id="contacto" className="mt-12 border-t border-slate-200 bg-[#16112a] text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-4xl font-black italic tracking-tight text-sahm-yellow">SAHM</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
            Soluciones en llantas y repuestos para motos. Atencion comercial agil y foco en continuidad para taller y flota.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Navegacion</h4>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-slate-200 transition hover:text-sahm-yellow">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Contacto</h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-white/10"
          >
            <WhatsAppIcon />
            WhatsApp Comercial
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">
        <p>(c) 2026 SAHM. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  )
}
