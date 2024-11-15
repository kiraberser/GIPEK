from rest_framework import generics
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User

from .serializers import CreateUserSerializer
# Create your views here.

class CreateUser(generics.CreateAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def create(self, request, format=None):
        request = User.objects.all()
        return Response(request)