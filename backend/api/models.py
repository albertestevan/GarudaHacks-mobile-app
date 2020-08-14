from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
FOLLOWERS = (
    ("1", "~ 1k"),
    ("2", "~ 5k"),
    ("3", "~ 10k"),
    ("4", "~ 50k"),
    ("5", "~ 100k"),
    ("6", "~ 500k"),
    ("7", "> 1M "),
)

PRICES = (
    ("1", "~ 500k"),
    ("2", "~ 5M"),
    ("3", "~ 10M"),
)

class User(models.Model):
    name = models.CharField(max_length=30)
    image_url = models.CharField(max_length=300)
    instagram_username= models.CharField(max_length=30)
    phone_number = models.CharField(max_length=30, primary_key=True)
    business_number = models.CharField(max_length=30, blank=True, null=True)
    price = models.CharField(choices=PRICES)
    followers = models.CharField(choice=FOLLOWERS)
    city = models.CharField(max_length=30, blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    Tags = ArrayField(models.CharField(max_length=30), blank=True)