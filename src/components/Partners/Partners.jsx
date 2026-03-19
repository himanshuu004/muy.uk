import React from 'react';

export default function LogoCarousel() {
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  // Partner logos from public/Partners directory
  const logos = [
    { name: 'Partner 1', url: withBase('/Partners/client-1.webp') },
    { name: 'Partner 2', url: withBase('/Partners/client-2.webp') },
    { name: 'Partner 3', url: withBase('/Partners/client-3.webp') },
    { name: 'Partner 4', url: withBase('/Partners/client-4.webp') },
    { name: 'Partner 5', url: withBase('/Partners/client-5.webp') },
    { name: 'Partner 6', url: withBase('/Partners/client-6.webp') },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color: '#b61d14' }}>
            Our Partners
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          We proudly collaborate with esteemed partners who share our vision of empowering rural entrepreneurship. Their invaluable support and expertise drive innovation, promote economic growth, and create sustainable opportunities in rural communities. Together, we are building a brighter future!
          </p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex items-center animate-scroll hover:pause-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="h-12 sm:h-16 lg:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add more text below */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-500 text-sm sm:text-base">
            Trusted by leading organizations worldwide
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }

        .pause-scroll:hover {
          animation-play-state: paused;
        }

        /* Ensure smooth animation */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
