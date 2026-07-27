import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Plans from './components/Plans'
import FAQ from './components/FAQ'
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
        <FAQ />
      </main>
    </div>
  )
}

export default App
