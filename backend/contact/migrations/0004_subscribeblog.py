# Generated by Django 5.1.1 on 2024-11-15 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0003_remove_contact_tel'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubscribeBlog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
    ]