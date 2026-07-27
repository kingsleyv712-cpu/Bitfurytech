const users = [
  { id: 1, name: 'Alicia Reed', email: 'alicia@example.com', status: 'Active' },
  { id: 2, name: 'Marcus Lee', email: 'marcus@example.com', status: 'Pending' },
  { id: 3, name: 'Diana Cole', email: 'diana@example.com', status: 'Suspended' },
]

export default function UserTable() {
  return (
    <section className="panel">
      <div className="panel-head">
        <h3>Recent Users</h3>
        <a href="#">View all</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
