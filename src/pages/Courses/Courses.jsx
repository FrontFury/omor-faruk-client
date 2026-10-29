import React from 'react'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hook/useAxiosSecure'
import { 
  BookOpen, 
  Library, 
  Bookmark, 
  Sparkles, 
  BookMarked, 
  Loader2,
  Building2,
  Calendar,
  Barcode
} from "lucide-react"
import { ContentSection, PortfolioPage } from "../../components/PortfolioPage"

const Courses = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch books from backend API
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/books");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-3 bg-[#0d1410]/80 rounded-3xl border border-amber-400/20 my-8">
        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
        <span className="text-xs font-mono text-emerald-300">Loading published books...</span>
      </div>
    );
  }

  // Calculate dynamic metrics count
  const totalBooksCount = books.length > 0 ? `${books.length} Books` : "11 Books";
  const summaryMetrics = [
    { value: totalBooksCount, label: "Authored & Co-Authored Titles", icon: BookOpen },
    { value: "NLS", label: "National Library Registered", icon: Library },
    { value: "Dual", label: "Bangla & English Editions", icon: BookMarked },
    { value: "15+ Yrs", label: "Academic Publishing Heritage", icon: Bookmark }
  ];

  return (
    <div className="w-full font-sans text-slate-100">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        <PortfolioPage
          eyebrow="Authorship & Academic Resources"
          title="Published Books"
          description="Authored and co-authored accounting, business, and management textbooks listed in the verified academic records."
        >
          <div className="space-y-8">

            {/* TOP HIGHLIGHT STAT CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {summaryMetrics.map(({ value, label, icon: Icon }) => (
                <div 
                  key={label}
                  className="rounded-2xl border border-emerald-500/20 bg-[#0d1410]/70 p-5 shadow-xl backdrop-blur-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/30 rounded-xl text-amber-400 shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Publications
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-extrabold text-amber-400 group-hover:text-amber-300 transition-colors">
                      {value}
                    </div>
                    <p className="text-xs font-semibold text-emerald-300 mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 1: BOOKS & TEXTBOOKS LIST */}
            <ContentSection
              title="Books & Textbooks Catalog"
              subtitle="Bibliographic details are fetched directly from the verified database."
            >
              {books.length === 0 ? (
                <div className="bg-[#0d1410]/80 p-8 text-center rounded-3xl border border-amber-400/20 text-slate-400 text-xs font-mono">
                  No book records found.
                </div>
              ) : (
                <ol className="grid grid-cols-1 gap-4">
                  {books.map((book, index) => {
                    // Extract properties if book is object, fallback if string
                    const bookTitle = typeof book === 'string' ? book : (book.title || book.name);
                    const bookAuthor = typeof book === 'object' ? (book.author || book.authors) : null;
                    const bookPublisher = typeof book === 'object' ? book.publisher : null;
                    const bookYear = typeof book === 'object' ? (book.publicationYear || book.year) : null;
                    const bookIsbn = typeof book === 'object' ? book.isbn : null;
                    const bookDesc = typeof book === 'object' ? book.description : null;
                    const bookImage = typeof book === 'object' ? book.coverImage : null;

                    return (
                      <li 
                        key={book._id || index} 
                        className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0d1410]/70 p-5 sm:p-6 shadow-2xl backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 group"
                      >
                        {/* Number Badge or Cover Image */}
                        {bookImage ? (
                          <img 
                            src={bookImage} 
                            alt={bookTitle} 
                            className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-2xl border border-emerald-500/30 shrink-0 bg-emerald-950/40"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-11 w-11 shrink-0 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-amber-400 font-extrabold text-sm shadow-md">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        )}

                        {/* Book Details */}
                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              <Sparkles size={11} className="text-amber-400" />
                              Academic Publication
                            </span>
                            {bookYear && (
                              <span className="text-[10px] font-mono font-semibold text-amber-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                                <Calendar size={11} /> {bookYear}
                              </span>
                            )}
                          </div>

                          <h3 className="text-base sm:text-lg font-extrabold leading-snug text-slate-100 group-hover:text-amber-300 transition-colors">
                            {bookTitle}
                          </h3>

                          {bookAuthor && (
                            <p className="text-xs text-slate-300">
                              <strong className="text-slate-400 font-medium">Author(s):</strong> {bookAuthor}
                            </p>
                          )}

                          {bookPublisher && (
                            <p className="text-xs text-emerald-300 flex items-center gap-1.5 font-medium">
                              <Building2 size={13} className="text-amber-400 shrink-0" />
                              {bookPublisher}
                            </p>
                          )}

                          {bookDesc && (
                            <p className="text-xs text-slate-300 leading-relaxed bg-[#121c17]/60 p-3 rounded-2xl border border-emerald-500/20 mt-1">
                              {bookDesc}
                            </p>
                          )}

                          <div className="pt-2 border-t border-emerald-900/30 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap gap-2">
                              <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                                Textbook & Reference
                              </span>
                              <span className="text-[10px] font-semibold bg-emerald-950/80 text-slate-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                                Curriculum Aligned
                              </span>
                            </div>

                            {bookIsbn && (
                              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                                <Barcode size={12} className="text-amber-400" /> ISBN: {bookIsbn}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </ContentSection>

          </div>
        </PortfolioPage>

      </div>
    </div>
  );
};

export default Courses;