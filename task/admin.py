from django.contrib import admin

from task.models import Task


# Register your models here.
class TaskModelAdmin(admin.ModelAdmin):
    list_display = ('content', 'updated_at')


admin.site.register(Task, TaskModelAdmin)
