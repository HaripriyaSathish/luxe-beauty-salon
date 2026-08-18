from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Service, GalleryImage, Offer, Review
from .serializers import ServiceSerializer, GalleryImageSerializer, OfferSerializer, ReviewSerializer


@api_view(['GET'])
def services_list_view(request):
    services = Service.objects.filter(is_active=True)
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def gallery_list_view(request):
    images = GalleryImage.objects.filter(is_active=True)
    serializer = GalleryImageSerializer(images, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def offers_list_view(request):
    offers = Offer.objects.filter(is_active=True)
    serializer = OfferSerializer(offers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def reviews_list_view(request):
    reviews = Review.objects.filter(is_active=True)
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)