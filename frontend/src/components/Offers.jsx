import { Star, Gift, MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../utils/api'

function Offers({ offers, whatsappNumber }) {
  if (!offers || offers.length === 0) return null

  return (
    <section id="offers" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-secondary)] px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--color-primary)]">
            <Gift size={14} /> LIMITED TIME
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            This month's offers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            Curated packages at special pricing. Mention the offer name when you book.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => {
            const message = `Hi! I'd like to claim the "${offer.title}" offer at Luxe Beauty Salon.`
            return (
              <div
                key={offer.id}
                className={`offer-card ${offer.is_most_popular ? 'popular' : ''}`}
              >
                {offer.is_most_popular && (
                  <div className="offer-ribbon">Most popular</div>
                )}

                <span className="offer-badge">
                  <Star size={12} fill="#92650f" color="#92650f" /> {offer.badge_text}
                </span>

                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[var(--color-foreground)]">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                  {offer.description}
                </p>

                <div className="mt-5">
                  <span className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">
                    ₹{Number(offer.price).toLocaleString('en-IN')}
                  </span>
                  {offer.original_price && (
                    <span className="offer-price-strike">
                      ₹{Number(offer.original_price).toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <a
                  href={getWhatsAppLink(whatsappNumber, message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`offer-claim-btn mt-6 ${offer.is_most_popular ? 'filled' : 'outline'}`}
                >
                  <MessageCircle size={16} /> Claim offer
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Offers