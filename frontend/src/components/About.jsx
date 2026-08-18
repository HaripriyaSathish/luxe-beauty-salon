import { ArrowRight } from 'lucide-react'
import { useOnScreen } from '../utils/useOnScreen'
import StatCard from './StatCard'

function About({ siteContent, stats }) {
  const [ref, isVisible] = useOnScreen(0.3)

  if (!siteContent) return null

  return (
    <section id="about" className="border-t border-[var(--color-border)] bg-[var(--color-secondary)]/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Stats grid */}
          <div className="order-2 grid grid-cols-2 gap-4 sm:gap-6 lg:order-1">
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                number={stat.number}
                label={stat.label}
                shouldStart={isVisible}
              />
            ))}
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
              {siteContent.about_heading_normal}{' '}
              <span className="text-[var(--color-primary)]">{siteContent.about_heading_highlight}</span>
            </h2>
            <p className="mt-6 text-[var(--color-muted-foreground)]">
              {siteContent.about_paragraph_1}
            </p>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              {siteContent.about_paragraph_2}
            </p>
            <a href="#contact" className="about-cta-btn mt-8">
              {siteContent.about_button_text} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About