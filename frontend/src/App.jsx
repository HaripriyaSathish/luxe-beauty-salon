import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Offers from './components/Offers'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActionButtons from './components/FloatingActionButtons'
import ScrollReveal from './components/ScrollReveal'
import {
  fetchSiteContent,
  fetchServices,
  fetchGallery,
  fetchOffers,
  fetchAboutStats,
  fetchWhyUs,
  fetchReviews,
  fetchFAQ,
  fetchSocialLinks,
} from './utils/api'

function App() {
  const [siteContent, setSiteContent] = useState(null)
  const [services, setServices] = useState([])
  const [gallery, setGallery] = useState([])
  const [offers, setOffers] = useState([])
  const [aboutStats, setAboutStats] = useState([])
  const [whyUsFeatures, setWhyUsFeatures] = useState([])
  const [reviews, setReviews] = useState([])
  const [faqItems, setFaqItems] = useState([])
  const [socialLinks, setSocialLinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetchSiteContent(),
      fetchServices(),
      fetchGallery(),
      fetchOffers(),
      fetchAboutStats(),
      fetchWhyUs(),
      fetchReviews(),
      fetchFAQ(),
      fetchSocialLinks(),
    ])
      .then(([contentData, servicesData, galleryData, offersData, statsData, whyUsData, reviewsData, faqData, socialData]) => {
        setSiteContent(contentData)
        setServices(servicesData)
        setGallery(galleryData)
        setOffers(offersData)
        setAboutStats(statsData)
        setWhyUsFeatures(whyUsData)
        setReviews(reviewsData)
        setFaqItems(faqData)
        setSocialLinks(socialData)
      })
      .catch((err) => console.error('Failed to load data:', err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)]">
        <p className="text-[var(--color-muted-foreground)]">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar siteContent={siteContent} />
      <Hero siteContent={siteContent} />

      <ScrollReveal>
        <Services services={services} />
      </ScrollReveal>

      <ScrollReveal>
        <Gallery images={gallery} />
      </ScrollReveal>

      <ScrollReveal>
        <Offers offers={offers} whatsappNumber={siteContent?.whatsapp_number} />
      </ScrollReveal>

      <ScrollReveal>
        <About siteContent={siteContent} stats={aboutStats} />
      </ScrollReveal>

      <ScrollReveal>
        <WhyUs siteContent={siteContent} features={whyUsFeatures} />
      </ScrollReveal>

      <ScrollReveal>
        <Reviews siteContent={siteContent} reviews={reviews} />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ siteContent={siteContent} items={faqItems} />
      </ScrollReveal>

      <ScrollReveal>
        <Contact siteContent={siteContent} />
      </ScrollReveal>

      <ScrollReveal>
        <Footer siteContent={siteContent} socialLinks={socialLinks} />
      </ScrollReveal>

      <FloatingActionButtons siteContent={siteContent} />
    </div>
  )
}

export default App