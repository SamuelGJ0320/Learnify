import os
import django
from .factories import CourseFactory

# Configura Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Learnify.settings")
django.setup()

courses = CourseFactory.create_batch(10)

print(f"Se crearon {len(courses)} cursos falsos.")