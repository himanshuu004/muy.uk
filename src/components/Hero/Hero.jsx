import { useState, useEffect, useRef } from 'react'

function AnimatedStats() {
  const [entrepreneurs, setEntrepreneurs] = useState(0)
  const [incubatees, setIncubatees] = useState(0)
  const [centres, setCentres] = useState(0)
  const [partners, setPartners] = useState(0)

  const finalValues = {
    entrepreneurs: 25000,
    incubatees: 7500,
    centres: 13,
    partners: 100,
  }

  const animateValue = (start, end, duration, setter) => {
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)
      setter(current)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      animateValue(0, finalValues.entrepreneurs, 2200, setEntrepreneurs)
      animateValue(0, finalValues.incubatees, 2200, setIncubatees)
      animateValue(0, finalValues.centres, 2200, setCentres)
      animateValue(0, finalValues.partners, 2200, setPartners)
    }, 400)
    return () => clearTimeout(delay)
  }, [])

  const stats = [
    { value: entrepreneurs, label: 'Entrepreneurs Mobilized', suffix: '+' },
    { value: incubatees, label: 'Enterprises Supported', suffix: '+' },
    { value: centres, label: 'Incubation Centres', suffix: '' },
    { value: partners, label: 'Industry Partners', suffix: '+' },
  ]

  return (
    <div className="w-full">
      {/* Glassmorphism stats bar */}
      <div
        style={{
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '20px',
          padding: '28px 36px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '20px',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          MUY Impact at a Glance
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '0 16px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1,
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: '-1px',
                  marginBottom: '6px',
                  // Subtle golden accent for the numbers
                  background: 'linear-gradient(135deg, #fff 60%, #ffd580)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  const carousel = [
    
    // { id: 5, image: withBase('/Carousel/5.webp') },
    { id: 6, image: withBase('/Carousel/6.png') },
    { id: 7, image: withBase('/Carousel/7.JPG') },{ id: 3, image: withBase('/Carousel/3.webp') },
  ]

  const extendedCarousel = [carousel[carousel.length - 1], ...carousel, carousel[0]]
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselContainerRef = useRef(null)
  const [imageErrors, setImageErrors] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const getRealIndex = (index) => {
    if (index === 0) return carousel.length - 1
    if (index === extendedCarousel.length - 1) return 0
    return index - 1
  }

  const realCurrentCarousel = getRealIndex(currentIndex)

  const goToNext = () => setCurrentIndex((prev) => prev + 1)
  const goToPrev = () => setCurrentIndex((prev) => prev - 1)
  const goToCarousel = (realIndex) => setCurrentIndex(realIndex + 1)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => goToNext(), 4000)
    return () => clearInterval(interval)
  }, [currentIndex])

  useEffect(() => {
    if (!carouselContainerRef.current) return
    if (currentIndex === extendedCarousel.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(1)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 1000)
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(carousel.length)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 1000)
    }
  }, [currentIndex, carousel.length])

  const handleImageError = (carouselId, index) => {
    setImageErrors(prev => ({ ...prev, [`${carouselId}-${index}`]: true }))
  }

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
          50%       { box-shadow: 0 0 24px 4px rgba(220,38,38,0.35); }
        }
        .hero-tag {
          animation: fadeSlideUp 0.8s cubic-bezier(.16,1,.3,1) 0.2s both;
        }
        .hero-title {
          animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.4s both;
        }
        .hero-sub {
          animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.6s both;
        }
        .hero-cta {
          animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.75s both;
        }
        .hero-stats {
          animation: fadeSlideUp 1s cubic-bezier(.16,1,.3,1) 0.9s both;
        }
        .cta-btn {
          animation: pulseGlow 3s ease-in-out 2s infinite;
        }
        .cta-btn:hover {
          animation: none;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 16px 40px rgba(220,38,38,0.45) !important;
        }
        .arrow-btn:hover {
          background: rgba(255,255,255,0.95) !important;
          transform: translateY(-50%) scale(1.08);
        }
        .dot-btn {
          transition: all 0.3s ease;
        }
        .dot-btn:hover {
          transform: scaleX(1.5);
        }
      `}</style>

      <section style={{ position: 'relative', width: '100%' }}>
        {/* ── Carousel ── */}
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          
          {/* Scrolling images */}
          <div
            ref={carouselContainerRef}
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 1100ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              willChange: 'transform',
            }}
          >
            {extendedCarousel.map((item, index) => {
              const imageKey = `${item.id}-${index}`
              const hasError = imageErrors[imageKey]
              return (
                <div key={imageKey} style={{ width: '100%', height: '100%', position: 'relative', flexShrink: 0 }}>
                  {!hasError ? (
                    <img
                      src={item.image}
                      alt={`Carousel ${item.id}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                      onError={() => handleImageError(item.id, index)}
                      loading={index <= 1 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  ) : (
                    <div style={{
                      width: '100%', height: '100%',
                      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif" }}>Image {item.id}</p>
                    </div>
                  )}

                  {/* Multi-layer gradient overlay for better text legibility */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `
                      linear-gradient(to bottom,
                        rgba(0,0,0,0.55) 0%,
                        rgba(0,0,0,0.15) 40%,
                        rgba(0,0,0,0.15) 55%,
                        rgba(0,0,0,0.75) 100%
                      )
                    `,
                  }} />
                </div>
              )
            })}
          </div>

          {/* ── Overlay Content ── */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 10,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '0',
          }}>
            {/* CENTER: Hero text */}
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 24px 0',
            }}>
              <div style={{ textAlign: 'center', maxWidth: '860px', width: '100%' }}>

                {/* Eyebrow tag */}
                <div className="hero-tag" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  padding: '6px 18px',
                  marginBottom: '20px',
                }}>
                  <span style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: '11px', fontWeight: 600,
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    Government of Uttarakhand Initiative
                  </span>
                </div>

                {/* Main title */}
                <h1 className="hero-title" style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 'clamp(28px, 5.5vw, 68px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                  marginBottom: '16px',
                  textShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}>
                  Mukhyamantri<br />
                  <span style={{
                    background: 'linear-gradient(90deg, #fbbf24, #f97316)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Udyamshala Yojana
                  </span>
                </h1>

                {/* Divider line */}
                <div className="hero-sub" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '14px',
                }}>
                  <div style={{ height: '1px', width: '48px', background: 'rgba(255,255,255,0.3)' }} />
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 'clamp(13px, 1.8vw, 18px)',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.80)',
                    letterSpacing: '0.3px',
                    margin: 0,
                  }}>
                    Empowering Entrepreneurs, Building Tomorrow
                  </p>
                  <div style={{ height: '1px', width: '48px', background: 'rgba(255,255,255,0.3)' }} />
                </div>

                {/* CTA Button */}
                <div className="hero-cta" style={{ marginTop: '28px' }}>
                  <a
                    href="https://ukrbi.in/new/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '16px 40px',
                      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                      color: '#fff',
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 1.5vw, 16px)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(220,38,38,0.4)',
                      transition: 'all 0.3s cubic-bezier(.16,1,.3,1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    Apply Now
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM: Stats panel */}
            <div className="hero-stats" style={{
              padding: '0 clamp(16px, 5vw, 80px)',
              paddingBottom: 'clamp(64px, 10vh, 100px)',
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              boxSizing: 'border-box',
            }}>
              <AnimatedStats />
            </div>
          </div>

          {/* ── Nav Arrows ── */}
          {[
            { side: 'left', icon: 'M15 19l-7-7 7-7', action: goToPrev, label: 'Previous' },
            { side: 'right', icon: 'M9 5l7 7-7 7', action: goToNext, label: 'Next' },
          ].map(({ side, icon, action, label }) => (
            <button
              key={side}
              onClick={action}
              className="arrow-btn"
              aria-label={label}
              style={{
                position: 'absolute',
                [side]: 'clamp(12px, 3vw, 28px)',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '50%',
                width: 'clamp(40px, 4vw, 52px)',
                height: 'clamp(40px, 4vw, 52px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                transition: 'all 0.25s ease',
              }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={icon} />
              </svg>
            </button>
          ))}

          {/* ── Dot Indicators ── */}
          <div style={{
            position: 'absolute',
            bottom: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}>
            {carousel.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCarousel(index)}
                className="dot-btn"
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  height: '4px',
                  width: index === realCurrentCarousel ? '32px' : '16px',
                  borderRadius: '999px',
                  background: index === realCurrentCarousel ? '#fff' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero