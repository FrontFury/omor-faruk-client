import { BookOpen, GraduationCap, Landmark } from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { publications, profile } from "../../data/profileData"

const Gallery = () => (
  <PortfolioPage
    eyebrow="Academic moments"
    title="Portfolio Gallery"
    description="A visual-style overview of the academic work and institutions featured in the supplied CV."
  >
    <ContentSection
      title="Academic highlights"
      subtitle="No event photographs were included with the supplied CV, so this page highlights its documented academic milestones."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-600 text-white">
            <GraduationCap size={48} strokeWidth={1.4} />
          </div>
          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Academic journey</p>
            <h3 className="mt-2 font-bold text-slate-900">University of Dhaka</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              MBA and BBA in Accounting & Information Systems.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-amber-700 to-amber-400 text-white">
            <Landmark size={48} strokeWidth={1.4} />
          </div>
          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Academic leadership</p>
            <h3 className="mt-2 font-bold text-slate-900">Daffodil Institute of Information & Technology</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Teaching and academic administration in Business Administration.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-sky-900 to-sky-600 text-white">
            <BookOpen size={48} strokeWidth={1.4} />
          </div>
          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Research & writing</p>
            <h3 className="mt-2 font-bold text-slate-900">{publications.length} selected publications</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Research in sustainability, corporate responsibility, and financial inclusion.
            </p>
          </div>
        </article>
      </div>
      <p className="text-xs leading-5 text-slate-500">
        To add an actual photo gallery, provide approved portrait, teaching, and
        academic-event images for this portfolio.
      </p>
    </ContentSection>
    <section className="rounded-2xl bg-emerald-50 p-5 text-sm leading-6 text-emerald-950">
      <span className="font-semibold">{profile.name}</span> · Academic & Research Portfolio
    </section>
  </PortfolioPage>
)

export default Gallery
