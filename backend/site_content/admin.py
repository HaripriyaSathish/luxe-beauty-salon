from django.contrib import admin
from .models import SiteContent, AboutStat, WhyUsFeature, FAQItem, SocialLink


@admin.register(SiteContent)
class SiteContentAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Branding', {
            'fields': ('logo', 'site_name')
        }),
        ('Hero Section', {
            'fields': (
                'hero_badge_text', 'hero_heading_normal', 'hero_heading_highlight',
                'hero_description', 'hero_image', 'hero_rating_text', 'hero_rating_subtext',
            )
        }),
        ('Hero Feature Badges', {
            'fields': ('feature_badge_1', 'feature_badge_2', 'feature_badge_3')
        }),
        ('About Section', {
            'fields': (
                'about_heading_normal', 'about_heading_highlight',
                'about_paragraph_1', 'about_paragraph_2', 'about_button_text',
            )
        }),
        ('Why Us Section', {
            'fields': ('why_us_heading', 'why_us_description')
        }),
        ('Reviews Section', {
            'fields': ('reviews_heading', 'reviews_description')
        }),
        ('FAQ Section', {
            'fields': ('faq_heading', 'faq_description')
        }),
        ('Contact Section', {
            'fields': (
                'contact_heading', 'contact_description',
                'phone_number', 'whatsapp_number', 'email',
                'address', 'business_hours', 'map_embed_url',
            )
        }),
        ('Footer Section', {
            'fields': ('footer_tagline', 'footer_copyright_text', 'footer_credit_text')
        }),
    )

    def has_add_permission(self, request):
        return not SiteContent.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(AboutStat)
class AboutStatAdmin(admin.ModelAdmin):
    list_display = ('number', 'label', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)


@admin.register(WhyUsFeature)
class WhyUsFeatureAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)


@admin.register(FAQItem)
class FAQItemAdmin(admin.ModelAdmin):
    list_display = ('question', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)