from django.shortcuts import render
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.parsers import FileUploadParser

from datetime import *

from .models import User, City, Bundle, Tag, Follower, Price, Gender
from .serializer import UserSerializer, CitySerializer, BundleSerializer, TagSerializer, FollowerSerializer, PriceSerializer, GenderSerializer
from .constants import PRICES, FOLLOWERS, CITIES, TAGS, GENDERS

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    # authentication_classes = (TokenAuthentication, )
    permission_classes = (permissions.AllowAny, )

    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def create_profile(self, request, pk=None):
        if 'name' in request.data and 'imageURL' in request.data and 'instaUsername' in request.data and 'phoneNumber' in request.data and 'businessNumber' in request.data and 'description' in request.data and 'tags' in request.data and 'city' in request.data and 'priceRange' in request.data and 'followers' in request.data:
            user = User.objects.filter(phone_number=request.data['phoneNumber'])
            if len(user) != 0:
                response = {'message': 'User existed'}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)
           
            city = City.objects.get(name=request.data['city'])
            follower = Follower.objects.get(name=request.data['followers'])
            price = Price.objects.get(name=request.data['priceRange'])
            inputTags = request.data['tags']
            newUser = User.objects.create(name=request.data['name'], phone_number=request.data['phoneNumber'], image_url=request.data['imageURL'], instagram_username=request.data['instaUsername'], business_number=request.data['businessNumber'], description=request.data['description'], city=city, follower=follower, price=price)
            for i in inputTags:
                tag = Tag.objects.get(name=i)
                newUser.tags.add(tag)
            newUser.save()
            serializer = UserSerializer(newUser, many=False)
            response = {'message': 'Successfully created User', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Please provide all attributes!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)     
    
    @action(detail=False, methods=['POST'], permission_classes=[permissions.AllowAny])
    def update_profile(self, request, pk=None):
        if 'name' in request.data and 'imageURL' in request.data and 'instaUsername' in request.data and 'phoneNumber' in request.data and 'businessNumber' in request.data and 'description' in request.data and 'tags' in request.data and 'city' in request.data and 'priceRange' in request.data and 'followers' in request.data:
            try:
                user = User.objects.get(phone_number=request.data['phoneNumber'])
            except User.DoesNotExist:
                response = {'message': 'User does not exist!'}
                return Response(response, status=status.HTTP_404_NOT_FOUND)
            city = City.objects.get(name=request.data['city'])
            follower = Follower.objects.get(name=request.data['followers'])
            price = Price.objects.get(name=request.data['priceRange'])
            user.name = request.data['name']
            user.image_url = request.data['imageURL']
            user.instagram_username = request.data['instaUsername']
            user.business_number = request.data['businessNumber']
            user.description = request.data['description']
            user.city = city
            user.follower = follower
            user.price = price
            user.tag = []
            inputTags = request.data['tags']
            for i in inputTags:
                tag = Tag.objects.get(name=i)
                user.tags.add(tag)
            user.save()
            serializer = UserSerializer(user, many=False)
            response = {'message': 'Successfully created User', 'result': serializer.data}
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
            payload.append(i["name"])
        response = {'result': payload}
        return Response(response, status=status.HTTP_200_OK) 
    
    @action(detail=False, methods=['GET'])
    def cities(self, request, pk=None):
        cities = City.objects.all()
        citiesPayload = CitySerializer(cities, many=True).data
        payload = []
        for i in citiesPayload:
            payload.append(i["name"])
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