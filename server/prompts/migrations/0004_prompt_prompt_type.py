# Generated by Django 2.0.2 on 2018-08-17 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prompts', '0003_auto_20180816_2058'),
    ]

    operations = [
        migrations.AddField(
            model_name='prompt',
            name='prompt_type',
            field=models.TextField(blank=True),
        ),
    ]