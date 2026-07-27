from flask import Blueprint, jsonify

bp = Blueprint('transactions', __name__, url_prefix='/api/transactions')

@bp.get('/')
def list_transactions():
    return jsonify({'transactions': []})
