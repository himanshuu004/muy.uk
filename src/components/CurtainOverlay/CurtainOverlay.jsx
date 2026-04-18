import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { preloadRoutes } from '../../utils/preloadRoutes'

const LOGO_IMG = `${import.meta.env.BASE_URL}Logo/MuyLogo.webp`

// Vertical fabric folds via repeating gradient — light hits the raised fold peaks
const FABRIC_BG = `
  repeating-linear-gradient(
    90deg,
    #3d0000 0px,
    #6b0000 6px,
    #9b1111 12px,
    #cc2222 18px,
    #e03030 22px,
    #cc2222 26px,
    #9b1111 32px,
    #6b0000 38px,
    #4a0000 44px,
    #6b0000 50px,
    #9b1111 56px,
    #cc2222 62px,
    #e03030 66px,
    #cc2222 70px,
    #9b1111 76px,
    #6b0000 82px,
    #3d0000 88px
  ),
  linear-gradient(180deg,
    #2a0000 0%,
    #5c0000 4%,
    #8b0000 15%,
    #aa1111 40%,
    #8b0000 70%,
    #5c0000 90%,
    #2a0000 100%
  )
`


function CurtainPanel({ side, isOpening }) {
  const isLeft = side === 'left'
  return (
    <motion.div
      className={`absolute top-0 bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-1/2 overflow-hidden`}
      initial={{ x: 0 }}
      animate={isOpening ? { x: isLeft ? '-100%' : '100%' } : { x: 0 }}
      transition={{
        duration: 2.6,
        ease: [0.76, 0, 0.24, 1],   // slow start → fast middle → slow dramatic end
        delay: 0.1,
      }}
      style={{
        backgroundImage: FABRIC_BG,
        backgroundSize: '88px 100%',
        ...(isLeft ? {} : { transform: 'scaleX(-1)' }),
      }}
    >
      {/* Inner-edge shadow (where panels meet at centre) */}
      <div
        className={`absolute inset-y-0 w-24 ${isLeft ? 'right-0' : 'left-0'}`}
        style={{
          background: isLeft
            ? 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)'
            : 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 100%)',
        }}
      />
      {/* Thin sheen on seam edge */}
      <div
        className="absolute inset-y-0 w-[2px]"
        style={{
          [isLeft ? 'right' : 'left']: 0,
          background: 'rgba(255,255,255,0.1)',
        }}
      />
    </motion.div>
  )
}

function CurtainOverlay({ onInaugurate }) {
  const [isOpening, setIsOpening] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const openCurtain = () => {
    if (isOpening) return

    // Mount the website now — it loads while curtain is still sliding open
    onInaugurate?.()
    preloadRoutes()

    if (prefersReducedMotion) { setIsHidden(true); return }
    setIsOpening(true)
    // Unmount after panels finish sliding (2.6s) + buffer
    setTimeout(() => setIsHidden(true), 2900)
  }

  return (
    <AnimatePresence>
      {!isHidden && (
        // No background here — hero section shows through underneath the panels
        <div className="fixed inset-0 z-[9999] overflow-hidden">

          {/* ── Curtain panels (only things blocking the hero) ──── */}
          <CurtainPanel side="left"  isOpening={isOpening} />
          <CurtainPanel side="right" isOpening={isOpening} />

          {/* ── Centre stage: logo + title + button ─────────────── */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 px-4 text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                {/* Spotlight radial glow behind content */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  animate={{ opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(180,80,0,0.45) 0%, transparent 70%)',
                  }}
                />
                <motion.img
                  src={LOGO_IMG}
                  alt="MUY"
                  className="h-36 w-auto sm:h-44 md:h-52"
                  style={{ filter: 'drop-shadow(0 0 28px rgba(255,255,255,0.6)) drop-shadow(0 0 60px rgba(255,200,80,0.35))' }}
                  animate={{ filter: [
                    'drop-shadow(0 0 24px rgba(255,255,255,0.5)) drop-shadow(0 0 50px rgba(255,200,80,0.3))',
                    'drop-shadow(0 0 36px rgba(255,255,255,0.75)) drop-shadow(0 0 80px rgba(255,200,80,0.55))',
                    'drop-shadow(0 0 24px rgba(255,255,255,0.5)) drop-shadow(0 0 50px rgba(255,200,80,0.3))',
                  ]}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/80 leading-tight tracking-wide">
                    MUY Portal
                  </h1>

                  {/* Official Launch — highlighted, below MUY Portal */}
                  <motion.div
                    className="relative px-8 py-2"
                    animate={{ boxShadow: [
                      '0 0 16px 2px rgba(250,204,21,0.4)',
                      '0 0 30px 6px rgba(250,204,21,0.75)',
                      '0 0 16px 2px rgba(250,204,21,0.4)',
                    ]}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(120,80,0,0.55) 0%, rgba(200,150,10,0.35) 50%, rgba(120,80,0,0.55) 100%)',
                      border: '2px solid rgba(250,204,21,0.85)',
                      borderRadius: '6px',
                    }}
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.25em] text-yellow-300"
                      style={{ textShadow: '0 0 18px rgba(250,204,21,0.9), 0 0 40px rgba(250,180,0,0.6)' }}
                    >
                      Official Launch
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  type="button"
                  onClick={openCurtain}
                  className="relative mt-3 rounded-full px-10 py-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  style={{
                    border: '2px solid rgba(230,190,60,0.8)',
                    background: 'linear-gradient(135deg, rgba(100,60,0,0.6) 0%, rgba(180,130,10,0.3) 50%, rgba(100,60,0,0.6) 100%)',
                    boxShadow: '0 0 18px rgba(230,190,60,0.4), inset 0 1px 0 rgba(255,230,100,0.2)',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(230,190,60,0.65)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  ✦ &nbsp;Inaugurate Website&nbsp; ✦
                </motion.button>

                <p className="text-xs text-white/30 tracking-widest uppercase">
                  Click to unveil
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CurtainOverlay
