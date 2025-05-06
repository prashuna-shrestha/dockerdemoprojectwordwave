# core/urls.py
from django.urls import path
from core.views import (
    register,
    csrf_token_view,
    check_session_view,
    login_view
)

urlpatterns = [
    # Registration endpoint (no CSRF needed)
    path('register/', register, name='register'),
    
    # Existing auth endpoints
    path('csrf-token/', csrf_token_view, name='csrf-token'),
    path('auth/check-session/', check_session_view, name='check-session'),
    path('auth/login/', login_view, name='login'),
]