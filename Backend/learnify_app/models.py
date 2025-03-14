import uuid
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from auth_users.models import User
from manage_courses.models import Course, Module, Lesson


class Order(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    total_price = models.DecimalField(max_digits=15, decimal_places=2)
    status = models.CharField(max_length=15, choices=[("pending", "Pending"), ("completed", "Completed"), ("cancelled", "Cancelled")])
    course = models.ManyToManyField("Course", related_name="orders")
    created_at = models.DateTimeField(auto_now_add=True)

class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="cart")
    courses = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Cart"

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="reviews")
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
class LessonProgress(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="progress")
    course = models.OneToOneField(Course, on_delete=models.CASCADE)
    lesson = models.OneToOneField(Lesson, on_delete=models.CASCADE)
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="progress")
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Lesson Progress"