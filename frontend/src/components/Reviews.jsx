import { Sparkles } from 'lucide-react'

function Reviews({ siteContent, reviews }) {
  if (!siteContent || !reviews || reviews.length === 0) return null

  return (
    <section id="reviews" className="border-t border-[var(--color-border)] bg-[var(--color-secondary)]/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {siteContent.reviews_heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            {siteContent.reviews_description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Sparkles key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                ))}
              </div>
              <p className="review-quote">"{review.quote}"</p>
              <p className="review-author">— {review.client_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews