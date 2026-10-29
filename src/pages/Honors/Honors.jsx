import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hook/useAxiosSecure'
import { 
  Award, 
  Sparkles, 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  GraduationCap,
  Loader2,
  Calendar,
  ExternalLink,
  Building2
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"

const summaryMetrics = [
  { value: "UGC Grant", label: "Approved Research Project", icon: Landmark },
  { value: "IGI Global", label: "Editorial Board Reviewer", icon: ShieldCheck },
  { value: "11 Books", label: "Published Textbooks & References", icon: Star },
  { value: "DU Scholar", label: "First Class Distinction (MBA)", icon: GraduationCap }
];

const Honors = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch honors & awards from backend API
  const { data: honors = [], isLoading } = useQuery({
    queryKey: ["honors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/honors");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3 bg-[#0d1410]/80 rounded-3xl border border-amber-400/20 my-8">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        <span className="text-xs font-mono text-emerald-300">Loading honors & recognition data...</span>
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Academic Recognition"
          title="Honors & Awards"
          description="Documented academic milestones, scholarly research grants, and peer-review contributions from verified academic records."
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
                      Recognition
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

            {/* SECTION 1: DYNAMIC HONORS & AWARDS FROM BACKEND */}
            <ContentSection 
              title="Selected Academic Honors & Achievements"
              subtitle="Documented scholarly research achievements, awards, funded projects, and special recognitions."
            >
              {honors.length === 0 ? (
                <div className="bg-[#0d1410]/80 p-8 text-center rounded-3xl border border-amber-400/20 text-slate-400 text-xs font-mono">
                  No honors or awards records found.
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                  {honors.map((item, index) => {
                    const honorTitle = item.title || item.name || "Academic Recognition";
                    const issuerName = item.issuer || item.organization;
                    const associatedWith = item.associatedWith;
                    const issueDate = item.issueDate || item.year;
                    const verificationUrl = item.verificationUrl || item.link;
                    const description = item.description;
                    const image = item.image;

                    return (
                      <div 
                        key={item._id || index}
                        className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-4"
                      >
                        <div className="space-y-3">
                          {/* Image Banner / Thumbnail (if available) */}
                          {image && (
                            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-950/40">
                              <img 
                                src={image} 
                                alt={honorTitle} 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          )}

                          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              <Sparkles size={11} className="text-amber-400" />
                              {associatedWith ? associatedWith : "Honor & Award"}
                            </span>
                            {issueDate && (
                              <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                                <Calendar size={11} /> {issueDate}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                            {honorTitle}
                          </h3>

                          {issuerName && (
                            <p className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                              <Building2 size={13} className="shrink-0" />
                              {issuerName}
                            </p>
                          )}

                          {description && (
                            <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-3.5 rounded-2xl border border-emerald-500/20">
                              {description}
                            </p>
                          )}
                        </div>

                        <div className="pt-2 border-t border-emerald-900/30 flex items-center justify-between text-xs">
                          <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            Verified Award
                          </span>
                          {verificationUrl && (
                            <a
                              href={verificationUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors"
                            >
                              Verify <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
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
  );
};

export default Honors;