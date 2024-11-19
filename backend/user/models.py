from django.db import models

# Create your models here.
class CreateUser(models.Model):
    username = models.CharField(max_length=50, unique=True)
    gmail = models.EmailField(max_length=50, null=False, default='edwinvega3106@gmail.com')
    password = models.CharField(max_length=60)
    
    