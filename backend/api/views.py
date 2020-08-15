from django.shortcuts import render
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.parsers import FileUploadParser

from datetime import *
import hashlib
import os
from jwcrypto import jwt, jwk

from .models import User, City, Bundle, Tag, Follower, Price, Gender, File
from .serializer import UserSerializer, CitySerializer, BundleSerializer, TagSerializer, FollowerSerializer, PriceSerializer, GenderSerializer, FileSerializer
from .constants import PRICES, FOLLOWERS, CITIES, TAGS, GENDERS, SALT, JWTKey
from .jwt import verifyToken

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    # authentication_classes = (TokenAuthentication, )
    permission_classes = (permissions.AllowAny, )

    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def signup(self, request, pk=None):
        if 'email' in request.data and 'password' in request.data:
            user = User.objects.filter(email=request.data['email'])
            if len(user) != 0:
                response = {'message': 'User existed'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
            print(os.urandom(32))
            salt = os.urandom(32) # Remember this
            password = request.data['password']

            passwordKey = hashlib.pbkdf2_hmac(
                'sha256', # The hash digest algorithm for HMAC
                password.encode('utf-8'), # Convert the password to bytes
                str.encode(SALT), # Provide the salt
                100000 # It is recommended to use at least 100,000 iterations of SHA-256 
            )
            newUser = User.objects.create(email=request.data['email'], password=passwordKey)
            newUser.save()
            Token = jwt.JWT(header={"alg": "HS256"}, claims=newUser.email)
            Token.make_signed_token(JWTKey)
            userToken = Token.serialize()
            response = {'message': 'Successfully created User', 'token': userToken}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide all attributes!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)     

    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def signin(self, request, pk=None):
        if 'email' in request.data and 'password' in request.data:
            user = User.objects.filter(email=request.data['email'])
            if len(user) == 0:
                response = {'message': 'User does not exist!'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
            user = user[0]
            password = request.data['password']

            passwordKey = hashlib.pbkdf2_hmac(
                'sha256', # The hash digest algorithm for HMAC
                password.encode('utf-8'), # Convert the password to bytes
                str.encode(SALT), # Provide the salt
                100000 # It is recommended to use at least 100,000 iterations of SHA-256 
            )
            if str(passwordKey) != str(user.password):
                response = {'message': 'Invalid password!'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
            Token = jwt.JWT(header={"alg": "HS256"}, claims=user.email)
            Token.make_signed_token(JWTKey)
            userToken = Token.serialize()
            response = {'message': 'Sign in success', 'token': userToken, 'isVerified': user.isVerified}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide all attributes!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def verify_user(self, request, pk=None):
        user = verifyToken(request.META['HTTP_AUTHORIZATION'])
        if not user:
            response = {'message': 'Invalid token! Make sure to include Woing <Token>!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        if user.isVerified:
            response = {'message': 'User Verified!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        if 'name' in request.data and 'imageURL' in request.data and 'instaUsername' in request.data and 'phoneNumber' in request.data and 'businessNumber' in request.data and 'description' in request.data and 'tags' in request.data and 'city' in request.data and 'priceRange' in request.data and 'followers' in request.data and 'gender' in request.data:
            phone = User.objects.filter(phone_number=request.data['phoneNumber'])
            if len(phone) != 0:
                response = {'message': 'Phone number used'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
            user.name = request.data['name']
            user.city = City.objects.get(name=request.data['city'])
            user.follower = Follower.objects.get(name=request.data['followers'])
            user.price = Price.objects.get(name=request.data['priceRange'])
            user.gender = Gender.objects.get(name=request.data['gender'])
            inputTags = request.data['tags']
            for i in inputTags:
                tag = Tag.objects.get(name=i)
                user.tags.add(tag)
            user.description = request.data['description']
            user.phone_number = request.data['phoneNumber']
            user.business_number = request.data['businessNumber']
            user.instagram_username = request.data['instaUsername']
            user.image_url = request.data['imageURL']
            user.isVerified = True
            user.save()
            payload = {
                "name": user.name,
                "imageUrl": user.image_url,
                "instaUsername": user.instagram_username,
                "phoneNumber": user.phone_number,
                "businessNumber": user.business_number,
                "description": user.description,
                "city": user.city.name,
                "priceRange": user.price.name,
                "followers": user.follower.name,
                "gender": user.gender.name,
            }
            response = {'message': 'Successfully verified User', 'result': payload}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide all attributes!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)     
    
    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def update_profile(self, request, pk=None):
        user = verifyToken(request.META['HTTP_AUTHORIZATION'])
        if not user:
            response = {'message': 'Invalid token! Make sure to include Woing <Token>!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
        if 'name' in request.data and 'imageURL' in request.data and 'instaUsername' in request.data and 'phoneNumber' in request.data and 'businessNumber' in request.data and 'description' in request.data and 'tags' in request.data and 'city' in request.data and 'priceRange' in request.data and 'followers' in request.data and 'gender' in request.data:
            phone = User.objects.filter(phone_number=request.data['phoneNumber'])
            if len(phone) != 0 and phone[0] != user:
                response = {'message': 'Phone number used'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
            user.name = request.data['name']
            user.city = City.objects.get(name=request.data['city'])
            user.follower = Follower.objects.get(name=request.data['followers'])
            user.price = Price.objects.get(name=request.data['priceRange'])
            user.gender = Gender.objects.get(name=request.data['gender'])
            inputTags = request.data['tags']
            for i in inputTags:
                tag = Tag.objects.get(name=i)
                user.tags.add(tag)
            user.description = request.data['description']
            user.phone_number = request.data['phoneNumber']
            user.business_number = request.data['businessNumber']
            user.instagram_username = request.data['instaUsername']
            user.image_url = request.data['imageURL']
            user.save()
            payload = {
                "name": user.name,
                "imageUrl": user.image_url,
                "instaUsername": user.instagram_username,
                "phoneNumber": user.phone_number,
                "businessNumber": user.business_number,
                "description": user.description,
                "city": user.city.name,
                "priceRange": user.price.name,
                "followers": user.follower.name,
                "gender": user.gender.name,
            }
            response = {'message': 'Successfully updated User', 'result': payload}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide all attributes!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)     

    @action(detail=False, methods=['GET'])
    def get_profile(self, request, pk=None):
        phone = '+' + request.query_params.get('phone').strip()
        print(phone)
        if phone != None:
            try:
                user = User.objects.get(phone_number=phone)
                userPayload = UserSerializer(user, many=False).data
            except User.DoesNotExist:
                response = {'message': 'User does not exist!'}
                return Response(response, status=status.HTTP_404_NOT_FOUND)
            tagsPayload = []
            for i in userPayload["tags"]:
                tagsPayload.append(Tag.objects.get(id=i).name)
            payload = {
                "name": userPayload["name"],
                "imageURL": userPayload["image_url"],
                "instaUsername": userPayload["instagram_username"],
                "phoneNumber": userPayload["phone_number"],
                "businessNumber": userPayload["business_number"],
                "description": userPayload["description"],
                "tags": tagsPayload,
                "city": user.city.name,
                "priceRange": user.price.name,
                "followers": user.follower.name,
            }
            response = {'result': payload}
            return Response(response, status=status.HTTP_200_OK) 
        else:
            response = {'message': 'Please provide phone url parameter ex:"?phone=+1234567890'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
    
class InitialValueViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    # authentication_classes = (TokenAuthentication, )
    permission_classes = (permissions.AllowAny, )

    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def populate_value(self, request, pk=None):
        if 'secretKey' in request.data:
            if request.data['secretKey'] != "woing":
                response = {'message': "Wrong secretKey"}
                return Response(response, status=status.HTTP_400_BAD_REQUEST) 
            for i, j in FOLLOWERS:
                Follower.objects.update_or_create(id=i, name=j)
            for i, j in PRICES:
                Price.objects.update_or_create(id=i, name=j)
            for i, j in CITIES:
                City.objects.update_or_create(id=i, name=j)
            for i, j in TAGS:
                Tag.objects.update_or_create(id=i, name=j)
            for i, j in GENDERS:
                Gender.objects.update_or_create(id=i, name=j)
            response = {'result': "Success"}
            return Response(response, status=status.HTTP_200_OK) 
        else:
            response = {'message': 'Please provide the secretKey'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['GET'])
    def tags(self, request, pk=None):
        tags = Tag.objects.all()
        tagsPayload = TagSerializer(tags, many=True).data
        payload = []
        for i in tagsPayload:
            payload.append({
                "id": i["id"],
                "name": i["name"]
            })
        response = {'result': payload}
        return Response(response, status=status.HTTP_200_OK) 
    
    @action(detail=False, methods=['GET'])
    def cities(self, request, pk=None):
        cities = City.objects.all()
        citiesPayload = CitySerializer(cities, many=True).data
        payload = []
        for i in citiesPayload:
            payload.append({
                "label": i["name"],
                "value": i["name"]
            })
        response = {'result': payload}
        return Response(response, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['GET'])
    def prices(self, request, pk=None):
        prices = Price.objects.all()
        pricesPayload = PriceSerializer(prices, many=True).data
        payload = []
        for i in pricesPayload:
            payload.append(i["name"])
        response = {'result': payload}
        return Response(response, status=status.HTTP_200_OK) 
    
    @action(detail=False, methods=['GET'])
    def genders(self, request, pk=None):
        genders = Gender.objects.all()
        gendersPayload = GenderSerializer(genders, many=True).data
        payload = []
        for i in gendersPayload:
            payload.append(i["name"])
        response = {'result': payload}
        return Response(response, status=status.HTTP_200_OK) 
    
    @action(detail=False, methods=['GET'])
    def followers(self, request, pk=None):
        followers = Follower.objects.all()
        followersPayload = FollowerSerializer(followers, many=True).data
        payload = []
        for i in followersPayload:
            payload.append(i["name"])
        response = {'result': payload}
        return Response(response, status=status.HTTP_200_OK) 

    @action(detail=False, methods=['POST'])
    def file(self, request, pk=None):
        file_serializer = FileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)