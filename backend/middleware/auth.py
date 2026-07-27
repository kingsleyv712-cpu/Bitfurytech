from functools import wraps
from flask import request, jsonify


def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Authorization token required'}), 401
        return f(*args, **kwargs)
    return decorated
