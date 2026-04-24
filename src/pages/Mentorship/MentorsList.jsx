import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMentors, initializeMentorshipStore } from '../../utils/mentorshipStorage'

function MentorsList() {
  const [mentors, setMentors] = useState([])
  const [search, setSearch] = useState('')
  const [domainFilter, setDomainFilter] = useState('All')
  const [organizationFilter, setOrganizationFilter] = useState('All')
  const [designationFilter, setDesignationFilter] = useState('All')
  const [experienceFilter, setExperienceFilter] = useState('All')

  useEffect(() => {
    initializeMentorshipStore()
    setMentors(getMentors())
  }, [])

  const filterOptions = useMemo(() => {
    const domains = new Set()
    const organizations = new Set()
    const designations = new Set()

    mentors.forEach((mentor) => {
      if (mentor.domainExpertise) domains.add(mentor.domainExpertise)
      if (mentor.organizationName) organizations.add(mentor.organizationName)
      if (mentor.designation) designations.add(mentor.designation)
    })

    return {
      domains: ['All', ...Array.from(domains)],
      organizations: ['All', ...Array.from(organizations)],
      designations: ['All', ...Array.from(designations)],
    }
  }, [mentors])

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const years = Number(mentor.experienceYears || 0)
      const searchMatch =
        search.trim() === '' ||
        mentor.name?.toLowerCase().includes(search.toLowerCase()) ||
        mentor.organizationName?.toLowerCase().includes(search.toLowerCase()) ||
        mentor.domainExpertise?.toLowerCase().includes(search.toLowerCase())

      const domainMatch = domainFilter === 'All' || mentor.domainExpertise === domainFilter
      const organizationMatch =
        organizationFilter === 'All' || mentor.organizationName === organizationFilter
      const designationMatch =
        designationFilter === 'All' || mentor.designation === designationFilter
      const experienceMatch =
        experienceFilter === 'All' ||
        (experienceFilter === '0-3' && years <= 3) ||
        (experienceFilter === '4-7' && years >= 4 && years <= 7) ||
        (experienceFilter === '8-12' && years >= 8 && years <= 12) ||
        (experienceFilter === '13+' && years >= 13)

      return searchMatch && domainMatch && organizationMatch && designationMatch && experienceMatch
    })
  }, [search, domainFilter, organizationFilter, designationFilter, experienceFilter, mentors])

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Mentors Directory</h1>
            <p className="mt-2 text-gray-600">Browse mentors and request one based on your needs.</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[290px_1fr]">
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-5 border-b border-gray-200 pb-4">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <p className="mt-1 text-xs text-gray-500">Find mentors quickly like product filters.</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-3">
                <p className="mb-2 text-sm font-semibold text-gray-800">Years of Experience</p>
                <div className="space-y-2 text-sm text-gray-700">
                  {[
                    { value: 'All', label: 'All' },
                    { value: '0-3', label: '0 - 3 years' },
                    { value: '4-7', label: '4 - 7 years' },
                    { value: '8-12', label: '8 - 12 years' },
                    { value: '13+', label: '13+ years' },
                  ].map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="experienceFilter"
                        value={option.value}
                        checked={experienceFilter === option.value}
                        onChange={(event) => setExperienceFilter(event.target.value)}
                        className="h-4 w-4 accent-primary"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="search" className="mb-1 block text-sm font-medium text-gray-700">
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Name, domain, organization"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="domainFilter" className="mb-1 block text-sm font-medium text-gray-700">
                  Domain Expertise
                </label>
                <select
                  id="domainFilter"
                  value={domainFilter}
                  onChange={(event) => setDomainFilter(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {filterOptions.domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="organizationFilter" className="mb-1 block text-sm font-medium text-gray-700">
                  Organization
                </label>
                <select
                  id="organizationFilter"
                  value={organizationFilter}
                  onChange={(event) => setOrganizationFilter(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {filterOptions.organizations.map((organization) => (
                    <option key={organization} value={organization}>
                      {organization}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="designationFilter" className="mb-1 block text-sm font-medium text-gray-700">
                  Designation
                </label>
                <select
                  id="designationFilter"
                  value={designationFilter}
                  onChange={(event) => setDesignationFilter(event.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {filterOptions.designations.map((designation) => (
                    <option key={designation} value={designation}>
                      {designation}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                onClick={() => {
                  setSearch('')
                  setDomainFilter('All')
                  setOrganizationFilter('All')
                  setDesignationFilter('All')
                  setExperienceFilter('All')
                }}
              >
                Clear all filters
              </button>
            </div>
          </aside>

          <div>
            <div className="mb-4 text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredMentors.length}</span> mentors
            </div>

            {filteredMentors.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
                <p className="text-gray-600">No mentors found for selected filters.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-2">
                {filteredMentors.map((mentor) => (
                  <article
                    key={mentor.id}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 pb-6 pt-5">
                      <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                        <span>{mentor.experienceYears} years</span>
                        <span className="rounded-full bg-white px-2 py-1">{mentor.domainExpertise}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <img
                          src={
                            mentor.displayPicture ||
                            'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=600&q=80'
                          }
                          alt={mentor.name}
                          className="h-20 w-20 rounded-full border-2 border-white object-cover shadow"
                          onError={(event) => {
                            event.currentTarget.src =
                              'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=600&q=80'
                          }}
                        />
                        <div>
                          <h2 className="text-xl font-semibold text-primary">{mentor.name}</h2>
                          <p className="text-sm text-gray-600">{mentor.designation || 'Mentor'}</p>
                          <p className="mt-0.5 text-xs text-gray-500">{mentor.organizationName || '-'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-6">
                      <div className="grid grid-cols-1 gap-2 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 sm:grid-cols-2">
                        <p>
                          <span className="font-semibold text-gray-900">Domain:</span> {mentor.domainExpertise || '-'}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">Experience:</span>{' '}
                          {mentor.experienceYears || '-'} years
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">Designation:</span>{' '}
                          {mentor.designation || '-'}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-900">Organization:</span>{' '}
                          {mentor.organizationName || '-'}
                        </p>
                        <p className="sm:col-span-2">
                          <span className="font-semibold text-gray-900">Consent:</span>{' '}
                          {mentor.consentGiven ? 'Given' : 'Not specified'}
                        </p>
                      </div>

                      <div className="rounded-lg border border-gray-100 p-3 text-sm text-gray-700">
                        <p>
                          <span className="font-semibold text-gray-900">Email:</span> {mentor.email || '-'}
                        </p>
                        <p className="mt-1">
                          <span className="font-semibold text-gray-900">Phone:</span> {mentor.phone || '-'}
                        </p>
                      </div>

                      <Link
                        to={`/mentorship/request/${mentor.id}`}
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                      >
                        Request mentorship
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentorsList
