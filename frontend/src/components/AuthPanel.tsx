import { useEffect, useState } from 'react'

type AuthPanelProps = {
  language: 'en' | 'fr'
}

export default function AuthPanel({ language }: AuthPanelProps) {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Unable to connect account')
      }
      setMessage(data.message || 'Account connected successfully')
      setEmail('')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to connect account')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => setMessage(`Backend status: ${data.status}`))
      .catch(() => setMessage('Backend unavailable'))
  }, [])

  const copy = language === 'en'
    ? {
        eyebrow: 'Investor access',
        title: 'Connect your account to start investing.',
        placeholder: 'Email address',
        button: 'Connect account',
        loading: 'Connecting...',
      }
    : {
        eyebrow: 'Accès investisseur',
        title: 'Connectez votre compte pour commencer à investir.',
        placeholder: 'Adresse courriel',
        button: 'Connecter le compte',
        loading: 'Connexion...',
      }

  return (
    <section className="section" id="access">
      <div className="section-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
      </div>
      <div className="auth-card">
        <form onSubmit={handleLogin} className="investment-form">
          <input type="email" placeholder={copy.placeholder} value={email} onChange={(event) => setEmail(event.target.value)} required />
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? copy.loading : copy.button}
          </button>
        </form>
        <p className={message.startsWith('Backend status') || message.includes('successfully') ? 'success-text' : 'error-text'}>{message}</p>
      </div>
    </section>
  )
}
