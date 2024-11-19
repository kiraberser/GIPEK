from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.core.mail import send_mail
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.
from .serializers import ContactSerializer, SubscribeBlogSerializer

@api_view(['POST'])
def ContactForm(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        send_mail(
            subject='Gracias por contactarte con nuestro equipo de soporte!',
            message='En las proximas horas recibiras un correo sobre tus dudas\n Nuestro número de contacto en whatsapp es: 2321479161',
            from_email='edwinvega3106@gmail.com',
            recipient_list=[request.data['email']],
            fail_silently=False
        )
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

class SubscribeView(APIView):
    def post(self, request):
        serializer = SubscribeBlogSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            send_mail(
                subject='Bienvenido a GIPEK',
                message='Estarás recibiendo correos sobre toda la nueva información así como recomendaciones para tus plantas',
                from_email='edwinvega3106@gmail.com',
                recipient_list=[request.data['email']],
                fail_silently=False
            )
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

