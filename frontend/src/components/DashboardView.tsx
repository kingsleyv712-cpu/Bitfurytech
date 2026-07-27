type DashboardViewProps = {
  user: { name: string; email: string }
  onLogout: () => void
}

export default function DashboardView({ user, onLogout }: DashboardViewProps) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Investor dashboard</p>
        <h2>Welcome back, {user.name}</h2>
      </div>
      <div className="auth-card">
        <p>You are now signed in as {user.email}.</p>
        <p>Your account can access portfolio updates, support tickets, and investment plans.</p>
        <button type="button" className="button button-outline" onClick={onLogout}>
          Sign out
        </button>
      </div>
    </section>
  )
}
