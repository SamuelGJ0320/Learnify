from django.urls import path
from .views import GoogleLoginView, UserDetailByEmailView

auth_urlpatterns = [
    path('google/', GoogleLoginView.as_view(), name='google_login'),
]

urlpatterns = [
     path('<str:email>/', UserDetailByEmailView.as_view(), name='user_detail_by_email'),
]