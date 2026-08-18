from django.db import models


class SiteContent(models.Model):
    """Singleton model - only one row should ever exist."""

    # Branding
    logo = models.ImageField(upload_to='site_content/', blank=True, null=True)
    site_name = models.CharField(max_length=100, default='Luxe Beauty Salon')

    # Hero section
    hero_badge_text = models.CharField(max_length=100, default='Premium beauty services')
    hero_heading_normal = models.CharField(max_length=150, default='Look your best,')
    hero_heading_highlight = models.CharField(max_length=150, default='feel your best')
    hero_description = models.TextField(
        default='Where elegance meets effortless beauty. Experience personalised hair, makeup and skin care in a calm, luxurious space.'
    )
    hero_image = models.ImageField(upload_to='site_content/', blank=True, null=True)

    hero_rating_text = models.CharField(max_length=50, default='Rated 4.9/5')
    hero_rating_subtext = models.CharField(max_length=100, default='by 500+ happy clients')

    # Feature badges under Hero CTAs (Certified stylists, Organic products, Walk-ins welcome)
    feature_badge_1 = models.CharField(max_length=100, default='Certified stylists')
    feature_badge_2 = models.CharField(max_length=100, default='Organic products')
    feature_badge_3 = models.CharField(max_length=100, default='Walk-ins welcome')

    # Contact info (used across Navbar, FABs, Footer, Contact section)
    phone_number = models.CharField(max_length=20, default='+919876543210')
    whatsapp_number = models.CharField(max_length=20, default='919876543210')
    email = models.EmailField(default='info@luxebeautysalon.com')
    address = models.TextField(blank=True)
    map_embed_url = models.URLField(max_length=1000, blank=True, help_text='Google Maps embed iframe src URL')

        # About section
    about_heading_normal = models.CharField(max_length=100, default='A salon built around')
    about_heading_highlight = models.CharField(max_length=100, default='you')
    about_paragraph_1 = models.TextField(
        default='At Luxe Beauty Salon, we believe beauty should feel effortless. Our team combines technical skill with a calming touch to create looks that fit your personality and lifestyle.'
    )
    about_paragraph_2 = models.TextField(
        default='From everyday cuts to once-in-a-lifetime bridal looks, we listen first and style second. Every visit is designed to leave you refreshed, confident and glowing.'
    )
    about_button_text = models.CharField(max_length=50, default='Get in touch')

        # Why Us section
    why_us_heading = models.CharField(max_length=100, default='Why clients love us')
    why_us_description = models.TextField(
        default='We combine expertise, premium products and genuine care to deliver an experience worth returning for.'
    )

        # Reviews section
    reviews_heading = models.CharField(max_length=100, default='Client stories')
    reviews_description = models.TextField(
        default='Real experiences from the people who make our salon special.'
    )

        # FAQ section
    faq_heading = models.CharField(max_length=100, default='Quick questions')
    faq_description = models.TextField(default='Everything you may want to know before you visit.')

        # Contact section
    contact_heading = models.CharField(max_length=100, default='Visit us')
    contact_description = models.TextField(
        default="Book your appointment through WhatsApp, call or email. We can't wait to welcome you."
    )
    business_hours = models.CharField(max_length=100, default='Mon – Sat: 10:00 AM – 8:00 PM')

        # Footer section
    footer_tagline = models.TextField(
        default='Where elegance meets effortless beauty. Hair, makeup, skin and nail care delivered by certified experts using premium and organic products.'
    )
    footer_copyright_text = models.CharField(max_length=150, default='© 2026 Luxe Beauty Salon. All rights reserved.')
    footer_credit_text = models.CharField(max_length=100, blank=True, default='Made with care in Bangalore')

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Site Content'
        verbose_name_plural = 'Site Content'

    def __str__(self):
        return self.site_name

    def save(self, *args, **kwargs):
        self.pk = 1  # enforce singleton
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass  # prevent deletion

class AboutStat(models.Model):
    number = models.CharField(max_length=20, help_text='e.g. "8+", "5k+", "100%"')
    label = models.CharField(max_length=100, help_text='e.g. "Years of experience"')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f'{self.number} - {self.label}'   

WHY_US_ICON_CHOICES = [
    ('award', 'Award (Certified)'),
    ('leaf', 'Leaf (Premium/Organic)'),
    ('clock', 'Clock (On-time)'),
    ('heart', 'Heart (Personalised)'),
    ('sparkles', 'Sparkles'),
    ('shield', 'Shield'),
    ('star', 'Star'),
    ('gem', 'Gem'),
]


class WhyUsFeature(models.Model):
    icon = models.CharField(max_length=30, choices=WHY_US_ICON_CHOICES, default='award')
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title     

class FAQItem(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField(max_length=500)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.question    

SOCIAL_PLATFORM_CHOICES = [
    ('instagram', 'Instagram'),
    ('facebook', 'Facebook'),
    ('youtube', 'YouTube'),
    ('twitter', 'Twitter / X'),
    ('whatsapp', 'WhatsApp'),
    ('pinterest', 'Pinterest'),
    ('linkedin', 'LinkedIn'),
    ('tiktok', 'TikTok'),
]


class SocialLink(models.Model):
    platform = models.CharField(max_length=30, choices=SOCIAL_PLATFORM_CHOICES)
    url = models.URLField()
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.platform        