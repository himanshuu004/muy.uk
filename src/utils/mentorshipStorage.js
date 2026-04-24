const MENTORS_KEY = 'muy_mentors'
const REQUESTS_KEY = 'muy_mentor_requests'
const SEED_FLAG_KEY = 'muy_seed_initialized'

export const DOMAIN_EXPERTISE_OPTIONS = [
  'Marketing',
  'Capacity Building',
  'Investment Fund Raising',
  'Branding & Labelling',
  'Soft Skills',
  'Digital Literacy',
  'Cyber Security',
  'Agriculture / Horticulture',
  'Food Processing',
  'Financing',
  'Legal Compliance',
  'Homestay',
  'Intellectual Property Rights (IPR)',
  'Business Registration',
]

const seedMentors = [
  {
    id: 'seed-mentor-1',
    name: 'Aarav Joshi',
    displayPicture:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    email: 'aarav.joshi@example.com',
    phone: '+91-9876543210',
    organizationName: 'Himalayan Growth Labs',
    designation: 'Senior Mentor',
    domainExpertise: 'Investment Fund Raising',
    experienceYears: '11',
    consentGiven: true,
    createdAt: '2026-04-20T00:00:00.000Z',
  },
  {
    id: 'seed-mentor-2',
    name: 'Meera Rawat',
    displayPicture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    email: 'meera.rawat@example.com',
    phone: '+91-9123456780',
    organizationName: 'Uttarakhand Rural Accelerator',
    designation: 'Brand Mentor',
    domainExpertise: 'Branding & Labelling',
    experienceYears: '8',
    consentGiven: true,
    createdAt: '2026-04-20T00:00:00.000Z',
  },
  {
    id: 'seed-mentor-3',
    name: 'Pankaj Bisht',
    displayPicture:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    email: 'pankaj.bisht@example.com',
    phone: '+91-9988776655',
    organizationName: 'AgriNext Consulting',
    designation: 'Domain Expert',
    domainExpertise: 'Agriculture / Horticulture',
    experienceYears: '14',
    consentGiven: true,
    createdAt: '2026-04-20T00:00:00.000Z',
  },
]

function safeParse(value, fallback) {
  if (!value) return fallback
  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

export function initializeMentorshipStore() {
  if (typeof window === 'undefined') return
  const isInitialized = window.localStorage.getItem(SEED_FLAG_KEY)
  if (isInitialized) return

  window.localStorage.setItem(MENTORS_KEY, JSON.stringify(seedMentors))
  window.localStorage.setItem(REQUESTS_KEY, JSON.stringify([]))
  window.localStorage.setItem(SEED_FLAG_KEY, 'true')
}

export function getMentors() {
  if (typeof window === 'undefined') return []
  initializeMentorshipStore()
  return safeParse(window.localStorage.getItem(MENTORS_KEY), [])
}

export function addMentor(mentor) {
  if (typeof window === 'undefined') return null
  const allMentors = getMentors()
  const newMentor = {
    id: `mentor-${Date.now()}`,
    createdAt: new Date().toISOString(),
    displayPicture:
      mentor.displayPicture ||
      'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=600&q=80',
    ...mentor,
  }
  window.localStorage.setItem(MENTORS_KEY, JSON.stringify([newMentor, ...allMentors]))
  return newMentor
}

export function getMentorById(mentorId) {
  return getMentors().find((mentor) => mentor.id === mentorId) || null
}

export function addMentorRequest(request) {
  if (typeof window === 'undefined') return null
  const currentRequests = safeParse(window.localStorage.getItem(REQUESTS_KEY), [])
  const newRequest = {
    id: `request-${Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
    ...request,
  }
  window.localStorage.setItem(REQUESTS_KEY, JSON.stringify([newRequest, ...currentRequests]))
  return newRequest
}
