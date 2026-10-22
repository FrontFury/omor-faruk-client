import { Mail, MapPin, Phone } from "lucide-react"
import { ContentSection, InfoCard, PortfolioPage } from "../../components/PortfolioPage"
import { profile } from "../../data/profileData"

const Contact = () => (
  <PortfolioPage
    eyebrow="Get in touch"
    title="Contact"
    description="For academic, research, and professional inquiries, use the contact information below."
  >
    <ContentSection title="Contact Information">
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard title="Email">
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-flex items-center gap-2 break-all text-sm font-medium text-emerald-800 hover:text-emerald-950"
          >
            <Mail size={17} aria-hidden="true" />
            {profile.email}
          </a>
        </InfoCard>
        <InfoCard title="Mobile">
          <a
            href={`tel:${profile.phone}`}
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-950"
          >
            <Phone size={17} aria-hidden="true" />
            {profile.phone}
          </a>
        </InfoCard>
      </div>
    </ContentSection>
    <ContentSection title="Office Address">
      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <span className="rounded-xl bg-emerald-50 p-3 text-emerald-800">
          <MapPin size={22} />
        </span>
        <div>
          <h3 className="font-bold text-slate-900">
            Daffodil Institute of Information & Technology
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{profile.office}</p>
        </div>
      </div>
    </ContentSection>
    <section className="rounded-2xl bg-[#153d30] p-6 text-white sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Correspondence</p>
      <h2 className="mt-3 text-xl font-bold sm:text-2xl">Academic collaboration & inquiries</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-50/90">
        Please include a brief subject and the best way to reach you in your message.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50"
      >
        Send an email
      </a>
    </section>
  </PortfolioPage>
)

export default Contact
