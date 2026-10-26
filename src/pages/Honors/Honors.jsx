import React from 'react'
import { 
  Award, 
  Sparkles, 
  Landmark, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  Star, 
  GraduationCap 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { researchMetrics } from "../../data/profileData"

const summaryMetrics = [
  { value: "UGC Grant", label: "Approved Research Project", icon: Landmark },
  { value: "IGI Global", label: "Editorial Board Reviewer", icon: ShieldCheck },
  { value: "11 Books", label: "Published Textbooks & References", icon: Star },
  { value: "DU Scholar", label: "First Class Distinction (MBA)", icon: GraduationCap }
]

const Honors = () => (
  <div className="w-full font-sans text-slate-100">
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      <PortfolioPage
        eyebrow="Academic Recognition"
        title="Honors & Awards"
        description="Documented academic milestones, scholarly research grants, and peer-review contributions from the supplied academic CV."
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
                    Recognition
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

          {/* SECTION 1: ACADEMIC HIGHLIGHT CARDS */}
          <ContentSection 
            title="Selected Academic Highlights"
            subtitle="Documented scholarly research achievements, funded projects, and peer-review appointments."
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              
              {/* Dynamic CV Highlights from researchMetrics */}
              {researchMetrics.map(({ value, label }, index) => (
                <div 
                  key={label || index}
                  className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        <Sparkles size={11} className="text-amber-400" />
                        CV Highlight
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Scholarly Record
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-amber-400 group-hover:text-amber-300 transition-colors">
                      {value}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-300">
                      {label}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-emerald-900/30 flex flex-wrap gap-2">
                    <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      Impact Metric
                    </span>
                    <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                </div>
              ))}

              {/* Research Funding Card */}
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <Landmark size={11} className="text-amber-400" />
                      Research Funding
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      UGC Approved
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    UGC-Funded Research Project
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-3.5 rounded-2xl border border-emerald-500/20">
                    The CV notes an approved project on voluntary disclosure, board attributes, and firm performance.
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-900/30 flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Empirical Study
                  </span>
                  <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Corporate Governance
                  </span>
                </div>
              </div>

              {/* Scholarly Service Card */}
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <ShieldCheck size={11} className="text-amber-400" />
                      Scholarly Service
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      International Editorial
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    Editorial Board Reviewer
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-3.5 rounded-2xl border border-emerald-500/20">
                    Serving as a reviewer under the Editorial Board of IGI Global Scientific Publishing, New York, USA.
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-900/30 flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Peer Review
                  </span>
                  <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    IGI Global USA
                  </span>
                </div>
              </div>

            </div>
          </ContentSection>

          {/* FOOTER CALLOUT CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-5 md:p-6 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs leading-relaxed text-slate-300">
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                  Documentation & Record Note
                  <span className="text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                    CV Transcribed
                  </span>
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  The supplied academic CV presents documented scholarly achievements, funded research, and peer-review services as verified honors.
                </p>
              </div>
            </div>

            <div className="text-amber-300 font-semibold flex items-center gap-1.5 shrink-0 text-xs bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-2 rounded-2xl">
              <CheckCircle2 size={14} className="text-amber-400" />
              <span>Verified Milestones</span>
            </div>
          </div>

        </div>
      </PortfolioPage>

    </div>
  </div>
)

export default Honors