import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

// Lazy load all pages for code splitting
const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))
const Services = lazy(() => import('../pages/Services/Services'))
const Impact = lazy(() => import('../pages/Impact/Impact'))
const Apply = lazy(() => import('../pages/Apply/Apply'))
const Gallery = lazy(() => import('../pages/Gallery/Gallery'))
const Events = lazy(() => import('../pages/Events/Events'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const MentorshipHome = lazy(() => import('../pages/Mentorship/MentorshipHome'))
const MentorsList = lazy(() => import('../pages/Mentorship/MentorsList'))
const MentorRegister = lazy(() => import('../pages/Mentorship/MentorRegister'))
const MentorRequest = lazy(() => import('../pages/Mentorship/MentorRequest'))
// const Location = lazy(() => import('../pages/Location/Location'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
)

// Main routing component - wraps all pages with Header and Footer
function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentorship" element={<MentorshipHome />} />
            <Route path="/mentorship/mentors" element={<MentorsList />} />
            <Route path="/mentorship/register" element={<MentorRegister />} />
            <Route path="/mentorship/request/:mentorId" element={<MentorRequest />} />
            {/* <Route path="/location" element={<Location />} /> */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default AppRoutes


