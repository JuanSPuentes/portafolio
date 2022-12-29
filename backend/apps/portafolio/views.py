from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.permissions import AllowAny
#Modelos
from .models import Portafolio, Tag
from .serializers import PortafolioSerializer

from .pagination import StandardResultsSetPagination

class ProjectListView(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Portafolio.postobjects.all().order_by('-published')
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PortafolioSerializer
    pagination_class = StandardResultsSetPagination
    lookup_fields = ['name', 'id']




