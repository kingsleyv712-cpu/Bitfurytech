from flask import Blueprint, jsonify, request

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@bp.post('/login')
def login():
    payload = request.get_json(silent=True) or {}
    email = payload.get('email', '').strip()

    if not email:
        return jsonify({'error': 'Email is required'}), 400

    return jsonify({
        'message': 'Account connected successfully',
        'email': email,
    })
