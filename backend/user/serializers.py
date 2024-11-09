from django.contrib.auth.models import User
from rest_framework import serializers 

from backend.user.models import CreateUser

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateUser
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}
    
    def create_user(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        