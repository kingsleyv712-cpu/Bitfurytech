from flask import Blueprint, jsonify

bp = Blueprint('deposits', __name__, url_prefix='/api/deposits')

@bp.get('/')
def list_deposits():
    return jsonify({'deposits': []})
