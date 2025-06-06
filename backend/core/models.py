from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone

class UserManager(BaseUserManager): # define how
    def create_user(self, email, full_name, password=None):
        if not email:
            raise ValueError("Email is required")
        if not full_name:
            raise ValueError("Full name is required")

        email = self.normalize_email(email)
        user = self.model(email=email, full_name=full_name)
        user.set_password(password) # hash the password securely
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, password=None):
        return self.create_user(email=email, full_name=full_name, password=password)
# deinfe what
class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    last_login = None

    objects = UserManager() # this manages how we create user

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def _str_(self):
        return self.email

class BlogPost(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE) # if the user will be delete the post also willbe delete
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def _str_(self):
        return f"{self.title} by {self.author.email}"