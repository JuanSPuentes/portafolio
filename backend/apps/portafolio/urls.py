from .views import ProjectListView
from rest_framework import routers

router = routers.DefaultRouter()

router.register('', ProjectListView, 'digimons')

urlpatterns = router.urls