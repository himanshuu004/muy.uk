import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'

/* ─── Reusable animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

/* ─── Scroll-reveal wrapper ─── */
function Reveal({ children, className = '', custom = 0, variants = fadeUp }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={custom}
    >
      {children}
    </motion.div>
  )
}

/* ─── Offer card ─── */
const offerItems = [
  { icon: '🏗️', title: 'Business Incubation', desc: 'Comprehensive incubation and acceleration programs for startups' },
  { icon: '🧭', title: 'Expert Mentorship', desc: 'Guidance from experienced professionals and industry experts' },
  { icon: '💰', title: 'Funding Support', desc: 'Access to funding and financial assistance programs' },
  { icon: '🔗', title: 'Market Linkage', desc: 'Networking opportunities and market connections' },
  { icon: '⚙️', title: 'Technology Support', desc: 'Access to technology infrastructure and tools' },
  { icon: '📚', title: 'Training Programs', desc: 'Workshops and skill development programs' },
]

const objectives = [
  'Promote entrepreneurship and innovation at the grassroots level',
  'Support rural and underserved entrepreneurs',
  'Create employment opportunities through business development',
  'Promote collaboration between government, industry, and academia',
  'Build a sustainable entrepreneurial ecosystem',
]

export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <style>{`
        :root {
          --primary: #c0392b;
          --primary-dark: #962d22;
          --primary-light: #e74c3c;
          --cream: #faf9f7;
          --ink: #1a1410;
          --muted: #6b6460;
          --border: #e8e2db;
          --card-bg: #ffffff;
        }

        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .offer-card:hover .offer-icon {
          transform: scale(1.15) rotate(-5deg);
        }

        .offer-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(192,57,43,0.12), 0 8px 16px rgba(0,0,0,0.06);
          border-color: var(--primary-light);
        }

        .obj-item:hover .obj-num {
          background: var(--primary);
          color: white;
        }

        .hero-tag {
          background: linear-gradient(135deg, rgba(192,57,43,0.12), rgba(192,57,43,0.05));
          border: 1px solid rgba(192,57,43,0.25);
        }
      `}</style>

      {/* ══════════════════════════════════
          HERO SECTION
      ══════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden grain"
        style={{
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${import.meta.env.BASE_URL}Gullak/4.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark overlay so text is readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(15,8,5,0.6) 0%, rgba(25,10,6,0.50) 50%, rgba(40,15,8,0.10) 100%)',
          }}
        />
        {/* Red accent tint at bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(192,57,43,0.18) 0%, transparent 50%)',
          }}
        />

        {/* Decorative arcs */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px solid rgba(192,57,43,0.15)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid rgba(192,57,43,0.1)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '-80px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(192,57,43,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 py-24"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span
                className="sans hero-tag inline-block px-4 py-2 rounded-full text-sm font-medium"
                style={{ color: '#e8998a', letterSpacing: '0.08em' }}
              >
                Government of Uttarakhand Initiative
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-black mb-6"
              style={{
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                lineHeight: 1.0,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              About{' '}
              <span style={{ color: 'var(--primary-light)' }}>MUY</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ height: '3px', background: 'var(--primary)', marginBottom: '2rem' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="sans text-xl max-w-2xl"
              style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontWeight: 300 }}
            >
              Mukhyamantri Udyamshala Yojana — Empowering Entrepreneurs,
              Building Tomorrow
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex gap-4 mt-10 flex-wrap"
            >
              <a
                href="https://ukrbi.in/new/"
                target="_blank"
                rel="noopener noreferrer"
                className="sans inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300"
                style={{
                  background: 'var(--primary)',
                  boxShadow: '0 8px 24px rgba(192,57,43,0.4)',
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--primary-light)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(192,57,43,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--primary)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(192,57,43,0.4)'
                }}
              >
                Apply Now
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#what-is-muy"
                className="sans inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          <span className="sans text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════
          WHAT IS MUY
      ══════════════════════════════════ */}
      <section id="what-is-muy" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p
                className="sans uppercase tracking-widest text-sm font-medium mb-4"
                style={{ color: 'var(--primary)' }}
              >
                Our Programme
              </p>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)', lineHeight: 1.15 }}
              >
                What is MUY?
              </h2>
              <div
                style={{ width: '48px', height: '3px', background: 'var(--primary)', marginBottom: '1.5rem' }}
              />
              <p
                className="sans mb-4 leading-relaxed"
                style={{ color: 'var(--muted)', fontSize: '1.05rem' }}
              >
                The <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  Mukhyamantri Udyamshala Yojana (MUY)
                </strong> is a flagship initiative designed to promote entrepreneurship and
                innovation across the state. This comprehensive program provides aspiring and
                existing entrepreneurs with the tools, resources, and support needed to transform
                their innovative ideas into successful business ventures.
              </p>
              <p
                className="sans leading-relaxed"
                style={{ color: 'var(--muted)', fontSize: '1.05rem' }}
              >
                Through strategic partnerships, expert mentorship, and comprehensive incubation
                services, MUY creates a thriving ecosystem where entrepreneurship becomes a key
                driver of economic development and social progress.
              </p>
            </Reveal>

            <Reveal custom={1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '500+', label: 'Entrepreneurs Supported' },
                  { num: '50+', label: 'Expert Mentors' },
                  { num: '₹10Cr+', label: 'Funding Facilitated' },
                  { num: '13', label: 'Districts Covered' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="rounded-2xl p-6 text-center"
                    style={{
                      background: i % 2 === 0 ? 'var(--primary)' : 'var(--ink)',
                      color: 'white',
                    }}
                  >
                    <div
                      className="font-black mb-1"
                      style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', lineHeight: 1.1 }}
                    >
                      {stat.num}
                    </div>
                    <div
                      className="sans text-xs font-medium"
                      style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: 'var(--ink)' }}>
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <p
              className="sans uppercase tracking-widest text-sm font-medium mb-2 text-center"
              style={{ color: 'var(--primary-light)' }}
            >
              Our Purpose
            </p>
            <h2
              className="font-bold text-center mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}
            >
              Mission &amp; Vision
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <Reveal custom={0}>
              <div
                className="rounded-3xl p-10 h-full relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'var(--primary)' }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3
                  className="font-bold mb-4"
                  style={{ fontSize: '1.6rem', color: '#fff' }}
                >
                  Our Mission
                </h3>
                <p className="sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
                  To promote entrepreneurship and innovation across the state by providing comprehensive
                  support to aspiring and existing entrepreneurs. We aim to transform innovative ideas
                  into successful business ventures that create employment opportunities and drive
                  economic growth, particularly in rural and underserved communities.
                </p>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    right: '-40px',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    border: '1px solid rgba(192,57,43,0.15)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal custom={1}>
              <div
                className="rounded-3xl p-10 h-full relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(192,57,43,0.18), rgba(192,57,43,0.06))',
                  border: '1px solid rgba(192,57,43,0.25)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3
                  className="font-bold mb-4"
                  style={{ fontSize: '1.6rem', color: '#fff' }}
                >
                  Our Vision
                </h3>
                <p className="sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
                  To create a thriving entrepreneurial ecosystem where every innovative idea receives
                  the support, resources, and mentorship needed to succeed. We envision a future where
                  entrepreneurship becomes a key driver of economic development and social progress,
                  transforming the state into a hub of innovation and enterprise.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHAT WE OFFER
      ══════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <p
              className="sans uppercase tracking-widest text-sm font-medium mb-2 text-center"
              style={{ color: 'var(--primary)' }}
            >
              Our Services
            </p>
            <h2
              className="font-bold text-center mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)' }}
            >
              What We Offer
            </h2>
            <p
              className="sans text-center mb-16 max-w-xl mx-auto"
              style={{ color: 'var(--muted)', fontSize: '1.05rem' }}
            >
              A complete ecosystem to take your idea from concept to a thriving business.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerItems.map((item, i) => (
              <Reveal key={item.title} custom={i * 0.5}>
                <div
                  className="offer-card rounded-2xl p-7 h-full"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                  }}
                >
                  <div
                    className="offer-icon text-3xl mb-5 inline-block"
                    style={{ transition: 'transform 0.3s ease' }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontSize: '1.15rem', color: 'var(--ink)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="sans text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {item.desc}
                  </p>
                  <div
                    className="mt-5 inline-flex items-center gap-1 sans text-xs font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    Learn more
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          OBJECTIVES
      ══════════════════════════════════ */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
        }}
      >
        {/* BG decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.08)',
            pointerEvents: 'none',
          }}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Reveal>
            <p
              className="sans uppercase tracking-widest text-sm font-medium mb-2 text-center"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              What Drives Us
            </p>
            <h2
              className="font-bold text-center mb-16 text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Our Objectives
            </h2>
          </Reveal>

          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <Reveal key={i} custom={i * 0.5}>
                <div
                  className="obj-item flex items-center gap-6 rounded-2xl p-5 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(8px)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
                    e.currentTarget.style.transform = 'translateX(8px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <span
                    className="obj-num sans flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.85)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="sans font-medium text-white"
                    style={{ fontSize: '1.05rem', lineHeight: 1.5 }}
                  >
                    {obj}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════ */}
      <section className="py-10 px-6" style={{ background: 'var(--cream)' }}>
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <WhoWeAre />
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: 'var(--ink)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <span
              className="sans inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-widest"
              style={{
                background: 'rgba(192,57,43,0.15)',
                color: 'var(--primary-light)',
                border: '1px solid rgba(192,57,43,0.25)',
              }}
            >
              Get Started Today
            </span>
            <h2
              className="font-black mb-4 text-white"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}
            >
              Ready to Start
              <br />
              <span style={{ color: 'var(--primary-light)' }}>Your Journey?</span>
            </h2>
            <p
              className="sans mb-10 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              Join thousands of entrepreneurs who are transforming their ideas into
              successful businesses with MUY.
            </p>
            <a
              href="https://ukrbi.in/new/"
              target="_blank"
              rel="noopener noreferrer"
              className="sans inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white transition-all duration-300"
              style={{
                background: 'var(--primary)',
                boxShadow: '0 8px 32px rgba(192,57,43,0.4)',
                fontSize: '1rem',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--primary-light)'
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(192,57,43,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,57,43,0.4)'
              }}
            >
              Apply Now
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}