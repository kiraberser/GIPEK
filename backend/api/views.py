from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from backend.contact.models import Contact
from .serializers import UserSerializer, NoteSerializer

from rest_framework import generics


@api_view(['GET'])
def get_contacts(request):
    contacts = Contact.objects.all()
    serializer = UserSerializer(contacts, many=True)
    permission_classes = [AllowAny]
    return Response(serializer.data)

class CreateContact(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    def perfom_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)