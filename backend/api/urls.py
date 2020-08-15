from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet
from .models import User
from .views import UserViewSet, InitialValueViewset

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('', InitialValueViewset)
router.register('search', SearchViewSet)

urlpatterns = [
    path('', include(router.urls)),
]