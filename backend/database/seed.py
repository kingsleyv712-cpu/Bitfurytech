from database.db import get_connection


def seed():
    conn = get_connection()
    conn.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, role TEXT)')
    conn.execute('INSERT OR IGNORE INTO users (email, role) VALUES (?, ?)', ('admin@example.com', 'admin'))
    conn.commit()
    conn.close()
