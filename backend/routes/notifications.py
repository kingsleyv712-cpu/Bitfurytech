from flask import Blueprint, jsonify

bp = Blueprint('notifications', __name__, url_prefix='/api/notifications')

@bp.get('/')
def list_notifications():
    return jsonify({'notifications': []})
