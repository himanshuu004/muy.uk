import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Header component with logo, navigation, and language selector
function Header() {
  const [language, setLanguage] = useState('English')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkClassName = ({ isActive }) =>
    [
      'relative rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200',
      'text-gray-700 hover:text-primary',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
      'after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-all after:duration-200',
      isActive
        ? 'text-primary after:bg-primary after:opacity-100'
        : 'after:bg-primary after:opacity-0 hover:after:opacity-100',
    ].join(' ')

  const mobileNavLinkClassName = ({ isActive }) =>
    [
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      isActive ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50 hover:text-primary',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-2 sm:py-3 font-display">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Site Title */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src={`${import.meta.env.BASE_URL}Logo/MuyLogo.webp`}
              alt="MUY Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div>
              <h1 className="text-sm sm:text-base md:text-xl font-bold text-primary leading-tight tracking-tight">
                <span className="md:hidden">Mukhyamantri Udyamshala Yojana</span>
                <span className="hidden md:inline">Mukhyamantri Udyamshala Yojana</span>
              </h1>
              <p className="font-devanagari text-xs text-gray-600">मुख्यमंत्री उद्यमशाला योजना</p>
            </div>
          </div>

          {/* Center: Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* HOME */}
            <NavLink 
              to="/" 
              className={navLinkClassName}
            >
              Home
            </NavLink>
            
            {/* ABOUT */}
            <NavLink 
              to="/about" 
              className={navLinkClassName}
            >
              About
            </NavLink>

            {/* SERVICES */}
            <NavLink 
              to="/services" 
              className={navLinkClassName}
            >
              Services
            </NavLink>

            {/* EVENTS */}
            <NavLink 
              to="/events" 
              className={navLinkClassName}
            >
              Events
            </NavLink>

            {/* GALLERY */}
            <NavLink 
              to="/gallery" 
              className={navLinkClassName}
            >
              Gallery
            </NavLink>

            {/* CONTACT */}
            <NavLink 
              to="/contact" 
              className={navLinkClassName}
            >
              Contact
            </NavLink>

            {/* LOCATION */}
            {/* <NavLink 
              to="/location" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              Location
            </NavLink> */}
          </div>

          {/* Right: Language Dropdown */}
          {/* <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
                aria-label="Select language"
                aria-expanded={isLangOpen}
              >
                <span>{language}</span>
                <span className="text-xs">▼</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage('English')
                      setIsLangOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('हिंदी')
                      setIsLangOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    हिंदी
                  </button>
                </div>
              )}
            </div>
          </div> */}
          <div className="flex items-center space-x-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                setIsLangOpen(false)
              }}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white/70 text-gray-800 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <span className="text-xl leading-none">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-nav"
          className={[
            'md:hidden overflow-hidden transition-[max-height,opacity] duration-300',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="mt-4 border-t border-gray-200/70 pb-4 pt-4">
            <div className="grid gap-1">
              <NavLink to="/" className={mobileNavLinkClassName} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" className={mobileNavLinkClassName} onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/services" className={mobileNavLinkClassName} onClick={() => setIsMenuOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/events" className={mobileNavLinkClassName} onClick={() => setIsMenuOpen(false)}>
                Events
              </NavLink>
              <NavLink to="/gallery" className={mobileNavLinkClassName} onClick={() => setIsMenuOpen(false)}>
                Gallery
              </NavLink>
              <NavLink to="/contact" className={mobileNavLinkClassName} onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
