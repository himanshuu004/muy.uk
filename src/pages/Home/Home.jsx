import { motion } from 'framer-motion'
import Hero from '../../components/Hero/Hero'
import Ticker from '../../components/Ticker/Ticker'
import { WhatIsMUYCard, ServicesCard } from '../../components/Card/Card'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import SuccessStory from '../../components/SuccessStory/SuccessStory'
import OurBeneficiary from '../../components/OurBeneficiary/OurBeneficiary'
import Steps from '../../components/Steps/Steps' 
import FAQ from '../../components/FAQ/FAQ'
import MapView from '../../components/MapView/MapView'
import TubesBackground from '../../components/ui/neon-flow'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
}

// Home page combining all landing page sections with smooth animations
function Home() {
  return (
    <div>
      <Hero />
      {/* <Ticker /> */}
      
      {/* Two Cards Section with Neon Flow background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* <TubesBackground className="rounded-2xl border border-gray-200 p-8"> */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div 
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
                >
                  <WhatIsMUYCard />
                </motion.div>
                <motion.div 
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
                >
                  <ServicesCard />
                </motion.div>
              </div>
            </motion.div>
          {/* </TubesBackground> */}
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
      >
        <WhoWeAre />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
      >
        <SuccessStory />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
      >
        <OurBeneficiary />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
      >
        <Steps />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
      >
        <DigitalIntegration />
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
      >
        <FAQ />
      </motion.div>

      {/* Location Section with Map */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our office and incubation center at State Project Management Unit, Department of Rural Development, Uttarahaat Near IT Park, Dehradun, Uttarakhand
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <MapView />
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
