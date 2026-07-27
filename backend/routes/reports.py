from flask import Blueprint, jsonify

bp = Blueprint('reports', __name__, url_prefix='/api/reports')

@bp.get('/')
def list_reports():
    return jsonify({'reports': []})
