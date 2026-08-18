import { getWhatsAppLink } from '../utils/api'

function Hero({ siteContent }) {
  if (!siteContent) return null

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left: text content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--color-foreground)]">
            ✨ {siteContent.hero_badge_text}
          </span>

          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--color-foreground)] lg:text-6xl">
            {siteContent.hero_heading_normal}{' '}
            <span className="text-[var(--color-primary)]">{siteContent.hero_heading_highlight}</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg text-[var(--color-muted-foreground)]">
            {siteContent.hero_description}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
            <a
              href={getWhatsAppLink(siteContent.whatsapp_number)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-[var(--color-primary-foreground)]"
            >
              💬 Book on WhatsApp
            </a>
            <a
              href={`tel:${siteContent.phone_number}`}
              className="btn-animated flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-[var(--color-foreground)] hover:bg-black hover:text-white"
            >
              📞 Call Now
            </a>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--color-muted-foreground)]">
            <span>🏅 {siteContent.feature_badge_1}</span>
            <span>🌿 {siteContent.feature_badge_2}</span>
            <span>🕐 {siteContent.feature_badge_3}</span>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative">
          {siteContent.hero_image && (
            <div className="hero-image-wrapper shadow-lg">
              <img
                src={siteContent.hero_image}
                alt="Salon interior"
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-xl bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-md">
            <p className="text-xs sm:text-sm font-semibold text-[var(--color-foreground)]">
              {siteContent.hero_rating_text}
            </p>
            <p className="text-[10px] sm:text-xs text-[var(--color-muted-foreground)]">
              {siteContent.hero_rating_subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero