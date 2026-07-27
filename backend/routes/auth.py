from flask import Blueprint, jsonify, request

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

_users = []


def _normalize(payload):
    return {
        'name': str(payload.get('name', '')).strip(),
        'email': str(payload.get('email', '')).strip().lower(),
        'password': str(payload.get('password', '')).strip(),
    }


@bp.post('/register')
def register():
    payload = _normalize(request.get_json(silent=True) or {})

    if not payload['name'] or not payload['email'] or not payload['password']:
        return jsonify({'error': 'Name, email, and password are required'}), 400

    if any(user['email'] == payload['email'] for user in _users):
        return jsonify({'error': 'A user with this email already exists'}), 400

    user = {
        'id': len(_users) + 1,
        'name': payload['name'],
        'email': payload['email'],
        'password': payload['password'],
    }
    _users.append(user)

    return jsonify({
        'message': 'Registration successful',
        'user': {'id': user['id'], 'name': user['name'], 'email': user['email']},
    })


@bp.post('/login')
def login():
    payload = _normalize(request.get_json(silent=True) or {})

    if not payload['email'] or not payload['password']:
        return jsonify({'error': 'Email and password are required'}), 400

    user = next((item for item in _users if item['email'] == payload['email']), None)
    if not user or user['password'] != payload['password']:
        return jsonify({'error': 'Invalid email or password'}), 401

    return jsonify({
        'message': 'Login successful',
        'user': {'id': user['id'], 'name': user['name'], 'email': user['email']},
    })
