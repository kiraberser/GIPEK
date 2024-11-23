from django.urls import path, include

urlpatterns = [
    path('form/', include('backend.contact.urls')),
    path('user/', include('backend.user.urls'))
]
