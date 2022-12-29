from rest_framework import serializers
from .models import Portafolio, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tag_uuid', 'tag']

class PortafolioSerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Portafolio
        fields = ['portafolio_uuid',
                'title', 
                'description', 
                'urlthumbnail',
                'tag', 
                'urlgit',
                'url',
                'status', 
                'published']