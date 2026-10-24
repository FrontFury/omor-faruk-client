import React from 'react'
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { academicQualifications, expertise, profile } from "../../data/profileData"
import { 
  GraduationCap, 
  BookCheck, 
  Award, 
  Building2, 
  Sparkles, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react"

const courseCodes = {
  postgraduate: ["MBA-601", "MBA-604", "MBA-612", "MBA-618", "MBA-620", "MBA-626", "MBA-631", "MBA-640"],
  undergraduate: ["ACT-101", "ACT-201", "ACT-306", "ACT-301", "FIN-102", "FIN-204", "FIN-308", "FIN-312", "BUS-100"]
}

const Academics = () => {
  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Education & Subject Expertise"
          title="Academic Background"
          description={`Ph.D. Scholar at Jagannath University, with graduate and undergraduate education in Accounting & Information Systems (AIS) from the premier Faculty of Business Studies, University of Dhaka.`}
        >
          <div className="space-y-8">
            
            {/* TOP HIGHLIGHT STAT CARDS - MATCHES HOME PAGE 4-CARD BOTTOM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              
              {/* Stat 1: Doctoral */}
              <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Doctoral
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    Ph.D. Scholar
                  </h4>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">Jagannath University</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Corporate Governance & Board Disclosure Dynamics
                  </p>
                </div>
              </div>

              {/* Stat 2: Excellence MBA */}
              <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                    <Award size={20} />
                  </div>
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                    Excellence
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-amber-400">
                    3.81 <span className="text-xs font-bold text-slate-400">/ 4.00</span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">MBA in AIS</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    First Class Honors, University of Dhaka
                  </p>
                </div>
              </div>

              {/* Stat 3: Alumni */}
              <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                    <Building2 size={20} />
                  </div>
                  <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                    Alumni
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    DU AIS
                  </h4>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">University of Dhaka</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Post-Graduate & Undergraduate Dual Scholar
                  </p>
                </div>
              </div>

              {/* Stat 4: Pedagogy */}
              <div className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                    Pedagogy
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-white">17+ Courses</div>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">Curricula Delivered</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Post-Graduate (MBA) & BBA Programs
                  </p>
                </div>
              </div>

            </div>

            {/* SECTION 1: ACADEMIC QUALIFICATIONS */}
            <ContentSection
              title="Academic Qualifications"
              subtitle="Comprehensive degree credentials from state & national academic councils."
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Degree Card 1: Ph.D. */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-4 hover:border-amber-400/30 transition duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-950/60 border border-emerald-500/30 text-amber-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                        <Sparkles size={13} className="text-amber-400" />
                        Ongoing Doctoral Research
                      </span>
                      <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                        Status: Advanced Stage
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-white">
                        Ph.D. in Business Administration (Scholar)
                      </h3>
                      <p className="text-xs font-bold text-amber-400 mt-1">
                        Concentration: Corporate Governance & CSR Reporting
                      </p>
                      <p className="text-xs text-slate-300 font-medium mt-2 flex items-center gap-2">
                        <Building2 size={14} className="text-emerald-400 shrink-0" />
                        Jagannath University, Dhaka
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20">
                      Conducting extensive empirical investigation on the efficacy of board diversity, corporate transparency, and supervisory audit committees in driving long-term sustainability and performance across emerging capital markets.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Empirical Finance", "Audit Oversight", "CSR Disclosure"].map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Degree Card 2: MBA */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-4 hover:border-amber-400/30 transition duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3">
                      <span className="text-xs font-semibold text-slate-300">
                        Passing Year: <strong className="text-amber-300">2011</strong> (1 Year Regular)
                      </span>
                      <span className="text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 rounded-full shadow-md">
                        CGPA: 3.81 / 4.00
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-white">
                        Master of Business Administration (MBA)
                      </h3>
                      <p className="text-xs font-bold text-amber-400 mt-1">
                        Major: Accounting & Information Systems (AIS)
                      </p>
                      <p className="text-xs text-slate-300 font-medium mt-2 flex items-center gap-2">
                        <Building2 size={14} className="text-emerald-400 shrink-0" />
                        University of Dhaka, Bangladesh
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20">
                      Earned top-tier academic honors in the prestigious AIS department. Comprehensive specialization in advanced managerial economics, international accounting standards (IFRS), and corporate strategic finance.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["First Class Division", "Faculty of Business Studies", "AIS Top Percentile"].map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Degree Card 3: BBA */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-4 hover:border-amber-400/30 transition duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3">
                      <span className="text-xs font-semibold text-slate-300">
                        Passing Year: <strong className="text-amber-300">2010</strong> (4 Years Integrated)
                      </span>
                      <span className="text-xs font-extrabold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                        CGPA: 3.56 / 4.00
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-white">
                        Bachelor of Business Administration (BBA)
                      </h3>
                      <p className="text-xs font-bold text-amber-400 mt-1">
                        Concentration: Accounting & Information Systems (AIS)
                      </p>
                      <p className="text-xs text-slate-300 font-medium mt-2 flex items-center gap-2">
                        <Building2 size={14} className="text-emerald-400 shrink-0" />
                        University of Dhaka, Bangladesh
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20">
                      Rigorous four-year quantitative curriculum emphasizing financial auditing, quantitative taxation models, computerized accounting systems, and corporate reporting governance.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Honors Graduate", "Statistical Finance", "Audit Systems"].map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Degree Card 4: HSC & SSC */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-4 hover:border-amber-400/30 transition duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3 mb-4">
                      <span className="text-xs font-semibold text-slate-300">
                        Secondary & Higher Secondary Foundations
                      </span>
                      <span className="text-[11px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-amber-400" />
                        Board Verified
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* HSC */}
                      <div className="bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white">Higher Secondary Certificate (HSC)</h4>
                          <p className="text-[11px] text-slate-400 mt-0.5">Year 2003 • Dhaka Board • Business Studies</p>
                        </div>
                        <span className="text-xs font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full shrink-0">
                          GPA: 4.20 / 5.00
                        </span>
                      </div>

                      {/* SSC */}
                      <div className="bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/20 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white">Secondary School Certificate (SSC)</h4>
                          <p className="text-[11px] text-slate-400 mt-0.5">Year 2001 • Dhaka Board • Business Studies</p>
                        </div>
                        <span className="text-xs font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full shrink-0">
                          GPA: 4.13 / 5.00
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic pt-2">
                    * The source CV records confirm graduate-graduation chronologies and official credentials across all verified boards.
                  </p>
                </div>

              </div>
            </ContentSection>

            {/* SECTION 2: AREAS OF EXPERTISE */}
            <ContentSection
              title="Areas of Expertise (Academic)"
              subtitle="Courses developed, structured, and taught at graduate and undergraduate tiers."
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {Object.entries(expertise).map(([level, subjects]) => (
                  <div 
                    key={level} 
                    className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-8 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Header */}
                      <div className="relative z-10 flex items-center gap-3.5 border-b border-emerald-900/40 pb-4 mb-4">
                        <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                          {level === "postgraduate" ? <GraduationCap size={22} /> : <BookCheck size={22} />}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
                              {level === "postgraduate" ? "Post-Graduate Program" : "Under Graduate Program"}
                            </span>
                          </h3>
                          <p className="text-[11px] font-medium text-slate-400">
                            {level === "postgraduate" ? "MBA / Masters Level Curricula" : "BBA Undergraduate Core Foundations"}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                        {level === "postgraduate" 
                          ? "Focusing on advanced financial theory, empirical reporting models, governance compliance, and capital investment policies." 
                          : "Building rigorous foundational accounting acumen, corporate budgeting protocols, and managerial cost controls."}
                      </p>

                      {/* Course List */}
                      <ul className="relative z-10 grid gap-3 text-sm">
                        {subjects.map((subject, idx) => (
                          <li 
                            key={subject} 
                            className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/20 bg-[#121c17]/60 px-4 py-3 text-slate-200 transition-all duration-300 hover:border-amber-400/30 hover:bg-emerald-950/40 hover:text-white"
                          >
                            <div className="flex items-center gap-3">
                              <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80" />
                              <span className="font-semibold text-slate-200 text-xs sm:text-sm">{subject}</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full shrink-0">
                              {courseCodes[level]?.[idx] || `${level === "postgraduate" ? "MBA" : "ACT"}-10${idx + 1}`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-emerald-900/40 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                      <span>Level: {level === "postgraduate" ? "Master of Business Administration" : "Bachelor of Business Administration"}</span>
                      <span className="text-emerald-300 font-bold">{subjects.length} Modules</span>
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
}

export default Academics