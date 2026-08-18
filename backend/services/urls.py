from django.urls import path
from .views import services_list_view, gallery_list_view, offers_list_view, reviews_list_view

urlpatterns = [
    path('services/', services_list_view, name='services-list'),
    path('gallery/', gallery_list_view, name='gallery-list'),
    path('offers/', offers_list_view, name='offers-list'),
    path('reviews/', reviews_list_view, name='reviews-list'),
]