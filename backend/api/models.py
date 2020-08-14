from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# Extend django user
class User(AbstractUser, ):
    email = models.EmailField(unique=True, primary_key=True)

    