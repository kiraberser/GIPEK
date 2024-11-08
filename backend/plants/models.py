from django.db import models

# Create your models here.
class Species(models.Model):
    family = models.CharField(max_length=50)
    plant = models.CharField(max_length=70)
    scientific_name = models.CharField(max_length=80)
    description = models.TextField(blank=True, null=True)
    habitat = models.CharField(max_length=90)
    care_instructions = models.TextField(max_length=90)
    average_height = models.DecimalField(max_digits=5, decimal_places=2, blank=True)