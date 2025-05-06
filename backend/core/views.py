from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
#signup
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    User = get_user_model()
    
    # Get data from request
    full_name = request.data.get('full_name')
    email = request.data.get('email')
    password = request.data.get('password')
    confirm_password = request.data.get('confirm_password')

    # Validation checks
    if not all([full_name, email, password, confirm_password]):
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    if password != confirm_password:
        return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Create user
        user = User.objects.create_user(
            email=email,
            full_name=full_name,
            password=password
        )
        
        # Generate tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name
            },
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

# login
@ensure_csrf_cookie
def csrf_token_view(request):
    return JsonResponse({'csrfToken': request.META.get("CSRF_COOKIE", "")})

@require_POST
def login_view(request):
    import json
    from django.views.decorators.csrf import csrf_exempt
    from django.utils.decorators import method_decorator
    from django.http import JsonResponse

    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
    except Exception:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    user = authenticate(request, username=email, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=400)

@login_required
def check_session_view(request):
    return JsonResponse({'isAuthenticated': True})