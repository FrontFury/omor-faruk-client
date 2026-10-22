import { ContentSection, InfoCard, PortfolioPage } from "../../components/PortfolioPage"
import { otherAcademicRoles } from "../../data/profileData"

const Workshops = () => (
  <PortfolioPage
    eyebrow="Academic service & training"
    title="Other Academic Experience"
    description="Examination, visiting faculty, and training roles documented in the supplied CV."
  >
    <ContentSection title="Academic Service & Visiting Faculty">
      <div className="grid gap-4 md:grid-cols-2">
        {otherAcademicRoles.map((item) => (
          <InfoCard
            key={`${item.role}-${item.organization}`}
            title={item.role}
            detail={item.organization}
          />
        ))}
      </div>
    </ContentSection>
    <ContentSection title="Interests & Activities">
      <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-sm leading-7 text-slate-700">
          The CV notes a strong interest in writing, research, business scenario
          analysis, and creative thinking. Language proficiency: Bangla
          (mother tongue) and English (well-versed in written and spoken
          English); some Hindi and Arabic can be understood and spoken.
        </p>
      </div>
    </ContentSection>
  </PortfolioPage>
)

export default Workshops
