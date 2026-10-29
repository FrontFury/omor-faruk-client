import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import {
  Monitor,
  Binary,
  BrainCircuit,
  BookOpen,
  Wrench,
  Code2,
  Lightbulb,
  ArrowRight,
  Loader2,
  Cpu,
  Sparkles,
} from "lucide-react";
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage";

// Helper function to render correct Lucide icon based on backend `iconType`
const getExpertiseIcon = (iconType) => {
  switch ((iconType || "").toLowerCase()) {
    case "monitor":
    case "computer":
      return Monitor;
    case "binary":
    case "data":
      return Binary;
    case "brain":
    case "braincircuit":
    case "methodology":
      return BrainCircuit;
    case "code":
    case "code2":
      return Code2;
    case "wrench":
    case "tool":
      return Wrench;
    case "lightbulb":
      return Lightbulb;
    default:
      return Cpu;
  }
};

const summaryMetrics = [
  { value: "03+", label: "Technical Competency Pillars", icon: Wrench },
  { value: "SPSS", label: "Empirical Research Software", icon: Binary },
  { value: "SaaS", label: "EdTech & Smart Edu Systems", icon: Code2 },
  { value: "15+ Yrs", label: "Analytical & Academic Mastery", icon: Lightbulb },
];

const Tools = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch expertises from API endpoint
  const { data: expertises = [], isLoading } = useQuery({
    queryKey: ["expertises"],
    queryFn: async () => {
      const res = await axiosSecure.get("/expertises");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3 bg-[#0d1410]/80 rounded-3xl border border-amber-400/20 my-8">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        <span className="text-xs font-mono text-emerald-300">Loading skills & expertise...</span>
      </div>
    );
  }

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <PortfolioPage
          eyebrow="Teaching & Professional Strengths"
          title="Areas of Expertise"
          description="Academic subject expertise, office and research tools, and professional skills listed in the supplied academic CV."
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
                      Proficiency
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

            {/* SECTION 1: SKILLS & TOOLS CARDS FROM BACKEND */}
            <ContentSection
              title="Skills & Technical Tools"
              subtitle="Categorized breakdown of software tools, research platforms, and core professional competencies."
            >
              {expertises.length === 0 ? (
                <div className="bg-[#0d1410]/80 p-8 text-center rounded-3xl border border-amber-400/20 text-slate-400 text-xs font-mono">
                  No expertise categories found.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {expertises.map((item) => {
                    const IconComponent = getExpertiseIcon(item.iconType);
                    const badgeText = item.category || "Methodology";

                    return (
                      <article
                        key={item._id || item.title}
                        className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-6 md:p-7 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group space-y-5"
                      >
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-4">
                            <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                              <IconComponent size={22} />
                            </div>
                            <span className="text-[10px] font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {badgeText}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Skills Tag Pills */}
                        {item.skills && item.skills.length > 0 && (
                          <div className="pt-3 border-t border-emerald-900/40">
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-950/80 text-slate-200 border border-emerald-500/30 px-3 py-1.5 rounded-full hover:border-amber-400/40 hover:text-white transition-colors"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80" />
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}
            </ContentSection>

            {/* FOOTER ROUTING CALLOUT CARD */}
            <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-5 md:p-6 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs leading-relaxed text-slate-300">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-2xl text-amber-400 shrink-0">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                    Looking for Specific Course Curricula?
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                      Academic Note
                    </span>
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Course-specific subjects and teaching expertise are listed in detail under the Academic section.
                  </p>
                </div>
              </div>

              <Link
                className="inline-flex items-center gap-2 font-bold text-amber-300 bg-emerald-950/80 border border-emerald-500/30 px-4 py-2.5 rounded-2xl hover:border-amber-400/50 hover:bg-emerald-900/60 hover:text-amber-200 transition-all shrink-0 text-xs"
                to="/academic-degree"
              >
                <span>Academic Background</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </PortfolioPage>
      </div>
    </div>
  );
};

export default Tools;