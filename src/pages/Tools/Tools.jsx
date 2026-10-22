import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { Link } from "react-router-dom"

const skillGroups = [
  {
    title: "Computer Literacy",
    description:
      "Well-versed in computer office packages, Google applications, and internet tools.",
    skills: ["Microsoft Office", "Google Applications", "Internet tools"],
  },
  {
    title: "Academic Software",
    description: "Software and educational platforms noted in the supplied CV.",
    skills: ["SPSS", "Smart Edu (SaaS)"],
  },
  {
    title: "Academic Strengths",
    description:
      "Teaching and research strengths reflected in the academic record.",
    skills: [
      "Accounting and financial analysis",
      "Business scenario analysis",
      "Research and academic writing",
      "Creative thinking",
    ],
  },
]

const Tools = () => (
  <PortfolioPage
    eyebrow="Teaching & professional strengths"
    title="Areas of Expertise"
    description="Academic subject expertise, office and research tools, and professional skills listed in the supplied CV."
  >
    <ContentSection title="Skills & Tools">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map(({ title, description, skills }) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-lg font-bold text-[#153d30]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </ContentSection>
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      Course-specific areas of expertise are listed on the{" "}
      <Link className="font-semibold underline underline-offset-2" to="/academic-degree">
        Academic Background
      </Link>{" "}
      page.
    </div>
  </PortfolioPage>
)

export default Tools
