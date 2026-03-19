import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Reusable card component for displaying content
function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      {children}
    </div>
  )
}

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// Services card with popup modal: Incubation Support Services
export function ServicesCard() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  const services = [
    { 
      name: 'Business Skills Training',
      description: 'Training programs for business management and entrepreneurial skills',
      icon: '📚'
    },
    {
      name: 'Mentoring Support',
      description: 'Personalized guidance from experienced entrepreneurs and experts',
      icon: '👥'
    },
    {
      name: 'Technical Support',
      description: 'Technical expertise for product development and quality improvement',
      icon: '🔧'
    },
    {
      name: 'Market Linkages',
      description: 'Connections with buyers, suppliers, and distribution channels',
      icon: '🔗'
    },
    {
      name: 'Business Plan',
      description: 'Professional assistance in creating comprehensive business plans',
      icon: '📋'
    },
    {
      name: 'Access to Finance',
      description: 'Guidance on funding options including loans and grants',
      icon: '💰'
    },
    {
      name: 'Strengthens Ecosystem',
      description: 'Building collaborative networks of entrepreneurs and stakeholders',
      icon: '🌱'
    },
    {
      name: 'Legal and License Support',
      description: 'Assistance with registration, licensing, and compliance',
      icon: '⚖️'
    },
    {
      name: 'Co-working Space',
      description: 'Affordable shared workspace with essential infrastructure',
      icon: '🏢'
    }
  ]

  // Close modal when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Card title="Mukhyamantri Udyamshala Yojana">
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Mukhyamantri Udyamshala Yojana (MUY) earlier known as (Rural Business Incubator). The Department of Rural Development (RD), Government of Uttarakhand has been implementing schemes and programmes to promote livelihoods in the rural areas of the State. As a noble initiative, the department has piloted establishment of two Rural Business Incubators (RBI) in Hawalbagh, Almora and Kotdwar, Pauri, to help establish enterprises and promote an entrepreneurial ecosystem in the State. The business incubators would provide professional handholding and mentoring support for the rural communities, Mukhyamantri Udyamshala Yojana (MUY) will also help filling the gaps in access to business services for entrepreneurs and give professional support in the technical and business domain.
        </p>
        <a
          href="https://ukrbi.in/new/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-white hover:text-red-600 hover:shadow-xl hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide"
        >
          Application Form
        </a>
        <div className="pt-2">
          {/* Popup Button */}
          <button
            onClick={toggleModal}
            className="inline-flex items-center justify-between w-full px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-white hover:text-red-600 hover:shadow-xl hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide"
          >
            <span>Incubation Support Services</span>
            <span className="ml-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </span>
          </button>

          {/* Modal Popup - Center of Screen */}
          {isOpen && (
            <>
              {/* Backdrop with blur */}
              <div 
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] animate-fadeIn"
                onClick={toggleModal}
              />
              
              {/* Modal Content */}
              <div 
                ref={modalRef}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
              >
                <div className="bg-white rounded-2xl shadow-2xl w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-h-[95vh] overflow-hidden pointer-events-auto animate-scaleIn transform">
                  {/* Modal Header */}
                  <div className="bg-gradient-to-r from-primary to-red-700 p-4 sm:p-5 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        Incubation Support Services
                      </h2>
                      <button
                        onClick={toggleModal}
                        className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label="Close modal"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Modal Body - Services Grid */}
                  <div className="p-3 sm:p-4 md:p-5 overflow-hidden">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
                          className="group flip-card-container relative h-[180px] sm:h-[200px] md:h-[220px]"
            style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {/* Flip Card Container */}
                          <div 
                            className="relative w-full h-full flip-card-inner" 
                            style={{ 
                              transformStyle: 'preserve-3d',
                              WebkitTransformStyle: 'preserve-3d',
                              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                              WebkitTransition: '-webkit-transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: 'rotateY(0deg)',
                              WebkitTransform: 'rotateY(0deg)'
            }}
          >
                            {/* Front Face - Emoji and Service Name */}
                            <div 
                              className="flip-card-face absolute inset-0 rounded-lg border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 overflow-hidden flex flex-col items-center justify-center" 
                              style={{ 
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden'
                              }}
                            >
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-red-600/0 group-hover:from-primary/10 group-hover:to-red-600/10 transition-all duration-500 rounded-lg"></div>
                              
                              {/* Animated background pattern */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-600/5 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                              </div>

                              {/* Content - Centered */}
                              <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                                {/* Icon - Centered */}
                                <div className="mb-2 sm:mb-3 flex items-center justify-center">
                                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-red-600/20 group-hover:from-primary group-hover:to-red-700 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50">
                                    <span className="text-4xl sm:text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-110">
                                      {service.icon}
              </span>
                                  </div>
                                </div>
                                
                                {/* Service name - Below icon, centered */}
                                <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 leading-tight px-1">
                                  {service.name}
                                </h3>
                              </div>

                              {/* Shine effect */}
                              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>

                            {/* Back Face - Description */}
                            <div 
                              className="flip-card-face absolute inset-0 rounded-lg border-2 border-primary bg-gradient-to-br from-primary to-red-700 p-3 sm:p-4 overflow-hidden flex flex-col items-center justify-center shadow-2xl" 
                              style={{ 
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                WebkitTransform: 'rotateY(180deg)'
                              }}
                            >
                              {/* Background pattern */}
                              <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                              </div>

                              {/* Content - Centered */}
                              <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
                                {/* Description */}
                                <p className="text-[10px] sm:text-xs md:text-sm leading-tight px-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                  ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
            )}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .flip-card-container {
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }

        .flip-card-inner {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }

        .flip-card-face {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        /* Ensure group-hover works with 3D transforms - Multiple selectors for reliability */
        .group:hover .flip-card-inner,
        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg) !important;
          -webkit-transform: rotateY(180deg) !important;
        }
      `}</style>
    </Card>
  )
}

// What is MUY card with Apply button inside
export function WhatIsMUYCard() {
  return (
    <Card>
      <div className="p-4">
        <img 
          src={withBase('/AboutSection/1.webp')}
          alt="MUY" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </Card>
  )
}
// About Section with two cards side by side
export function AboutSection() {
  const [openItems, setOpenItems] = useState({})
  const cardRef = useRef(null)

  // const dropdownItems = [
  //   {
  //     title: 'Services',
  //     items: [
  //       { name: 'Service 1', link: '/services/service1' },
  //       { name: 'Service 2', link: '/services/service2' },
  //       { name: 'Service 3', link: '/services/service3' }
  //     ]
  //   },
  //   {
  //     title: 'Events',
  //     items: [
  //       { name: 'Gullak', link: '/events/gullak' },
  //       { name: 'Buyer Seller Meet', link: '/events/buyer-seller-meet' }
  //     ]
  //   },
  //   {
  //     title: 'About Us',
  //     items: [
  //       { name: 'Brief History', link: '/about/brief-history' },
  //       { name: 'Organization Setup', link: '/about/organization-setup' },
  //       { name: 'Vision and Mission', link: '/about/vision-mission' }
  //     ]
  //   }
  // ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOpenItems({})
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">ABOUT</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Image Only */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
            <img 
              src={withBase('/AboutSection/1.webp')}
              alt="About Section" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Card - Mukhyamantri Udyamshala Yojana with Content */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-primary mb-4">Mukhyamantri Udyamshala Yojana</h3>
            <div className="mb-4 p-2">
              <img 
                src={withBase('/AboutSection/1.webp')}
                alt="Mukhyamantri Udyamshala Yojana" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              MUY earlier known as (Rural Business Incubator). The Department of Rural Development (RD), Government of Uttarakhand has been implementing schemes and programmes to promote livelihoods in the rural areas of the State. As a noble initiative, the department has piloted establishment of two Rural Business Incubators (RBI) in Hawalbagh, Almora and Kotdwar, Pauri, to help establish enterprises and promote an entrepreneurial ecosystem in the State. The business incubators would provide professional handholding and mentoring support for the rural communities, MUY will also help filling the gaps in access to business services for entrepreneurs and give professional support in the technical and business domain.
            </p>
            <div ref={cardRef} className="space-y-4 mt-6">
              {dropdownItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group hover:border-primary/50"
                  style={{
                    filter: 'drop-shadow(0 0 0 transparent)',
                  }}
                  onMouseEnter={(e) => {
                    if (!openItems[index]) {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 15px rgba(220, 38, 38, 0.4))'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!openItems[index]) {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)'
                    }
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className={`w-full text-left flex items-center justify-between p-4 transition-all duration-300 relative ${
                      openItems[index]
                        ? 'bg-primary text-white shadow-2xl shadow-primary/60 ring-4 ring-primary/30'
                        : 'bg-gray-50 hover:bg-primary hover:text-white shadow-sm hover:shadow-2xl hover:shadow-primary/50 hover:ring-2 hover:ring-primary/40'
                    } focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50`}
                    aria-expanded={openItems[index]}
                    style={openItems[index] ? {
                      boxShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3)'
                    } : {}}
                  >
                    <span className={`font-medium transition-colors relative z-10 ${
                      openItems[index] ? 'text-white' : 'text-gray-700 group-hover:text-white'
                    }`}>
                      {item.title}
                    </span>
                    <span className={`transform transition-all duration-300 text-lg relative z-10 ${
                      openItems[index] ? 'rotate-180 text-white' : 'text-primary group-hover:text-white'
                    }`}>
                      ▼
                    </span>
                  </button>
                  {openItems[index] && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <ul className="space-y-3">
                        {item.items.map((subItem, itemIndex) => (
                          <li key={itemIndex}>
                            <NavLink
                              to={subItem.link}
                              className={({ isActive }) =>
                                `block px-4 py-3 text-sm rounded-lg transition-all duration-300 transform relative ${
                                  isActive
                                    ? 'text-white bg-primary font-semibold shadow-2xl shadow-primary/60 ring-4 ring-primary/30 scale-105'
                                    : 'text-gray-700 bg-gray-50 hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-primary/50 hover:ring-2 hover:ring-primary/40 hover:scale-105'
                                }`
                              }
                              style={({ isActive }) => isActive ? {
                                boxShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3)'
                              } : {}}
                              onMouseEnter={(e) => {
                                if (!e.currentTarget.classList.contains('bg-primary')) {
                                  e.currentTarget.style.boxShadow = '0 0 15px rgba(220, 38, 38, 0.5), 0 0 30px rgba(220, 38, 38, 0.2)'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!e.currentTarget.classList.contains('bg-primary')) {
                                  e.currentTarget.style.boxShadow = ''
                                }
                              }}
                              onClick={() => setOpenItems({})}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card

