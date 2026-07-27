from flask import Blueprint, jsonify

bp = Blueprint('admin', __name__, url_prefix='/api/admin')

@bp.get('/')
def admin_home():
    return jsonify({'message': 'Admin routes ready'})
