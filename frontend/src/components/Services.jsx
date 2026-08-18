import { Scissors, Sparkles, Heart, Award, Leaf, Calendar, Star, Gem } from 'lucide-react'

const iconMap = {
  scissors: Scissors,
  sparkles: Sparkles,
  heart: Heart,
  award: Award,
  leaf: Leaf,
  calendar: Calendar,
  star: Star,
  gem: Gem,
}

function Services({ services }) {
  if (!services || services.length === 0) return null

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            Our Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            Everything you need to look and feel radiant, delivered by experienced hands.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-badge">
                  <Icon size={24} color="var(--color-primary)" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services