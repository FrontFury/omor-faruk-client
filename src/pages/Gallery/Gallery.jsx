import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hook/useAxiosSecure'
import { 
  GraduationCap, 
  Landmark, 
  BookOpen, 
  Calendar, 
  Sparkles, 
  Filter, 
  Camera, 
  Loader2,
  Image as ImageIcon
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"

const Gallery = () => {
  const axiosSecure = useAxiosSecure();
  const [activeFilter, setActiveFilter] = useState("All");

  // Fetch gallery items from backend API
  const { data: galleryItems = [], isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosSecure.get("/gallery");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3 bg-[#0d1410]/80 rounded-3xl border border-amber-400/20 my-8">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        <span className="text-xs font-mono text-emerald-300">Loading gallery moments...</span>
      </div>
    );
  }

  // Extract unique categories dynamically from fetched gallery items
  const dynamicCategories = [
    "All",
    ...Array.from(
      new Set(
        galleryItems
          .map((item) => item.category)
          .filter((cat) => Boolean(cat))
      )
    ),
  ];

  // Filter items based on active selected filter category
  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category?.toLowerCase() === activeFilter.toLowerCase());

  // Metrics summary
  const totalMoments = galleryItems.length > 0 ? `${galleryItems.length} Moments` : "06 Moments";
  const summaryMetrics = [
    { value: totalMoments, label: "Featured Campus & Personal Highlights", icon: Camera },
    { value: "Events", label: "Receptions & Foundation Ceremonies", icon: Landmark },
    { value: "Trips", label: "Faculty & Academic Excursions", icon: GraduationCap },
    { value: "Dynamic", label: "Documented Portfolio Moments", icon: BookOpen }
  ];

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Academic Moments & Events"
          title="Portfolio Gallery"
          description="A visual gallery overview of academic engagements, campus events, tours, and personal milestones."
        >
          <div className="space-y-8">

            {/* TOP HIGHLIGHT STAT CARDS */}
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
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 group-hover:text-amber-300 transition-colors">
                      {value}
                    </div>
                    <p className="text-xs font-semibold text-emerald-300 mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DYNAMIC FILTER BAR */}
            <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl border border-amber-400/20 bg-[#0d1410]/70 backdrop-blur-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 flex items-center gap-1.5">
                <Filter size={14} className="text-amber-400" />
                Filter:
              </span>
              {dynamicCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                      : "bg-emerald-950/60 text-slate-300 hover:bg-emerald-900/50 hover:text-white border border-emerald-500/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SECTION: GALLERY CARDS */}
            <ContentSection
              title="Academic & Personal Gallery"
              subtitle="Photo highlights from institutional events, seminars, sports, and faculty tours."
            >
              {filteredItems.length === 0 ? (
                <div className="bg-[#0d1410]/80 p-12 text-center rounded-3xl border border-amber-400/20">
                  <ImageIcon className="w-12 h-12 text-emerald-500/40 mx-auto mb-3" />
                  <p className="text-sm font-extrabold text-white">No gallery items found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {filteredItems.map((item) => (
                    <article
                      key={item._id || item.id}
                      className="group relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 shadow-2xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-end min-h-[340px]"
                    >
                      {/* Background Image with Dark Gradient Overlay */}
                      <div className="absolute inset-0 z-0 overflow-hidden bg-emerald-950/40">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-emerald-500/30">
                            <ImageIcon size={48} />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090e0b] via-[#090e0b]/75 to-transparent" />
                      </div>

                      {/* Top Left Category Badge */}
                      {item.category && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-extrabold rounded-full uppercase tracking-wider shadow-lg">
                            <Sparkles size={11} className="text-amber-400" />
                            {item.category}
                          </span>
                        </div>
                      )}

                      {/* Bottom Content Area */}
                      <div className="relative z-10 p-6 space-y-2.5">
                        {item.date && (
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 font-mono">
                            <Calendar size={13} className="text-amber-400 shrink-0" />
                            <span>{item.date}</span>
                          </div>
                        )}

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
              )}
            </ContentSection>

          </div>
        </PortfolioPage>

      </div>
    </div>
  );
};

export default Gallery;