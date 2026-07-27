from flask import Blueprint, jsonify

bp = Blueprint('kyc', __name__, url_prefix='/api/kyc')

@bp.get('/')
def kyc_home():
    return jsonify({'message': 'KYC routes ready'})
