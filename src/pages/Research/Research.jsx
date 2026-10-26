import React from 'react'
import { 
  BookOpen, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Bookmark, 
  CheckCircle2, 
  Award, 
  Layers, 
  Globe 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { ongoingProjects, publications, researchMetrics } from "../../data/profileData"

const Research = () => (
  <div className="w-full font-sans text-slate-100">
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      <PortfolioPage
        eyebrow="Scholarly Work & Impact"
        title="Research & Publications"
        description="Selected publications, ongoing research projects, and research impact information from the supplied academic CV."
      >
        <div className="space-y-8">

          {/* TOP HIGHLIGHT RESEARCH METRICS - MATCHES HOMEPAGE/ACADEMICS 4-CARD GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {researchMetrics.map(({ value, label }, idx) => (
              <div 
                key={label || idx} 
                className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                    {idx === 0 ? <FileText size={20} /> : idx === 1 ? <BookOpen size={20} /> : idx === 2 ? <Globe size={20} /> : <Award size={20} />}
                  </div>
                  <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Metrics
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

          {/* SECTION 1: RESEARCH PUBLICATIONS */}
          <ContentSection
            title="Research Publications"
            subtitle="The supplied CV includes the following recent published and accepted works."
          >
            <div className="space-y-4">
              {publications.map((paper, index) => (
                <article 
                  key={paper.title} 
                  className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
                >
                  <div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-amber-400 font-extrabold text-sm shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0 flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {paper.status && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                          <Sparkles size={12} className="text-amber-400" />
                          {paper.status}
                        </span>
                      )}
                      <span className="text-xs font-bold text-slate-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20">
                        {paper.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {paper.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-300">
                      <strong className="text-slate-400 font-medium">Authors:</strong> {paper.authors}
                    </p>

                    <div className="pt-2 border-t border-emerald-900/40 flex items-center justify-between text-xs">
                      <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                        <BookOpen size={14} className="text-amber-400 shrink-0" />
                        {paper.journal}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ContentSection>

          {/* SECTION 2: ONGOING RESEARCH PROJECTS */}
          <ContentSection 
            title="Ongoing Research Projects"
            subtitle="Active empirical investigations and doctoral research initiatives currently underway."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {ongoingProjects.map((project, index) => (
                <div 
                  key={project.title}
                  className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                      <span className="text-xs font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        Active Investigation
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20">
                      {project.detail}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-emerald-900/30">
                    <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      Empirical Methodology
                    </span>
                    <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      Scholarly Work
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>

          {/* SECTION 3: RESEARCH & REVIEWER PROFILE */}
          <ContentSection title="Research & Reviewer Profile">
            <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Reviewer Editorial Card */}
                <div className="bg-[#121c17]/60 p-5 rounded-2xl border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2.5 text-amber-400">
                    <ShieldCheck size={20} />
                    <h4 className="font-bold text-white text-sm">Editorial Board Reviewer</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Serving as an active reviewer under the Editorial Board of <strong className="text-amber-300 font-semibold">IGI Global Scientific Publishing, New York, USA</strong>, a globally peer-reviewed scholarly publishing organization.
                  </p>
                </div>

                {/* Authorship & Books Card */}
                <div className="bg-[#121c17]/60 p-5 rounded-2xl border border-emerald-500/20 space-y-3">
                  <div className="flex items-center gap-2.5 text-amber-400">
                    <Bookmark size={20} />
                    <h4 className="font-bold text-white text-sm">Authorship & Textbook Heritage</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    Over <strong className="text-amber-300 font-semibold">15 years of authorship</strong> and editorial experience in academic publishing, including authorship of a Business Dictionary and multiple university-level textbooks.
                  </p>
                </div>

              </div>

              {/* Verified Source Disclaimer */}
              <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between text-[11px] text-slate-400">
                <span className="italic">
                  * Research impact metrics are reproduced directly from official verified CV records.
                </span>
                <span className="text-amber-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Official CV Record
                </span>
              </div>

            </div>
          </ContentSection>

        </div>
      </PortfolioPage>

    </div>
  </div>
)

export default Research