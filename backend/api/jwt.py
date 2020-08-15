from jwcrypto import jwt, jwk
from .constants import JWTKey
from .models import User

def verifyToken(token):
    if "Woing" not in token:
        return None
    token = token.replace("Woing ", "")
    try:
        decripted = jwt.JWT(key=JWTKey, jwt=token).claims
    except:
        return None
    try:
        user = User.objects.get(email=decripted)
    except User.DoesNotExist:
        return None
    return user
