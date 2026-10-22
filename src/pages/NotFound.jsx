import { Link } from "react-router-dom"

const NotFound = () => (
  <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Page not found</p>
    <h1 className="my-4 text-4xl font-bold text-[#153d30]">404</h1>
    <p className="text-slate-600">This portfolio page does not exist.</p>
    <Link
      to="/"
      className="mt-6 inline-flex rounded-xl bg-[#174b38] px-5 py-3 text-sm font-semibold text-white hover:bg-[#103828]"
    >
      Return home
    </Link>
  </section>
)

export default NotFound
