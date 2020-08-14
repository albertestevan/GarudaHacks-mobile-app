from django.shortcuts import render
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.parsers import FileUploadParser

from datetime import *

# from .models import Match, Profile, User
# from .serializer import MatchSerializer, ProfileSerializer, UserSerializer

# Create your views here.
# class ProfileViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
#     authentication_classes = (TokenAuthentication, )
#     permission_classes = (permissions.AllowAny, )
#     parser_class = (FileUploadParser,)

#     @action(detail=False, methods=['GET'])
#     def get_profile(self, request, pk=None):
#         if 'email' in request.headers:
#             try:
#                 user = User.objects.get(email=request.headers['email'])
#                 obj = Profile.objects.get(user=user)
#             except User.DoesNotExist:
#                 response = {'message': 'User does not exist!'}
#                 return Response(response, status=status.HTTP_404_NOT_FOUND)
#             except Profile.DoesNotExist:
#                 response = {'message': 'Profile does not exist!'}
#                 return Response(response, status=status.HTTP_404_NOT_FOUND)
#             serializer = ProfileSerializer(obj, many=False)
#             response = {'result': serializer.data}
#             return Response(response, status=status.HTTP_200_OK) 
#         else:
#             response = {'message': 'Please provide all attributes!'}
#             return Response(response, status=status.HTTP_400_BAD_REQUEST)
    
#     @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
#     def create_user(self, request, pk=None):
#         if 'email' in request.data and 'name' in request.data and 'username' in request.data:
#             try: 
#                 user = User.objects.get(username=request.data['username'])
#                 response = {'message': 'username used!'}
#                 return Response(response, status=status.HTTP_400_BAD_REQUEST)
#             except User.DoesNotExist:
#                 try: 
#                     user = User.objects.get(email=request.data['email'])
#                     response = {'message': 'email used!'}
#                     return Response(response, status=status.HTTP_400_BAD_REQUEST)
#                 except User.DoesNotExist:
#                     newUser = User.objects.create(username=request.data['username'], email=request.data['email'])
#                     print("woiks")
#                     newUser.first_name = request.data['name']
#                     newUser.save()
#                     obj = Profile.objects.create(user=newUser)
#                     obj.save()
#                     serializer = ProfileSerializer(obj, many=False)
#                     response = {'message': 'Successfully created User', 'result': serializer.data}
#                     return Response(response, status=status.HTTP_200_OK)
#             response = {'message': 'error!'}
#             return Response(response, status=status.HTTP_400_BAD_REQUEST)
#         else:
#             response = {'message': 'Please provide all attributes!'}
#             return Response(response, status=status.HTTP_400_BAD_REQUEST)

#     @action(detail=False, methods=['GET'])
#     def log_in(self, request, pk=None):
#         if 'email' in request.headers:
#             try: 
#                 user = User.objects.get(email=request.headers['email'])
#                 obj = Profile.objects.get(user=user)
#                 serializer = ProfileSerializer(obj, many=False)
#                 response = {'message': 'Successfully fetched User', 'result': serializer.data}
#                 return Response(response, status=status.HTTP_200_OK)
#             except User.DoesNotExist:
#                 response = {'message': 'User does not exist!'}
#                 return Response(response, status=status.HTTP_400_BAD_REQUEST)
#         else:
#             response = {'message': 'Please provide all attributes!'}
#             return Response(response, status=status.HTTP_400_BAD_REQUEST)
            
#     @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
#     def update_profile(self, request, pk=None):
#         if 'email' in request.data and 'name' in request.data and 'phone' in request.data and 'age' in request.data and 'lat' in request.data and 'lon' in request.data and 'sports' in request.data and 'bio' in request.data  and 'skill' in request.data:
#             try:
#                 user = User.objects.get(email=request.data['email'])
#             except User.DoesNotExist:
#                 response = {'message': 'User does not exist!'}
#                 return Response(response, status=status.HTTP_400_BAD_REQUEST)
#             profile = Profile.objects.get(user=user)
#             user.first_name = request.data['name']
#             profile.phone = request.data['phone']
#             profile.age = request.data['age']
#             profile.lon = request.data['lon']
#             profile.lat = request.data['lat']
#             profile.sports = request.data['sports']
#             profile.bio = request.data['bio']
#             profile.skill = request.data['skill']
#             user.save()
#             profile.save()
#             serializer = ProfileSerializer(profile, many=False)
#             response = {'message': 'Successfully updated profile', 'result': serializer.data}
#             return Response(response, status=status.HTTP_200_OK)  
#         else:
#             response = {'message': 'Please provide all attributes!'}
#             return Response(response, status=status.HTTP_400_BAD_REQUEST)    

#     @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
#     def update_image(self, request, pk=None):
#         data = request.data
#         if "email" in data:
#             try:
#                 user = User.objects.get(email=data.get("email"))
#             except User.DoesNotExist:
#                 response = {'message': 'User does not exist!'}
#                 return Response(response, status=status.HTTP_400_BAD_REQUEST)
#             profile = Profile.objects.get(user=user)
#             profile.profile_image = data.get("profile_image")
#             profile.save()
#             serializer = ProfileSerializer(profile, many=False)
#             response = {'message': 'Successfully updated profile image', 'result': serializer.data}
#             return Response(response, status=status.HTTP_200_OK)  
#         else:
#             response = {'message': 'Please provide all attributes!'}
#             return Response(response, status=status.HTTP_400_BAD_REQUEST)    
