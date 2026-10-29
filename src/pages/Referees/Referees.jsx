import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hook/useAxiosSecure'
import { 
  UserCheck, 
  Building2, 
  PhoneCall, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Loader2,
  User
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"

const Referees = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch references from backend API endpoint
  const { data: references = [], isLoading } = useQuery({
    queryKey: ["references"],
    queryFn: async () => {
      const res = await axiosSecure.get("/references");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3 bg-[#0d1410]/80 rounded-3xl border border-amber-400/20 my-8">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        <span className="text-xs font-mono text-emerald-300">Loading reference endorsements...</span>
      </div>
    );
  }

  // Summary Metrics
  const totalReferees = references.length > 0 ? `${String(references.length).padStart(2, '0')} Referees` : "02 Referees";
  const summaryMetrics = [
    { value: totalReferees, label: "Senior Academic Endorsements", icon: UserCheck },
    { value: "DU Faculty", label: "University of Dhaka Professors", icon: GraduationCap },
    { value: "Verified", label: "Direct Phone & Mail Contact", icon: PhoneCall },
    { value: "CV Record", label: "Transcribed Official References", icon: ShieldCheck }
  ];

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Academic & Professional Endorsements"
          title="References"
          description="Senior academic referees and professional recommendations listed in the verified academic records."
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
                      Endorsement
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

            {/* SECTION 1: PROFESSIONAL REFERENCES CARDS FROM BACKEND */}
            <ContentSection
              title="Professional & Academic References"
              subtitle="Contact details and academic positions are presented as supplied in the verified source database."
            >
              {references.length === 0 ? (
                <div className="bg-[#0d1410]/80 p-8 text-center rounded-3xl border border-amber-400/20 text-slate-400 text-xs font-mono">
                  No reference records found.
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 items-stretch">
                  {references.map((reference, index) => {
                    const refereeName = reference.name || "Academic Referee";
                    const refereeDesignation = reference.designation || reference.position;
                    const refereeOrg = reference.organization || reference.institution;
                    const refereePhone = reference.phone;
                    const refereeEmail = reference.email;
                    const refereeImage = reference.image;

                    return (
                      <div 
                        key={reference._id || index}
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

                          {/* Referee Profile Header */}
                          <div className="flex items-start gap-4">
                            {refereeImage ? (
                              <img 
                                src={refereeImage} 
                                alt={refereeName} 
                                className="w-14 h-14 rounded-2xl object-cover border border-emerald-500/30 shrink-0 bg-emerald-950/50"
                              />
                            ) : (
                              <div className="p-3.5 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0">
                                <User size={24} />
                              </div>
                            )}

                            <div className="space-y-1">
                              <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                                {refereeName}
                              </h3>
                              {refereeDesignation && (
                                <p className="text-xs font-semibold text-amber-400">
                                  {refereeDesignation}
                                </p>
                              )}
                              {refereeOrg && (
                                <p className="text-xs text-slate-300 font-medium mt-1 flex items-center gap-1.5">
                                  <Building2 size={14} className="text-emerald-400 shrink-0" />
                                  {refereeOrg}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Email info if present */}
                          {refereeEmail && (
                            <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#121c17]/60 p-3 rounded-2xl border border-emerald-500/20">
                              <Mail size={14} className="text-amber-400 shrink-0" />
                              <a href={`mailto:${refereeEmail}`} className="hover:text-amber-300 transition-colors truncate">
                                {refereeEmail}
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Contact Action Footer */}
                        <div className="pt-4 border-t border-emerald-900/40 flex flex-wrap items-center justify-between gap-3">
                          {refereePhone ? (
                            <a
                              href={`tel:${refereePhone.replace(/[^\d+]/g, "")}`}
                              className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-4 py-2.5 rounded-2xl hover:border-amber-400/50 hover:bg-emerald-900/60 hover:text-amber-200 transition-all"
                            >
                              <PhoneCall size={14} className="text-amber-400" />
                              <span>Contact: {refereePhone}</span>
                            </a>
                          ) : (
                            <span className="text-xs text-slate-400 italic">Contact phone available on request</span>
                          )}

                          <span className="text-[10px] font-semibold bg-emerald-950/60 text-slate-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                            Verified Reference
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </ContentSection>

          </div>
        </PortfolioPage>

      </div>
    </div>
  );
};

export default Referees;