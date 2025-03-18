from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.filters import SearchFilter
from.models import Course
from manage_courses.serializers import CourseSerializer

class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    # Permisos de acceso
    permission_classes = [AllowAny]
    
    # Filtro de búsqueda
    filter_backends = [SearchFilter]  
    search_fields = [  
        # Campos por los que se puede buscar
        'title', 
        'description', 
        'category', 
        'difficulty', 
    ]