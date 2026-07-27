type NavbarProps = {
  language: 'en' | 'fr'
  setLanguage: (value: 'en' | 'fr') => void
}

const navItems = {
  en: ['About', 'Plans', 'Insights', 'FAQ'],
  fr: ['À propos', 'Plans', 'Analyse', 'FAQ'],
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">B</span>
        <span>Bitfurytech</span>
      </a>
      <nav aria-label="Primary navigation" className="nav-links">
        {navItems[language].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}>
          {language === 'en' ? 'FR' : 'EN'}
        </button>
        <a className="button button-outline" href="#plans">
          {language === 'en' ? 'Explore Plans' : 'Découvrir les plans'}
        </a>
      </div>
    </header>
  )
}
