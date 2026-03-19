"use client"

import { ChevronRightIcon } from "@radix-ui/react-icons"
import * as Color from "color-bits"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"

import { cn } from "../../lib/utils"

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)",
): string => {
  if (typeof window === "undefined") return fallback
  if (!cssColor) return fallback

  try {
    // Handle CSS variables
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div")
      element.style.color = cssColor
      document.body.appendChild(element)
      const computedColor = window.getComputedStyle(element).color
      document.body.removeChild(element)
      return Color.formatRGBA(Color.parse(computedColor))
    }

    return Color.formatRGBA(Color.parse(cssColor))
  } catch {
    return fallback
  }
}

// Helper function to add opacity to an RGB color string
export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity))
}

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  className?: string
  maxOpacity?: number
  text?: string
  textColor?: string
  fontSize?: number
  fontWeight?: number | string
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  // Convert any CSS color to rgba for optimal canvas performance
  const memoizedColor = useMemo(() => getRGBA(color), [color])

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, w, h)

      // Create a separate canvas for the text mask
      const maskCanvas = document.createElement("canvas")
      maskCanvas.width = w
      maskCanvas.height = h
      const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true })
      if (!maskCtx) return

      // Draw text on mask canvas
      if (text) {
        maskCtx.save()
        maskCtx.scale(dpr, dpr)
        maskCtx.fillStyle = "white"
        maskCtx.font = `${fontWeight} ${fontSize}px "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
        maskCtx.textAlign = "center"
        maskCtx.textBaseline = "middle"
        maskCtx.fillText(text, w / (2 * dpr), h / (2 * dpr))
        maskCtx.restore()
      }

      // Draw flickering squares
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr
          const y = j * (squareSize + gridGap) * dpr
          const squareWidth = squareSize * dpr
          const squareHeight = squareSize * dpr

          const maskData = maskCtx.getImageData(
            x,
            y,
            squareWidth,
            squareHeight,
          ).data
          const hasText = maskData.some(
            (value, index) => index % 4 === 0 && value > 0,
          )

          const opacity = squares[i * rows + j] ?? 0
          const finalOpacity = hasText ? Math.min(1, opacity * 3 + 0.4) : opacity

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity)
          ctx.fillRect(x, y, squareWidth, squareHeight)
        }
      }
    },
    [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight],
  )

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      const cols = Math.ceil(w / (squareSize + gridGap))
      const rows = Math.ceil(h / (squareSize + gridGap))

      const squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity

      return { cols, rows, squares, dpr }
    },
    [squareSize, gridGap, maxOpacity],
  )

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) squares[i] = Math.random() * maxOpacity
      }
    },
    [flickerChance, maxOpacity],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId = 0
    let gridParams: ReturnType<typeof setupCanvas>

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth
      const newHeight = height || container.clientHeight
      setCanvasSize({ width: newWidth, height: newHeight })
      gridParams = setupCanvas(canvas, newWidth, newHeight)
    }

    updateCanvasSize()

    let lastTime = 0
    const animate = (time: number) => {
      if (!isInView) return

      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      updateSquares(gridParams.squares, deltaTime)
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
      )
      animationFrameId = requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(updateCanvasSize)
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsInView(entry?.isIntersecting ?? false),
      { threshold: 0 },
    )
    intersectionObserver.observe(canvas)

    if (isInView) animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView])

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)} {...props}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  )
}

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function checkQuery() {
      setValue(window.matchMedia(query).matches)
    }

    checkQuery()
    window.addEventListener("resize", checkQuery)

    const mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener("change", checkQuery)

    return () => {
      window.removeEventListener("resize", checkQuery)
      mediaQuery.removeEventListener("change", checkQuery)
    }
  }, [query])

  return value
}

export type FlickeringFooterColumn = {
  title: string
  items: React.ReactNode[]
}

export type FlickeringFooterProps = {
  brand: {
    to?: string
    logoSrc: string
    logoAlt: string
    title: string
    subtitle?: string
    description?: React.ReactNode
  }
  columns: FlickeringFooterColumn[]
  bottomText?: React.ReactNode
  flickerTextDesktop?: string
  flickerTextMobile?: string
}

export function FlickeringFooter({
  brand,
  columns,
  bottomText,
  flickerTextDesktop = "Streamline your workflow",
  flickerTextMobile = "Footer",
}: FlickeringFooterProps) {
  const tablet = useMediaQuery("(max-width: 1024px)")

  return (
    <footer id="footer" className="w-full bg-gray-900 text-gray-300 pb-0">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col items-start justify-start gap-y-5">
            {brand.to ? (
              <Link to={brand.to} className="flex items-center gap-3">
                <img
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  className="h-16 w-16 object-contain bg-white rounded-full shadow"
                  style={{ mixBlendMode: "normal", backgroundColor: "#fff", border: "2px solid #eee" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-white">{brand.title}</p>
                  {brand.subtitle ? (
                    <p className="text-xs text-gray-300">{brand.subtitle}</p>
                  ) : null}
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <img
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  className="h-16 w-16 object-contain bg-white rounded-full shadow"
                  style={{ mixBlendMode: "normal", backgroundColor: "#fff", border: "2px solid #eee" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-white">{brand.title}</p>
                  {brand.subtitle ? (
                    <p className="text-xs text-gray-300">{brand.subtitle}</p>
                  ) : null}
                </div>
              </div>
            )}

            {brand.description ? (
              <div className="tracking-tight text-gray-400 font-medium">
                {brand.description}
              </div>
            ) : null}
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {columns.map((column, columnIndex) => (
                <ul key={columnIndex} className="flex flex-col gap-y-2">
                  <li className="mb-2 text-sm font-semibold text-white">
                    {column.title}
                  </li>
                  {column.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="group inline-flex items-start justify-start gap-2 text-[15px]/snug text-gray-300"
                    >
                      <span className="min-w-0 flex-1">{item}</span>
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-gray-700 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                        <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {bottomText ? (
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-400">
            {bottomText}
          </div>
        ) : null}
      </div>

      <div className="w-full h-48 md:h-64 relative mt-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? flickerTextMobile : flickerTextDesktop}
            fontSize={tablet ? 56 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  )
}

