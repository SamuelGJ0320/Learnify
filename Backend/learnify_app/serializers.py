from rest_framework.serializers import ModelSerializer
from .models import User, Course


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "profile_picture",
            "role",
            "created_at",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        """Create a new user with encrypted password"""
        user = User.objects.create_user(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            password=validated_data["password"],
            role=validated_data.get("role", "student"),
        )
        return user

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
        

