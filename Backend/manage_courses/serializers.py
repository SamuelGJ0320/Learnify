from rest_framework.serializers import ModelSerializer
from .models import Course

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = [
            "id",
            "title",
            "description",
            "instructor",
            "created_at",
            "category",
            "price",
            "status",
            
        ]

    def create(self, validated_data):
        """Create a new course"""   
        course = Course.objects.create(
            title=validated_data["title"],
            description=validated_data["description"],
            instructor=validated_data["instructor"],
            category=validated_data["category"],
            price=validated_data["price"],

        )
        return course
    