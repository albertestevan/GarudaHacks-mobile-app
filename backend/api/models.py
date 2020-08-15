from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class City(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Follower(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Price(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class User(models.Model):
    name = models.CharField(max_length=30)
    image_url = models.CharField(max_length=300)
    instagram_username= models.CharField(max_length=30, unique=True)
    phone_number = models.CharField(max_length=30, unique=True)
    business_number = models.CharField(max_length=30, blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True)
    follower = models.ForeignKey(Follower, on_delete=models.CASCADE, null=True)
    price = models.ForeignKey(Price, on_delete=models.CASCADE, null=True)
    tags =  models.ManyToManyField(Tag)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Bundle(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=500, blank=True)
    price = models.FloatField(default=0)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


