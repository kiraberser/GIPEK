from django.contrib.auth.models import User
from rest_framework import serializers 

from backend.contact.models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'name',
            'email',
            'content',
            'email'
        ]
    
    def create(self, validated_data):
        contact = Contact.objects.create(**validated_data)
        return contact

    
