import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatCard from './components/StatCard'
import UserTable from './components/UserTable'
import { getApiHealth } from './services/api'

const stats = [
  { title: 'Active Users', value: '1,248', detail: '+12.4% vs last month' },
  { title: 'Pending Deposits', value: '84', detail: 'Needs review' },
  { title: 'Open Withdrawals', value: '32', detail: 'Processed today' },
]

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...')

  useEffect(() => {
    getApiHealth()
      .then((data) => setBackendStatus(`Backend connected: ${data.status}`))
      .catch(() => setBackendStatus('Backend unavailable'))
  }, [])

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="status-banner">{backendStatus}</div>
        <section className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </section>
        <UserTable />
      </main>
    </div>
  )
}

export default App
