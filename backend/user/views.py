from rest_framework.response import Response
from rest_framework import authentication, permissions, generics
from django.contrib.auth.models import User

from .serializers import CreateUserSerializer, UserProfileSerializer
from backend.user.models import UserProfile
# Create your views here.

class CreateUser(generics.GenericAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListUsers(generics.ListAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    queryset = UserProfile.objects.select_related('user')
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAdminUser]
    