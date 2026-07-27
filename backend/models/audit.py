class AuditLog:
    def __init__(self, id=None, action='', details=''):
        self.id = id
        self.action = action
        self.details = details
