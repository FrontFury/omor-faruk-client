import React from 'react'
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Languages, 
  BrainCircuit, 
  FileCheck 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { otherAcademicRoles } from "../../data/profileData"

const summaryMetrics = [
  { value: "Examiner", label: "National University Service", icon: GraduationCap },
  { value: "Visiting", label: "Guest Faculty Appointments", icon: Building2 },
  { value: "Research", label: "Business Scenario Analysis", icon: BrainCircuit },
  { value: "4 Languages", label: "Multilingual Communication", icon: Languages }
]

const languages = [
  { name: "Bangla", level: "Mother Tongue", status: "Native" },
  { name: "English", level: "Written & Spoken", status: "Proficient" },
  { name: "Hindi", level: "Understood & Spoken", status: "Conversational" },
  { name: "Arabic", level: "Understood & Spoken", status: "Conversational" }
]

const Workshops = () => (
  <div className="w-full font-sans text-slate-100">
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      <PortfolioPage
        eyebrow="Academic Service & Training"
        title="Other Academic Experience"
        description="Examination, visiting faculty appointments, academic service, and scholarly interests documented in the supplied academic CV."
      >
        <div className="space-y-8">

          {/* TOP HIGHLIGHT STAT CARDS - 4-CARD GRID */}
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
                    Academic Service
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

          {/* SECTION 1: ACADEMIC SERVICE & VISITING FACULTY CARDS */}
          <ContentSection 
            title="Academic Service & Visiting Faculty"
            subtitle="External academic engagements, examination committee roles, and visiting faculty appointments."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {otherAcademicRoles.map((item, idx) => (
                <div 
                  key={`${item.role}-${item.organization}` || idx}
                  className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        <Sparkles size={11} className="text-amber-400" />
                        Academic Role
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        External Appointment
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {item.role}
                    </h3>

                    <p className="text-xs text-slate-300 font-medium flex items-center gap-2">
                      <Building2 size={15} className="text-emerald-400 shrink-0" />
                      {item.organization}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-emerald-900/30 flex flex-wrap gap-2">
                    <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      Faculty Services
                    </span>
                    <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      CV Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>

          {/* SECTION 2: INTERESTS & LANGUAGE PROFICIENCY */}
          <ContentSection 
            title="Scholarly Interests & Language Competency"
            subtitle="Academic focus areas, creative analytical pursuits, and multilingual communication abilities."
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              
              {/* Scholarly Interests Card */}
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-emerald-900/40 pb-3">
                    <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                      <BrainCircuit size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-base">Academic & Analytical Pursuits</h4>
                      <p className="text-[11px] text-emerald-300">Core Scholarly Interests</p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20">
                    Demonstrated passion for scholarly research, academic book writing, empirical corporate finance analysis, complex business scenario modeling, and creative problem-solving.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-900/30">
                  {["Academic Writing", "Research Methodology", "Scenario Analysis", "Creative Thinking"].map((interest) => (
                    <span 
                      key={interest} 
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-3 py-1 rounded-full"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Language Proficiency Card */}
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 border-b border-emerald-900/40 pb-3 mb-4">
                    <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                      <Languages size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-base">Multilingual Proficiency</h4>
                      <p className="text-[11px] text-emerald-300">Global Communication Skills</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang) => (
                      <div 
                        key={lang.name} 
                        className="bg-[#121c17]/60 p-3.5 rounded-2xl border border-emerald-500/20 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{lang.name}</span>
                          <span className="text-[9px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                            {lang.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">{lang.level}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic pt-2 border-t border-emerald-900/30">
                  * Language skills and academic interest records are verified from official CV documentation.
                </p>
              </div>

            </div>
          </ContentSection>

          {/* FOOTER CALLOUT CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-5 md:p-6 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs leading-relaxed text-slate-300">
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0">
                <FileCheck size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                  Institutional Record Compliance
                  <span className="text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                    Verified
                  </span>
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  All visiting appointments, examination board roles, and academic service records are transcribed from official files.
                </p>
              </div>
            </div>

            <div className="text-amber-300 font-semibold flex items-center gap-1.5 shrink-0 text-xs bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-2 rounded-2xl">
              <CheckCircle2 size={14} className="text-amber-400" />
              <span>Academic Appointments</span>
            </div>
          </div>

        </div>
      </PortfolioPage>

    </div>
  </div>
)

export default Workshops