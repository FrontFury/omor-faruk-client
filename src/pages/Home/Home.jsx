import { BookOpen, BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { ContentSection, InfoCard } from "../../components/PortfolioPage"
import {
  academicExperience,
  administrativeExperience,
  interests,
  languageSkills,
  personalDetails,
  profile,
  researchMetrics,
} from "../../data/profileData"

const Home = () => (
  <div className="w-full space-y-10 pb-12 sm:space-y-14">
    <section className="overflow-hidden rounded-3xl border border-[#e7e1d4] bg-[#fffefa] shadow-xl shadow-emerald-950/10">
      <div className="grid lg:grid-cols-[1.4fr_0.8fr]">
        <div className="p-6 sm:p-9 lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Daffodil Institute of Information & Technology
          </div>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Academic & Research Portfolio
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#153d30] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-semibold leading-7 text-slate-700">
            {profile.role} · Assistant Professor · Head, MBA Program
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            {profile.credentials.join(" · ")}. Focused on teaching, academic
            leadership, and research in accounting, corporate governance, and
            sustainable development.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/research-interest"
              className="rounded-xl bg-[#174b38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#103828]"
            >
              View research
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#123b2e] to-[#277453] p-8 text-center text-white lg:min-h-full">
          <div className="absolute h-64 w-64 rounded-full border border-white/15" />
          <div className="absolute h-48 w-48 rounded-full border border-white/15" />
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 text-4xl font-bold shadow-2xl backdrop-blur">
            OF
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/15 p-4 backdrop-blur-sm">
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-emerald-50">
              Department of Business Administration
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {researchMetrics.map(({ value, label }) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-3xl font-bold text-emerald-800">{value}</p>
          <p className="mt-1 text-sm text-slate-600">{label}</p>
        </div>
      ))}
    </section>

    <ContentSection
      title="Profile at a glance"
      subtitle="Academic background, current appointments, and a brief career overview."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <InfoCard
          meta="Education"
          title="PhD Scholar, Jagannath University"
          detail="MBA and BBA in Accounting & Information Systems, University of Dhaka."
        >
          <GraduationCap className="mt-4 text-emerald-700" size={22} />
        </InfoCard>
        <InfoCard
          meta="Current role"
          title="Vice Principal (In-Charge)"
          detail="Assistant Professor and Head of the MBA Program at DIIT."
        >
          <BriefcaseBusiness className="mt-4 text-emerald-700" size={22} />
        </InfoCard>
        <InfoCard
          meta="Research"
          title="Accounting, governance & sustainability"
          detail="Research, publications, projects, and academic contributions."
        >
          <BookOpen className="mt-4 text-emerald-700" size={22} />
        </InfoCard>
      </div>
    </ContentSection>

    <ContentSection
      title="Career highlights"
      subtitle="Selected appointments from the academic and administrative career."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {[administrativeExperience[0], academicExperience[0]].map((item) => (
          <InfoCard
            key={item.role}
            meta={item.duration}
            title={item.role}
            detail={item.organization}
          />
        ))}
      </div>
      <Link
        to="/awards-experience"
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
      >
        <Sparkles size={16} aria-hidden="true" />
        View complete experience
      </Link>
    </ContentSection>

    <ContentSection
      title="Personal Details"
      subtitle="Personal information reproduced from the supplied CV."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {personalDetails.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-1 font-medium text-slate-800">{value}</p>
          </div>
        ))}
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:col-span-2 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Permanent address</p>
          <p className="mt-1 font-medium text-slate-800">{profile.address}</p>
        </div>
      </div>
    </ContentSection>

    <ContentSection title="Interests & Languages">
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard title="Interests">
          <p className="mt-2 text-sm leading-6 text-slate-600">{interests.join(" · ")}</p>
        </InfoCard>
        <InfoCard title="Language proficiency">
          <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
            {languageSkills.map((language) => <li key={language}>{language}</li>)}
          </ul>
        </InfoCard>
      </div>
    </ContentSection>

    <section className="grid gap-4 rounded-3xl bg-emerald-50 p-6 sm:grid-cols-2 sm:p-8">
      <div className="flex items-start gap-3">
        <MapPin className="mt-1 shrink-0 text-emerald-800" size={19} />
        <div>
          <h2 className="font-semibold text-slate-900">Office</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">{profile.office}</p>
        </div>
      </div>
      <div className="space-y-3">
        <a
          className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-emerald-900"
          href={`mailto:${profile.email}`}
        >
          <Mail size={18} className="text-emerald-800" />
          {profile.email}
        </a>
        <a
          className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-emerald-900"
          href={`tel:${profile.phone}`}
        >
          <Phone size={18} className="text-emerald-800" />
          {profile.phone}
        </a>
      </div>
    </section>
  </div>
)

export default Home
