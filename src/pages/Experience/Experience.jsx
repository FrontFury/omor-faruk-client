import { BriefcaseBusiness } from "lucide-react"
import { ContentSection, InfoCard, PortfolioPage } from "../../components/PortfolioPage"
import { academicExperience, administrativeExperience } from "../../data/profileData"

const ExperienceList = ({ items }) => (
  <div className="grid gap-4">
    {items.map((item) => (
      <InfoCard
        key={`${item.role}-${item.duration}`}
        meta={item.duration}
        title={item.role}
        detail={item.organization}
      />
    ))}
  </div>
)

const Experience = () => (
  <PortfolioPage
    eyebrow="Career & leadership"
    title="Professional Experience"
    description="Academic teaching and administrative appointments at Daffodil Institute of Information & Technology."
  >
    <div className="grid gap-8 lg:grid-cols-2">
      <ContentSection title="Administrative Experience">
        <ExperienceList items={administrativeExperience} />
      </ContentSection>
      <ContentSection title="Academic Experience">
        <ExperienceList items={academicExperience} />
      </ContentSection>
    </div>
    <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-950">
      <BriefcaseBusiness className="mt-1 shrink-0" size={20} />
      <p>
        These appointments and service dates are transcribed from the provided
        CV. “Present” reflects the source document's “Onward” wording.
      </p>
    </div>
  </PortfolioPage>
)

export default Experience
