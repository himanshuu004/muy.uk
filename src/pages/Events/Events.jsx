import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

const GALLERY_PREVIEW_COUNT = 4;

const NBSP = '\u202f';

const withBaseEncoded = (relPath) => {
  const base = import.meta.env.BASE_URL || '/';
  const trimmed = relPath.replace(/^\//, '');
  const segments = trimmed.split('/').filter(Boolean);
  if (segments.length === 0) return base;
  return `${base}${segments.map((s) => encodeURIComponent(s)).join('/')}`;
};

const MAHOTSAV = 'Udyamshala mahotsav';

const mahotsavPhotoRelPaths = [
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.03.32${NBSP}AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.03.54${NBSP}AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.05.26 AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.41.52 AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.42.16 AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.44.31 AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 12.50.41 AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 2.14.55${NBSP}AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 2.17.23${NBSP}AM.webp`,
  `${MAHOTSAV}/Screenshot 2026-04-25 at 2.17.43${NBSP}AM.webp`,
];

const EVENTS = [
  {
    id: 'gullak',
    name: "Uttarakhand Entrepreneurship Summit 'Gullak' (2023)",
    accent: '#059669',
    accentSoft: '#ecfdf5',
    badge: 'Uttarakhand · 2023 summit',
    date: '14 January 2023',
    brief:
      "Chief Minister Pushkar Singh Dhami inaugurated Uttarakhand Entrepreneurship Summit-2023 'Gullak' in Dehradun — a first-of-its-kind forum where rural entrepreneurs meet investors and learn about government schemes across sectors.",
    detail:
      "The summit helps rural businessmen access information on centrally funded, state-funded, and other self-employment programmes. Investors can interact directly with rural entrepreneurs and back their enterprises. To speed up rural enterprise development, the state had set up Rural Business Incubators at Hawalbagh (Almora) and Kotdwar (Pauri); building on their success, hub-and-spoke Rural Business Incubator spokes are planned across eleven more districts. The emphasis is on stronger marketing of rural products, turning youth into job creators, easing out-migration, and women's leadership in business — including the Lakhpati Didi goal for 1.25 lakh sisters and linking them with entrepreneurship. Under Government of India direction, Mission Antyodaya Survey was to be conducted over the following month via a mobile app, with community cadre women focusing on economic development, village infrastructure, services, and social justice.",
    values: [
      'Direct dialogue between investors and rural entrepreneurs — a pioneering format for India',
      'Rural Business Incubators in Almora (Hawalbagh) and Pauri (Kotdwar), expanding via hub-and-spoke to eleven more districts',
      'Clear visibility of government schemes so rural enterprises can grow with the right support',
      'Stronger marketing and value chains for products made in rural Uttarakhand',
      'Self-employment and local opportunity as an answer to rural migration',
      "Women-led enterprise and empowerment aligned with the state's Lakhpati Didi mission",
      'Mission Antyodaya Survey through mobile app — community women cadre tracking development and justice themes',
    ],
    location: 'Dehradun, Uttarakhand',
    aboutEyebrow: 'About the summit',
    aboutTitle: "Why 'Gullak' mattered",
    valuesEyebrow: 'What we stood for',
    valuesTitle: 'Our values',
    heroImageRel: 'Gullak/1.webp',
    photosRel: ['Gullak/1.webp', 'Gullak/2.webp', 'Gullak/3.webp', 'Gullak/4.webp', 'Gullak/5.webp', 'Gullak/6.webp'],
  },
  {
    id: 'udyamshala-mahotsav',
    name: 'Mukhyamantri Udyamshala Mahotsav 2026',
    accent: '#b45309',
    accentSoft: '#fffbeb',
    badge: 'One-day celebration · Dehradun',
    date: '30 March 2026',
    brief:
      'मुख्यमंत्री उद्यमशाला महोत्सव 2026 ने स्थानीय कहानियों, कौशल और नवाचार को एक मंच पर लाया। Mukhyamantri Udyamshala Mahotsav 2026 brought together local stories, skills, and innovation — honouring entrepreneurs who are building the future from the ground up and opening meaningful pathways for change.',
    detail:
      'The Rural Development Department held a one-day Mukhyamantri Udyamshala Mahotsav at the Civil Services Institute, Old Mussoorie Road, Dehradun. Rural Development and MSME Minister Bharat Singh Chaudhary opened the programme; officials explained how the scheme backs rural self-employment and incubation across sectors such as agriculture, homestays, food processing, crafts, and medicinal plants, using Almora (Hawalbagh) and Kotdwar (Pauri) as hub-and-spoke anchors. About three hundred people from across the state took part. Fifty-one women entrepreneurs and SHG members were honoured, the scheme website and a quarterly newsletter were launched, eleven institutions signed MoUs for co-incubation and market linkage, and one hundred entrepreneurs joined the “MoU-y Olympic” pitch challenge (thirty winners recognised). Leaders stressed innovation, self-reliance, timely scheme delivery, and enterprise as a path to reduce outward migration.',
    values: [
      'Ground-up stories — skills, innovation, and enterprise celebrated on one stage',
      'Rural self-employment across diverse sectors with incubation and technical support',
      'Hub-and-spoke delivery with Almora (Hawalbagh) and Kotdwar (Pauri) as anchor hubs',
      'Recognition of women entrepreneurs and SHGs — fifty-one achievers felicitated in 2026',
      'Transparency and reach — official website launch and quarterly newsletter for the scheme',
      'Stronger ecosystem — MoUs with eleven partners for co-incubation and market linkage',
      'Innovation and self-reliance (आत्मनिर्भरता) with accountable, time-bound scheme implementation',
      'MoU-y Olympic — structured pitching and capability assessment for one hundred enterprises',
    ],
    location: 'Civil Services Institute, Old Mussoorie Road, Dehradun',
    aboutEyebrow: 'About the Mahotsav',
    aboutTitle: 'Highlights from 2026',
    valuesEyebrow: 'Themes from the day',
    valuesTitle: 'Our values',
    heroImageRel: mahotsavPhotoRelPaths[0],
    photosRel: mahotsavPhotoRelPaths,
  },
];

function Events() {
  const [modal, setModal] = useState(null);
  const [loadedHero, setLoadedHero] = useState(() => ({}));
  const [expandedGalleries, setExpandedGalleries] = useState({});
  const gallerySectionRefs = useRef({});

  const eventsResolved = useMemo(
    () =>
      EVENTS.map((ev) => ({
        ...ev,
        heroUrl: withBaseEncoded(ev.heroImageRel),
        photoUrls: ev.photosRel.map((rel) => withBaseEncoded(rel)),
      })),
    [],
  );

  const modalEvent = useMemo(
    () => (modal ? eventsResolved.find((e) => e.id === modal.eventId) : null),
    [modal, eventsResolved],
  );

  const closeModal = useCallback(() => setModal(null), []);

  const navigateModal = useCallback(
    (dir) => {
      if (!modal || !modalEvent) return;
      const len = modalEvent.photoUrls.length;
      if (!len) return;
      const next = (modal.index + dir + len) % len;
      setModal({ eventId: modal.eventId, index: next });
    },
    [modal, modalEvent],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (!modal) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateModal(-1);
      if (e.key === 'ArrowRight') navigateModal(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal, closeModal, navigateModal]);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (e.target.closest?.('.modal-backdrop')) return;
      setExpandedGalleries((prev) => {
        const next = { ...prev };
        let changed = false;
        Object.keys(prev).forEach((id) => {
          if (!prev[id]) return;
          const node = gallerySectionRefs.current[id];
          if (node && !node.contains(e.target)) {
            next[id] = false;
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const markHeroLoaded = (id) => {
    setLoadedHero((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        .events-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(180deg, #eef2ef 0%, #f6f7f5 32%, #f0f4f1 100%);
          min-height: 100vh;
          width: 100%;
          overflow-x: clip;
          padding: 0 0 72px;
          box-sizing: border-box;
        }

        .events-shell {
          max-width: none;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .events-intro {
          text-align: center;
          margin-bottom: 28px;
          padding: 28px clamp(20px, 5vw, 80px) 0;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
        .events-kicker {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6b7280;
          margin: 0 0 10px;
        }
        .events-page-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 4.5vw, 46px);
          font-weight: 400;
          color: #0f1c15;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .events-page-lede {
          font-size: 16px;
          font-weight: 300;
          color: #6b7280;
          max-width: 52rem;
          margin: 0 auto;
          line-height: 1.55;
        }

        .events-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          width: 100%;
          align-items: stretch;
        }

        .events-grid > article:first-child {
          border-right: 1px solid rgba(15, 28, 21, 0.1);
        }

        .event-column {
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 0;
          min-height: 100%;
          height: 100%;
        }

        .col-surface {
          background: #fff;
          border-radius: 0;
          border: none;
          border-bottom: 1px solid rgba(15, 28, 21, 0.08);
          box-shadow: 0 18px 50px -28px rgba(15, 28, 21, 0.18);
          overflow: visible;
          min-height: 100%;
        }

        .col-hero {
          position: relative;
          width: 100%;
          min-height: clamp(380px, 56vh, 720px);
          flex-shrink: 0;
          margin-bottom: 0;
          background: #0f1c12;
        }
        .col-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.03);
          transition: transform 6s ease;
        }
        .col-hero-img.is-loaded { transform: scale(1); }
        .col-hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 18, 12, 0.45) 0%, transparent 42%);
          pointer-events: none;
        }
        .col-accent-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          z-index: 2;
          border-radius: 0;
        }
        .col-hero-intro {
          flex-shrink: 0;
          padding: clamp(28px, 4vw, 44px) clamp(22px, 3.5vw, 56px) clamp(32px, 4vw, 48px);
          background: linear-gradient(180deg, var(--col-soft, #f8faf8) 0%, #fff 55%);
          border-bottom: 1px solid rgba(15, 28, 21, 0.07);
        }
        .col-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(15, 28, 21, 0.08);
          color: #374151;
          margin-bottom: 16px;
          box-shadow: 0 1px 3px rgba(15, 28, 21, 0.06);
        }
        .col-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .col-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 2.6vw, 40px);
          font-weight: 400;
          color: #0f1c15;
          line-height: 1.12;
          margin: 0 0 14px;
          letter-spacing: -0.02em;
          max-width: 38ch;
        }
        .col-brief {
          font-size: 16px;
          font-weight: 400;
          color: #4b5563;
          line-height: 1.62;
          margin: 0 0 22px;
          max-width: 52ch;
        }
        .col-meta {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .col-meta-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: #374151;
          line-height: 1.45;
        }
        .col-meta-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--col-soft, #ecfdf5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--col-accent, #059669);
        }

        .col-body {
          flex: 0 0 auto;
          padding: clamp(32px, 4vw, 52px) clamp(22px, 3.5vw, 56px) clamp(36px, 4vw, 56px);
        }
        .col-body-block + .col-body-block {
          margin-top: 36px;
          padding-top: 36px;
          border-top: 1px solid #e8ebe9;
        }
        .section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 10px;
        }
        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(26px, 2.4vw, 34px);
          font-weight: 400;
          color: #0f1c15;
          line-height: 1.22;
          margin: 0 0 16px;
        }
        .section-body {
          font-size: 17px;
          line-height: 1.82;
          color: #4b5563;
          font-weight: 300;
          margin: 0;
        }

        .objectives-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }
        .objective-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 14px;
          border-radius: 14px;
          border: 1px solid transparent;
          transition: background 0.18s, border-color 0.18s;
        }
        .objective-item:hover {
          background: var(--col-soft, #f0fdf4);
          border-color: color-mix(in srgb, var(--col-accent, #059669) 14%, transparent);
        }
        .objective-check {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: var(--col-soft, #ecfdf5);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .objective-check svg { color: var(--col-accent, #059669); }
        .objective-text {
          font-size: 15px;
          color: #374151;
          line-height: 1.52;
        }

        .gallery-wrap {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          min-height: 0;
          margin-top: 0;
          padding: clamp(28px, 3.5vw, 44px) clamp(22px, 3.5vw, 56px) clamp(32px, 4vw, 48px);
          border-top: 1px solid #e8ebe9;
          background: linear-gradient(180deg, #fafbf9 0%, #fff 28%);
        }
        .gallery-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 18px;
          gap: 12px;
        }
        .gallery-title {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          font-weight: 400;
          color: #0f1c15;
          margin: 0;
        }
        .gallery-count {
          font-size: 13px;
          color: #9ca3af;
          white-space: nowrap;
        }
        .gallery-grid-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-content: start;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          cursor: pointer;
          background: #e5e7e6;
          aspect-ratio: 1;
          border: none;
          padding: 0;
          display: block;
          width: 100%;
          font: inherit;
        }
        .gallery-toggle {
          width: 100%;
          margin-top: 18px;
          padding: 14px 18px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          color: #0f1c15;
          background: #fff;
          border: 1px solid rgba(15, 28, 21, 0.12);
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 2px 8px rgba(15, 28, 21, 0.05);
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .gallery-toggle:hover {
          background: var(--col-soft, #f0fdf4);
          border-color: color-mix(in srgb, var(--col-accent, #059669) 28%, transparent);
        }
        .gallery-toggle-icon {
          display: flex;
          transition: transform 0.3s ease;
        }
        .gallery-toggle.is-open .gallery-toggle-icon {
          transform: rotate(180deg);
        }
        .gallery-expanded {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 14px;
          padding-top: 18px;
          border-top: 1px dashed rgba(15, 28, 21, 0.12);
          animation: galleryReveal 0.35s ease;
        }
        @keyframes galleryReveal {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
          display: block;
        }
        .gallery-item:hover .gallery-img { transform: scale(1.05); }
        .gallery-item:focus-visible {
          outline: 2px solid var(--col-accent, #059669);
          outline-offset: 2px;
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.25s;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 10px;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-zoom {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.92);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(8, 14, 11, 0.88);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: evFade 0.2s ease;
        }
        @keyframes evFade { from { opacity: 0; } to { opacity: 1; } }
        .modal-inner {
          position: relative;
          max-width: 960px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .modal-img {
          max-height: 76vh;
          max-width: 100%;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.45);
        }
        .modal-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .modal-btn {
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
        }
        .modal-btn:hover { background: rgba(255,255,255,0.18); }
        .modal-counter {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          min-width: 48px;
          text-align: center;
          font-variant-numeric: tabular-nums;
        }
        .modal-close {
          position: absolute;
          top: -48px;
          right: 0;
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
        }
        .modal-close:hover { background: rgba(255,255,255,0.16); }

        @media (max-width: 900px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
          .events-grid > article:first-child {
            border-right: none;
            border-bottom: 1px solid rgba(15, 28, 21, 0.1);
          }
        }
        @media (max-width: 600px) {
          .events-intro { padding-top: 20px; }
          .col-hero {
            min-height: clamp(280px, 48vh, 520px);
          }
          .col-hero-intro {
            padding: 22px 18px 28px;
          }
        }
      `}</style>

      <div className="events-root">
        <div className="events-shell">
          <header className="events-intro">
            <p className="events-kicker">Programs & celebrations</p>
            <h1 className="events-page-title">Our events</h1>
            <p className="events-page-lede">
              From the 2023 Dehradun summit &apos;Gullak&apos; that linked rural entrepreneurs with investors and schemes, to the 2026 Mukhyamantri Udyamshala Mahotsav celebrating skills, stories, and partnerships on the ground.
            </p>
          </header>

          <div className="events-grid">
            {eventsResolved.map((ev) => (
              <article
                key={ev.id}
                className="event-column col-surface"
                style={{
                  '--col-accent': ev.accent,
                  '--col-soft': ev.accentSoft,
                }}
              >
                <div className="col-hero">
                  <span className="col-accent-bar" style={{ background: ev.accent }} />
                  <img
                    src={ev.heroUrl}
                    alt=""
                    className={`col-hero-img${loadedHero[ev.id] ? ' is-loaded' : ''}`}
                    aria-hidden
                    onLoad={() => markHeroLoaded(ev.id)}
                  />
                  <div className="col-hero-shade" aria-hidden />
                </div>
                <div className="col-hero-intro">
                  <div className="col-badge">
                    <span className="col-badge-dot" style={{ background: ev.accent }} />
                    {ev.badge}
                  </div>
                  <h2 className="col-title">{ev.name}</h2>
                  <p className="col-brief">{ev.brief}</p>
                  <div className="col-meta">
                    <div className="col-meta-row">
                      <span className="col-meta-icon">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span>{ev.date}</span>
                    </div>
                    <div className="col-meta-row">
                      <span className="col-meta-icon">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span>{ev.location}</span>
                    </div>
                  </div>
                </div>

                <div className="col-body">
                  <div className="col-body-block">
                    <p className="section-eyebrow" style={{ color: ev.accent }}>
                      {ev.aboutEyebrow}
                    </p>
                    <h3 className="section-title">{ev.aboutTitle}</h3>
                    <p className="section-body">{ev.detail}</p>
                  </div>
                  <div className="col-body-block">
                    <p className="section-eyebrow" style={{ color: ev.accent }}>
                      {ev.valuesEyebrow}
                    </p>
                    <h3 className="section-title">{ev.valuesTitle}</h3>
                    <div className="objectives-list">
                      {ev.values.map((line, i) => (
                        <div key={i} className="objective-item">
                          <div className="objective-check">
                            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="objective-text">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="gallery-wrap"
                  ref={(el) => {
                    gallerySectionRefs.current[ev.id] = el;
                  }}
                >
                  <div className="gallery-head">
                    <h3 className="gallery-title">Gallery</h3>
                    <span className="gallery-count">{ev.photoUrls.length} photos</span>
                  </div>
                  <div className="gallery-grid-col">
                    {ev.photoUrls.slice(0, GALLERY_PREVIEW_COUNT).map((url, idx) => (
                      <button
                        key={`${ev.id}-ph-${idx}`}
                        type="button"
                        className="gallery-item"
                        onClick={() => setModal({ eventId: ev.id, index: idx })}
                        aria-label={`Open ${ev.name} photo ${idx + 1}`}
                      >
                        <img src={url} alt="" className="gallery-img" loading={idx < 2 ? 'eager' : 'lazy'} />
                        <span className="gallery-overlay" aria-hidden>
                          <span className="gallery-zoom">
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                  {ev.photoUrls.length > GALLERY_PREVIEW_COUNT && (
                    <>
                      <button
                        type="button"
                        className={`gallery-toggle${expandedGalleries[ev.id] ? ' is-open' : ''}`}
                        aria-expanded={!!expandedGalleries[ev.id]}
                        onClick={() =>
                          setExpandedGalleries((p) => ({
                            ...p,
                            [ev.id]: !p[ev.id],
                          }))
                        }
                      >
                        <span className="gallery-toggle-icon" aria-hidden>
                          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                        {expandedGalleries[ev.id]
                          ? 'Show fewer photos'
                          : `Show full gallery (${ev.photoUrls.length - GALLERY_PREVIEW_COUNT} more)`}
                      </button>
                      {expandedGalleries[ev.id] && (
                        <div className="gallery-expanded">
                          {ev.photoUrls.slice(GALLERY_PREVIEW_COUNT).map((url, idx) => {
                            const globalIdx = GALLERY_PREVIEW_COUNT + idx;
                            return (
                              <button
                                key={`${ev.id}-ph-more-${globalIdx}`}
                                type="button"
                                className="gallery-item"
                                onClick={() => setModal({ eventId: ev.id, index: globalIdx })}
                                aria-label={`Open ${ev.name} photo ${globalIdx + 1}`}
                              >
                                <img src={url} alt="" className="gallery-img" loading="lazy" />
                                <span className="gallery-overlay" aria-hidden>
                                  <span className="gallery-zoom">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {modal && modalEvent && (
          <div className="modal-backdrop" onClick={closeModal} role="presentation">
            <div className="modal-inner" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${modalEvent.name} gallery`}>
              <button type="button" className="modal-close" onClick={closeModal} aria-label="Close">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={modalEvent.photoUrls[modal.index]} alt="" className="modal-img" />
              <div className="modal-controls">
                <button type="button" className="modal-btn" onClick={() => navigateModal(-1)} aria-label="Previous photo">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="modal-counter">
                  {modal.index + 1} / {modalEvent.photoUrls.length}
                </span>
                <button type="button" className="modal-btn" onClick={() => navigateModal(1)} aria-label="Next photo">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
