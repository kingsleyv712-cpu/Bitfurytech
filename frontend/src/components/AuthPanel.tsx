import { useEffect, useState } from 'react'

type AuthPanelProps = {
  language: 'en' | 'fr'
  onAuthSuccess: (user: { name: string; email: string }) => void
}

export default function AuthPanel({ language, onAuthSuccess }: AuthPanelProps) {
  const [message, setMessage] = useState('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState<{ name: string; email: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const endpoint = mode === 'register' ? '/api/auth/register' : '/api/auth/login'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Unable to complete request')
      }

      setLoggedInUser(data.user)
      onAuthSuccess(data.user)
      setMessage(data.message)
      setForm({ name: '', email: '', password: '' })
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to complete request')
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
        title: 'Create an account or sign in to access your dashboard.',
        name: 'Full name',
        email: 'Email address',
        password: 'Password',
        loginButton: 'Sign in',
        registerButton: 'Create account',
        loading: 'Processing...',
        switchToRegister: 'Need an account? Register',
        switchToLogin: 'Already have an account? Sign in',
      }
    : {
        eyebrow: 'Accès investisseur',
        title: 'Créez un compte ou connectez-vous pour accéder à votre tableau de bord.',
        name: 'Nom complet',
        email: 'Adresse courriel',
        password: 'Mot de passe',
        loginButton: 'Se connecter',
        registerButton: 'Créer un compte',
        loading: 'Traitement...',
        switchToRegister: 'Besoin d’un compte ? S’inscrire',
        switchToLogin: 'Vous avez déjà un compte ? Se connecter',
      }

  return (
    <section className="section" id="access">
      <div className="section-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
      </div>
      <div className="auth-card">
        <div className="auth-switcher">
          <button type="button" className={mode === 'login' ? 'button' : 'button button-outline'} onClick={() => setMode('login')}>
            {copy.loginButton}
          </button>
          <button type="button" className={mode === 'register' ? 'button' : 'button button-outline'} onClick={() => setMode('register')}>
            {copy.registerButton}
          </button>
        </div>
        <form onSubmit={handleSubmit} className="investment-form auth-form">
          {mode === 'register' && (
            <input placeholder={copy.name} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
          )}
          <input type="email" placeholder={copy.email} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
          <input type="password" placeholder={copy.password} value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? copy.loading : mode === 'register' ? copy.registerButton : copy.loginButton}
          </button>
        </form>
        <button type="button" className="link-button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? copy.switchToRegister : copy.switchToLogin}
        </button>
        {loggedInUser && (
          <div className="dashboard-preview">
            <strong>{loggedInUser.name}</strong>
            <p>{loggedInUser.email}</p>
            <a className="button button-outline" href="/dashboard">Open dashboard</a>
          </div>
        )}
        <p className={message.startsWith('Backend status') || message.includes('successful') || message.includes('success') ? 'success-text' : 'error-text'}>{message}</p>
      </div>
    </section>
  )
}
