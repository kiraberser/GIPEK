from django.urls import path, include

from .views import get_contacts

urlpatterns = [
    path('contacts/',  get_contacts, name='get_contacts')
]
