from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.conf import settings

# GOOGLE AUTH TOKEN VIEW
class GoogleLoginView(SocialLoginView):
    auyhentication_classes = []
    adapter_class = GoogleOAuth2Adapter
    callback_url ='localhost:3000' # CHANGE TO THIS LATER ON WHEN IN DEPLOYMENT settings.SITE_URL
    client_class = OAuth2Client