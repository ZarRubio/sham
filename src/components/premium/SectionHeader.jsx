export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`reveal ${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-sahm-yellow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-[0.95] text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-white/52 sm:text-lg">{text}</p>}
    </div>
  )
}
