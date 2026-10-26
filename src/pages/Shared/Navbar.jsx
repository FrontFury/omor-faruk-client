import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"

const routeConfig = [
  { path: "academic-degree", label: "Education" },
  { path: "awards-experience", label: "Experience" },
  { path: "research-interest", label: "Publications" },
  { path: "research-tools", label: "Expertise" },
  { path: "completed-courses", label: "Books" },
  { path: "workshops-seminars", label: "Activities" },
  { path: "honors-awards", label: "Honors" },
  { path: "gallery", label: "Gallery" },
  { path: "referees", label: "References" },
  { path: "contact", label: "Contact" },
]

const items = [{ path: "/", label: "Home" }, ...routeConfig.map(({ path, label }) => ({ path: `/${path}`, label }))]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-1/2 top-0 z-50 w-full px-4 sm:px-8 lg:px-14 -translate-x-1/2 rounded-b-2xl border-x border-b border-amber-400/20 bg-[#0b1310]/90 text-white shadow-2xl shadow-emerald-950/50 backdrop-blur-xl">
      
      {/* Top Ambient Glow Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="mx-auto flex h-16 items-center justify-between gap-2 px-2 sm:h-[4.5rem] sm:px-4">
        
        {/* Brand / Name */}
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
          className="group relative min-w-0 shrink-0 text-base font-extrabold tracking-tight sm:text-lg lg:text-xl"
        >
          <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent group-hover:brightness-125 transition">
            Md. Omar Faruk
          </span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 xl:gap-1.5 overflow-x-auto overflow-y-hidden lg:flex scrollbar-none [::-webkit-scrollbar]:hidden">
          {items.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2 py-1.5 text-xs font-semibold transition-all duration-300 xl:px-3 xl:text-xs 2xl:text-sm ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-emerald-950 shadow-lg shadow-amber-500/25 font-bold scale-105"
                    : "text-emerald-100/80 hover:bg-white/10 hover:text-amber-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-white/5 p-2 text-amber-300 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full max-h-[80vh] w-full space-y-1 overflow-y-auto rounded-b-2xl border-t border-amber-400/20 bg-[#0d1814]/95 px-3 py-3 shadow-2xl backdrop-blur-2xl sm:px-5 lg:hidden"
        >
          {items.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold shadow-md shadow-amber-500/20"
                    : "text-emerald-100/80 hover:bg-white/10 hover:text-amber-200"
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