export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Operations overview</p>
        <h2>Admin Dashboard</h2>
      </div>
      <div className="topbar-actions">
        <button type="button" className="ghost-btn">Export</button>
        <button type="button" className="primary-btn">+ New Alert</button>
      </div>
    </header>
  )
}
