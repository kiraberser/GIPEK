from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField( max_length=50)
    content = models.CharField( max_length=50)
    email = models.EmailField(max_length=50)

class SubscribeBlog(models.Model):
    email = models.EmailField( max_length=254)