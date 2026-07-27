const links = ['Dashboard', 'Users', 'Deposits', 'Withdrawals', 'Transactions', 'Investments', 'Reports']

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">A</div>
        <div>
          <strong>Bitfurytech</strong>
          <p>Admin Portal</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>
    </aside>
  )
}
