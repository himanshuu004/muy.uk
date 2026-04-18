import { useEffect, useRef, useState } from 'react'

function Gallery() {
  const successStoriesRef = useRef(null)
  const videosRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [visibleItems, setVisibleItems] = useState(new Set())

  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  const successStoriesImages = [
    { id: 1, src: withBase('/Success Stories/A1.webp'), title: 'Success Story 1' },
    { id: 2, src: withBase('/Success Stories/A2.webp'), title: 'Success Story 2' },
    { id: 3, src: withBase('/Success Stories/A3.webp'), title: 'Success Story 3' },
    { id: 4, src: withBase('/Success Stories/A4.webp'), title: 'Success Story 4' },
    { id: 5, src: withBase('/Success Stories/A5.webp'), title: 'Success Story 5' },
    { id: 6, src: withBase('/Success Stories/A6.webp'), title: 'Success Story 6' },
    { id: 7, src: withBase('/Success Stories/A7.webp'), title: 'Success Story 7' },
    { id: 8, src: withBase('/Success Stories/A8.webp'), title: 'Success Story 8' },
    { id: 9, src: withBase('/Success Stories/A9.webp'), title: 'Success Story 9' },
  ]

  const youtubeVideos = [
    { id: 1, embedId: 'rticvbE1nKM', title: 'MUY Success Stories - Video 1' },
    { id: 2, embedId: 'E94b91PRN5I', title: 'MUY Success Stories - Video 2' },
  ]

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.id]))
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Hash navigation
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const map = { '#success-stories': successStoriesRef, '#videos': videosRef }
        map[hash]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  const openModal = (img, idx) => { setSelectedImage(img); setSelectedIndex(idx) }
  const closeModal = () => { setSelectedImage(null); setSelectedIndex(null) }
  const navigate = (dir) => {
    const next = (selectedIndex + dir + successStoriesImages.length) % successStoriesImages.length
    setSelectedImage(successStoriesImages[next].src)
    setSelectedIndex(next)
  }

  // keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (!selectedImage) return
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selectedImage, selectedIndex])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .gal-root {
          font-family: 'Outfit', sans-serif;
          background: #f8f7f4;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Hero Header ── */
        .gal-hero {
          position: relative;
          padding: 80px 32px 72px;
          text-align: center;
          overflow: hidden;
        }
        .gal-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f2e1e 0%, #1a4a2e 40%, #0d3322 100%);
          z-index: 0;
        }
        .gal-hero-noise {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }
        .gal-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
        }
        .gal-hero-orb-1 {
          width: 400px; height: 400px;
          background: rgba(52, 211, 153, 0.12);
          top: -100px; left: -80px;
        }
        .gal-hero-orb-2 {
          width: 300px; height: 300px;
          background: rgba(16, 185, 129, 0.08);
          bottom: -80px; right: -60px;
        }
        .gal-hero-content { position: relative; z-index: 10; }
        .gal-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 100px;
          padding: 5px 16px;
          color: #6ee7b7;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
          backdrop-filter: blur(8px);
          animation: fadeDown 0.7s ease both;
        }
        .gal-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 7vw, 80px);
          font-weight: 400;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
          animation: fadeDown 0.7s 0.1s ease both;
        }
        .gal-hero-title em {
          font-style: italic;
          color: #6ee7b7;
        }
        .gal-hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 440px;
          margin: 0 auto 40px;
          line-height: 1.7;
          animation: fadeDown 0.7s 0.2s ease both;
        }
        .gal-hero-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          animation: fadeDown 0.7s 0.3s ease both;
        }
        .gal-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.06);
          text-decoration: none;
        }
        .gal-pill:hover, .gal-pill.active {
          background: rgba(52, 211, 153, 0.18);
          border-color: rgba(52, 211, 153, 0.4);
          color: #6ee7b7;
        }
        .gal-hero-wave {
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          z-index: 10;
        }

        /* ── Page body ── */
        .gal-body {
          max-width: 1160px;
          margin: 0 auto;
          padding: 64px 32px 80px;
        }

        /* ── Section header ── */
        .sec-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 32px;
          gap: 16px;
        }
        .sec-header-left {}
        .sec-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #059669;
          margin-bottom: 6px;
        }
        .sec-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 400;
          color: #0f1c14;
          line-height: 1.15;
          margin: 0;
        }
        .sec-count {
          font-size: 13px;
          color: #9ca3af;
          white-space: nowrap;
          padding-bottom: 6px;
        }
        .sec-divider {
          height: 1px;
          background: linear-gradient(to right, #d1fae5, #e5e7eb, transparent);
          margin-bottom: 36px;
        }

        /* ── Success Stories Grid ── */
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 72px;
        }
        .story-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          cursor: pointer;
          background: #e5e7eb;
          aspect-ratio: 4/3;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease;
        }
        .story-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Stagger via inline style delay */
        .story-card:hover {
          box-shadow: 0 16px 40px rgba(0,0,0,0.16);
        }
        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .story-card:hover .story-img { transform: scale(1.07); }

        .story-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,30,20,0.75) 0%, rgba(10,30,20,0.1) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .story-card:hover .story-overlay { opacity: 1; }

        .story-footer {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 18px 18px;
          transform: translateY(8px);
          opacity: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .story-card:hover .story-footer { transform: translateY(0); opacity: 1; }
        .story-label {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
        }
        .story-expand {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .story-num {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.3);
          border-radius: 6px;
          padding: 3px 8px;
          backdrop-filter: blur(6px);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .story-card:hover .story-num { opacity: 1; }

        /* ── Videos Section ── */
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .video-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.06);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease;
        }
        .video-card.visible { opacity: 1; transform: translateY(0); }
        .video-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.12); }
        .video-frame-wrap {
          position: relative;
          aspect-ratio: 16/9;
          background: #0f1c14;
        }
        .video-frame-wrap iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        .video-body {
          padding: 18px 20px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .video-icon {
          width: 38px; height: 38px;
          background: #ecfdf5;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #059669;
        }
        .video-title {
          font-size: 14px;
          font-weight: 500;
          color: #1f2937;
          line-height: 1.4;
        }
        .video-meta {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 2px;
        }

        /* ── Modal ── */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(16px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .modal-box {
          position: relative;
          max-width: 960px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .modal-img {
          max-height: 80vh;
          max-width: 100%;
          object-fit: contain;
          border-radius: 14px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
          animation: popIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes popIn { from { transform: scale(0.9); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .modal-bar {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .modal-nav {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer;
          transition: background 0.18s;
        }
        .modal-nav:hover { background: rgba(255,255,255,0.2); }
        .modal-counter {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          min-width: 56px;
          text-align: center;
          font-variant-numeric: tabular-nums;
        }
        .modal-close-btn {
          position: absolute;
          top: -52px; right: 0;
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer;
          transition: background 0.18s;
        }
        .modal-close-btn:hover { background: rgba(255,255,255,0.2); }

        /* ── Animations ── */
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px) }
          to   { opacity: 1; transform: translateY(0) }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .stories-grid { grid-template-columns: repeat(2, 1fr); }
          .videos-grid { grid-template-columns: 1fr; max-width: 520px; }
        }
        @media (max-width: 600px) {
          .gal-hero { padding: 56px 20px 64px; }
          .gal-body { padding: 48px 20px 64px; }
          .stories-grid { grid-template-columns: 1fr; gap: 14px; }
          .sec-header { flex-direction: column; align-items: flex-start; gap: 4px; }
        }
      `}</style>

      <div className="gal-root">
        {/* ── Hero ── */}
        <header className="gal-hero">
          <div className="gal-hero-bg" />
          <div className="gal-hero-noise" />
          <div className="gal-hero-orb gal-hero-orb-1" />
          <div className="gal-hero-orb gal-hero-orb-2" />
          <div className="gal-hero-content">
            <div className="gal-hero-eyebrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0l1.5 4.5H12L8.25 7.5 9.75 12 6 9 2.25 12l1.5-4.5L0 4.5h4.5z"/>
              </svg>
              Visual Stories
            </div>
            <h1 className="gal-hero-title">
              Our <em>Gallery</em>
            </h1>
            <p className="gal-hero-sub">
              Explore photos and videos capturing the journeys of rural entrepreneurs we've empowered.
            </p>
            <div className="gal-hero-pills">
              <a href="#success-stories" className="gal-pill">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photos
              </a>
              <a href="#videos" className="gal-pill">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Videos
              </a>
            </div>
          </div>
          {/* Wave */}
          <svg className="gal-hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#f8f7f4"/>
          </svg>
        </header>

        <div className="gal-body">
          {/* ── Success Stories ── */}
          <section id="success-stories" ref={successStoriesRef} className="scroll-mt-20">
            <div className="sec-header">
              <div className="sec-header-left">
                <p className="sec-eyebrow">Photo Gallery</p>
                <h2 className="sec-title">Success Stories</h2>
              </div>
              <span className="sec-count">{successStoriesImages.length} photos</span>
            </div>
            <div className="sec-divider" />

            <div className="stories-grid">
              {successStoriesImages.map((img, idx) => (
                <div
                  key={img.id}
                  className={`story-card ${visibleItems.has(`img-${idx}`) ? 'visible' : ''}`}
                  data-id={`img-${idx}`}
                  style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
                  onClick={() => openModal(img.src, idx)}
                >
                  <img src={img.src} alt={img.title} className="story-img" loading="lazy" />
                  <div className="story-overlay" />
                  <span className="story-num">#{String(idx + 1).padStart(2, '0')}</span>
                  <div className="story-footer">
                    <span className="story-label">{img.title}</span>
                    <div className="story-expand">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Videos ── */}
          <section id="videos" ref={videosRef} className="scroll-mt-20">
            <div className="sec-header">
              <div className="sec-header-left">
                <p className="sec-eyebrow">Watch & Inspire</p>
                <h2 className="sec-title">Success Story Videos</h2>
              </div>
              <span className="sec-count">{youtubeVideos.length} videos</span>
            </div>
            <div className="sec-divider" />

            <div className="videos-grid">
              {youtubeVideos.map((vid, idx) => (
                <div
                  key={vid.id}
                  className={`video-card ${visibleItems.has(`vid-${idx}`) ? 'visible' : ''}`}
                  data-id={`vid-${idx}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="video-frame-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.embedId}?rel=0&modestbranding=1`}
                      title={vid.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="video-body">
                    <div className="video-icon">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="video-title">{vid.title}</div>
                      <div className="video-meta">MUY Success Stories</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Lightbox Modal ── */}
        {selectedImage && (
          <div className="modal-bg" onClick={closeModal}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img key={selectedImage} src={selectedImage} alt="Enlarged" className="modal-img" />
              <div className="modal-bar">
                <button className="modal-nav" onClick={() => navigate(-1)} aria-label="Previous">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="modal-counter">{selectedIndex + 1} / {successStoriesImages.length}</span>
                <button className="modal-nav" onClick={() => navigate(1)} aria-label="Next">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Gallery