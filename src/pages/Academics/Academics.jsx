import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { academicQualifications, expertise, profile } from "../../data/profileData"
import { GraduationCap, BookCheck } from "lucide-react"

const Academics = () => (
  <PortfolioPage
    eyebrow="Education & Subject Expertise"
    title="Academic Background"
    description={`PhD scholar at ${profile.credentials[0].replace("PhD Scholar, ", "")}, with graduate and undergraduate education in Accounting & Information Systems from the University of Dhaka.`}
  >
    {/* ACADEMIC QUALIFICATIONS SECTION */}
    <ContentSection
      title="Academic Qualifications"
      subtitle="Degrees and public examination results listed in the supplied CV."
    >
      <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0e1713] p-5 sm:p-7 shadow-2xl backdrop-blur-2xl">
        {/* Glowing Background Accent Circles */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* High Contrast Table Container */}
        <div className="relative z-10 overflow-x-auto rounded-2xl border border-emerald-500/30 bg-[#060b08] shadow-inner scrollbar-none [::-webkit-scrollbar]:hidden">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-[#122019] text-amber-300 border-b border-amber-400/30">
              <tr>
                {["Exam", "Concentration / Major", "University / Board", "CGPA / Result", "Passing Year", "Duration"].map((header) => (
                  <th key={header} className="px-5 py-4 font-extrabold uppercase tracking-widest text-[11px] text-amber-400">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/40">
              {academicQualifications.map((row) => (
                <tr 
                  key={row.exam} 
                  className="transition-all duration-200 hover:bg-emerald-900/30 odd:bg-transparent even:bg-emerald-950/20"
                >
                  <td className="px-5 py-4 font-extrabold text-amber-300 text-base">{row.exam}</td>
                  <td className="px-5 py-4 font-semibold text-slate-100">{row.major}</td>
                  <td className="px-5 py-4 text-slate-300 font-medium">{row.institution}</td>
                  <td className="px-5 py-4">
                    <span className="inline-block rounded-md bg-amber-400/15 border border-amber-400/50 px-3 py-1 text-xs font-bold text-amber-300 shadow-sm">
                      {row.result}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-emerald-300 font-bold">{row.year}</td>
                  <td className="px-5 py-4 text-slate-400 text-xs font-medium">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs font-medium text-slate-400 italic">
          * The source CV lists MBA as 2011 and BBA as 2010; both are reproduced as provided.
        </p>
      </div>
    </ContentSection>

    {/* AREAS OF EXPERTISE SECTION */}
    <ContentSection
      title="Areas of Expertise (Academic)"
      subtitle="Courses taught at postgraduate and undergraduate levels."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(expertise).map(([level, subjects]) => (
          <div 
            key={level} 
            className="group relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#0e1713] p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-amber-400/50"
          >
            {/* Header with Icon Badge */}
            <div className="relative z-10 flex items-center gap-3 border-b border-emerald-500/30 pb-4 mb-5">
              <div className="p-2.5 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-400 shadow-sm">
                {level === "postgraduate" ? <GraduationCap size={22} /> : <BookCheck size={22} />}
              </div>
              <h3 className="text-lg font-bold tracking-tight">
                <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
                  {level === "postgraduate" ? "Post-Graduate Program" : "Under Graduate Program"}
                </span>
              </h3>
            </div>

            {/* Course List Items */}
            <ul className="relative z-10 grid gap-2.5 text-sm">
              {subjects.map((subject) => (
                <li 
                  key={subject} 
                  className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-[#060b08] px-4 py-3 text-slate-100 font-semibold transition-all duration-300 hover:border-amber-400/40 hover:bg-emerald-900/40 hover:text-white"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80" />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ContentSection>
  </PortfolioPage>
)

export default Academics