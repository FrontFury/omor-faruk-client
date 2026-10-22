import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"

const VoluntaryWork = () => (
  <PortfolioPage
    eyebrow="Community engagement"
    title="Voluntary & CSR Work"
    description="Community service and corporate social responsibility contributions."
  >
    <ContentSection title="Service & Community Contributions">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm leading-7 text-slate-700">
          The supplied CV does not include specific voluntary work or
          community-service activities. No roles or organizations have been
          added here without source information.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          This section can be completed with the activity name, organization,
          role, dates, and a short description of the contribution.
        </p>
      </div>
    </ContentSection>
  </PortfolioPage>
)

export default VoluntaryWork
