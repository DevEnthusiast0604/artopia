from django.contrib import admin
from .models import *
# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'date_joined', 'is_staff', 'is_superuser')
    search_fields = ('username', 'email')  # Fields to be searchable in the admin interface
    ordering = ('-date_joined',)  # Order users by date_joined in descending order
admin.site.register(CustomUser, CustomUserAdmin)
