from flask import Blueprint, jsonify

bp = Blueprint('investments', __name__, url_prefix='/api/investments')

@bp.get('/')
def list_investments():
    return jsonify({'investments': []})
