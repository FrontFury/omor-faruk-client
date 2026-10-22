import { ContentSection, InfoCard, PortfolioPage } from "../../components/PortfolioPage"
import { ongoingProjects, publications, researchMetrics } from "../../data/profileData"

const Research = () => (
  <PortfolioPage
    eyebrow="Scholarly work"
    title="Research & Publications"
    description="Selected publications, ongoing research projects, and research impact information from the supplied academic CV."
  >
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {researchMetrics.map(({ value, label }) => (
        <div key={label} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:p-5">
          <p className="text-2xl font-bold text-emerald-800 sm:text-3xl">{value}</p>
          <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">{label}</p>
        </div>
      ))}
    </section>

    <ContentSection
      title="Research Publications"
      subtitle="The supplied CV includes the following recent published and accepted works."
    >
      <div className="space-y-4">
        {publications.map((paper, index) => (
          <article key={paper.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-800">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {paper.status && (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                    {paper.status}
                  </span>
                )}
                <span className="text-xs font-medium text-slate-500">{paper.year}</span>
              </div>
              <h3 className="font-bold leading-6 text-slate-900">{paper.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{paper.authors}</p>
              <p className="mt-2 text-sm font-medium text-emerald-800">{paper.journal}</p>
            </div>
          </article>
        ))}
      </div>
    </ContentSection>

    <ContentSection title="Ongoing Research Projects">
      <div className="grid gap-4">
        {ongoingProjects.map((project, index) => (
          <InfoCard
            key={project.title}
            meta={`Project ${String(index + 1).padStart(2, "0")}`}
            title={project.title}
            detail={project.detail}
          />
        ))}
      </div>
    </ContentSection>

    <ContentSection title="Research & Reviewer Profile">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-6">
        <p>
          Serving as a reviewer under the Editorial Board of IGI Global
          Scientific Publishing, New York, USA, a peer-reviewed scholarly
          publishing organization.
        </p>
        <p className="mt-4">
          The CV reports over 15 years of authorship and editorial experience
          in academic books, including authorship of a Business Dictionary and
          multiple university-level textbooks.
        </p>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          Research impact figures are reproduced from the supplied CV and may
          change over time.
        </p>
      </div>
    </ContentSection>
  </PortfolioPage>
)

export default Research
