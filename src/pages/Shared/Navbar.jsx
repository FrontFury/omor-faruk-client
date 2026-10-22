import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { routeConfig } from "../../Routes/routeConfig"

const items = [{ path: "/", label: "Home" }, ...routeConfig.map(({ path, label }) => ({ path: `/${path}`, label }))]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-1/2 top-0 z-50 w-11/12 -translate-x-1/2 rounded-b-2xl border-x border-b border-white/10 bg-gradient-to-r from-[#102f25] via-[#174333] to-[#20543f] text-white shadow-xl shadow-emerald-950/20 backdrop-blur-md">
      <div className="mx-auto flex h-16 items-center justify-between gap-3 px-3 sm:h-[4.5rem] sm:px-5">
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
          className="min-w-0 shrink text-base font-bold tracking-tight text-white transition-colors hover:text-amber-300 sm:text-xl"
        >
          <span className="block truncate">Md. Omar Faruk</span>
        </NavLink>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto lg:flex">
          {items.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold transition-colors xl:px-3 xl:text-sm ${
                  isActive
                    ? "bg-amber-300 text-emerald-950 shadow-sm"
                    : "text-emerald-50/85 hover:bg-white/10 hover:text-amber-200"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full max-h-[80vh] w-full space-y-1 overflow-y-auto rounded-b-2xl border-t border-white/10 bg-[#153d30] px-3 py-3 shadow-xl sm:px-5 lg:hidden"
        >
          {items.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-300 text-emerald-950"
                    : "text-emerald-50/90 hover:bg-white/10 hover:text-amber-200"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
