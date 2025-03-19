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
            'difficulty',
            "estimated_duration",
            "price",
            "status",
            "rating_avg",
        ]
        


    def create(self, validated_data):
        """Create a new course"""   
        course = Course.objects.create(
            title=validated_data["title"],
            description=validated_data["description"],
            instructor=validated_data["instructor"],
            difficulty=validated_data["difficulty"],
            estimated_duration=validated_data["estimated_duration"],
            category=validated_data["category"],
            price=validated_data["price"],
            rating_avg=validated_data["rating_avg"],
        )
        return course
    

    