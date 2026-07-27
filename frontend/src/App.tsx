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

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en')
  const [activeUser, setActiveUser] = useState<{ name: string; email: string } | null>(() => {
    if (typeof window === 'undefined') return null
    const saved = window.localStorage.getItem('bitfurytech-user')
    return saved ? JSON.parse(saved) : null
  })
  const [currentRoute, setCurrentRoute] = useState<'home' | 'dashboard'>(() => {
    if (typeof window === 'undefined') return 'home'
    return window.location.hash === '#dashboard' ? 'dashboard' : 'home'
  })

  useEffect(() => {
    const onHashChange = () => {
      setCurrentRoute(window.location.hash === '#dashboard' ? 'dashboard' : 'home')
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (activeUser) {
      window.localStorage.setItem('bitfurytech-user', JSON.stringify(activeUser))
      if (currentRoute !== 'dashboard') {
        window.location.hash = '#dashboard'
      }
    } else {
      window.localStorage.removeItem('bitfurytech-user')
      if (currentRoute === 'dashboard') {
        window.history.replaceState(null, '', window.location.pathname)
        setCurrentRoute('home')
      }
    }
  }, [activeUser, currentRoute])

  const showDashboard = currentRoute === 'dashboard' && activeUser !== null

  return (
    <div className="app-shell">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
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
          <DashboardView user={activeUser} onLogout={() => {
            setActiveUser(null)
            setCurrentRoute('home')
          }} />
        )}
      </main>
      <ContactFooter language={language} />
    </div>
  )
}

export default App
