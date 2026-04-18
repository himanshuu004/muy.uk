import MapView from '../../components/MapView/MapView'

function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --primary: #1a6b3a;
          --primary-dark: #124d2a;
          --primary-light: #e8f5ee;
          --accent: #f0a500;
          --accent-soft: #fff8e6;
          --text-dark: #1a2a1e;
          --text-mid: #4a6655;
          --text-light: #7a9485;
          --bg: #f6faf7;
          --white: #ffffff;
          --border: #d4e8db;
        }

        .contact-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .contact-page {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          min-height: 100vh;
        }

        /* Hero Banner */
        .contact-hero {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, #2d8a50 100%);
          padding: 72px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }

        .contact-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -40px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          pointer-events: none;
        }

        .contact-hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          color: #b8e0c6;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 50px;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .contact-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.18;
          margin-bottom: 16px;
        }

        .contact-hero p {
          color: rgba(255,255,255,0.7);
          font-size: 1.05rem;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 300;
        }

        /* Wave divider */
        .contact-wave {
          background: var(--primary);
          line-height: 0;
        }
        .contact-wave svg {
          display: block;
          width: 100%;
          height: 48px;
        }

        /* Main body */
        .contact-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 24px 80px;
        }

        /* Stat strip */
        .contact-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }

        .stat-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          transition: box-shadow 0.22s, transform 0.22s;
        }

        .stat-card:hover {
          box-shadow: 0 8px 28px rgba(26,107,58,0.1);
          transform: translateY(-3px);
        }

        .stat-icon {
          width: 44px; height: 44px;
          background: var(--primary-light);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 12px;
          font-size: 20px;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-light);
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Main grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 28px;
          align-items: start;
        }

        /* Cards */
        .contact-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(26,107,58,0.05);
        }

        .card-header {
          background: linear-gradient(135deg, var(--primary) 0%, #2d8a50 100%);
          padding: 28px 32px 24px;
        }

        .card-header-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .card-header-sub {
          color: rgba(255,255,255,0.65);
          font-size: 0.85rem;
          font-weight: 300;
        }

        .card-body {
          padding: 32px;
        }

        /* Info items */
        .info-item {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }

        .info-item:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        .info-icon-wrap {
          flex-shrink: 0;
          width: 46px; height: 46px;
          background: var(--primary-light);
          border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }

        .info-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--text-light);
          margin-bottom: 5px;
        }

        .info-value {
          color: var(--text-dark);
          font-size: 0.97rem;
          line-height: 1.55;
          font-weight: 400;
        }

        .info-value a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.18s;
        }

        .info-value a:hover {
          color: var(--primary-dark);
          text-decoration: underline;
        }

        /* Social section */
        .social-section {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .social-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--text-light);
          margin-bottom: 14px;
        }

        .social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 50px;
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--text-mid);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s, transform 0.18s, box-shadow 0.18s;
        }

        .social-btn:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 5px 18px rgba(26,107,58,0.2);
        }

        .social-btn svg {
          width: 15px; height: 15px;
          flex-shrink: 0;
        }

        /* Map card */
        .map-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(26,107,58,0.05);
        }

        .map-header {
          background: linear-gradient(135deg, var(--primary) 0%, #2d8a50 100%);
          padding: 28px 32px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .map-header-icon {
          width: 42px; height: 42px;
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }

        .map-header-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: #fff;
        }

        .map-header-sub {
          color: rgba(255,255,255,0.65);
          font-size: 0.82rem;
        }

        .map-embed {
          display: block;
          width: 100%;
          min-height: 360px;
        }

        .map-address-strip {
          padding: 18px 28px;
          background: var(--accent-soft);
          border-top: 1px solid #f0e0b0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .map-address-strip span {
          font-size: 0.83rem;
          color: #7a6010;
          line-height: 1.5;
        }

        .directions-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 11px 22px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
          margin: 20px 28px 24px;
          white-space: nowrap;
        }

        .directions-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26,107,58,0.25);
        }

        /* Responsive */
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .contact-hero {
            padding: 52px 20px 64px;
          }
          .contact-body {
            padding: 36px 16px 60px;
          }
          .contact-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .stat-card {
            display: flex;
            align-items: center;
            gap: 16px;
            text-align: left;
            padding: 18px 20px;
          }
          .stat-icon { margin: 0; }
          .card-body { padding: 24px 20px; }
          .map-header { padding: 22px 20px; }
          .map-address-strip { padding: 14px 20px; }
          .directions-btn { margin: 16px 20px 20px; }
          .social-btn { padding: 8px 13px; font-size: 0.78rem; }
        }
      `}</style>

      <div className="contact-page">

        {/* Hero */}
        <div className="contact-hero">
          <div className="contact-hero-badge">Rural Development Department</div>
          <h1>Let's Connect &<br />Work Together</h1>
          <p>Reach out to the State Project Management Unit for inquiries, partnerships, and support.</p>
        </div>

        {/* Wave divider */}
        <div className="contact-wave">
          <svg viewBox="0 0 1200 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,48 L0,24 Q300,0 600,24 Q900,48 1200,24 L1200,48 Z" fill="#f6faf7"/>
          </svg>
        </div>

        {/* Body */}
        <div className="contact-body">

          {/* Stats strip */}
          <div className="contact-stats">
            <div className="stat-card">
              <div className="stat-icon">🌿</div>
              <div className="stat-value">13+</div>
              <div className="stat-label">Districts Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🤝</div>
              <div className="stat-value">7,500+</div>
              <div className="stat-label">Entrepreneurs Supported</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-value">Mon–Sat</div>
              <div className="stat-label">Office Hours</div>
            </div>
          </div>

          {/* Main grid */}
          <div className="contact-grid">

            {/* Left — Contact Info */}
            <div className="contact-card">
              <div className="card-header">
                <div className="card-header-title">Get in Touch</div>
                <div className="card-header-sub">We'd love to hear from you</div>
              </div>
              <div className="card-body">

                <div className="info-item">
                  <div className="info-icon-wrap">📍</div>
                  <div>
                    <div className="info-label">Address</div>
                    <div className="info-value">
                      State Project Management Unit, Department of Rural Development, Uttarahaat Near IT Park, Dehradun, Uttarakhand
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrap">📞</div>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">
                      <a href="tel:+917060463021">+91-7060463021</a>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrap">✉️</div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">
                      <a href="mailto:rbiuttarakhand@gmail.com">rbiuttarakhand@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="social-section">
                  <div className="social-label">Follow Us</div>
                  <div className="social-row">
                    <a href="https://www.facebook.com/profile.php?id=100075963939539" target="_blank" rel="noopener noreferrer" className="social-btn">
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Facebook
                    </a>
                    <a href="https://x.com/RuralIncubator" target="_blank" rel="noopener noreferrer" className="social-btn">
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      Twitter / X
                    </a>
                    <a href="https://www.linkedin.com/company/rural-business-incubator" target="_blank" rel="noopener noreferrer" className="social-btn">
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                    <a href="https://www.instagram.com/muy_uttarakhand/" target="_blank" rel="noopener noreferrer" className="social-btn">
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      Instagram
                    </a>
                    <a href="https://www.youtube.com/@mukhyamantriudyamshalayojana" target="_blank" rel="noopener noreferrer" className="social-btn">
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      YouTube
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right — Map */}
            <div className="map-card">
              <div className="map-header">
                <div className="map-header-icon">🗺️</div>
                <div>
                  <div className="map-header-title">Find Us on Map</div>
                  <div className="map-header-sub">Dehradun, Uttarakhand</div>
                </div>
              </div>

              <div className="map-embed">
                <MapView />
              </div>

              <div className="map-address-strip">
                <span>📍</span>
                <span>State Project Management Unit, Department of Rural Development, Uttarahaat Near IT Park, Dehradun, Uttarakhand</span>
              </div>

              <a
                href="https://maps.google.com/?q=State+Project+Management+Unit%2C+Department+of+Rural+Development%2C+Uttarahaat%2C+Near+IT+Park%2C+Dehradun%2C+Uttarakhand"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Get Directions
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact