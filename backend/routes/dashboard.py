from flask import Blueprint, jsonify

bp = Blueprint('dashboard', __name__, url_prefix='/api/dashboard')

@bp.get('/')
def dashboard():
    return jsonify({'overview': {'users': 0, 'deposits': 0}})
