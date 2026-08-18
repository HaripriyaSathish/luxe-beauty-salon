import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function FAQ({ siteContent, items }) {
  const [openId, setOpenId] = useState(null)

  if (!siteContent || !items || items.length === 0) return null

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {siteContent.faq_heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            {siteContent.faq_description}
          </p>
        </div>

        <div className="mt-10 divide-y divide-[var(--color-border)]">
          {items.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className="faq-item">
                <button
                  onClick={() => toggle(item.id)}
                  className={`faq-question ${isOpen ? 'open' : ''}`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>

                <div className={`faq-answer-wrapper ${isOpen ? 'expanded' : ''}`}>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ