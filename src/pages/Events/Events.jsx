import React, { useState } from 'react';

// Events page focused on Gullak event
function Events() {
  const [selectedImage, setSelectedImage] = useState(null);
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  // Gullak event information
  const gullakEvent = {
    title: 'Gullak',
    subtitle: 'Community-Driven Savings & Financial Literacy Program',
    description: 'Gullak is a community-driven savings and financial literacy program designed to empower rural entrepreneurs and communities. Through interactive workshops, financial planning sessions, and community gatherings, Gullak helps participants develop healthy savings habits, understand financial management, and build a strong foundation for their entrepreneurial journey.',
    objectives: [
      'Empower rural entrepreneurs with financial knowledge',
      'Promote healthy savings habits in communities',
      'Provide interactive financial planning workshops',
      'Foster a culture of financial discipline and collective growth',
      'Build strong foundations for entrepreneurial journeys',
    ],
    date: '2023',
    location: 'Rural Communities',
  };

  // Event photos from Gullak folder
  const eventPhotos = [
    '/Gullak/1.webp',
    '/Gullak/2.webp',
    '/Gullak/3.webp',
    '/Gullak/4.webp',
    '/Gullak/5.webp',
    '/Gullak/6.webp',
  ].map(withBase);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Featured Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/85 to-slate-900/90 z-10" />
        <img
          src={eventPhotos[0]}
          alt="Gullak Event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-28 max-w-6xl">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-emerald-100 text-sm font-medium mb-6">
              Community Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              {gullakEvent.title}
            </h1>
            <p className="text-xl text-emerald-50/95 mb-6 leading-relaxed">
              {gullakEvent.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-medium">{gullakEvent.date}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="font-medium">{gullakEvent.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl -mt-8 relative z-30">
        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100/80 p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              About Gullak
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-3xl">
            {gullakEvent.description}
          </p>

          <div className="border-t border-slate-100 pt-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Program Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gullakEvent.objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 flex-1 font-medium">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">Event Gallery</h2>
              <p className="text-slate-600">Capturing moments from our Gullak community gatherings</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {eventPhotos.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-slate-200 aspect-[4/3] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-300"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image}
                  alt={`Gullak Event Photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-slate-400 shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100/80 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Impact & Outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '100+', label: 'Participants', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { value: '50+', label: 'Workshops', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { value: '20+', label: 'Communities', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 border border-slate-100 hover:border-emerald-200/60 transition-colors"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 md:right-4 md:top-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2.5 transition-colors z-10 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
