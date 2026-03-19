// Horizontal scrolling announcement ticker with light background and bright text
function Ticker() {
  const announcements = [
    '🏆 SKOCH Awardee 2025 - Recognized for excellence in governance and development',
    // '📚 Free mentorship sessions available every Friday',
  ]

  const duration = '40s'

  return (
    <>
      <style>{`
        @keyframes ticker-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <section className="w-full bg-background text-foreground border-b shadow-sm">
        <div className="px-4 pt-3 pb-2 text-center border-b bg-card">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.35)]" />
            Latest Announcement
          </span>
        </div>

        <div
          className="w-full overflow-hidden bg-card/80"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div
            className="flex w-max items-center gap-8 sm:gap-10 py-3 sm:py-4 pr-6 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out"
            style={{
              animation: `ticker-marquee ${duration} linear infinite`,
            }}
          >
            {[...announcements, ...announcements].map((announcement, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/70 border border-border/60 shadow-sm"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  !
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                  {announcement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Ticker
