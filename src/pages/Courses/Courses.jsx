import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"
import { books } from "../../data/profileData"

const Courses = () => (
  <PortfolioPage
    eyebrow="Authorship & academic resources"
    title="Published Books"
    description="Eleven authored and co-authored accounting, business, and management textbooks listed in the supplied CV."
  >
    <ContentSection
      title="Books & Textbooks"
      subtitle="Bibliographic details are transcribed from the provided document."
    >
      <ol className="space-y-3">
        {books.map((book, index) => (
          <li key={book} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-800">
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-slate-700">{book}</p>
          </li>
        ))}
      </ol>
    </ContentSection>
  </PortfolioPage>
)

export default Courses
