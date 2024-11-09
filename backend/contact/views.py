from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

from .models import Contact
from .serializers import ContactSerializer

@api_view(['POST'])
def contactForm(request):
    print(request.data)
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)
