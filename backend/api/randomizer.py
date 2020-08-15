from base64 import b32encode
from hashlib import sha1
from random import randint


def pkgen():
    first = str(randint(100, 999))
    second = str(randint(1000, 9999))

    pk = first + '-' + second
    return pk