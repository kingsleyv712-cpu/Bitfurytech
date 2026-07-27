const navItems = ['About', 'Plans', 'Insights', 'FAQ']

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">B</span>
        <span>Bitfurytech</span>
      </a>
      <nav aria-label="Primary navigation" className="nav-links">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="button button-outline" href="#plans">
        Explore Plans
      </a>
    </header>
  )
}
