import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../utils/api'

function Contact({ siteContent }) {
  if (!siteContent) return null

  const {
    contact_heading,
    contact_description,
    address,
    phone_number: phone,
    whatsapp_number: whatsapp,
    email,
    business_hours,
    map_embed_url,
  } = siteContent

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || '')}`

  return (
    <section id="contact" className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
            {contact_heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-muted-foreground)]">
            {contact_description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Info card */}
          <div className="contact-info-card">
            {address && (
              <div className="contact-info-row">
                <div className="contact-icon-badge">
                  <MapPin size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="contact-label">Address</p>
                  <p className="contact-value">{address}</p>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Open in Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )}

            {phone && (
              <div className="contact-info-row">
                <div className="contact-icon-badge">
                  <Phone size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href={`tel:${phone}`} className="contact-value-link">
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {email && (
              <div className="contact-info-row">
                <div className="contact-icon-badge">
                  <Mail size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href={`mailto:${email}`} className="contact-value-link">
                    {email}
                  </a>
                </div>
              </div>
            )}

            {business_hours && (
              <div className="contact-info-row no-border">
                <div className="contact-icon-badge">
                  <Clock size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="contact-label">Hours</p>
                  <p className="contact-value">{business_hours}</p>
                </div>
              </div>
            )}

            <div className="contact-actions">
              <a
                href={getWhatsAppLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn filled"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`tel:${phone}`} className="contact-action-btn outline">
                <Phone size={16} /> Call
              </a>
              <a href={`mailto:${email}`} className="contact-action-btn soft">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Map */}
          {map_embed_url && (
            <div className="contact-map-wrapper">
              <iframe
                src={map_embed_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon location"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact