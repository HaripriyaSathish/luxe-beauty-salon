import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '../utils/api'

function FloatingActionButtons({ siteContent }) {
  const [bottomOffset, setBottomOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (!footer) return

      const footerRect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const overlap = viewportHeight - footerRect.top

      if (overlap > 0) {
        setBottomOffset(overlap + 16) // 16px gap above footer
      } else {
        setBottomOffset(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!siteContent) return null

  const { email, phone_number: phone, whatsapp_number: whatsapp } = siteContent

  return (
    <div className="fab-container" style={{ bottom: `calc(1rem + ${bottomOffset}px)` }}>
      {email && (
        <a href={`mailto:${email}`} className="fab-icon-btn" aria-label="Email us">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          </svg>
          <span className="fab-label">Email</span>
        </a>
      )}

      {phone && (
        <a href={`tel:${phone}`} className="fab-icon-btn" aria-label="Call us">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          <span className="fab-label">Call</span>
        </a>
      )}

      {whatsapp && (
        <a
          href={getWhatsAppLink(whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-whatsapp"
          aria-label="Book on WhatsApp"
        >
          <span className="fab-icon">💬</span>
          Book Now
        </a>
      )}
    </div>
  )
}

export default FloatingActionButtons