import React from 'react'
import { 
  BookOpen, 
  Library, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  BookMarked, 
  FileCheck 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { books } from "../../data/profileData"

const summaryMetrics = [
  { value: "11 Books", label: "Authored & Co-Authored Titles", icon: BookOpen },
  { value: "NLS", label: "National Library Registered", icon: Library },
  { value: "Dual", label: "Bangla & English Editions", icon: BookMarked },
  { value: "15+ Yrs", label: "Academic Publishing Heritage", icon: Bookmark }
]

const Courses = () => (
  <div className="w-full font-sans text-slate-100">
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      <PortfolioPage
        eyebrow="Authorship & Academic Resources"
        title="Published Books"
        description="Eleven authored and co-authored accounting, business, and management textbooks listed in the supplied academic CV."
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
                    Publications
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

          {/* SECTION 1: BOOKS & TEXTBOOKS LIST */}
          <ContentSection
            title="Books & Textbooks Catalog"
            subtitle="Bibliographic details are transcribed directly from the verified academic record."
          >
            <ol className="grid grid-cols-1 gap-4">
              {books.map((book, index) => (
                <li 
                  key={book || index} 
                  className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-5 sm:p-6 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 group"
                >
                  {/* Number Badge */}
                  <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-amber-400 font-extrabold text-sm shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Book Details */}
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        <Sparkles size={11} className="text-amber-400" />
                        Academic Publication
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-slate-400">
                        Vol. {index + 1}
                      </span>
                    </div>

                    <p className="text-sm font-semibold leading-relaxed text-slate-100 group-hover:text-amber-300 transition-colors">
                      {book}
                    </p>

                    <div className="pt-2 border-t border-emerald-900/30 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                        Textbook & Reference
                      </span>
                      <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                        Curriculum Aligned
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </ContentSection>
    

        </div>
      </PortfolioPage>

    </div>
  </div>
)

export default Courses