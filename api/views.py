from rest_framework import viewsets

from api.serializers import TaskSerializer
from task.models import Task


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
