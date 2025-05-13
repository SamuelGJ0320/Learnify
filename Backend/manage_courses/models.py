import uuid
from django.db import models
from auth_users.models import User
from django.db.models import Avg

class Course(models.Model):
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="courses")
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=15, decimal_places=2)
    category = models.CharField(max_length=50)
    status = models.CharField(max_length=15, choices=[("draft", "Draft"), ("published", "Published"), ("archived", "Archived")])
    estimated_duration = models.IntegerField(default=0)
    difficulty = models.CharField(max_length=20, choices=[("beginner", "Beginner"), ("intermediate", "Intermediate"), ("advanced", "Advanced")], default='beginner')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Course"
    
    @property
    def rating_avg(self):
        return self.reviews.aggregate(Avg('rating'))['rating__avg'] or 0
    
    
        

    def __str__(self):
        return f"{self.title} - {self.instructor}"

class Module(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="modules")
    title = models.CharField(max_length=255)
    position = models.IntegerField()
    
    class Meta:
        verbose_name = "Module"
    
    def __str__(self):
        return f"{self.title} - {self.course}"

class Lesson(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name="lessons")
    title = models.CharField(max_length=255)
    content= models.TextField()
    video_url = models.URLField(blank=True, null=True)
    position = models.IntegerField()

    def __str__(self):
        return f"{self.title} - {self.module}"
    
class InteractionReview(models.Model):
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='interaction_reviews'  # Nombre único para la relación con Course
    )
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='course_reviews'  # Nombre único para la relación con User
    )
    rating = models.PositiveIntegerField()
    review_text = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.course.title} by {self.user.username}"
