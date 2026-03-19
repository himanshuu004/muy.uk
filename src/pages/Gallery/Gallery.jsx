import { useEffect, useRef } from 'react'

// Gallery page with image grid
function Gallery() {
  const successStoriesRef = useRef(null)
  const videosRef = useRef(null)
  const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

  // Success Stories images from public/Success Stories directory
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

  // YouTube videos
  const youtubeVideos = [
    { 
      id: 1, 
      embedId: 'rticvbE1nKM', 
      title: 'MUY Success Stories - Video 1' 
    },
    { 
      id: 2, 
      embedId: 'E94b91PRN5I', 
      title: 'MUY Success Stories - Video 2' 
    },
  ]

  // Handle hash navigation to scroll to specific section
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        let targetRef = null
        switch (hash) {
          case '#success-stories':
            targetRef = successStoriesRef
            break
          case '#videos':
            targetRef = videosRef
            break
          default:
            return
        }
        if (targetRef?.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Gallery</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore photos and videos from our success stories
        </p>

        {/* Success Stories Section */}
        <section 
          id="success-stories" 
          ref={successStoriesRef}
          className="mb-16 scroll-mt-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2 text-center">Success Stories</h2>
            <p className="text-center text-gray-600">Inspiring journeys of our entrepreneurs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStoriesImages.map((image) => (
              <div
                key={image.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section 
          id="videos" 
          ref={videosRef}
          className="mb-16 scroll-mt-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2 text-center">Success Stories Videos</h2>
            <p className="text-center text-gray-600">Watch inspiring stories from our entrepreneurs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video bg-black">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    src={`https://www.youtube.com/embed/${video.embedId}?enablejsapi=1&rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gallery
