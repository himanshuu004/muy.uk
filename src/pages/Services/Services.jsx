import React from 'react';

// SVG Icon Components (replacing lucide-react)
const BrainIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3 3 0 0 0 .164-.546c.362-1.154.163-2.43-.186-3.566a4 4 0 0 0-1.267-2.003A3.5 3.5 0 0 0 12 5Z"/>
    <path d="M17 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588 4 4 0 0 1-7.636 2.106 3 3 0 0 1-.164-.546c-.362-1.154-.163-2.43.186-3.566a4 4 0 0 1 1.267-2.003A3.5 3.5 0 0 1 17 5Z"/>
  </svg>
);

const LightbulbIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

const TrendingUpIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const FileCheckIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <polyline points="9 15 11 17 15 13"/>
  </svg>
);

const LinkIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const UsersIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const GraduationCapIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const BuildingIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12h12"/>
    <path d="M6 6h12"/>
    <path d="M6 18h12"/>
    <path d="M10 9h4"/>
    <path d="M10 15h4"/>
  </svg>
);

const WalletIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: BrainIcon,
      title: 'ENTREPRENEURSHIP MINDSET',
      description: 'One of the most important roles of the rural business incubators will be to help develop an entrepreneurial mindset among the rural communities. As part of this effort, the incubator would develop an EDP programme, which will be delivered in higher education institutions, ITIs and polytechnics and similar institutions.',
      delay: '0ms',
      color: '#b61d14'
    },
    {
      icon: LightbulbIcon,
      title: 'IDEATION SUPPORT',
      description: 'The incubators will assist the incubatees in ideation and help them to ground their ideas from the drawing board. This will include identifying the product or the service that the incubatees may offer, the demand for the products, identifying the buyers for their products, measuring the willingness to pay etc.',
      delay: '100ms',
      color: '#b61d14'
    },
    {
      icon: TrendingUpIcon,
      title: 'BUSINESS PLANNING',
      description: 'The incubators provide comprehensive business skill training programs covering essential areas such as financial management, marketing, digital marketing, convergence, business planning. These training sessions are designed to equip entrepreneurs with practical skills needed to run and scale their businesses successfully.',
      delay: '200ms',
      color: '#b61d14'
    },
    {
      icon: FileCheckIcon,
      title: 'BUSINESS REGISTRATION',
      description: 'The incubators help with business registration and provide support for various registrations including Udyam, Proprietorship, and LLP. They also assist with FSSAI, GST, and Artisan Card registrations to ensure entrepreneurs have all the necessary legal documentation to operate their businesses.',
      delay: '300ms',
      color: '#b61d14'
    },
    {
      icon: LinkIcon,
      title: 'MARKET ACCESS AND LINKAGE',
      description: 'The incubators will help the incubatees in reviewing their business ideas and develop actionable plans to graduate themselves to the next stage of their entrepreneurial journey. This will include assessing investment required, estimating the operating costs, predicting the cash flows and breakeven.',
      delay: '400ms',
      color: '#b61d14'
    },
    {
      icon: UsersIcon,
      title: 'EXPERT MENTORSHIP',
      description: 'Mentors will help incubatees in enriching their business ideas, adopt the right approach, strategise their businesses, consult the right people and progress on their entrepreneurial journey.',
      delay: '500ms',
      color: '#b61d14'
    },
    {
      icon: GraduationCapIcon,
      title: 'BUSINESS SKILL TRAINING',
      description: 'The incubators provide comprehensive business skill training programs covering essential areas such as financial management, marketing, digital marketing, convergence, business planning. These training sessions are designed to equip entrepreneurs with practical skills needed to run and scale their businesses successfully.',
      delay: '600ms',
      color: '#b61d14'
    },
    {
      icon: BuildingIcon,
      title: 'CO-WORKING SPACE',
      description: 'Incubatees gain access to fully-equipped co-working spaces that provide a professional environment to work, collaborate, and network with other entrepreneurs. These spaces include meeting rooms, high-speed internet, office infrastructure, and common areas to promote innovation and collaboration among the startup community.',
      delay: '700ms',
      color: '#b61d14'
    },
    {
      icon: WalletIcon,
      title: 'ACCESS TO FINANCE',
      description: 'The incubators facilitate access to various financing options including seed funding, grants, loans, and investor connections. They help incubatees prepare funding applications, pitch decks, and connect with financial institutions, angel investors, and venture capitalists to secure the capital needed to start and grow their businesses.',
      delay: '800ms',
      color: '#b61d14'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-3" style={{ color: '#b61d14' }}>
            Our Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Comprehensive support to empower your entrepreneurial journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: service.delay }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(182, 29, 20, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s infinite'
                  }}></div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8">
                    {/* Icon Circle */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
                        {/* Outer rotating ring */}
                        <svg className="absolute inset-0 w-full h-full animate-spin-slow">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#f97316"
                            strokeWidth="3"
                            strokeDasharray="8 6"
                            className="opacity-70"
                          />
                        </svg>
                        
                        {/* Inner circle with icon */}
                        <div 
                          className="absolute inset-0 m-2 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundColor: '#b61d14' }}
                        >
                          <IconComponent 
                            className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce-subtle"
                            strokeWidth={1.5}
                          />
                        </div>

                        {/* Pulsing dot */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center min-h-[3.5rem] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {service.title}
                    </h3>

                    {/* Decorative Line */}
                    <div className="w-16 h-1 mx-auto mb-4 rounded-full transition-all duration-500 group-hover:w-24" style={{ backgroundColor: '#b61d14' }}></div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-full h-full rounded-bl-full" style={{ backgroundColor: '#b61d14' }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
