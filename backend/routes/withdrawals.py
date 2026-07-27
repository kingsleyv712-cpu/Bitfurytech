from flask import Blueprint, jsonify

bp = Blueprint('withdrawals', __name__, url_prefix='/api/withdrawals')

@bp.get('/')
def list_withdrawals():
    return jsonify({'withdrawals': []})
