import { motion } from 'framer-motion'

// Beneficiary Timeline section showing whom we support
function OurBeneficiary() {
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
  const LeafIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )

  const HandIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
      <path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"/>
      <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"/>
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8 2 2 0 0 1 2-2h4z"/>
    </svg>
  )

  const TrendingUpIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  )


  const stages = [
    {
      icon: LeafIcon,
      title: 'Seed',
      subtitle: 'Entrepreneurs',
      delay: '0ms'
    },
    {
      icon: HandIcon,
      title: 'Early Stage',
      subtitle: 'Entrepreneurs',
      delay: '200ms'
    },
    {
      icon: TrendingUpIcon,
      title: 'Growth Stage',
      subtitle: 'Entrepreneurs',
      delay: '400ms'
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 mb-2 sm:mb-4 tracking-wide">
            WHOM DO WE SUPPORT
            </h1>
          </motion.div>

          {/* Stages Container */}
          <div className="relative px-4 sm:px-8">
            {/* Stages - Grid layout for mobile (3 items), flex for desktop (5 items) */}
            <motion.div 
              className="grid grid-cols-3 gap-6 grid-rows-1 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-16 lg:gap-28 xl:gap-44 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {stages.map((stage, index) => {
                const IconComponent = stage.icon
                // Mobile grid positioning classes (only first 3 shown on mobile)
                const gridClasses = [
                  'col-start-1 row-start-1', // Seed (0)
                  'col-start-2 row-start-1', // Early Stage (1)
                  'col-start-3 row-start-1', // Growth Stage (2)
                  'col-start-1 row-start-1', // Self Help Groups (3) - hidden on mobile
                  'col-start-3 row-start-1'  // Aggregators (4) - hidden on mobile
                ]
                
                // Hide last 2 stages (Self Help Groups and Aggregators) on small screens
                const isHiddenOnMobile = index >= 3
                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center justify-center relative ${gridClasses[index]} sm:col-auto sm:row-auto ${isHiddenOnMobile ? 'hidden sm:flex' : ''}`}
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
                        className="absolute inset-0 w-24 h-24 sm:w-44 sm:h-44 lg:w-48 lg:h-48 -rotate-90"
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
                          stroke="#f97316"
                          strokeWidth="4"
                          strokeDasharray="8 6"
                          className="opacity-90 sm:stroke-[6] sm:stroke-dasharray-[12_8]"
                        />
                      </motion.svg>
                      
                      {/* Inner Circle */}
                      <motion.div 
                        className="relative w-24 h-24 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-white rounded-full shadow-xl flex items-center justify-center border-2 sm:border-4 border-orange-100"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent 
                          className="w-8 h-8 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20 text-red-900 stroke-[1.5]" 
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Labels */}
                    <motion.div 
                      className="text-center space-y-0.5 sm:space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <h3 className="text-xs sm:text-lg font-bold text-red-900 sm:whitespace-nowrap leading-tight">
                        {stage.title}
                      </h3>
                      {stage.subtitle && (
                        <p className="text-[10px] sm:text-base font-semibold text-red-900 sm:whitespace-nowrap leading-tight">
                          {stage.subtitle}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
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

        @keyframes progress-path {
          0% {
            stroke-dasharray: 0 1000;
          }
          100% {
            stroke-dasharray: 1000 1000;
          }
        }

        .animate-progress-path {
          stroke-dasharray: 0 1000;
          animation: progress-path 1s ease-out forwards;
        }

        @keyframes slide-right {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(10px);
          }
        }

        @keyframes slide-left {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(-10px);
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

export default OurBeneficiary
