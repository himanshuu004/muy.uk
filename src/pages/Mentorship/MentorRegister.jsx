import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addMentor, DOMAIN_EXPERTISE_OPTIONS } from '../../utils/mentorshipStorage'

const initialForm = {
  name: '',
  displayPicture: '',
  email: '',
  phone: '',
  organizationName: '',
  designation: '',
  domainExpertise: '',
  experienceYears: '',
  consentGiven: false,
}

function MentorRegister() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    addMentor({
      name: formData.name.trim(),
      displayPicture: formData.displayPicture.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      organizationName: formData.organizationName.trim(),
      designation: formData.designation.trim(),
      domainExpertise: formData.domainExpertise,
      experienceYears: formData.experienceYears.trim(),
      consentGiven: formData.consentGiven,
    })

    setIsSubmitted(true)
    setFormData(initialForm)
    setTimeout(() => {
      navigate('/mentorship/mentors')
    }, 1000)
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
          <h1 className="text-3xl font-bold text-primary">Mentor Registration</h1>
          <p className="mt-2 text-gray-600">
            Fill in your details to join the mentorship network.
          </p>

          {isSubmitted && (
            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Registration saved in prototype storage. Redirecting to mentors list...
            </div>
          )}

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Mentor Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="displayPicture" className="mb-2 block text-sm font-medium text-gray-700">
                  Display Picture
                </label>
                <input
                  id="displayPicture"
                  name="displayPicture"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={formData.displayPicture}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Mail ID*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Mobile No*
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="organizationName" className="mb-2 block text-sm font-medium text-gray-700">
                  Institute Name / Organization Name*
                </label>
                <input
                  id="organizationName"
                  name="organizationName"
                  type="text"
                  required
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="designation" className="mb-2 block text-sm font-medium text-gray-700">
                  Designation
                </label>
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="domainExpertise" className="mb-2 block text-sm font-medium text-gray-700">
                Domain Expertise*
              </label>
              <select
                id="domainExpertise"
                name="domainExpertise"
                required
                value={formData.domainExpertise}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select domain</option>
                {DOMAIN_EXPERTISE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="experienceYears" className="mb-2 block text-sm font-medium text-gray-700">
                Years of Experience*
              </label>
              <input
                id="experienceYears"
                name="experienceYears"
                type="number"
                min="0"
                required
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <label className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
              <input
                type="checkbox"
                name="consentGiven"
                required
                checked={formData.consentGiven}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 accent-primary"
              />
              <span>
                I consent to the collection and processing of my personal data for registration
                purposes as outlined.
              </span>
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Submit registration
              </button>
              <Link
                to="/mentorship/mentors"
                className="rounded-lg border border-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Go to mentors
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default MentorRegister
