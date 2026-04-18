// Message from the Leadership section
import { FeaturedSpotlight } from "../ui/feature-spotlight"

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  :root {
    --c-red:   #dc2626;
    --c-red-d: #991b1b;
    --c-ink:   #1c1917;
    --c-mist:  #f5f4f2;
  }

  @keyframes leaderFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes leaderLineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .leader-section-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(220,38,38,0.08);
    border: 1px solid rgba(220,38,38,0.2);
    border-radius: 999px;
    padding: 5px 18px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px; font-weight: 600;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: var(--c-red);
    animation: leaderFadeUp 0.6s cubic-bezier(.16,1,.3,1) 0.1s both;
  }

  .leader-title {
    animation: leaderFadeUp 0.7s cubic-bezier(.16,1,.3,1) 0.25s both;
  }

  .leader-spotlight-wrap {
    animation: leaderFadeUp 0.8s cubic-bezier(.16,1,.3,1) 0.4s both;
  }

  .leader-decorative-line {
    height: 3px;
    background: linear-gradient(90deg, var(--c-red), #f97316, transparent);
    border-radius: 999px;
    transform-origin: left;
    animation: leaderLineGrow 0.9s cubic-bezier(.16,1,.3,1) 0.5s both;
  }
`

function WhoWeAre() {
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  return (
    <>
      <style>{STYLES}</style>

      <section
        style={{
          position: 'relative',
          padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,80px)',
          background: '#fff',
          fontFamily: "'DM Sans', sans-serif",
          overflow: 'hidden',
        }}
      >
        {/* Background texture / geometric accents */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: 0, right: 0,
            width: '45%', height: '100%',
            background: 'linear-gradient(135deg, transparent 60%, rgba(220,38,38,0.03) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-80px', right: '-80px',
            width: '320px', height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-60px', left: '-60px',
            width: '260px', height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>

            <span className="leader-section-badge">
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--c-red)', flexShrink: 0,
              }} />
              Leadership
            </span>

            <h2
              className="leader-title"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(26px, 4vw, 48px)',
                color: 'var(--c-ink)',
                marginTop: '16px',
                marginBottom: '12px',
                letterSpacing: '-0.5px',
                lineHeight: 1.15,
              }}
            >
              Message from the{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--c-red), #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Leadership
              </span>
            </h2>

            {/* Decorative underline */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="leader-decorative-line" style={{ width: '80px' }} />
            </div>
          </div>

          {/* Spotlight component */}
          <div className="leader-spotlight-wrap" style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <FeaturedSpotlight
              label="Leadership"
              titleLine1="Ms. Jharna"
              titleLine2="Kamthan (IAS)"
              subtitle="Additional Secretary / Project Coordinator, Mukhyamantri Udyamshala Yojana"
              quote="Empowering rural entrepreneurs is not just a mission, it's our commitment to building a self-reliant and prosperous Uttarakhand. Through the Mukhyamantri Udyamshala Yojana, we are creating opportunities that transform dreams into reality and villages into hubs of innovation."
              imageSrc={withBase("/Secretary/secretary.webp")}
              imageAlt="Ms. Jharna Kamthan (IAS)"
              indexNumber="01"
              ctaLabel="Read More"
              ctaHref="/about"
            />
          </div>

          {/* Bottom decorative rule */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '64px',
            opacity: 0.25,
          }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--c-ink)' }} />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--c-ink)">
              <rect x="4" width="4" height="12" rx="2" />
              <rect y="4" width="12" height="4" rx="2" />
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'var(--c-ink)' }} />
          </div>

        </div>
      </section>
    </>
  )
}

export default WhoWeAre