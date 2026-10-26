import React from 'react'
import { 
  UserCheck, 
  Building2, 
  PhoneCall, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  GraduationCap, 
  FileCheck 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { references } from "../../data/profileData"

const summaryMetrics = [
  { value: "02 Referees", label: "Senior Academic Endorsements", icon: UserCheck },
  { value: "DU Faculty", label: "University of Dhaka Professors", icon: GraduationCap },
  { value: "Verified", label: "Direct Phone & Mail Contact", icon: PhoneCall },
  { value: "CV Record", label: "Transcribed Official References", icon: ShieldCheck }
]

const Referees = () => (
  <div className="w-full font-sans text-slate-100">
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      <PortfolioPage
        eyebrow="Academic & Professional Endorsements"
        title="References"
        description="Senior academic referees and professional recommendations listed in the supplied academic CV."
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
                    Endorsement
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

          {/* SECTION 1: PROFESSIONAL REFERENCES CARDS */}
          <ContentSection
            title="Professional & Academic References"
            subtitle="Contact details and academic positions are presented as supplied in the verified source CV."
          >
            <div className="grid gap-6 md:grid-cols-2 items-stretch">
              {references.map((reference, index) => (
                <div 
                  key={reference.name || index}
                  className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-5"
                >
                  <div className="space-y-4">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                        <Sparkles size={11} className="text-amber-400" />
                        Referee {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        Senior Faculty
                      </span>
                    </div>

                    {/* Referee Info */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                        {reference.name}
                      </h3>
                      <p className="text-xs font-semibold text-amber-400">
                        {reference.position}
                      </p>
                      <p className="text-xs text-slate-300 font-medium mt-2 flex items-center gap-2">
                        <Building2 size={15} className="text-emerald-400 shrink-0" />
                        {reference.organization}
                      </p>
                    </div>

                    {/* Additional Details if available */}
                    {reference.email && (
                      <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                        <Mail size={14} className="text-amber-400 shrink-0" />
                        <span>{reference.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Contact Action Footer */}
                  <div className="pt-4 border-t border-emerald-900/40 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`tel:${reference.phone ? reference.phone.replace(/[^\d+]/g, "") : ""}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-4 py-2.5 rounded-2xl hover:border-amber-400/50 hover:bg-emerald-900/60 hover:text-amber-200 transition-all"
                    >
                      <PhoneCall size={14} className="text-amber-400" />
                      <span>Contact: {reference.phone}</span>
                    </a>

                    <span className="text-[10px] font-semibold bg-emerald-950/60 text-slate-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      Verified Reference
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>

        </div>
      </PortfolioPage>

    </div>
  </div>
)

export default Referees