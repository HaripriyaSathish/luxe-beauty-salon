from django.contrib import admin
from .models import Service, GalleryImage, Offer, Review


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('caption', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)


@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    list_display = ('title', 'badge_text', 'price', 'original_price', 'is_most_popular', 'order', 'is_active')
    list_editable = ('order', 'is_active', 'is_most_popular')
    ordering = ('order',)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'rating', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    ordering = ('order',)