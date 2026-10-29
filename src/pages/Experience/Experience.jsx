import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import {
  Building2,
  ShieldCheck,
  Calendar,
  Award,
  Users,
  Loader2,
  Sparkles,
  MapPin,
  Briefcase,
} from "lucide-react";
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage";

const Experience = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch experiences from API
  const { data: experiences = [], isLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const res = await axiosSecure.get("/experiences");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3 bg-[#0d1410]/80 rounded-3xl border border-amber-400/20 my-8">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        <span className="text-xs font-mono text-emerald-300">Loading professional experiences...</span>
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <PortfolioPage
          eyebrow="Career & Leadership"
          title="Professional Experience"
          description="Academic teaching and administrative appointments at Daffodil Institute of Information & Technology."
        >
          <div className="space-y-8">

            {/* TOP HIGHLIGHT STAT CARDS */}
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
                    Vice Principal
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
                  <div className="text-3xl font-extrabold text-white">{experiences.length} Total</div>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">Executive & Academic</p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Integrated career timeline & leadership records
                  </p>
                </div>
              </div>
            </div>

            {/* SINGLE COMBINED EXPERIENCES SECTION */}
            <ContentSection
              title="Career & Leadership Track"
              subtitle="Comprehensive timeline of academic, research, and administrative positions held."
            >
              {experiences.length === 0 ? (
                <div className="bg-[#0d1410]/80 p-12 text-center rounded-3xl border border-amber-400/20">
                  <Briefcase className="w-12 h-12 text-emerald-500/40 mx-auto mb-3" />
                  <p className="text-sm font-extrabold text-white">No experience records found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiences.map((item) => {
                    const durationText =
                      item.duration ||
                      `${item.startDate || ""} - ${item.isCurrent ? "Present" : item.endDate || ""}`;
                    const orgName =
                      item.company || item.organization || "Daffodil Institute of Information & Technology (DIIT)";

                    return (
                      <div
                        key={item._id}
                        className="relative overflow-hidden rounded-3xl border border-emerald-900/60 bg-[#0a110d]/90 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group space-y-4"
                      >
                        <div className="space-y-3">
                          {/* Top Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/40 pb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold rounded-full font-mono">
                              <Calendar size={13} className="text-amber-400 shrink-0" />
                              {durationText}
                            </span>
                            {item.isCurrent && (
                              <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                                <Sparkles size={11} />
                                Active Role
                              </span>
                            )}
                          </div>

                          {/* Role & Company */}
                          <div>
                            <h3 className="text-lg md:text-xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                              {item.role}
                            </h3>
                            <p className="text-xs text-emerald-300 font-semibold mt-1.5 flex items-center gap-2">
                              <Building2 size={14} className="text-amber-400 shrink-0" />
                              {orgName}
                            </p>
                            {item.location && (
                              <p className="text-[11px] text-slate-400 font-mono mt-1 flex items-center gap-1.5">
                                <MapPin size={12} className="text-emerald-500 shrink-0" />
                                {item.location}
                              </p>
                            )}
                          </div>

                          {/* Description */}
                          {item.description && (
                            <p className="text-xs leading-relaxed text-slate-300 bg-[#121c17]/60 p-4 rounded-2xl border border-emerald-500/10 mt-2">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Footer Badges */}
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-emerald-900/40">
                          <span className="text-[10px] font-semibold bg-[#121c17] text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            Higher Education
                          </span>
                          <span className="text-[10px] font-semibold bg-[#121c17] text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            DIIT Campus
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

export default Experience;