from django.test import TestCase
from .factories import CourseFactory

class CourseTestCase(TestCase):
    def test_course_creation(self):
        courses = CourseFactory.create_batch(10)
        
        # Verificaciones
        self.assertEqual(len(courses), 10)
        for course in courses:
            self.assertIsNotNone(course.instructor)