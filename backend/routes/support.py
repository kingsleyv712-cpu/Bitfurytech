from flask import Blueprint, jsonify

bp = Blueprint('support', __name__, url_prefix='/api/support')

@bp.get('/')
def support_home():
    return jsonify({'message': 'Support routes ready'})
