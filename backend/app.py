import os

from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from routes.auth import bp as auth_bp
from routes.users import bp as users_bp
from routes.dashboard import bp as dashboard_bp
from routes.investments import bp as investments_bp
from routes.deposits import bp as deposits_bp
from routes.withdrawals import bp as withdrawals_bp
from routes.referrals import bp as referrals_bp
from routes.transactions import bp as transactions_bp
from routes.wallets import bp as wallets_bp
from routes.reports import bp as reports_bp
from routes.admin import bp as admin_bp
from routes.settings import bp as settings_bp
from routes.notifications import bp as notifications_bp
from routes.support import bp as support_bp
from routes.kyc import bp as kyc_bp
from database.seed import seed

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

app.register_blueprint(auth_bp)
app.register_blueprint(users_bp)
app.register_blueprint(dashboard_bp)
app.register_blueprint(investments_bp)
app.register_blueprint(deposits_bp)
app.register_blueprint(withdrawals_bp)
app.register_blueprint(referrals_bp)
app.register_blueprint(transactions_bp)
app.register_blueprint(wallets_bp)
app.register_blueprint(reports_bp)
app.register_blueprint(admin_bp)
app.register_blueprint(settings_bp)
app.register_blueprint(notifications_bp)
app.register_blueprint(support_bp)
app.register_blueprint(kyc_bp)

seed()

@app.get('/')
def health():
    return jsonify({'status': 'ok', 'service': 'Bitfurytech API'})

@app.get('/api/health')
def api_health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
