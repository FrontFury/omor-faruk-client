import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { academicQualifications, expertise, profile } from "../../data/profileData"

const Academics = () => (
  <PortfolioPage
    eyebrow="Education & subject expertise"
    title="Academic Background"
    description={`PhD scholar at ${profile.credentials[0].replace("PhD Scholar, ", "")}, with graduate and undergraduate education in Accounting & Information Systems from the University of Dhaka.`}
  >
    <ContentSection
      title="Academic Qualifications"
      subtitle="Degrees and public examination results listed in the supplied CV."
    >
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-emerald-50 text-emerald-950">
            <tr>
              {["Exam", "Concentration / Major", "University / Board", "CGPA", "Passing year", "Duration"].map((item) => (
                <th key={item} className="border-b border-emerald-100 px-4 py-3 font-semibold">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {academicQualifications.map((row) => (
              <tr key={row.exam} className="text-slate-700 odd:bg-white even:bg-slate-50/70">
                {[row.exam, row.major, row.institution, row.result, row.year, row.duration].map((value, index) => (
                  <td key={`${row.exam}-${index}`} className="border-b border-slate-100 px-4 py-3 align-top">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs leading-5 text-slate-500">
        The source CV lists MBA as 2011 and BBA as 2010; both are reproduced as provided.
      </p>
    </ContentSection>

    <ContentSection
      title="Areas of Expertise (Academic)"
      subtitle="Courses taught at postgraduate and undergraduate levels."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(expertise).map(([level, subjects]) => (
          <div key={level} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="mb-4 border-b border-emerald-100 pb-3 text-lg font-bold capitalize text-[#153d30]">
              {level === "postgraduate" ? "Post-Graduate Program" : "Under Graduate Program"}
            </h3>
            <ul className="grid gap-2 text-sm leading-6 text-slate-700">
              {subjects.map((subject) => (
                <li key={subject} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                  {subject}
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
