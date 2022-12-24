from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
#Modelos
from .models import Portafolio, Tag
from .serializers import PortafolioSerializer

from .pagination import StandardResultsSetPagination

class ProjectListView(APIView):
    def get(self, request, format=None):
        if Portafolio.postobjects.all().exists():

            project = Portafolio.postobjects.all()

            paginator = StandardResultsSetPagination()
            results = paginator.paginate_queryset(project, request)
            serializer = PortafolioSerializer(results, many=True)
            return paginator.get_paginated_response({'project': serializer.data})

        else:
            return Response({'error': 'No project found'}, status=status.HTTP_404_NOT_FOUND)


