from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter
from .models import Course
from manage_courses.serializers import CourseSerializer

class CourseListCreateView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]
    
    # Filtro de búsqueda
    filter_backends = [SearchFilter]
    search_fields = [
        'title', 
        'description', 
        'category', 
        'difficulty', 
    ]