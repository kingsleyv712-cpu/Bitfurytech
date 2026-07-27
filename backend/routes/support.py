from flask import Blueprint, jsonify, request

bp = Blueprint('support', __name__, url_prefix='/api/support')

_tickets = []


@bp.post('')
@bp.post('/')
def create_support_ticket():
    payload = request.get_json(silent=True) or {}
    name = str(payload.get('name', '')).strip()
    email = str(payload.get('email', '')).strip()
    subject = str(payload.get('subject', '')).strip()
    message = str(payload.get('message', '')).strip()

    if not all([name, email, subject, message]):
        return jsonify({'error': 'All support fields are required'}), 400

    ticket = {
        'id': len(_tickets) + 1,
        'name': name,
        'email': email,
        'subject': subject,
        'message': message,
        'status': 'queued',
    }
    _tickets.append(ticket)

    return jsonify({'status': 'queued', 'ticket': ticket})


@bp.get('')
@bp.get('/')
def support_home():
    return jsonify({'message': 'Support routes ready', 'tickets': _tickets})
