# Generated by Django 2.0.2 on 2018-08-10 09:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('links', '0002_link_addedby'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='link',
            name='addedBy',
        ),
    ]
