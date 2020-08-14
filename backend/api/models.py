from django.db import models
from django.contrib.postgres.fields import ArrayField
from .randomizer import pkgen

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

class City(models.Model):
    id = models.CharField(max_length=8, primary_key=True, default=pkgen)
    name = models.CharField(max_length=30)

class User(models.Model):
    name = models.CharField(max_length=30)
    image_url = models.CharField(max_length=300)
    instagram_username= models.CharField(max_length=30, unique=True)
    phone_number = models.CharField(max_length=30, unique=True)
    business_number = models.CharField(max_length=30, blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

class Bundle(models.Model):
    id = models.CharField(max_length=8, primary_key=True, default=pkgen)
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=500, blank=True, null=True)
    price = models.CharField(max_length=30)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class Tag(models.Model):
    id = models.CharField(max_length=8, primary_key=True, default=pkgen)
    name = models.CharField(max_length=30)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

class Follower(models.Model):
    id = models.CharField(max_length=8, primary_key=True, default=pkgen)
    name = models.CharField(max_length=30)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

class Price(models.Model):
    id = models.CharField(max_length=8, primary_key=True, default=pkgen)
    name = models.CharField(max_length=30)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

