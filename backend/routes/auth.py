from flask import Blueprint, jsonify

bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@bp.get('/login')
def login():
    return jsonify({'message': 'Auth endpoint ready'})
