from flask import Blueprint, jsonify

bp = Blueprint('users', __name__, url_prefix='/api/users')

@bp.get('/')
def list_users():
    return jsonify({'users': []})
