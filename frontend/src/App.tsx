import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import CompanyVideoSection from './components/CompanyVideoSection'
import TradeReviewSection from './components/TradeReviewSection'
import SupportPanel from './components/SupportPanel'
import AuthPanel from './components/AuthPanel'
import DashboardView from './components/DashboardView'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'
import { getApiHealth } from './services/api'

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...')
  const [language, setLanguage] = useState<'en' | 'fr'>('en')
  const [activeUser, setActiveUser] = useState<{ name: string; email: string } | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = window.localStorage.getItem('bitfurytech-user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    getApiHealth()
      .then((data) => setBackendStatus(`Backend connected: ${data.status}`))
      .catch(() => setBackendStatus('Backend unavailable'))
  }, [])

  useEffect(() => {
    if (activeUser) {
      window.localStorage.setItem('bitfurytech-user', JSON.stringify(activeUser))
      if (window.location.hash !== '#dashboard') {
        window.location.hash = '#dashboard'
      }
    } else {
      window.localStorage.removeItem('bitfurytech-user')
      if (window.location.hash === '#dashboard') {
        window.history.replaceState(null, '', window.location.pathname)
      }
    }
  }, [activeUser])

  const copy = {
    en: {
      backend: backendStatus,
      toggleLabel: 'English',
      toggleAlt: 'Français',
    },
    fr: {
      backend: backendStatus,
      toggleLabel: 'Français',
      toggleAlt: 'English',
    },
  } as const

  const showDashboard = activeUser !== null && window.location.hash === '#dashboard'

  return (
    <div className="app-shell">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <div className="status-banner">{copy[language].backend}</div>
        {!showDashboard ? (
          <>
            <Hero language={language} />
            <About language={language} />
            <WhyChooseUs language={language} />
            <Plans language={language} />
            <Testimonials language={language} />
            <CompanyVideoSection language={language} />
            <TradeReviewSection language={language} />
            <AuthPanel language={language} onAuthSuccess={setActiveUser} />
            <SupportPanel language={language} />
            <FAQ language={language} />
          </>
        ) : (
          <DashboardView user={activeUser} onLogout={() => setActiveUser(null)} />
        )}
      </main>
      <ContactFooter language={language} />
    </div>
  )
}

export default App
