from django.urls import path
from .views import site_content_view, about_stats_view, why_us_view, faq_list_view, social_links_view

urlpatterns = [
    path('site-content/', site_content_view, name='site-content'),
    path('about-stats/', about_stats_view, name='about-stats'),
    path('why-us/', why_us_view, name='why-us'),
    path('faq/', faq_list_view, name='faq-list'),
    path('social-links/', social_links_view, name='social-links'),
]