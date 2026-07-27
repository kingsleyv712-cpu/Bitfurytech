class Transaction:
    def __init__(self, id=None, user_id=None, type='deposit', amount=0.0):
        self.id = id
        self.user_id = user_id
        self.type = type
        self.amount = amount
