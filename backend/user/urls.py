from django.urls import path
from .views import CreateUser, ListUsers

urlpatterns = [
    path('create-user/', CreateUser.as_view(), name='create-user'),
    path('list-users/', ListUsers.as_view(), name='list-users'),
]
