import os
import sys
import unittest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

import app as backend_app


class AppTests(unittest.TestCase):
    def setUp(self):
        backend_app.app.testing = True
        self.client = backend_app.app.test_client()

    def test_health_endpoint(self):
        response = self.client.get("/api/health")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["status"], "healthy")

    def test_support_submission_and_admin_listing(self):
        response = self.client.post(
            "/api/support",
            json={
                "name": "Ava",
                "email": "ava@example.com",
                "subject": "Account help",
                "message": "I need help with my dashboard access.",
            },
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json()["status"], "queued")

        admin_response = self.client.get("/api/admin/support")
        self.assertEqual(admin_response.status_code, 200)
        tickets = admin_response.get_json()["tickets"]
        self.assertGreaterEqual(len(tickets), 1)


if __name__ == "__main__":
    unittest.main()
