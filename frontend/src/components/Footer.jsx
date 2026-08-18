import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  pinterest: FaPinterestP,
  tiktok: FaTiktok,
}
function Footer({ siteContent, socialLinks }) {
  if (!siteContent) return null

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Offers', href: '#offers' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              {siteContent.logo && (
                <img src={siteContent.logo} alt={siteContent.site_name} className="h-8 w-8 object-contain" />
              )}
              <span className="text-lg font-semibold text-[var(--color-foreground)]">
                {siteContent.site_name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-[var(--color-muted-foreground)]">
              {siteContent.footer_tagline}
            </p>

            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.platform] || Instagram
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-icon"
                      aria-label={link.platform}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Explore links */}
          <div>
            <p className="footer-column-heading">Explore</p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit us */}
          <div>
            <p className="footer-column-heading">Visit Us</p>
            <ul className="mt-4 space-y-3">
              {siteContent.address && (
                <li className="footer-contact-row">
                  <MapPin size={16} className="footer-contact-icon" />
                  <span>{siteContent.address}</span>
                </li>
              )}
              {siteContent.phone_number && (
                <li className="footer-contact-row">
                  <Phone size={16} className="footer-contact-icon" />
                  <a href={`tel:${siteContent.phone_number}`} className="footer-link">
                    {siteContent.phone_number}
                  </a>
                </li>
              )}
              {siteContent.email && (
                <li className="footer-contact-row">
                  <Mail size={16} className="footer-contact-icon" />
                  <a href={`mailto:${siteContent.email}`} className="footer-link">
                    {siteContent.email}
                  </a>
                </li>
              )}
              {siteContent.business_hours && (
                <li className="footer-contact-row">
                  <Clock size={16} className="footer-contact-icon" />
                  <span>{siteContent.business_hours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>{siteContent.footer_copyright_text}</p>
          {siteContent.footer_credit_text && <p>{siteContent.footer_credit_text}</p>}
        </div>
      </div>
    </footer>
  )
}

export default Footer