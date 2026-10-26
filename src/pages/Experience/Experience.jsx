import React from 'react'
import { 
  BriefcaseBusiness, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Users 
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { academicExperience, administrativeExperience } from "../../data/profileData"

// Custom styled experience list matching the Academics card layout
const ExperienceList = ({ items, type }) => (
  <div className="grid gap-5">
    {items.map((item, idx) => (
      <div 
        key={`${item.role}-${item.duration}`}
        className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4"
      >
        <div className="space-y-3">
          {/* Header & Duration Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold rounded-full tracking-wide">
              <Calendar size={13} className="text-amber-400 shrink-0" />
              {item.duration}
            </span>
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wider">
              {type === "admin" ? "Leadership & Governance" : "Faculty Appointment"}
            </span>
          </div>

          {/* Role & Organization */}
          <div>
            <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
              {item.role}
            </h3>
            <p className="text-xs text-slate-300 font-medium mt-1.5 flex items-center gap-2">
              <Building2 size={14} className="text-emerald-400 shrink-0" />
              {item.organization}
            </p>
          </div>

          {/* Optional Details or Highlighted Bullet */}
          {item.description && (
            <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-3.5 rounded-2xl border border-emerald-500/20">
              {item.description}
            </p>
          )}
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-emerald-900/30">
          <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
            {type === "admin" ? "Administrative Leadership" : "Academic Pedagogy"}
          </span>
          <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
            DIIT Campus
          </span>
        </div>
      </div>
    ))}
  </div>
)

const Experience = () => (
  <div className="w-full font-sans text-slate-100">
    <div className="w-full max-w-7xl mx-auto space-y-8">
      
      <PortfolioPage
        eyebrow="Career & Leadership"
        title="Professional Experience"
        description="Academic teaching and administrative appointments at Daffodil Institute of Information & Technology."
      >
        <div className="space-y-8">

          {/* TOP HIGHLIGHT STAT CARDS - MATCHES ACADEMICS 4-CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            
            {/* Stat 1: Leadership */}
            <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Leadership
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  Assistant Director
                </h4>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">Administration & Planning</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Institutional governance & strategic campus operations
                </p>
              </div>
            </div>

            {/* Stat 2: Academic Tenure */}
            <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                  <Award size={20} />
                </div>
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                  Tenure
                </span>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-extrabold text-amber-400">
                  12+ Years <span className="text-xs font-bold text-slate-400">Service</span>
                </div>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">Senior Assistant Professor</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Continuous academic leadership at DIIT
                </p>
              </div>
            </div>

            {/* Stat 3: Institution */}
            <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                  <Building2 size={20} />
                </div>
                <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                  Institution
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  DIIT Campus
                </h4>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">Daffodil Institute of Info Tech</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Under National University Affiliation
                </p>
              </div>
            </div>

            {/* Stat 4: Roles Delivered */}
            <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                  <Users size={20} />
                </div>
                <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                  Appointments
                </span>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-extrabold text-white">Dual Tier</div>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">Executive & Academic</p>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Dual-responsibility institutional administrative duties
                </p>
              </div>
            </div>

          </div>

          {/* SECTIONS GRID */}
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            
            {/* SECTION 1: ADMINISTRATIVE EXPERIENCE */}
            <ContentSection 
              title="Administrative Experience"
              subtitle="Executive oversight, organizational management, and institutional governance appointments."
            >
              <ExperienceList items={administrativeExperience} type="admin" />
            </ContentSection>

            {/* SECTION 2: ACADEMIC EXPERIENCE */}
            <ContentSection 
              title="Academic Experience"
              subtitle="Faculty appointments, academic mentoring, and curriculum execution progression."
            >
              <ExperienceList items={academicExperience} type="academic" />
            </ContentSection>

          </div>

        </div>
      </PortfolioPage>

    </div>
  </div>
)

export default Experience