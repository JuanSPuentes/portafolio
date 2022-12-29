from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
#Modelos
from .models import Portafolio, Tag
from .serializers import PortafolioSerializer

from .pagination import StandardResultsSetPagination

class ProjectListView(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Portafolio.postobjects.all().order_by('-published')
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    serializer_class = PortafolioSerializer
    pagination_class = StandardResultsSetPagination





