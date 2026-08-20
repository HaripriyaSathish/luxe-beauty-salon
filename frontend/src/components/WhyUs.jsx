import { Award, Leaf, Clock, Heart, Sparkles, Shield, Star, Gem } from 'lucide-react'

const iconMap = {
  award: Award,
  leaf: Leaf,
  clock: Clock,
  heart: Heart,
  sparkles: Sparkles,
  shield: Shield,
  star: Star,
  gem: Gem,
}

function WhyUs({ siteContent, features }) {
  if (!siteContent || !features || features.length === 0) return null

  return (
    <section id="why-us" className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {siteContent.why_us_heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            {siteContent.why_us_description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <div key={feature.id} className="why-us-item">
                <div className="why-us-icon-badge">
                  <Icon size={28} color="var(--color-primary)" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-[var(--color-foreground)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted-foreground)]">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs