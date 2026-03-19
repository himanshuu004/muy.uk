import React, { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

const randomColors = (count: number): string[] => {
  return new Array(count)
    .fill(0)
    .map(
      () =>
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')
    )
}

interface TubesBackgroundProps {
  children?: React.ReactNode
  className?: string
  enableClickInteraction?: boolean
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const tubesRef = useRef<any | null>(null)

  useEffect(() => {
    let mounted = true
    let cleanup: (() => void) | undefined

    const initTubes = async () => {
      if (!canvasRef.current) return

      try {
        // @ts-ignore - dynamic import from CDN
        const module = await import(
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        )
        const TubesCursor = module.default

        if (!mounted) return

        const app = TubesCursor(canvasRef.current, {
          // Default bloom composites on dark; turn off so white scene/clear shows through
          bloom: false,
          tubes: {
            colors: ['#f967fb', '#53bc28', '#6958d5'],
            lights: {
              intensity: 200,
              colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
            },
          },
        })

        tubesRef.current = app
        setIsLoaded(true)

        // TubesCursor returns { three } (not renderer on root). Scene is QC (extends Scene).
        const threeCtx = app?.three
        if (threeCtx?.scene && threeCtx?.renderer) {
          const { Color } = await import('three')
          threeCtx.scene.background = new Color(0xffffff)
          threeCtx.renderer.setClearColor(0xffffff, 1)
        }

        const handleResize = () => {
          // Library likely handles resize internally; keep hook for future customization
        }

        window.addEventListener('resize', handleResize)

        cleanup = () => {
          window.removeEventListener('resize', handleResize)
          // If the library exposes a destroy method, it can be called here.
          // app.destroy?.()
          tubesRef.current = null
        }
      } catch (error) {
        console.error('Failed to load TubesCursor:', error)
      }
    }

    initTubes()

    return () => {
      mounted = false
      if (cleanup) cleanup()
    }
  }, [])

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return

    const colors = randomColors(3)
    const lightsColors = randomColors(4)

    if (tubesRef.current.tubes?.setColors) {
      tubesRef.current.tubes.setColors(colors)
    }
    if (tubesRef.current.tubes?.setLightsColors) {
      tubesRef.current.tubes.setLightsColors(lightsColors)
    }
  }

  return (
    <div
      className={cn(
        'relative w-full h-full min-h-[400px] overflow-hidden bg-white',
        className
      )}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        style={{ touchAction: 'none' }}
      />

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}

export default TubesBackground

