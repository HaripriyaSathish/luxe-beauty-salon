import { useState } from 'react'
import { getWhatsAppLink } from '../utils/api'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Offers', href: '#offers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ siteContent }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const phone = siteContent?.phone_number || '+919876543210'
  const whatsapp = siteContent?.whatsapp_number || '919876543210'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/75 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          {siteContent?.logo && (
            <img src={siteContent.logo} alt={siteContent.site_name} className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
          )}
          <span className="text-base sm:text-lg font-semibold text-[var(--color-foreground)]">
            {siteContent?.site_name || 'Luxe Beauty Salon'}
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--color-muted-foreground)] transition-colors duration-200 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Call + WhatsApp buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm font-medium text-[var(--color-foreground)] transition-colors duration-200 hover:bg-black hover:text-white"
          >
            📞 Call
          </a>
          <a
            href={getWhatsAppLink(whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary-foreground)] transition-opacity duration-200 hover:opacity-90"
          >
            💬 Book on WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex items-center justify-center h-9 w-9 text-[var(--color-foreground)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-[var(--color-border)] bg-[var(--color-background)] px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[var(--color-muted-foreground)] hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)]"
            >
              📞 Call
            </a>
            <a
              href={getWhatsAppLink(whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary-foreground)]"
            >
              💬 Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar