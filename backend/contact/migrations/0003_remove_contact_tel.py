# Generated by Django 5.1.1 on 2024-11-09 04:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_alter_contact_tel'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='tel',
        ),
    ]
