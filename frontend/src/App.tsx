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
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'
import { getApiHealth } from './services/api'

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...')
  const [language, setLanguage] = useState<'en' | 'fr'>('en')

  useEffect(() => {
    getApiHealth()
      .then((data) => setBackendStatus(`Backend connected: ${data.status}`))
      .catch(() => setBackendStatus('Backend unavailable'))
  }, [])

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

  return (
    <div className="app-shell">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <div className="status-banner">{copy[language].backend}</div>
        <Hero language={language} />
        <About language={language} />
        <WhyChooseUs language={language} />
        <Plans language={language} />
        <Testimonials language={language} />
        <CompanyVideoSection language={language} />
        <TradeReviewSection language={language} />
        <AuthPanel language={language} />
        <SupportPanel language={language} />
        <FAQ language={language} />
      </main>
      <ContactFooter language={language} />
    </div>
  )
}

export default App
