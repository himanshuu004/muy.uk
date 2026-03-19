import { motion } from 'framer-motion'

// Process section with animated steps
function Steps() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  // Icon Components as SVG
  const UsersIcon = ({ className, style }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )

  const ClipboardCheckIcon = ({ className, style }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="1"/>
      <path d="M9 14l2 2 4-4"/>
    </svg>
  )

  const UserPlusIcon = ({ className, style }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/>
      <line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
  )

  const RocketIcon = ({ className, style }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  )

  const BarChartIcon = ({ className, style }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  )

  const applySteps = [
    {
      number: '1',
      icon: UsersIcon,
      title: 'Community Mobilization',
      description: 'Engaging and mobilizing communities to identify potential entrepreneurs.',
      delay: '0ms'
    },
    {
      number: '2',
      icon: ClipboardCheckIcon,
      title: 'Inviting and Screening of Applications',
      description: 'Opening applications and evaluating candidates through comprehensive screening.',
      delay: '200ms'
    },
    {
      number: '3',
      icon: UserPlusIcon,
      title: 'Onboarding',
      description: 'Welcoming selected entrepreneurs and initiating their journey with MUY.',
      delay: '400ms'
    },
    {
      number: '4',
      icon: RocketIcon,
      title: 'Incubation Support Services',
      description: 'Providing comprehensive support including mentorship, training, and resources.',
      delay: '600ms'
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide" style={{ color: '#b61d14' }}>
            MUY - Incubation Process
          </h2>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          {/* Steps Container */}
          <div className="relative px-4 sm:px-8 lg:px-12 xl:px-16">
            {/* Steps - 2x2 grid on small screens, horizontal on larger screens */}
            <motion.div 
              className="grid grid-cols-2 gap-4 sm:gap-6 md:flex md:flex-row md:items-start md:justify-center md:gap-3 lg:gap-4 relative pb-4 sm:pb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {applySteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center relative md:flex-1 min-w-0"
                    variants={itemVariants}
                  >
                    {/* Circle Container with Dashed Border */}
                    <motion.div 
                      className="relative mb-3 sm:mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: index * 0.1
                      }}
                    >
                      {/* Dashed Circle Border */}
                      <motion.svg 
                        className="absolute inset-0 w-12 h-12 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 -rotate-90"
                        animate={{ rotate: [0, 360] }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: index * 0.1
                        }}
                      >
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          fill="none"
                          stroke="#b61d14"
                          strokeWidth="2"
                          strokeDasharray="6 5"
                          className="sm:stroke-[4] md:stroke-[5] lg:stroke-[6] sm:stroke-dasharray-[10_6] lg:stroke-dasharray-[12_8]"
                        />
                      </motion.svg>
                      
                      {/* Inner Circle */}
                      <motion.div 
                        className="relative w-12 h-12 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 bg-white rounded-full shadow-xl flex items-center justify-center border-2 sm:border-[3px] lg:border-4"
                        style={{ borderColor: '#fecaca' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 lg:gap-2">
                          <IconComponent 
                            className="w-4 h-4 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 stroke-[1.5]"
                            style={{ color: '#b61d14' }}
                            strokeWidth={1.5}
                          />
                          <div className="w-3 h-3 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center font-bold text-[7px] sm:text-xs md:text-sm lg:text-base text-white shadow-lg" style={{ backgroundColor: '#FFD700', boxShadow: '0 4px 15px rgba(255, 215, 0, 0.6)' }}>
                            {step.number}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Labels and Description */}
                    <motion.div 
                      className="text-center space-y-1 sm:space-y-1.5 lg:space-y-2 w-full md:max-w-[140px] lg:max-w-[160px] xl:max-w-[180px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold leading-tight" style={{ color: '#b61d14' }}>
                        {step.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 px-1 sm:px-2 leading-tight hidden sm:block">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://ukrbi.in/new/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base shadow-lg"
            style={{ backgroundColor: '#b61d14', boxShadow: '0 10px 15px -3px rgba(182, 29, 20, 0.3)' }}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Start Your Application
          </motion.a>
        </motion.div>
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

        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress-line-vertical {
          0% {
            height: 0;
          }
          100% {
            height: 100%;
          }
        }

        @keyframes slide-right {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(0) translateX(10px);
          }
        }

        @keyframes slide-left {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(0) translateX(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(-90deg);
          }
          to {
            transform: rotate(270deg);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: translate(-50%, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, 0) scale(1.2);
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-pop-in {
          animation: pop-in 0.6s ease-out backwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }

        .animate-progress-line-vertical {
          animation: progress-line-vertical 2.5s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }

        .animate-slide-left {
          animation: slide-left 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Steps