from rest_framework import serializers
from .models import SiteContent, AboutStat, WhyUsFeature, FAQItem, SocialLink


class AboutStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutStat
        fields = ['id', 'number', 'label', 'order']


class WhyUsFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyUsFeature
        fields = ['id', 'icon', 'title', 'description', 'order']


class FAQItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQItem
        fields = ['id', 'question', 'answer', 'order']


class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        fields = ['id', 'platform', 'url', 'order']


class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = '__all__'