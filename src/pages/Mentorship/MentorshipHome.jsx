import { Link } from 'react-router-dom'

function MentorshipHome() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Mentorship Prototype
          </span>
          <h1 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
            Connect Mentors and Incubatees
          </h1>
          <p className="mt-4 text-gray-600">
            Mentors can register their expertise and incubatees can view profiles and request mentorship.
            This prototype stores submitted data in your browser localStorage.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              to="/mentorship/mentors"
              className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Mentors
            </Link>
            <Link
              to="/mentorship/register"
              className="rounded-lg border border-primary px-5 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Register for Mentors
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentorshipHome
