from rest_framework import serializers
from .models import Match, Profile, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


# Example
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'first_name', 'email')
        
# class MatchSerializer(serializers.ModelSerializer):
#     roster = UserSerializer(many=True)
#     class Meta:
#         model = Match
#         fields = '__all__'

# class ProfileSerializer(serializers.ModelSerializer):
#     user = UserSerializer(many=False)
#     class Meta:
#         model = Profile
#         fields = '__all__'