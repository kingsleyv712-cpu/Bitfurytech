from flask import Blueprint, jsonify

bp = Blueprint('settings', __name__, url_prefix='/api/settings')

@bp.get('/')
def settings_home():
    return jsonify({'message': 'Settings routes ready'})
