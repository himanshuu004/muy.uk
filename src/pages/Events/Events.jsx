import React, { useState, useEffect } from 'react';

function Events() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const gullakEvent = {
    title: 'Gullak',
    subtitle: 'Community-Driven Savings & Financial Literacy Program',
    description:
      'Gullak is a community-driven savings and financial literacy program designed to empower rural entrepreneurs and communities. Through interactive workshops, financial planning sessions, and community gatherings, Gullak helps participants develop healthy savings habits, understand financial management, and build a strong foundation for their entrepreneurial journey.',
    objectives: [
      'Empower rural entrepreneurs with financial knowledge',
      'Promote healthy savings habits in communities',
      'Provide interactive financial planning workshops',
      'Foster a culture of financial discipline and collective growth',
      'Build strong foundations for entrepreneurial journeys',
    ],
    location: 'Rural Communities',
  };

  const eventPhotos = [
    '/Gullak/1.webp',
    '/Gullak/2.webp',
    '/Gullak/3.webp',
    '/Gullak/4.webp',
    '/Gullak/5.webp',
    '/Gullak/6.webp',
  ].map(withBase);

  const openImageModal = (imageSrc, idx) => {
    setSelectedImage(imageSrc);
    setSelectedIndex(idx);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const navigateImage = (dir) => {
    const next = (selectedIndex + dir + eventPhotos.length) % eventPhotos.length;
    setSelectedImage(eventPhotos[next]);
    setSelectedIndex(next);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        .events-root {
          font-family: 'DM Sans', sans-serif;
          background: #f6f7f5;
          min-height: 100vh;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .hero-bg.loaded { transform: scale(1); }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(10,30,20,0.55) 0%,
            rgba(10,40,30,0.75) 50%,
            rgba(8,28,20,0.92) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px 56px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          color: #a7f3d0;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          background: #34d399;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(52px, 8vw, 88px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .hero-title em {
          font-style: italic;
          color: #6ee7b7;
        }
        .hero-subtitle {
          font-size: 17px;
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          max-width: 480px;
          line-height: 1.6;
          margin: 0 0 32px;
        }
        .hero-meta {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          font-weight: 400;
        }
        .hero-meta-icon {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6ee7b7;
        }
        .hero-meta-divider {
          width: 1px; height: 20px;
          background: rgba(255,255,255,0.2);
        }

        /* ── Layout ── */
        .page-body {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px 80px;
        }

        /* ── Section layout ── */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 56px;
          align-items: start;
        }

        /* ── Cards ── */
        .card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .card-inner { padding: 36px; }
        .card-inner-lg { padding: 36px 40px; }

        .section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #059669;
          margin-bottom: 8px;
        }
        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: #0f1c15;
          line-height: 1.2;
          margin: 0 0 14px;
        }
        .section-body {
          font-size: 15px;
          line-height: 1.75;
          color: #4b5563;
          font-weight: 300;
        }

        /* ── About card (full width) ── */
        .about-card {
          margin-bottom: 56px;
        }
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: start;
        }
        .about-divider {
          width: 1px;
          background: #e5e7eb;
          align-self: stretch;
          margin: 0 -26px;
        }

        /* ── Objectives ── */
        .objectives-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 8px;
        }
        .objective-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid transparent;
          transition: all 0.18s;
          cursor: default;
        }
        .objective-item:hover {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }
        .objective-check {
          flex-shrink: 0;
          width: 22px; height: 22px;
          background: #dcfce7;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .objective-check svg { color: #16a34a; }
        .objective-text {
          font-size: 14px;
          color: #374151;
          font-weight: 400;
          line-height: 1.5;
        }

        /* ── Gallery ── */
        .gallery-section { margin-bottom: 56px; }
        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .gallery-count {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 400;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 14px;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          cursor: pointer;
          background: #e5e7eb;
          aspect-ratio: 4/3;
        }
        .gallery-item:first-child {
          grid-column: 1 / 3;
          aspect-ratio: 16/9;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .gallery-item:hover .gallery-img { transform: scale(1.06); }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 14px;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-zoom {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.9);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          backdrop-filter: blur(4px);
        }

        /* ── Modal ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(12px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-inner {
          position: relative;
          max-width: 1000px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .modal-img {
          max-height: 78vh;
          max-width: 100%;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 32px 64px rgba(0,0,0,0.5);
          animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes scaleIn { from { transform: scale(0.93); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .modal-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .modal-btn {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: background 0.18s;
        }
        .modal-btn:hover { background: rgba(255,255,255,0.22); }
        .modal-counter {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          min-width: 52px;
          text-align: center;
          font-variant-numeric: tabular-nums;
        }
        .modal-close {
          position: absolute;
          top: -52px;
          right: 0;
          width: 40px; height: 40px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: background 0.18s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.2); }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-content { padding: 0 20px 40px; }
          .page-body { padding: 0 20px 60px; }
          .about-layout { grid-template-columns: 1fr; gap: 28px; }
          .about-divider { display: none; }
          .card-inner { padding: 24px; }
          .card-inner-lg { padding: 26px 22px; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-item:first-child { grid-column: 1 / 3; }
          .hero-title { font-size: 48px; }
        }
      `}</style>

      <div className="events-root">
        {/* ── Hero ── */}
        <section className="hero">
          <img
            src={eventPhotos[0]}
            alt="Gullak Event"
            className={`hero-bg ${isVisible ? 'loaded' : ''}`}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Community Program
            </div>
            <h1 className="hero-title">
              {gullakEvent.title}
            </h1>
            <p className="hero-subtitle">{gullakEvent.subtitle}</p>
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-icon">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                {gullakEvent.location}
              </div>
            </div>
          </div>
        </section>

        <div className="page-body">
          {/* ── About ── */}
          <div className="card about-card">
            <div className="card-inner-lg">
              <div className="about-layout">
                {/* Left: description */}
                <div>
                  <p className="section-eyebrow">About the Program</p>
                  <h2 className="section-title">What is Gullak?</h2>
                  <p className="section-body">{gullakEvent.description}</p>
                </div>

                {/* Divider */}
                <div className="about-divider" />

                {/* Right: objectives */}
                <div>
                  <p className="section-eyebrow">Program Focus</p>
                  <h2 className="section-title">Our Objectives</h2>
                  <div className="objectives-list">
                    {gullakEvent.objectives.map((obj, i) => (
                      <div key={i} className="objective-item">
                        <div className="objective-check">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="objective-text">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Gallery ── */}
          <section className="gallery-section">
            <div className="gallery-header">
              <div>
                <p className="section-eyebrow">Visual Stories</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Event Gallery</h2>
              </div>
              <span className="gallery-count">{eventPhotos.length} photos</span>
            </div>
            <div className="gallery-grid">
              {eventPhotos.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-item"
                  onClick={() => openImageModal(img, idx)}
                >
                  <img src={img} alt={`Gullak photo ${idx + 1}`} className="gallery-img" loading="lazy" />
                  <div className="gallery-overlay">
                    <div className="gallery-zoom">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Modal ── */}
        {selectedImage && (
          <div className="modal-backdrop" onClick={closeImageModal}>
            <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImageModal} aria-label="Close">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={selectedImage} alt="Enlarged" className="modal-img" />
              <div className="modal-controls">
                <button className="modal-btn" onClick={() => navigateImage(-1)} aria-label="Previous">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="modal-counter">{selectedIndex + 1} / {eventPhotos.length}</span>
                <button className="modal-btn" onClick={() => navigateImage(1)} aria-label="Next">
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
  );
}

export default Events;