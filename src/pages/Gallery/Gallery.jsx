import React, { useState } from 'react'
import { 
  GraduationCap, 
  Landmark, 
  BookOpen, 
  Calendar, 
  Sparkles, 
  Image as ImageIcon, 
  Filter, 
  Camera, 
  Award, 
  CheckCircle2 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { publications, profile } from "../../data/profileData"

const categories = ["All", "Family Get Together", "Personal", "Event", "Travel", "Sports"]

const galleryItems = [
  {
    id: 1,
    category: "Family Get Together",
    date: "May 18, 2025",
    title: "After Eid Get Together with Former Chairman of Public Service Commission",
    description: "Reunion and insightful discussion over academic development.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Personal",
    date: "February 12, 2026",
    title: "Exercised Voting Right / Election Day",
    description: "Participating in national civic responsibility and governance.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Event",
    date: "April 10, 2026",
    title: "DIIT Freshers' Reception Program",
    description: "Welcoming the new batch of Business Administration students.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Travel",
    date: "May 12, 2022",
    title: "Sylhet Tour - Bholaganj Sada Pathar, Lalakhal & Tamabil",
    description: "Academic faculty tour across scenic landscapes of Sylhet.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Sports",
    date: "May 16, 2026",
    title: "DIIT Cricket Mania 2.0 Prize Giving Ceremony",
    description: "Celebrated the grand conclusion and prize distribution of 'DIIT Cricket Mania 2.0'. Congratulated team 'Champion Freaks' on becoming the champions and 'Tourism Warriors' for securing the runner-up position in this competitive sports tournament.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Event",
    date: "June 20, 2026",
    title: "DIIT Permanent Campus Foundation Stone Laying Ceremony",
    description: "Historical institutional expansion ceremony for DIIT permanent campus.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
  }
]

const summaryMetrics = [
  { value: "06 Moments", label: "Featured Campus & Personal Highlights", icon: Camera },
  { value: "Events", label: "Receptions & Foundation Ceremonies", icon: Landmark },
  { value: "Trips", label: "Faculty & Academic Excursions", icon: GraduationCap },
  { value: `${publications.length} Papers`, label: "Documented Scholarly Output", icon: BookOpen }
]

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Academic Moments & Events"
          title="Portfolio Gallery"
          description="A visual gallery overview of academic engagements, campus events, tours, and personal milestones."
        >
          <div className="space-y-8">

            {/* TOP HIGHLIGHT STAT CARDS - MATCHES OTHER PAGES 4-CARD GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {summaryMetrics.map(({ value, label, icon: Icon }) => (
                <div 
                  key={label}
                  className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Gallery
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-extrabold text-amber-400 group-hover:text-amber-300 transition-colors">
                      {value}
                    </div>
                    <p className="text-xs font-semibold text-emerald-300 mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FILTER BAR - EXACT MATCH TO REFERENCE IMAGE */}
            <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl border border-amber-400/20 bg-[#0d1410]/70 backdrop-blur-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 flex items-center gap-1.5">
                <Filter size={14} className="text-amber-400" />
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                      : "bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/50 hover:text-white border border-emerald-500/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SECTION: GALLERY CARDS - MATCHES REFERENCE CARD DESIGN */}
            <ContentSection
              title="Academic & Personal Gallery"
              subtitle="Photo highlights from institutional events, seminars, sports, and faculty tours."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredItems.map((item) => (
                  <article
                    key={item.id}
                    className="group relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 shadow-2xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-end min-h-[340px]"
                  >
                    {/* Background Image with Dark Gradient Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090e0b] via-[#090e0b]/75 to-transparent" />
                    </div>

                    {/* Top Left Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-extrabold rounded-full uppercase tracking-wider shadow-lg">
                        <Sparkles size={11} className="text-amber-400" />
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-10 p-6 space-y-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
                        <Calendar size={13} className="text-amber-400 shrink-0" />
                        <span>{item.date}</span>
                      </div>

                      <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </ContentSection>

          </div>
        </PortfolioPage>

      </div>
    </div>
  )
}

export default Gallery