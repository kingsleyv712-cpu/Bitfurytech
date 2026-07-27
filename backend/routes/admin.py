from flask import Blueprint, jsonify
from routes.support import _tickets

bp = Blueprint('admin', __name__, url_prefix='/api/admin')


@bp.get('/')
def admin_home():
    return jsonify({'message': 'Admin routes ready'})


@bp.get('/support')
def admin_support_tickets():
    return jsonify({'tickets': _tickets})
