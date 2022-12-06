from django.urls import path, include
from rest_framework import routers

from api import views

app_name = 'api'

router = routers.SimpleRouter()
router.register('tasks', viewset=views.TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
