import { Award } from "lucide-react"
import { ContentSection, InfoCard, PortfolioPage } from "../../components/PortfolioPage"
import { researchMetrics } from "../../data/profileData"

const Honors = () => (
  <PortfolioPage
    eyebrow="Academic recognition"
    title="Honors & Awards"
    description="Documented academic milestones and scholarly contributions."
  >
    <ContentSection title="Selected Academic Highlights">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {researchMetrics.map(({ value, label }) => (
          <InfoCard key={label} meta="CV highlight" title={value} detail={label} />
        ))}
        <InfoCard
          meta="Research funding"
          title="UGC-funded research project"
          detail="The CV notes an approved project on voluntary disclosure, board attributes, and firm performance."
        />
        <InfoCard
          meta="Scholarly service"
          title="Editorial board reviewer"
          detail="Reviewer under the Editorial Board of IGI Global Scientific Publishing."
        />
      </div>
    </ContentSection>
    <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      <Award size={20} className="mt-0.5 shrink-0" />
      <p>
        The supplied CV does not list separate award titles. This page therefore
        presents only the academic achievements and service documented in it.
      </p>
    </div>
  </PortfolioPage>
)

export default Honors
