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
      <div className="impact-card">
        <p className="impact-title">
          MUY Impact at a Glance
        </p>
        <div className="impact-grid">
          {stats.map((stat, i) => (
            <div key={i} className="impact-item">
              <div className="impact-value">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="impact-label">
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
    { id: 1, image: withBase('/Carousel/final 1.webp') },
    { id: 2, image: withBase('/Carousel/22.webp') },
    { id: 3, image: withBase('/Carousel/3.webp') },
    { id: 4, image: withBase('/Carousel/1.webp') },
    { id: 5, image: withBase('/Carousel/2.webp') },
  ]

  const extendedCarousel = [carousel[carousel.length - 1], ...carousel, carousel[0]]
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselContainerRef = useRef(null)
  const [imageErrors, setImageErrors] = useState({})

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
    const interval = setInterval(() => goToNext(), 5000)
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0); }
          50%       { box-shadow: 0 0 24px 4px rgba(220,38,38,0.35); }
        }
        .hero-tag   { animation: fadeSlideUp 0.8s cubic-bezier(.16,1,.3,1) 0.2s both; }
        .hero-title { animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.35s both; }
        .hero-sub   { animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.5s both; }
        .hero-cta   { animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) 0.62s both; }
        .hero-stats { animation: fadeSlideUp 1s cubic-bezier(.16,1,.3,1) 0.75s both; }
        .cta-btn {
          animation: pulseGlow 3s ease-in-out 2s infinite;
          transition: all 0.3s cubic-bezier(.16,1,.3,1);
        }
        .cta-btn:hover {
          animation: none;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 16px 40px rgba(220,38,38,0.45) !important;
        }
        .arrow-btn:hover {
          background: rgba(255,255,255,0.95) !important;
          color: #111 !important;
          transform: translateY(-50%) scale(1.08);
        }
        .dot-btn { transition: all 0.3s ease; }
        .dot-btn:hover { transform: scaleX(1.5); }

        .impact-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 28px 36px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .impact-title {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin: 0 0 20px 0;
          font-family: 'DM Sans', sans-serif;
        }
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .impact-item {
          text-align: center;
          padding: 0 16px;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .impact-item:last-child {
          border-right: none;
        }
        .impact-value {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          line-height: 1;
          font-family: 'Sora', sans-serif;
          letter-spacing: -1px;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #fff 60%, #ffd580);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .impact-label {
          font-size: 11px;
          color: rgba(255,255,255,0.65);
          font-weight: 500;
          letter-spacing: 0.5px;
          font-family: 'DM Sans', sans-serif;
          line-height: 1.4;
        }

        /* Small screens: compact 2x2 grid */
        @media (max-width: 640px) {
          .impact-card {
            border-radius: 16px;
            padding: 14px 14px;
          }
          .impact-title {
            font-size: 10px;
            letter-spacing: 2px;
            margin-bottom: 12px;
          }
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .impact-item {
            padding: 10px 8px;
            border-right: none;
            border-top: 1px solid rgba(255,255,255,0.12);
          }
          .impact-item:nth-child(1),
          .impact-item:nth-child(2) {
            border-top: none;
          }
          .impact-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.12);
          }
          .impact-value {
            font-size: clamp(20px, 7vw, 28px);
            margin-bottom: 4px;
          }
          .impact-label {
            font-size: 10px;
            letter-spacing: 0.3px;
            line-height: 1.25;
          }
        }
      `}</style>

      <section style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>

          {/* Carousel images */}
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
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to bottom,
                      rgba(0,0,0,0.45) 0%,
                      rgba(0,0,0,0.1) 35%,
                      rgba(0,0,0,0.1) 50%,
                      rgba(0,0,0,0.82) 100%
                    )`,
                  }} />
                </div>
              )
            })}
          </div>

          {/* Overlay content */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0',
          }}>
            {/* Hero text + stats stacked at bottom */}
            <div
              className="hero-stats"
              style={{
                padding: '0 clamp(16px, 5vw, 80px)',
                paddingBottom: 'clamp(36px, 6vh, 64px)',
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* ── Text block above stats ── */}
              <div style={{ textAlign: 'center' }}>

                {/* Eyebrow badge */}
                <div className="hero-tag" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '999px',
                  padding: '5px 15px',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: '10px', fontWeight: 600,
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    Government of Uttarakhand Initiative
                  </span>
                </div>

                {/* Title */}
                <h1 className="hero-title" style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 'clamp(22px, 4vw, 50px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.12,
                  letterSpacing: '-0.5px',
                  marginBottom: '10px',
                  textShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}>
                  Mukhyamantri{' '}
                  <span style={{
                    background: 'linear-gradient(90deg, #fbbf24, #f97316)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Udyamshala Yojana
                  </span>
                </h1>

                {/* Subtitle */}
                <div className="hero-sub" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                }}>
                  <div style={{ height: '1px', width: '36px', background: 'rgba(255,255,255,0.3)' }} />
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 'clamp(12px, 1.4vw, 15px)',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.78)',
                    letterSpacing: '0.3px',
                    margin: 0,
                  }}>
                    Empowering Entrepreneurs, Building Tomorrow
                  </p>
                  <div style={{ height: '1px', width: '36px', background: 'rgba(255,255,255,0.3)' }} />
                </div>

                {/* CTA */}
                <div className="hero-cta">
                  <a
                    href="https://ukrbi.in/new/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '9px',
                      padding: '12px 32px',
                      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                      color: '#fff',
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(11px, 1.2vw, 14px)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      borderRadius: '10px',
                      boxShadow: '0 8px 24px rgba(220,38,38,0.4)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    Apply Now
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stats bar */}
              <AnimatedStats />
            </div>
          </div>

          {/* Nav Arrows */}
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

          {/* Dot Indicators */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
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