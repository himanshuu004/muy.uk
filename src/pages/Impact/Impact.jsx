// Our Impact page showing scheme achievements
function Impact() {
  const stats = [
    { number: '500+', label: 'Entrepreneurs Supported' },
    { number: '200+', label: 'Businesses Launched' },
    { number: '1000+', label: 'Jobs Created' },
    { number: '50+', label: 'Mentors Engaged' },
  ]

  const successStories = [
    {
      title: 'Tech Startup Success',
      description: 'A technology startup received incubation support and successfully launched their product, creating 25 jobs in the first year.',
    },
    {
      title: 'Rural Entrepreneurship',
      description: 'A rural entrepreneur received funding and mentorship, expanding their business to serve multiple districts.',
    },
    {
      title: 'Women-Led Business',
      description: 'A women-led enterprise received comprehensive support and achieved 300% growth in revenue within 18 months.',
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Our Impact</h1>
        
        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{story.title}</h3>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Impact


