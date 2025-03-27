import factory
from .models import Review
from auth_users.models import User
from manage_courses.factories import CourseFactory
from faker import Faker

fake = Faker()

class ReviewFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Review

    user = User.objects.get(username="jaracalle")
    course = factory.SubFactory(CourseFactory)
    rating = factory.LazyAttribute(lambda _: fake.random_int(min=1, max=5))
    factory.LazyAttribute(lambda _: fake.paragraph(nb_sentences=5))
    created_at = factory.LazyAttribute(lambda _: fake.date_time_this_year())