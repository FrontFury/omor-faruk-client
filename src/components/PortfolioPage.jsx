import { ArrowUpRight } from "lucide-react"

export function PortfolioPage({ eyebrow, title, description, children }) {
  return (
    <div className="w-full space-y-8 pb-12 sm:space-y-10">
      <header className="relative overflow-hidden rounded-3xl border border-emerald-950/10 bg-gradient-to-br from-[#102f25] via-[#174b38] to-[#2b7251] px-6 py-9 text-white shadow-xl shadow-emerald-950/15 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border-[36px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-28 right-32 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f4c875] sm:text-sm">
            {eyebrow || "Academic & Research Portfolio"}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/90 sm:text-base">
              {description}
            </p>
          )}
        </div>
      </header>
      <div className="space-y-8 sm:space-y-10">{children}</div>
    </div>
  )
}

export function ContentSection({ title, subtitle, children, className = "" }) {
  return (
    <section className={`space-y-5 ${className}`}>
      <div className="border-l-4 border-emerald-700 pl-4">
        <h2 className="text-xl font-bold text-[#153d30] sm:text-2xl">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm leading-6 text-slate-600">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  )
}

export function InfoCard({ title, detail, meta, children }) {
  return (
    <article className="rounded-2xl border border-[#e7e1d4] bg-[#fffefa] p-5 shadow-sm transition hover:border-amber-300 hover:shadow-md sm:p-6">
      {meta && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {meta}
        </p>
      )}
      <h3 className="font-bold leading-6 text-slate-900">{title}</h3>
      {detail && <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>}
      {children}
    </article>
  )
}

export function BulletList({ items, ordered = false }) {
  const List = ordered ? "ol" : "ul"
  return (
    <List
      className={`space-y-2 pl-5 text-sm leading-6 text-slate-700 ${
        ordered ? "list-decimal" : "list-disc marker:text-emerald-700"
      }`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  )
}

export function SectionLink({ to, children }) {
  return (
    <a
      href={to}
      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}
