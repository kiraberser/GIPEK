from django.contrib.auth.models import User
from rest_framework import serializers 

from backend.user.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}

class CreateUserSerializer(serializers.ModelSerializer):
    gmail = serializers.EmailField(write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {"password": {"write_only": True}}
        
        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user

