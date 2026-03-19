"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { Link } from "react-router-dom"

export interface FeaturedSpotlightProps {
  label?: string
  titleLine1: string
  titleLine2: string
  description?: string
  subtitle?: string
  quote?: string
  imageSrc: string
  imageAlt: string
  indexNumber?: string
  ctaLabel?: string
  ctaHref?: string
}

export function FeaturedSpotlight({
  label = "Featured",
  titleLine1,
  titleLine2,
  description,
  subtitle,
  quote,
  imageSrc,
  imageAlt,
  indexNumber = "01",
  ctaLabel = "Explore",
  ctaHref,
}: FeaturedSpotlightProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative flex cursor-pointer flex-col items-center gap-10 md:flex-row md:items-start md:gap-14 lg:gap-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex w-full max-w-[360px] shrink-0 flex-col items-center text-center md:w-[300px] md:items-start md:text-left lg:w-[340px] lg:pt-4">
        <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
          <div
            className={cn(
              "h-px transition-all duration-700",
              isHovered ? "bg-primary" : "bg-foreground"
            )}
            style={{
              width: isHovered ? 48 : 32,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-700 md:text-xs",
              isHovered
                ? "border-primary bg-primary text-white"
                : "border-foreground/15 bg-background text-foreground"
            )}
            style={{
              letterSpacing: isHovered ? "0.3em" : "0.25em",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {label}
          </span>
        </div>

        <h2 className="relative">
          <span
            className="block text-4xl font-normal tracking-tight text-foreground transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
            style={{
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {titleLine1}
          </span>
          <span
            className="block text-4xl font-normal tracking-tight text-foreground transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
            style={{
              transform: isHovered ? "translateX(12px)" : "translateX(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {titleLine2}
          </span>
        </h2>

        {subtitle ? (
          <div
            className={cn(
              "mt-6 max-w-[360px] rounded-xl border px-4 py-3 text-xs font-semibold leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[300px] md:text-sm lg:mt-10",
              isHovered ? "border-primary/25 bg-primary/5" : "border-muted-foreground/20"
            )}
            style={{
              color: isHovered
                ? "hsl(var(--foreground))"
                : "hsl(var(--muted-foreground))",
              transform: isHovered ? "translateY(-3px)" : "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {subtitle}
          </div>
        ) : null}

        {quote ? (
          <blockquote
            className={cn(
              "mt-6 max-w-[360px] border-l-2 pl-5 text-sm italic leading-relaxed transition-all duration-700 md:mt-7 md:max-w-[300px] md:text-base",
              isHovered ? "border-l-primary" : "border-l-muted-foreground/35"
            )}
            style={{
              color: isHovered
                ? "hsl(var(--foreground))"
                : "hsl(var(--muted-foreground) / 0.85)",
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {quote}
          </blockquote>
        ) : description ? (
          <p
            className="mt-6 max-w-[280px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[240px] md:text-base lg:mt-10 lg:max-w-[260px]"
            style={{
              color: isHovered
                ? "hsl(var(--muted-foreground))"
                : "hsl(var(--muted-foreground) / 0.6)",
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {description}
          </p>
        ) : null}

        <div className="mt-6 flex items-center gap-4 md:mt-8 lg:mt-10">
          <Link
            to={ctaHref ?? "#"}
            aria-label={ctaLabel}
            className={cn(
              "inline-flex items-center gap-4",
              ctaHref ? "cursor-pointer" : "pointer-events-none cursor-default"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12",
                isHovered
                  ? "border-primary bg-primary text-white shadow-[0_8px_32px_rgba(184,26,20,0.18)]"
                  : "border-muted-foreground/30 bg-transparent text-foreground"
              )}
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4"
                style={{
                  transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
            <span
              className="text-[10px] font-medium uppercase tracking-widest transition-all duration-700 md:text-xs"
              style={{
                opacity: isHovered ? 1 : 0.5,
                transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: isHovered ? "100ms" : "0ms",
              }}
            >
              {ctaLabel}
            </span>
          </Link>
        </div>
      </div>

      <div
        className="relative transition-all duration-700"
        style={{
          transform: isHovered
            ? "translateX(4px) translateY(-4px)"
            : "translateX(0) translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="absolute -inset-3 border transition-all duration-700 md:-inset-4"
          style={{
            borderColor: isHovered ? "hsl(var(--foreground) / 0.15)" : "transparent",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <div className="relative h-[320px] w-[300px] overflow-hidden sm:h-[360px] sm:w-[340px] md:h-[400px] md:w-[380px] lg:h-[460px] lg:w-[420px]">
          <div
            className="absolute -inset-1 transition-all duration-700"
            style={{
              boxShadow: isHovered
                ? "0 24px 64px hsl(var(--foreground) / 0.1)"
                : "0 0 0 transparent",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full rounded-[22px] object-cover ring-1 ring-black/5 transition-all duration-1000"
            style={{
              transform: isHovered ? "scale(1.035)" : "scale(1)",
              filter: isHovered ? "saturate(1.05) contrast(1.02)" : "saturate(0.98)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-700"
            style={{
              opacity: isHovered ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <div
            className="absolute left-2 top-2 h-5 w-px bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:h-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "top",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "50ms",
            }}
          />
          <div
            className="absolute left-2 top-2 h-px w-5 bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:w-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "100ms",
            }}
          />
          <div
            className="absolute bottom-2 right-2 h-5 w-px bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:h-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleY(1)" : "scaleY(0)",
              transformOrigin: "bottom",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "150ms",
            }}
          />
          <div
            className="absolute bottom-2 right-2 h-px w-5 bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:w-6"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "right",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "200ms",
            }}
          />
        </div>

        <span
          className="absolute -bottom-6 right-0 font-mono text-xs text-muted-foreground transition-all duration-700 md:-bottom-8 md:text-sm"
          style={{
            opacity: isHovered ? 1 : 0.4,
            transform: isHovered ? "translateY(12px)" : "translateY(0)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {indexNumber}
        </span>
      </div>
    </div>
  )
}

