from flask import Blueprint, jsonify, request

bp = Blueprint('investments', __name__, url_prefix='/api/investments')

@bp.get('/')
def list_investments():
    return jsonify({'investments': []})

@bp.post('/')
def create_investment():
    payload = request.get_json(silent=True) or {}
    plan = payload.get('plan', '').strip()
    amount = payload.get('amount')

    if not plan:
        return jsonify({'error': 'Plan is required'}), 400

    if not isinstance(amount, (int, float)) or amount <= 0:
        return jsonify({'error': 'Amount must be a positive number'}), 400

    return jsonify({
        'message': 'Investment request received',
        'plan': plan,
        'amount': float(amount),
    })
