def can_access(resource, role):
    return role in {'admin', 'manager'} or resource == 'profile'
