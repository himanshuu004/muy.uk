import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>}
      {children}
    </div>
  )
}

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// ─────────────────────────────────────────────
// ServicesCard — fully restyled
// ─────────────────────────────────────────────
export function ServicesCard() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  const incubationSupportPhotos = [
    { src: withBase('/Success Stories/A4.webp'), alt: 'Incubation support service photo 1' },
    { src: withBase('/Success Stories/A9.webp'), alt: 'Incubation support service photo 2' },
  ]

  const services = [
    { name: 'Business Skills Training',  description: 'Training programs for business management and entrepreneurial skills', icon: '📚' },
    { name: 'Mentoring Support',          description: 'Personalized guidance from experienced entrepreneurs and experts',        icon: '👥' },
    { name: 'Technical Support',          description: 'Technical expertise for product development and quality improvement',     icon: '🔧' },
    { name: 'Market Linkages',            description: 'Connections with buyers, suppliers, and distribution channels',           icon: '🔗' },
    { name: 'Business Plan',              description: 'Professional assistance in creating comprehensive business plans',        icon: '📋' },
    { name: 'Access to Finance',          description: 'Guidance on funding options including loans and grants',                  icon: '💰' },
    { name: 'Strengthen Ecosystem',      description: 'Building collaborative networks of entrepreneurs and stakeholders',       icon: '🌱' },
    { name: 'Legal and License Support',  description: 'Assistance with registration, licensing, and compliance',                 icon: '⚖️' },
    { name: 'Co-working Space',           description: 'Affordable shared workspace with essential infrastructure',               icon: '🏢' },
  ]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) setIsOpen(false)
    }
    const handleEscape = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Card wrapper ── */
        .sc-root {
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Action buttons ── */
        .sc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 15px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          border: none;
          text-decoration: none;
        }
        .sc-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .sc-btn:hover::before { opacity: 1; }
        .sc-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }
        .sc-btn:active { transform: translateY(0); }

        .sc-btn-primary {
          background: linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ef4444 100%);
          color: #fff;
          box-shadow: 0 4px 16px rgba(185,28,28,0.35);
        }
        .sc-btn-primary:hover {
          box-shadow: 0 12px 32px rgba(185,28,28,0.45);
        }

        .sc-btn-outline {
          background: #fff;
          color: #b91c1c;
          border: 2px solid #fca5a5;
          box-shadow: 0 2px 8px rgba(185,28,28,0.1);
        }
        .sc-btn-outline:hover {
          background: #fef2f2;
          border-color: #ef4444;
          box-shadow: 0 12px 32px rgba(185,28,28,0.18);
        }

        .sc-btn-icon {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.2);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s;
        }
        .sc-btn:hover .sc-btn-icon { transform: scale(1.1) rotate(5deg); }

        /* ── Photos under Incubation button ── */
        .sc-support-photos {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          margin-top: 12px;
          max-width: 340px;
          margin-left: auto;
          margin-right: auto;
        }
        .sc-support-photo {
          width: 100%;
          aspect-ratio: 1 / 1;
          height: auto;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.45);
          box-shadow: 0 10px 22px rgba(2, 6, 23, 0.08);
        }

        /* ── Modal backdrop ── */
        .sc-backdrop {
          position: fixed; inset: 0;
          background: rgba(10, 10, 15, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 9998;
          animation: sc-fadeIn 0.25s ease both;
        }
        @keyframes sc-fadeIn { from { opacity: 0 } to { opacity: 1 } }

        /* ── Modal panel ── */
        .sc-modal {
          position: fixed; inset: 0;
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          pointer-events: none;
        }
        .sc-modal-inner {
          pointer-events: auto;
          width: min(960px, 95vw);
          max-height: 90vh;
          display: flex; flex-direction: column;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.06);
          animation: sc-popIn 0.3s cubic-bezier(0.34, 1.4, 0.64, 1) both;
        }
        @keyframes sc-popIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        /* ── Modal header ── */
        .sc-modal-head {
          position: relative;
          padding: 24px 28px 22px;
          background: linear-gradient(135deg, #7f1d1d 0%, #b91c1c 45%, #dc2626 100%);
          flex-shrink: 0;
          overflow: hidden;
        }
        .sc-modal-head::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
        }
        .sc-modal-head::after {
          content: '';
          position: absolute;
          bottom: -40px; left: 40px;
          width: 140px; height: 140px;
          background: rgba(255,255,255,0.04);
          border-radius: 50%;
        }
        .sc-modal-head-row {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }
        .sc-modal-head-left { display: flex; align-items: center; gap: 14px; }
        .sc-modal-head-icon {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.2);
          font-size: 22px;
          flex-shrink: 0;
        }
        .sc-modal-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(18px, 3vw, 26px);
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin: 0;
        }
        .sc-modal-subtitle {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          margin: 3px 0 0;
          font-weight: 300;
        }
        .sc-modal-close {
          width: 38px; height: 38px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer; flex-shrink: 0;
          transition: all 0.2s;
        }
        .sc-modal-close:hover {
          background: rgba(255,255,255,0.22);
          transform: rotate(90deg);
        }

        /* ── Services grid ── */
        .sc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          padding: 24px 28px 28px;
          overflow-y: auto;
        }

        /* ── Service tile ── */
        .sc-tile {
          perspective: 1000px;
          height: 160px;
          cursor: default;
        }
        .sc-tile-inner {
          position: relative;
          width: 100%; height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 16px;
        }
        .sc-tile:hover .sc-tile-inner { transform: rotateY(180deg); }

        /* Front */
        .sc-tile-front,
        .sc-tile-back {
          position: absolute; inset: 0;
          border-radius: 16px;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 16px 12px;
          text-align: center;
          overflow: hidden;
        }

        .sc-tile-front {
          background: #fff;
          border: 1.5px solid #f1f5f9;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .sc-tile-front::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(185,28,28,0.0) 0%, rgba(185,28,28,0.0) 100%);
          transition: background 0.35s;
          border-radius: 16px;
        }
        .sc-tile:hover .sc-tile-front::after {
          background: linear-gradient(135deg, rgba(185,28,28,0.04) 0%, rgba(239,68,68,0.06) 100%);
        }

        .sc-tile-emoji-wrap {
          width: 60px; height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #fee2e2, #fecaca);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 10px;
          font-size: 28px;
          box-shadow: 0 4px 12px rgba(185,28,28,0.12);
          transition: transform 0.35s, box-shadow 0.35s;
          position: relative; z-index: 1;
        }
        .sc-tile:hover .sc-tile-emoji-wrap {
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(185,28,28,0.2);
        }
        .sc-tile-name {
          font-size: 12px;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.35;
          position: relative; z-index: 1;
          transition: color 0.25s;
        }
        .sc-tile:hover .sc-tile-name { color: #b91c1c; }

        /* Back */
        .sc-tile-back {
          background: linear-gradient(145deg, #991b1b 0%, #b91c1c 50%, #dc2626 100%);
          transform: rotateY(180deg);
          border: 1.5px solid rgba(255,255,255,0.1);
          box-shadow: 0 8px 32px rgba(185,28,28,0.4);
          gap: 10px;
        }
        .sc-tile-back::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
        }
        .sc-tile-back-icon {
          font-size: 28px;
          opacity: 0.9;
          position: relative; z-index: 1;
        }
        .sc-tile-back-text {
          font-size: 11.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          line-height: 1.55;
          position: relative; z-index: 1;
        }

        /* ── Stagger entrance ── */
        .sc-tile {
          opacity: 0;
          transform-origin: center;
          animation: sc-tileIn 0.4s ease both;
        }
        @keyframes sc-tileIn {
          from { opacity: 0; transform: translateY(12px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .sc-grid { grid-template-columns: repeat(2, 1fr); padding: 16px; gap: 10px; }
          .sc-tile { height: 140px; }
          .sc-modal-head { padding: 18px 20px; }
          .sc-support-photos { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; max-width: 280px; }
          .sc-support-photo { aspect-ratio: 1 / 1; height: auto; }
        }
        @media (max-width: 380px) {
          .sc-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="sc-root">
        <Card title="Mukhyamantri Udyamshala Yojana">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-sm">
              Mukhyamantri Udyamshala Yojana (MUY) earlier known as (Rural Business Incubator). The Department of Rural Development (RD), Government of Uttarakhand has been implementing schemes and programmes to promote livelihoods in the rural areas of the State. As a noble initiative, the department has piloted establishment of two Rural Business Incubators (RBI) in Hawalbagh, Almora and Kotdwar, Pauri, to help establish enterprises and promote an entrepreneurial ecosystem in the State.
            </p>

            {/* Application Form button */}
            <a
              href="https://ukrbi.in/new/"
              target="_blank"
              rel="noopener noreferrer"
              className="sc-btn sc-btn-primary"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Application Form
              <svg className="w-4 h-4 flex-shrink-0 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Incubation Support Services button */}
            <button
              onClick={() => setIsOpen(true)}
              className="sc-btn sc-btn-outline"
            >
              <div className="sc-btn-icon" style={{ background: '#fef2f2', color: '#b91c1c' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              Incubation Support Services
              <svg className="w-4 h-4 flex-shrink-0 ml-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>

            <div className="sc-support-photos">
              {incubationSupportPhotos.map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} className="sc-support-photo" loading="lazy" />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* ── Modal ── */}
      {isOpen && (
        <>
          <div className="sc-backdrop" onClick={() => setIsOpen(false)} />
          <div className="sc-modal">
            <div className="sc-modal-inner" ref={modalRef}>

              {/* Header */}
              <div className="sc-modal-head">
                <div className="sc-modal-head-row">
                  <div className="sc-modal-head-left">
                    <div className="sc-modal-head-icon">🏗️</div>
                    <div>
                      <h2 className="sc-modal-title">Incubation Support Services</h2>
                      <p className="sc-modal-subtitle">Hover over each card to learn more</p>
                    </div>
                  </div>
                  <button
                    className="sc-modal-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Services grid */}
              <div className="sc-grid">
                {services.map((svc, i) => (
                  <div
                    key={i}
                    className="sc-tile"
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <div className="sc-tile-inner">
                      {/* Front */}
                      <div className="sc-tile-front">
                        <div className="sc-tile-emoji-wrap">{svc.icon}</div>
                        <span className="sc-tile-name">{svc.name}</span>
                      </div>
                      {/* Back */}
                      <div className="sc-tile-back">
                        <span className="sc-tile-back-icon">{svc.icon}</span>
                        <p className="sc-tile-back-text">{svc.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </>
      )}
    </>
  )
}

// ── rest of file unchanged ──

export function WhatIsMUYCard() {
  return (
    <Card>
      <div className="p-4">
        <img
          src={withBase('/AboutSection/1.webp')}
          alt="MUY"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </Card>
  )
}

export function AboutSection() {
  // (unchanged — not restyled per request)
  return null
}

export default Card