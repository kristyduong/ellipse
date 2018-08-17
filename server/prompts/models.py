from django.db import models

# Create your models here.
class Prompt(models.Model):
	title = models.TextField(blank=True)
	prompt_type = models.TextField(blank=True)
	text = models.TextField(blank=True)