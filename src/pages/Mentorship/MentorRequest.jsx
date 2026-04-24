import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addMentorRequest, getMentorById, initializeMentorshipStore } from '../../utils/mentorshipStorage'

const initialRequest = {
  incubateeName: '',
  incubateeEmail: '',
  startupName: '',
  message: '',
}

function MentorRequest() {
  const { mentorId } = useParams()
  const navigate = useNavigate()
  const [mentor, setMentor] = useState(null)
  const [formData, setFormData] = useState(initialRequest)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    initializeMentorshipStore()
    setMentor(getMentorById(mentorId))
  }, [mentorId])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!mentor) return

    addMentorRequest({
      mentorId: mentor.id,
      mentorName: mentor.name,
      incubateeName: formData.incubateeName.trim(),
      incubateeEmail: formData.incubateeEmail.trim(),
      startupName: formData.startupName.trim(),
      message: formData.message.trim(),
    })

    setIsSubmitted(true)
    setFormData(initialRequest)
    setTimeout(() => {
      navigate('/mentorship/mentors')
    }, 1000)
  }

  if (!mentor) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <h1 className="text-2xl font-bold text-primary">Mentor not found</h1>
            <p className="mt-2 text-gray-600">Please go back and select a mentor from the list.</p>
            <Link
              to="/mentorship/mentors"
              className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Back to mentors
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
          <h1 className="text-3xl font-bold text-primary">Request mentorship</h1>
          <p className="mt-2 text-gray-600">
            You are requesting mentorship from <span className="font-semibold">{mentor.name}</span>.
          </p>

          {isSubmitted && (
            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Mentorship request saved in prototype storage. Redirecting to mentors list...
            </div>
          )}

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="incubateeName" className="mb-2 block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                id="incubateeName"
                name="incubateeName"
                type="text"
                required
                value={formData.incubateeName}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="incubateeEmail" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="incubateeEmail"
                  name="incubateeEmail"
                  type="email"
                  required
                  value={formData.incubateeEmail}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="startupName" className="mb-2 block text-sm font-medium text-gray-700">
                  Startup name
                </label>
                <input
                  id="startupName"
                  name="startupName"
                  type="text"
                  required
                  value={formData.startupName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                Why do you want this mentor?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Submit request
              </button>
              <Link
                to="/mentorship/mentors"
                className="rounded-lg border border-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default MentorRequest
