from rest_framework import serializers
from .models import Portafolio, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tag_uuid', 'tag']

class PortafolioSerializer(serializers.ModelSerializer):
    thumbnail = serializers.CharField(source = 'get_thumbnail')
    tag = TagSerializer(many=True)

    class Meta:
        model = Portafolio
        fields = ['portafolio_uuid',
                'title', 
                'description', 
                'thumbnail',
                'tag', 
                'urlgit',
                'url',
                'status', 
                'published']