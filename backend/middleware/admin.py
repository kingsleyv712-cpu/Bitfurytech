from functools import wraps
from flask import jsonify


def require_admin(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        return f(*args, **kwargs)
    return decorated
