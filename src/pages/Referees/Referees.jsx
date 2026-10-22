import { ContentSection, InfoCard, PortfolioPage } from "../../components/PortfolioPage"
import { references } from "../../data/profileData"

const Referees = () => (
  <PortfolioPage
    eyebrow="Academic references"
    title="References"
    description="Professional referees listed in the supplied CV."
  >
    <ContentSection
      title="Professional References"
      subtitle="Contact details are presented as supplied in the source CV."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {references.map((reference) => (
          <InfoCard
            key={reference.name}
            meta={reference.position}
            title={reference.name}
            detail={reference.organization}
          >
            <a
              href={`tel:${reference.phone.replace(/[^\d+]/g, "")}`}
              className="mt-4 inline-flex text-sm font-semibold text-emerald-800 hover:text-emerald-950"
            >
              Contact: {reference.phone}
            </a>
          </InfoCard>
        ))}
      </div>
    </ContentSection>
  </PortfolioPage>
)

export default Referees
