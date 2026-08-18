from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SiteContent, AboutStat, WhyUsFeature, FAQItem, SocialLink
from .serializers import (
    SiteContentSerializer, AboutStatSerializer, WhyUsFeatureSerializer,
    FAQItemSerializer, SocialLinkSerializer,
)


@api_view(['GET'])
def site_content_view(request):
    obj, _ = SiteContent.objects.get_or_create(pk=1)
    serializer = SiteContentSerializer(obj, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def about_stats_view(request):
    stats = AboutStat.objects.filter(is_active=True)
    serializer = AboutStatSerializer(stats, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def why_us_view(request):
    features = WhyUsFeature.objects.filter(is_active=True)
    serializer = WhyUsFeatureSerializer(features, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def faq_list_view(request):
    items = FAQItem.objects.filter(is_active=True)
    serializer = FAQItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def social_links_view(request):
    links = SocialLink.objects.filter(is_active=True)
    serializer = SocialLinkSerializer(links, many=True)
    return Response(serializer.data)