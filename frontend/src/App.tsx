import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Plans from './components/Plans'
import Testimonials from './components/Testimonials'
import CompanyVideoSection from './components/CompanyVideoSection'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'
import { getApiHealth } from './services/api'

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...')

  useEffect(() => {
    getApiHealth()
      .then((data) => setBackendStatus(`Backend connected: ${data.status}`))
      .catch(() => setBackendStatus('Backend unavailable'))
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <div className="status-banner">{backendStatus}</div>
        <Hero />
        <About />
        <WhyChooseUs />
        <Plans />
        <Testimonials />
        <CompanyVideoSection />
        <FAQ />
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
