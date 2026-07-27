from flask import Blueprint, jsonify

bp = Blueprint('wallets', __name__, url_prefix='/api/wallets')

@bp.get('/')
def list_wallets():
    return jsonify({'wallets': []})
