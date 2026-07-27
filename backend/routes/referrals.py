from flask import Blueprint, jsonify

bp = Blueprint('referrals', __name__, url_prefix='/api/referrals')

@bp.get('/')
def list_referrals():
    return jsonify({'referrals': []})
