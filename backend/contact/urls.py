from django.urls import path
from .views import ContactForm, SubscribeView

urlpatterns = [
    path('contact/', ContactForm, name='contact-form'),
    path('', SubscribeView.as_view(), name='subscribe-view')
]
