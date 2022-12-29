from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #urls api
    path('api/portafolio', include('apps.portafolio.urls')),
]

#conexion de react
urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_URL)