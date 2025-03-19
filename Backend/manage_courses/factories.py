import factory
from .models import Course
from auth_users.models import User
from auth_users.factories import UserFactory
from faker import Faker

fake = Faker()

class CourseFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Course

    instructor = User.objects.get(username="jaracalle")
    title = factory.LazyAttribute(lambda _: fake.sentence(nb_words=4))
    description = factory.LazyAttribute(lambda _: fake.paragraph(nb_sentences=5))
    price = factory.LazyAttribute(lambda _: fake.pydecimal(left_digits=3, right_digits=2, positive=True))
    category = factory.LazyAttribute(lambda _: fake.word(ext_word_list=['Programming', 'Design', 'Business', 'Marketing', 'Photography']))
    status = factory.LazyAttribute(lambda _: fake.random_element(elements=('draft', 'published', 'archived')))
    estimated_duration = factory.LazyAttribute(lambda _: fake.random_int(min=1, max=100))
    difficulty = factory.LazyAttribute(lambda _: fake.random_element(elements=('beginner', 'intermediate', 'advanced')))