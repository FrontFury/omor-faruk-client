import React from "react"
import { ArrowUpRight } from "lucide-react"

export function PortfolioPage({ eyebrow, title, description, children }) {
  return (
    <div className="w-full space-y-8 pb-12 sm:space-y-10">
      {/* Header Banner */}
      <header className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0d1612]/90 px-6 py-9 text-white shadow-2xl backdrop-blur-2xl sm:px-10 sm:py-12">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border-[36px] border-amber-400/10" />
        <div className="pointer-events-none absolute -bottom-28 right-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        
        <div className="relative max-w-3xl">
          <p className="mb-3 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
            {eyebrow || "Academic & Research Portfolio"}
          </p>
          <h1 className="text-3xl font-extrabold font-serif leading-tight tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base font-medium">
              {description}
            </p>
          )}
        </div>
      </header>

      {/* Main Page Content Container */}
      <div className="space-y-8 sm:space-y-10">{children}</div>
    </div>
  )
}

export function ContentSection({ title, subtitle, children, className = "" }) {
  return (
    <section className={`space-y-5 ${className}`}>
      {/* High-Contrast Section Header */}
      <div className="border-l-4 border-amber-400 pl-4 py-0.5">
        <h2 className="text-xl font-bold font-serif text-white sm:text-2xl tracking-tight">
          <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm leading-6 text-slate-300 font-medium">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

export function InfoCard({ title, detail, meta, children }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-amber-400/25 bg-[#0d1612]/90 p-5 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-amber-400/50 sm:p-6">
      {meta && (
        <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-amber-400">
          {meta}
        </p>
      )}
      <h3 className="font-bold leading-6 text-white text-base sm:text-lg group-hover:text-amber-300 transition-colors">
        {title}
      </h3>
      {detail && (
        <p className="mt-2 text-sm leading-6 text-slate-300 font-medium">
          {detail}
        </p>
      )}
      {children}
    </article>
  )
}

export function BulletList({ items, ordered = false }) {
  const List = ordered ? "ol" : "ul"
  return (
    <List
      className={`space-y-2.5 pl-5 text-sm leading-6 text-slate-200 font-medium ${
        ordered 
          ? "list-decimal marker:text-amber-400 font-bold" 
          : "list-disc marker:text-amber-400"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </List>
  )
}

export function SectionLink({ to, children }) {
  return (
    <a
      href={to}
      className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors underline decoration-amber-400/40"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" className="text-amber-400" />
    </a>
  )
}