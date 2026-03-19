// Digital integration section: logos left, brief right
function DigitalIntegration() {
  const companyLogos = [
    { name: 'SIGMA', logo: '🔬' },
    { name: 'Amazon', logo: '📦' },
    { name: 'JMD Farms', logo: '🌾' },
    { name: 'Rang De', logo: '🌳' },
    { name: 'FIZDI', logo: '💡' },
    { name: 'PMFME Store', logo: '🏪' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">
          Digital Integration
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left: Company Logos */}
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {companyLogos.map((company, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center border-2 border-gray-200 hover:border-primary transition-colors"
                  >
                    <div className="text-4xl mb-3">{company.logo}</div>
                    <div className="text-sm font-semibold text-gray-700">{company.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Brief with Heading */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                Seamless Digital Partnerships
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                We have integrated with leading digital platforms and companies to provide 
                comprehensive support to our entrepreneurs. These partnerships enable access 
                to advanced tools, marketplaces, and resources that accelerate business growth.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Through these digital integrations, entrepreneurs can leverage e-commerce 
                platforms, payment gateways, logistics services, and analytics tools to 
                build and scale their businesses efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalIntegration
